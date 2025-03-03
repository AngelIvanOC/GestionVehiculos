import React from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet } from 'react-native';
import { FontAwesome } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';

const Register = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.container}>
      <View style={styles.registerBox}>
        {/* Título */}
        <Text style={styles.title}>Regístrate</Text>

        {/* Nombre */}
        <Text style={styles.label}>Nombre</Text>
        <TextInput
          style={styles.input}
          placeholder="Nombre"
          placeholderTextColor="#999"
        />

        {/* Correo */}
        <Text style={styles.label}>Correo</Text>
        <TextInput
          style={styles.input}
          placeholder="Correo"
          placeholderTextColor="#999"
          keyboardType="email-address"
        />

        {/* Contraseña */}
        <Text style={styles.label}>Contraseña</Text>
        <TextInput
          style={styles.input}
          placeholder="Contraseña"
          placeholderTextColor="#999"
          secureTextEntry
        />

        {/* Teléfono */}
        <Text style={styles.label}>Teléfono</Text>
        <TextInput
          style={styles.input}
          placeholder="Teléfono"
          placeholderTextColor="#999"
          keyboardType="phone-pad"
        />

        {/* Registrarse */}
        <TouchableOpacity style={styles.button}>
          <Text style={styles.buttonText}>Registrarse</Text>
        </TouchableOpacity>

        <TouchableOpacity onPressIn={() => navigation.navigate('Login1')}>
          <Text style={styles.loginLink}>Ya tengo una cuenta</Text>
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
  registerBox: {
    width: 320,
    backgroundColor: "#1C2338", 
    borderRadius: 10,
    padding: 20,
    alignItems: "center",
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
    backgroundColor: "#fff",
    borderRadius: 5,
    paddingHorizontal: 10,
    height: 40,
    marginBottom: 15,
    color: "#000",
  },
  button: {
    backgroundColor: "#3A4E7A",
    paddingVertical: 12,
    borderRadius: 5,
    width: "100%",
    alignItems: "center",
  },
  buttonText: {
    color: "#fff",
    fontWeight: "600",
    fontSize: 16,
  },
  loginLink: {
    color: "#fff",
    fontSize: 14,
    marginTop: 5,
    textDecorationLine: "underline",
  },
});

export default Register;
