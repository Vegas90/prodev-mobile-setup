// app/_layout.tsx is automatically used by Expo Router to wrap all your screens inside /app.
// Every file in /app (like index.tsx, home.tsx, etc.) will be rendered inside this layout.
// This file sets up your app’s screen navigation, and tells Expo Router: Use a stack to move between pages, and don’t show the default top bar.”
// stack is a component that allows you to navigate between screens in your app.
import { Stack } from "expo-router";

export default function RootLayout() {
  return <Stack screenOptions={{
    // Hides the default top header bar
    headerShown:false
  }}/>;
}
