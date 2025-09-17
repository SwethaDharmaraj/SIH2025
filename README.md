# NabhaCare Mobile App

A React Native mobile application for healthcare management, converted from the original React web application.

## Features

- **User Authentication**: Login/Signup with Firebase Authentication
- **Role-based Access**: Separate dashboards for patients and doctors
- **Medical Reports**: Upload and view medical reports
- **Consultations**: Manage patient-doctor consultations
- **Prescriptions**: View and manage prescriptions
- **Medical Centers**: Find nearby medical centers
- **AI Chatbot**: AI-powered symptom analysis
- **Video Calls**: Integrated video calling functionality
- **Dark/Light Theme**: Theme switching support
- **Multi-language Support**: Support for multiple languages

## Tech Stack

- **React Native** with Expo
- **Firebase** (Authentication, Firestore, Storage)
- **React Navigation** (Stack & Tab Navigation)
- **React Native Paper** (UI Components)
- **React Native Vector Icons** (Icons)
- **AsyncStorage** (Local Storage)

## Project Structure

```
src/
├── components/          # Reusable components
│   ├── ProtectedRoute.js
│   └── TabBarIcon.js
├── screens/             # Screen components
│   ├── LoginScreen.js
│   ├── SignupScreen.js
│   ├── PatientDashboardScreen.js
│   ├── DoctorDashboardScreen.js
│   ├── ConsultationsScreen.js
│   ├── PrescriptionsScreen.js
│   ├── ReportsScreen.js
│   ├── MedicalCentersScreen.js
│   ├── ChatbotScreen.js
│   ├── SettingsScreen.js
│   └── VideoCallScreen.js
├── context/             # React Context providers
│   ├── AuthContext.js
│   ├── ThemeContext.js
│   └── LanguageContext.js
├── services/            # API and Firebase services
│   ├── firebase.js
│   └── api.js
├── constants/           # App constants
│   └── colors.js
└── utils/              # Utility functions
```

## Getting Started

### Prerequisites

- Node.js (v20.17.0 or higher)
- npm or yarn
- Expo CLI (`npm install -g @expo/cli`)
- Expo Go app on your mobile device

### Installation

1. Clone the repository:
```bash
git clone <repository-url>
cd NabhaCareMobile
```

2. Install dependencies:
```bash
npm install
```

3. Start the development server:
```bash
npm start
```

4. Scan the QR code with Expo Go app on your mobile device

### Available Scripts

- `npm start` - Start the Expo development server
- `npm run android` - Run on Android device/emulator
- `npm run ios` - Run on iOS device/simulator (macOS only)
- `npm run web` - Run in web browser

## Firebase Configuration

The app uses Firebase for:
- Authentication (Email/Password)
- Firestore Database
- Cloud Storage

Make sure to update the Firebase configuration in `src/services/firebase.js` with your project credentials.

## Features Overview

### Authentication
- Email/password authentication
- Role-based access (Patient/Doctor/Admin)
- Persistent login sessions

### Patient Features
- Dashboard with health statistics
- Medical reports management
- Consultation requests
- Prescription viewing
- Medical center finder
- AI symptom checker

### Doctor Features
- Doctor-specific dashboard
- Patient consultation management
- Prescription creation
- Medical report generation
- Patient management

### Common Features
- Dark/Light theme switching
- Multi-language support
- Settings management
- Profile management

## Navigation Structure

### Patient Navigation
- Dashboard (Tab)
- Reports (Tab)
- Consultations (Tab)
- Prescriptions (Tab)
- Medical Centers (Tab)
- Chatbot (Stack)
- Settings (Stack)
- Video Call (Stack)

### Doctor Navigation
- Dashboard (Tab)
- Reports (Tab)
- Consultations (Tab)
- Prescriptions (Tab)
- Chatbot (Stack)
- Settings (Stack)
- Video Call (Stack)

## Styling

The app uses a custom styling system with:
- Consistent color palette
- Responsive spacing
- Typography scale
- Shadow system
- Theme support (Dark/Light)

## Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Test thoroughly
5. Submit a pull request

## License

This project is licensed under the MIT License.

## Support

For support, please contact the development team or create an issue in the repository.