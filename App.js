import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { StatusBar } from 'expo-status-bar';
import { Provider as PaperProvider } from 'react-native-paper';
import Toast from 'react-native-toast-message';

// Context Providers
import { AuthProvider, useAuth } from './src/context/AuthContext';
import { ThemeProvider } from './src/context/ThemeContext';
import { LanguageProvider } from './src/context/LanguageContext';

// Screens
import LoginScreen from './src/screens/LoginScreen';
import SignupScreen from './src/screens/SignupScreen';
import PatientDashboardScreen from './src/screens/PatientDashboardScreen';
import DoctorDashboardScreen from './src/screens/DoctorDashboardScreen';
import ConsultationsScreen from './src/screens/ConsultationsScreen';
import PrescriptionsScreen from './src/screens/PrescriptionsScreen';
import ReportsScreen from './src/screens/ReportsScreen';
import MedicalCentersScreen from './src/screens/MedicalCentersScreen';
import ChatbotScreen from './src/screens/ChatbotScreen';
import SettingsScreen from './src/screens/SettingsScreen';
import VideoCallScreen from './src/screens/VideoCallScreen';

// Components
import ProtectedRoute from './src/components/ProtectedRoute';
import TabBarIcon from './src/components/TabBarIcon';

// Constants
import { Colors } from './src/constants/colors';

const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();

// Tab Navigator for authenticated users
function TabNavigator() {
  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        tabBarIcon: ({ focused, color, size }) => (
          <TabBarIcon route={route} focused={focused} color={color} size={size} />
        ),
        tabBarActiveTintColor: Colors.primary,
        tabBarInactiveTintColor: Colors.light.textSecondary,
        tabBarStyle: {
          backgroundColor: Colors.light.surface,
          borderTopColor: Colors.light.border,
        },
        headerShown: false,
      })}
    >
      <Tab.Screen 
        name="Dashboard" 
        component={PatientDashboardScreen}
        options={{ title: 'Dashboard' }}
      />
      <Tab.Screen 
        name="Reports" 
        component={ReportsScreen}
        options={{ title: 'Reports' }}
      />
      <Tab.Screen 
        name="Consultations" 
        component={ConsultationsScreen}
        options={{ title: 'Consultations' }}
      />
      <Tab.Screen 
        name="Prescriptions" 
        component={PrescriptionsScreen}
        options={{ title: 'Prescriptions' }}
      />
      <Tab.Screen 
        name="MedicalCenters" 
        component={MedicalCentersScreen}
        options={{ title: 'Medical Centers' }}
      />
    </Tab.Navigator>
  );
}

// Doctor Tab Navigator
function DoctorTabNavigator() {
  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        tabBarIcon: ({ focused, color, size }) => (
          <TabBarIcon route={route} focused={focused} color={color} size={size} />
        ),
        tabBarActiveTintColor: Colors.primary,
        tabBarInactiveTintColor: Colors.light.textSecondary,
        tabBarStyle: {
          backgroundColor: Colors.light.surface,
          borderTopColor: Colors.light.border,
        },
        headerShown: false,
      })}
    >
      <Tab.Screen 
        name="DoctorDashboard" 
        component={DoctorDashboardScreen}
        options={{ title: 'Dashboard' }}
      />
      <Tab.Screen 
        name="Reports" 
        component={ReportsScreen}
        options={{ title: 'Reports' }}
      />
      <Tab.Screen 
        name="Consultations" 
        component={ConsultationsScreen}
        options={{ title: 'Consultations' }}
      />
      <Tab.Screen 
        name="Prescriptions" 
        component={PrescriptionsScreen}
        options={{ title: 'Prescriptions' }}
      />
    </Tab.Navigator>
  );
}

// Main App Navigator with Authentication
function AppNavigator() {
  const { currentUser, userProfile } = useAuth();

  return (
    <NavigationContainer>
      <StatusBar style="auto" />
      <Stack.Navigator
        screenOptions={{
          headerShown: false,
        }}
      >
        {!currentUser ? (
          // Auth Stack
          <>
            <Stack.Screen name="Login" component={LoginScreen} />
            <Stack.Screen name="Signup" component={SignupScreen} />
          </>
        ) : (
          // Main App Stack
          <>
            {userProfile?.role === 'doctor' ? (
              <Stack.Screen 
                name="DoctorTabs" 
                component={DoctorTabNavigator}
                options={{ headerShown: false }}
              />
            ) : (
              <Stack.Screen 
                name="MainTabs" 
                component={TabNavigator}
                options={{ headerShown: false }}
              />
            )}
            <Stack.Screen 
              name="Chatbot" 
              component={ChatbotScreen}
              options={{ title: 'AI Chatbot' }}
            />
            <Stack.Screen 
              name="Settings" 
              component={SettingsScreen}
              options={{ title: 'Settings' }}
            />
            <Stack.Screen 
              name="VideoCall" 
              component={VideoCallScreen}
              options={{ title: 'Video Call' }}
            />
          </>
        )}
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default function App() {
  return (
    <AuthProvider>
      <ThemeProvider>
        <LanguageProvider>
          <PaperProvider>
            <AppNavigator />
            <Toast />
          </PaperProvider>
        </LanguageProvider>
      </ThemeProvider>
    </AuthProvider>
  );
}