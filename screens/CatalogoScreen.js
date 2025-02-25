

import React from 'react';
import { View, Text, TextInput, Button, Image, StyleSheet, ScrollView, TouchableOpacity } from 'react-native';
import FontAwesome from "react-native-vector-icons/FontAwesome";

import IconoImage from "../assets/icono.png"
import carro1 from "../assets/uno.png"

import carro2 from "../assets/dos.png"
import carro3 from "../assets/tres.png"
import carro4 from "../assets/cuatro.png"

const CatalogoScreen = () => {
 return (
     <ScrollView style={styles.container}>
         <View style={styles.section}>
                  <Text style={styles.titulo}>LUXURY MOTORS</Text>
                  <Text style={styles.parrafo}>
                    Descubre la excelencia en cada detalle. Nuestra colección de vehículos
                    de lujo representa la perfecta combinación de elegancia, rendimiento
                    y exclusividad.
                  </Text>
        

                  <FontAwesome name="angle-double-down" size={40} color="black" />
        
                
        
                </View>
        

       
      
       <Text style={styles.sectionTitle}>CATALOGO</Text>
 
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

       <View style={styles.carCard}>
         <Image source={carro3} style={styles.carImage}/>
         <View style={styles.contenidoCard}>
           <Text style={styles.button}>Chevy POP</Text>
           <Text style={styles.botonTexto}>$1,355,000</Text>
         </View>
       </View>

       <View style={styles.carCard}>
         <Image source={carro4} style={styles.carImage}/>
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
     alignSelf: 'center', 
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
     borderColor: '#FFFFFF',
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

 section: {
    flex: 1,
    height: 550,
    justifyContent: "space-around",
    alignItems: "center",
    marginBottom: 50,
 
 },


 titulo: { fontSize: 50, textAlign: "center", marginBottom: 10 },
  parrafo: {
    color: "gray",
    paddingHorizontal: 10,
    fontSize: 13,
    textAlign: "center",
  },

 });
 
export default CatalogoScreen;
