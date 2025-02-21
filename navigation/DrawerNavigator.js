import React from "react";
import { createDrawerNavigator } from "@react-navigation/drawer";
import { createStackNavigator } from "@react-navigation/stack";
import { NavigationContainer } from "@react-navigation/native";
import HomeScreen from "../screens/HomeScreen";
import ProfileScreen from "../screens/ProfileScreen";
import DetailsScreen from "../screens/DetailsScreen";
import CustomAppBar from "../components/CustomAppBar";

const Drawer = createDrawerNavigator();
const Stack = createStackNavigator();

function HomeStack() {
  return (
    <Stack.Navigator
      screenOptions={({ route }) => ({
        header: ({ navigation }) => <CustomAppBar navigation={navigation} title={route.name} isRoot={route.name === "Home"} />,
      })}
    >
      <Stack.Screen name="Home" component={HomeScreen} />
      <Stack.Screen name="Details" component={DetailsScreen} />
    </Stack.Navigator>
  );
}

function ProfileStack() {
  return (
    <Stack.Navigator
      screenOptions={({ route }) => ({
        header: ({ navigation }) => <CustomAppBar navigation={navigation} title={route.name} isRoot={route.name === "Inicio"} />,
      })}
    >
      <Stack.Screen name="Inicio" component={ProfileScreen} />
    </Stack.Navigator>
  );
}

function DrawerNavigator() {
  return (
    <Drawer.Navigator screenOptions={{ headerShown: false,drawerActiveTintColor:"#b660f7" }}>
      <Drawer.Screen name="HomeStack" component={HomeStack} options={{ title: "Inicio" }} />
      <Drawer.Screen name="ProfileStack" component={ProfileStack} options={{ title: "Perfil" }} />
    </Drawer.Navigator>
  );
}

export default function AppNavigator() {
  return (
    <NavigationContainer>
      <DrawerNavigator />
    </NavigationContainer>
  );
}
