import { Platform, Text, View } from 'react-native';

export default function HomeScreen() {
  return (
    <View>
      <Text>Welcome to Macrozone!</Text>
      <Text>Running on: {Platform.OS}</Text>
    </View>
  );
}