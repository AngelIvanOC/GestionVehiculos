import React from "react";
import { createDrawerNavigator } from "@react-navigation/drawer";
import { createStackNavigator } from "@react-navigation/stack";
import { NavigationContainer } from "@react-navigation/native";
import HomeScreen from "../screens/HomeScreen";
import DetailsScreen from "../screens/DetailsScreen";
import PerfilScreen  from "../screens/PerfilScreen";
import CustomAppBar from "../components/CustomAppBar";
import CarScreen from "../screens/CarScreen";
import Confirmacion from "../screens/Confirmacion";


const Drawer = createDrawerNavigator();
const Stack = createStackNavigator();

function HomeStack() {
  return (
    <Stack.Navigator
      screenOptions={({ route }) => ({
        header: ({ navigation }) => <CustomAppBar navigation={navigation} title={route.name} isRoot={route.name === "Inicio"} />,
      })}
    >
      <Stack.Screen name="Inicio" component={HomeScreen} />
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

function PerfilStack() {
  return (
    <Stack.Navigator
      screenOptions={({ route }) => ({
        header: ({ navigation }) => <CustomAppBar navigation={navigation} title={route.name} isRoot={route.name === "Perfil"} />,
      })}
    >
      
      <Stack.Screen name="Perfil" component={PerfilScreen} />

    </Stack.Navigator>
  );
}

function CarStack() {
  return (
    <Stack.Navigator
      screenOptions={({ route }) => ({
        header: ({ navigation }) => (
          <CustomAppBar 
            navigation={navigation} 
            title={route.name} 
            isRoot={route.name === "Vehiculo"} // Solo "Vehiculo" tiene el menú
          />
        ),
      })}
    >
      <Stack.Screen name="Vehiculo" component={CarScreen} />
      <Stack.Screen name="Confirmacion" component={Confirmacion} />
    </Stack.Navigator>
  );
}


function DrawerNavigator() {
  return (
    <Drawer.Navigator screenOptions={{ headerShown: false,drawerActiveTintColor:"#b660f7" }}>
      <Drawer.Screen name="HomeStack" component={HomeStack} options={{ title: "Inicio" }} />
      <Drawer.Screen name="PerfilStack" component={PerfilStack} options={{ title: "Perfil" }} />
      <Drawer.Screen name="CarStack" component={CarStack} options={{title: "Car"}} />
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
