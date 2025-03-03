import React from 'react';
import { View, Text, TextInput, Button, Image, StyleSheet, ScrollView, TouchableOpacity } from 'react-native';
import IconoImage from "../assets/icono.png"
import carro1 from "../assets/uno.png"

import carro2 from "../assets/dos.png"



const PerfilScreen = () => {
  return (
    <ScrollView style={styles.container}>
      <View style={styles.card}>
        <Image source={IconoImage} style={styles.avatar}/>
        <Text style={styles.inputTitle}>Nombre:</Text>
        <TextInput style={styles.input} />
        <Text style={styles.inputTitle}>Correo:</Text>
        <TextInput style={styles.input} />
        <Text style={styles.inputTitle}>Teléfono:</Text>
        <TextInput style={styles.input} />
        <TouchableOpacity style={styles.button}>
              <Text style={styles.buttonText}>Confirmar</Text>
        </TouchableOpacity>      
        </View>
      
      <View style={styles.card}>
        <Image source={{ uri: 'https://encrypted-tbn1.gstatic.com/images?q=tbn:ANd9GcT2Pw5JdBtX43FdMA2QDcLII4gd6W1nTn3aYE6MprgfknKCv1l2QEI3i1UAJA_RjDLxm8X8zoU0v-S3RBpbDKyYPA' }} style={styles.profileImage} />
        <Text style={styles.title}>Vendedor</Text>
        <Text style={styles.inputTitle}>Nombres: Juan Rulfo</Text>
        <Text style={styles.inputTitle}>Teléfono: 777 559 4371</Text>
        <Text style={styles.inputTitle}>Acerca de: Juan Rulfo con seis años de experiencia en ventas de automóviles.</Text>
      </View>
      
      <Text style={styles.sectionTitle}>Mis autos</Text>

      <View style={styles.carCard}>
        <Image source={carro1} style={styles.carImage}/>
        <View style={styles.contenidoCard}>
          <Text style={styles.button}>Chevy POP</Text>
          <Text style={styles.botonTexto}>$1,355,000</Text>
        </View>
      </View>

      <View style={styles.carCard}>
        <Image source={carro2} style={styles.carImage}/>
        <View style={styles.contenidoCard}>
          <Text style={styles.button}>Chevy POP</Text>
          <Text style={styles.botonTexto}>$1,355,000</Text>
        </View>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: { 
    padding: 20, 
    backgroundColor: 'white' },

  card: { 
    backgroundColor: '#0F1837', 
    padding: 15, 
    borderRadius: 10, 
    marginBottom: 15 },

  avatar: { 
    backgroundColor:"white",
    width: 100, 
    height: 100, 
    borderRadius: 50, 
    alignSelf: 'center' },

  input: {     
    borderWidth:1,
    borderColor: "white",
    borderRadius: 25, 
    padding: 10, 
    color: '#FFFFFF', 
    marginBottom: 10 },


  profileImage: { 
    width: 100, 
    height: 100, 
    borderRadius: 50, 
    alignSelf: 'center'},

  title: { 
    color:"white",
    fontWeight: 'bold', 
    fontSize: 16, 
    alignSelf:'center',
    marginBottom: 5 },

  sectionTitle: { 
    fontSize: 18, 
    fontWeight: 'bold', 
    marginVertical: 10 },

  carCard: { 
    flexDirection: 'row', 
    alignItems: 'center', 
    justifyContent: 'space-between',
    backgroundColor: '#919191', 
    borderRadius: 10, 
    marginBottom: 10,
    height: 200
   },

  carImage: { 
    width: "50%",
    height: "100%",
    borderRadius: 10
  },

  contenidoCard: {
    width: "50%",
    paddingHorizontal: 10,
  },

  button: { 
        color: '#FFFFFF', 
        backgroundColor: '#0f1837', 
        padding: 10, 
        borderRadius: 5, 
        alignItems: 'center', 
        marginTop: 10,  
        alignSelf:'center',
        fontSize: 18,
      },

     buttonText: { 
        color: '#FFFFFF', 
        fontWeight: 'bold', 
        alignSelf:'center' },

  botonTexto: {
    borderColor: "black",
    borderWidth: 2,
    fontSize: 18,
    marginVertical: 10,
    textAlign:'center',
    alignSelf:'center',
    padding: 10,
    borderRadius: 10,
  },

  inputTitle:{
    borderColor: "white",
    borderRadius: 25, 
    padding: 10, 
    color: '#FFFFFF', 
    marginBottom: 10 
},
  
});

export default PerfilScreen;
