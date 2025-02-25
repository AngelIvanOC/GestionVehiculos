import React, { useState } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
  SafeAreaView,
} from 'react-native';

export default function PasswordResetScreen({ navigation }) {
  const [email, setEmail] = useState('');

  const handleSendCode = () => {
    console.log('Email ingresado:', email);
    
  };

  const handleGoToLogin = () => {
    navigation.goBack();
  };

  return (
    <SafeAreaView style={styles.safeArea}>
      <View style={styles.container}>
        <View style={styles.card}>
          <Text style={styles.title}>Restablecer Contraseña</Text>

          <Text style={styles.label}>Contraseña nueva:</Text>
          <TextInput
            style={styles.input}
            placeholder="Contraseña nueva"
            secureTextEntry={true}
            placeholderTextColor="#999"
          />

          <Text style={styles.label}>Confirmar contraseña:</Text>
          <TextInput
            style={styles.input}
            placeholder="Confirmar contraseña"
            secureTextEntry={true}
            placeholderTextColor="#999"
          />

          <TouchableOpacity onPress={handleGoToLogin}>
            <Text style={styles.link}>¿Recordaste tu contraseña? Inicia sesión.</Text>
          </TouchableOpacity>

          <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('HomeStack')}>
            <Text style={styles.buttonText}>Enviar código de verificación</Text>
          </TouchableOpacity>

          
        </View>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: '#F0F0F0',
  },
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  card: {
    width: '85%',
    backgroundColor: '#0F1837',
    borderRadius: 10,
    padding: 20,
    elevation: 4,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.3,
    shadowRadius: 4,
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#FFFFFF',
    marginBottom: 8,
    textAlign: 'center',
  },
  subtitle: {
    fontSize: 14,
    color: '#D0D0D0',
    marginBottom: 20,
    textAlign: 'center',
  },
  label: {
    fontSize: 14,
    color: '#FFFFFF',
    marginBottom: 5,
  },
  input: {
    backgroundColor: '#FFFFFF',
    borderRadius: 5,
    paddingHorizontal: 10,
    marginBottom: 15,
    height: 40,
    color: '#000',
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
    color: '#FFFFFF',
    fontWeight: '600',
    textAlign: 'center',
    color: "#fff",
    fontSize: 16,
    fontWeight: "bold",
  },
  link: {
    color: "#fff",
    fontSize: 14,
    marginTop: 5,
    textDecorationLine: "underline",
    textAlign: "center",
    left: 10
  },
});
