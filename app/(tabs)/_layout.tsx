import { Tabs } from "expo-router";

export default function TabsLayout() {
  return (
    <Tabs>
      <Tabs.Screen
        name="index"
        options={{
          headerShown: true,
          headerTitle: "Home",
        }}
      />
      <Tabs.Screen
        name="about"
        options={{
          headerShown: true,
          headerTitle: "About",
        }}
      />
      <Tabs.Screen
        name="not-found"
        options={{
          headerShown: true,
          headerTitle: "Oops! Not Found",
        }}
      />
    </Tabs>
  );
}
