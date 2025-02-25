import React from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet } from 'react-native';
import { FontAwesome } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';

export default function Login1() {
  const navigation = useNavigation(); 

  return (
    <View style={styles.container}>
      <View style={styles.loginBox}>
        

        {/* Título */}
        <Text style={styles.title}>Inicio de sesión</Text>

        {/* Correo */}
        <Text style={styles.label}>Correo</Text>
        <TextInput style={styles.input} placeholder="Correo electrónico" placeholderTextColor="#999" />

        {/* Contraseña */}
        <Text style={styles.label}>Contraseña</Text>
        <TextInput style={styles.input} placeholder="Contraseña" secureTextEntry={true} placeholderTextColor="#999" />

        {/* Olvidó contraseña */}
        <TouchableOpacity onPressIn={() => navigation.navigate('LoginStack')}>
          <Text style={styles.forgotPassword}>Olvidé mi contraseña</Text>
        </TouchableOpacity>

        {/* Ingresar */}
        <TouchableOpacity style={styles.button}>
          <Text style={styles.buttonText}>Ingresar</Text>
        </TouchableOpacity>

        {/* Registro */}
        <TouchableOpacity onPress={() => navigation.navigate('RecuperarContra')}>
          <Text style={styles.forgotPassword}>Olvidé mi contraseña</Text>
        </TouchableOpacity>

      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#FFFFFF", 
  },
  loginBox: {
    width: 320,
    backgroundColor: "#1C2338", 
    borderRadius: 10,
    padding: 20,
    alignItems: "center",
  },
  closeIcon: {
    position: "absolute",
    top: 10,
    right: 10,
  },
  title: {
    fontSize: 24,
    color: "#fff",
    marginBottom: 20,
    textAlign: "center",
  },
  label: {
    alignSelf: "flex-start",
    fontSize: 16,
    color: "#fff",
    marginBottom: 5,
    marginLeft: 5,
  },
  input: {
    width: "100%",
    height: 40,
    backgroundColor: "#fff",
    borderRadius: 5,
    paddingHorizontal: 10,
    marginBottom: 15,
  },
  button: {
    width: "100%",
    height: 40,
    backgroundColor: "#3A4E7A",
    borderRadius: 5,
    justifyContent: "center",
    alignItems: "center",
    marginVertical: 10,
  },
  buttonText: {
    color: "#fff",
    fontSize: 16,
    fontWeight: "bold",
  },
  forgotPassword: {
    color: "#fff",
    fontSize: 14,
    marginTop: 5,
    textDecorationLine: "underline",
    textAlign: "center",
  },
  register: {
    color: "#fff",
    fontSize: 14,
    marginTop: 5,
    textDecorationLine: "underline",
    textAlign: "center",
  },
});