import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet, SafeAreaView } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

export default function Codigo({ navigation }) {
  const [codigo, setCodigo] = useState(['', '', '', '']);

  const handleChange = (text, index) => {
    if (text.length <= 1 && !isNaN(text)) {
      const newCodigo = [...codigo];
      newCodigo[index] = text;
      setCodigo(newCodigo);
    }
  };

  const handleSendCode = () => {
    const codigoComple = codigo.join('');
    console.log('Código completo:', codigoComple);
  };

  const handleGoToLogin = () => {
    navigation.goBack();
  };

  return (
    <SafeAreaView style={styles.safeArea}>
      <View style={styles.container}>
        <View style={styles.card}>
          <Text style={styles.title}>Restablecer Contraseña</Text>
          <Text style={styles.subtitle}>Introduce el código de verificación</Text>

          <View style={styles.inputContainer}>
            {codigo.map((digit, index) => (
              <TextInput
                key={index}
                id={`input${index}`}
                style={styles.input}
                value={digit}
                onChangeText={(text) => handleChange(text, index)}
                keyboardType="numeric"
                maxLength={1} 
                textAlign="center"
              />
            ))}
          </View>

          <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('PasswordResetScreenStack')}>
            <Text style={styles.buttonText}>Enviar código de verificación</Text>
          </TouchableOpacity>
          
          <TouchableOpacity onPress={handleGoToLogin}>
            <Text style={styles.link}>¿Recordaste tu contraseña? Inicia sesión.</Text>
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
  inputContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 20,
  },
  input: {
    backgroundColor: '#FFFFFF',
    borderRadius: 5,
    paddingHorizontal: 10,
    height: 65,
    width: 55,
    marginHorizontal: 5,
    color: '#000',
    fontSize: 18,
  },
  button: {
    backgroundColor: '#3A4E7A',
    paddingVertical: 12,
    borderRadius: 5,
    marginBottom: 10,
  },
  buttonText: {
    color: '#FFFFFF',
    fontWeight: '600',
    textAlign: 'center',
    fontSize: 16,
  },
  link: {
    color: '#FFFFFF',
    fontSize: 14,
    textAlign: 'center',
    marginTop: 10,
    textDecorationLine: 'underline',
  },
});
