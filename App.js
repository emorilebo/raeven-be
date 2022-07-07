import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { TailwindProvider } from "tailwindcss-react-native";



export default function App() {
  return (
    <TailwindProvider>
      <View >
      <Text className="text-red-500">Open up App.js to start!</Text>
      <StatusBar style="auto" />
    </View>
    </TailwindProvider>
    
  );
}


