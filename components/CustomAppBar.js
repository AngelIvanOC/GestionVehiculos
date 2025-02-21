import React from "react";
import { View, Text, TouchableOpacity, StyleSheet, SafeAreaView, Image } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { DrawerActions } from "@react-navigation/native";
import FontAwesome from "react-native-vector-icons/FontAwesome";

const CustomAppBar = ({ navigation, title, isRoot }) => {
  return (
    <SafeAreaView style={styles.safeArea}>
      <View style={styles.appBar}>
        <Image source={require('../assets/CocheLogo.jpg')} style={styles.imagen}/>
        <Text style={styles.title}>{title}</Text>
        <View style={styles.icons}>
          <FontAwesome name="user" size={30} color="black"/>
          <TouchableOpacity onPress={() => (isRoot ? navigation.dispatch(DrawerActions.openDrawer()) : navigation.goBack())}>
            <Ionicons name={isRoot ? "menu" : "arrow-back"} size={24} color="black" />
          </TouchableOpacity>
        </View>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  safeArea: { backgroundColor: "white" },
  appBar: { flexDirection: "row", alignItems: "center", padding: 0, justifyContent: "space-around" },
  title: { color: "black", fontSize: 18, marginLeft: 15, fontWeight: "bold" },
  imagen: {width: 80, height: 80},
  icons: {flexDirection: "row", alignItems: "center", padding: 0, justifyContent: "space-around", width: 80}
});

export default CustomAppBar;
