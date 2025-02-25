import React, { useState } from "react";
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import {
  Text,
  StyleSheet,
  SafeAreaView,
  ScrollView,
  TouchableOpacity,
  View,
  Image,
  Modal,
  TextInput,   
} from "react-native";
import FontAwesome from "react-native-vector-icons/FontAwesome";
import Footer from '../components/Footer';
import { useNavigation } from '@react-navigation/native';

const images = [
  require("../assets/Audi.png"),
  require("../assets/BMW.png"),
  require("../assets/Kia.png"),
  require("../assets/Mazda.png"),
  require("../assets/Nissan.png"),
];

const Carousel = ({ images }) => {
  const navigation = useNavigation();
  const [currentIndex, setCurrentIndex] = useState(0);

  const handleNext = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex + 1 === images.length ? 0 : prevIndex + 1
    );
  };

  const handlePrevious = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex - 1 < 0 ? images.length - 1 : prevIndex - 1
    );
  };

  return (
    <TouchableOpacity onPress={() => navigation.navigate('CatalogoStack')} activeOpacity={0.8}>
    <View style={styles.carousel}>
      <Image source={images[currentIndex]} style={styles.image}  />
      <View style={styles.controls}>
        <TouchableOpacity onPress={handlePrevious}>
          <FontAwesome name="chevron-circle-left" size={40} color="white" />
        </TouchableOpacity>
        <TouchableOpacity onPress={handleNext}>
          <FontAwesome name="chevron-circle-right" size={40} color="white" />
        </TouchableOpacity>
      </View>
    </View>
    </TouchableOpacity>
  );
};

const ProfileScreen = () => {
  const [modalVisible, setModalVisible] = useState(false);
  const [modalVisibleRegister,setModalVisiblegister] = useState(false)
  const navigation = useNavigation();


  return (
    <SafeAreaView style={styles.container}>
      <ScrollView contentContainerStyle={styles.scrollContent}>

        {/*Parte principal */}
        <View style={styles.section}>
          <Text style={styles.titulo}>LUXURY MOTORS</Text>
          <Text style={styles.parrafo}>
            Descubre la excelencia en cada detalle. Nuestra colección de vehículos
            de lujo representa la perfecta combinación de elegancia, rendimiento
            y exclusividad.
          </Text>

          <View>
            <TouchableOpacity onPress={() => setModalVisiblegister(true)}>
              <Text style={styles.botonTexto}>Registrarse</Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => setModalVisible(true)}>
              <Text style={styles.botonTexto}>Iniciar sesión</Text>
            </TouchableOpacity>
          </View>

          <FontAwesome name="angle-double-down" size={40} color="black" />
        </View>

        {/*Carrusel */}
        <View style={styles.section}>
          <Text style={styles.titulo}>Marcas</Text>
          <Carousel images={images} />
        </View>

        {/*Populares*/}
        <View style={styles.hola}>
          <Text style={styles.titulo}>Populares</Text>
          <View style={styles.card}>
            <Image source={require('../assets/uno.png')} style={styles.imageCard} />
            <TouchableOpacity style={styles.buyButton} onPress={() => navigation.navigate('CarStack')}>
              <Text style={styles.buyText}>Comprar</Text>
            </TouchableOpacity>
            <View style={styles.priceContainer}>
              <Text style={styles.priceText}>$1,355,000</Text>
            </View>
          </View>

          <View style={styles.card}>
            <Image source={require('../assets/dos.png')} style={styles.imageCard} />
            <TouchableOpacity style={styles.buyButton} onPress={() => navigation.navigate('CarStack')}>
              <Text style={styles.buyText}>Comprar</Text>
            </TouchableOpacity>
            <View style={styles.priceContainer}>
              <Text style={styles.priceText}>$1,355,000</Text>
            </View>
          </View>
        </View>

        {/* Footer */}
        <Footer/>
        
      </ScrollView>
      
      {/* =========== M O D A L  D E  R E G I S T E R =========== */}
      <Modal 
        animationType="slide"
        transparent={true}
        visible={modalVisibleRegister} 
        onRequestClose={() => setModalVisibleRegister(false)}
      >
        <View style={styles.modalRegisterBackground}>
          <View style={styles.modalRegisterContainer}>
            {/* Botón X */}
            <TouchableOpacity
              style={styles.closeIcon}
              onPress={() => setModalVisiblegister(false)}
            >
              <FontAwesome name="close" size={30} color="#fff" />
            </TouchableOpacity>

            {/* Título */}
            <Text style={styles.modalRegisterTitle}>Registrate</Text>

            {/* Nombre */}
            <Text style={styles.modalRegisterSub}>Nombre</Text>
            <TextInput
              style={styles.modalInput}
              placeholder="Nombre"
              placeholderTextColor="#999"
            />
            
            {/*Correo */}
            <Text style={styles.modalRegisterSub}>Correo</Text>
            <TextInput
              style={styles.modalInput}
              placeholder="Correo"
              placeholderTextColor="#999"
            />

            {/*Contraseña */}
            <Text style={styles.modalRegisterSub}>Contraseña</Text>
            <TextInput
              style={styles.modalInput}
              placeholder="Contraseña"
              placeholderTextColor="#999"
            />

            {/*Telefono */}
            <Text style={styles.modalRegisterSub}>Telefono</Text>
            <TextInput
              style={styles.modalInput}
              placeholder="Telefono"
              placeholderTextColor="#999"
            />

            {/*Registrarse */}
            <TouchableOpacity style={styles.modalButton}>
              <Text style={styles.modalButtonText}>Registrarse</Text>
            </TouchableOpacity>

            <TouchableOpacity>
              <Text style={styles.modalRegister1}>
                Ya tengo una cuenta
              </Text>
            </TouchableOpacity>
          </View>
        </View>       
      </Modal>
      {/* =========== F I N  M O D A L  D E  R E G I S T E R =========== */}



      {/* =========== M O D A L  D E  L O G I N =========== */}
      <Modal
        animationType="slide"
        transparent={true}
        visible={modalVisible}
        onRequestClose={() => setModalVisible(false)}
      >
        <View style={styles.modalBackground}>
          <View style={styles.modalContainer}>
            {/* Botón X*/}
            <TouchableOpacity
              style={styles.closeIcon}
              onPress={() => setModalVisible(false)}
            >
              <FontAwesome name="close" size={30} color="#fff" />
            </TouchableOpacity>

            {/*el Titulo */}
            <Text style={styles.modalTitle}>Inicio de sesión</Text>

            {/*Correo */}
            <Text style={styles.modalLabel}>Correo</Text>
            <TextInput
              style={styles.modalInput}
              placeholder="Correo electrónico"
              placeholderTextColor="#999"
            />

            {/*Contraseña */}
            <Text style={styles.modalLabel}>Contraseña</Text>
            <TextInput
              style={styles.modalInput}
              placeholder="Contraseña"
              secureTextEntry={true}
              placeholderTextColor="#999"
            />

            {/*Olvido Contra */}
            <TouchableOpacity onPress={() => navigation.navigate('PasswordResetScreen')}>
              <Text style={styles.modalRegisterOlvido}>Olvidé mi contraseña</Text>
            </TouchableOpacity>



            {/*Ingresar */}
            <TouchableOpacity style={styles.modalButton}>
              <Text style={styles.modalButtonText}>Ingresar</Text>
            </TouchableOpacity>

            {/*registro */}
            <TouchableOpacity>
              <Text style={styles.modalRegister}>
                ¿Aún no tienes cuenta? Regístrate
              </Text>
            </TouchableOpacity>
          </View>
        </View>
      </Modal>
      {/* =========== F I N  M O D A L  D E  L O G I N =========== */}
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: "white" },
  scrollContent: {
    flexGrow: 1,
    justifyContent: "space-between",
    alignItems: "center",
  },
  section: {
    flex: 1,
    height: 550,
    justifyContent: "space-around",
    alignItems: "center",
    marginBottom: 50,
  },
  hola: {
    flex: 1,
    height: "100%",
    justifyContent: "space-between",
    alignItems: "center",
  },
  titulo: { fontSize: 50, textAlign: "center", marginBottom: 10 },
  parrafo: {
    color: "gray",
    paddingHorizontal: 10,
    fontSize: 13,
    textAlign: "center",
  },
  botonTexto: {
    borderColor: "black",
    borderWidth: 2,
    width: 200,
    fontSize: 18,
    marginVertical: 10,
    textAlign: "center",
    padding: 10,
    borderRadius: 5,
  },
  carousel: {
    width: 300,
    height: 500,
    alignItems: "center",
    justifyContent: "center",
  },
  image: {
    width: "100%",
    height: "100%",
    borderRadius: 10,
  },
  controls: {
    flexDirection: "row",
    position: "absolute",
    bottom: 250,
    width: "100%",
    justifyContent: "space-between",
    paddingHorizontal: 20,
  },
  card: {
    width: 300,
    borderRadius: 20,
    backgroundColor: "white",
    overflow: "hidden",
    alignItems: "center",
    paddingBottom: 20,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 5 },
    shadowOpacity: 0.1,
    shadowRadius: 10,
    elevation: 5,
    backgroundColor: "white",
    margin: 10
  },
  imageCard: {
    width: "100%",
    height: 400,
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
  },
  buyButton: {
    backgroundColor: "#0B1B46",
    paddingVertical: 10,
    width: "80%",
    borderRadius: 20,
    alignItems: "center",
    marginTop: -100,
    zIndex: 1,
  },
  buyText: {
    color: "white",
    fontSize: 16,
    fontWeight: "bold",
  },
  priceContainer: {
    borderWidth: 1,
    borderColor: "white",
    borderRadius: 20,
    paddingVertical: 8,
    paddingHorizontal: 30,
    marginTop: 10,
    zIndex: 1,
    width: "80%",
  },
  priceText: {
    fontSize: 16,
    fontWeight: "bold",
    textAlign: "center",
    color: "white",
    zIndex: 1,
  },
  footer: {
    backgroundColor: "#0f1837",
    paddingVertical: 20,
  },
  footerContent: {
    flexDirection: "row",
    justifyContent: "space-evenly",
    width: 510,
  },
  footerSection: {
    marginHorizontal: 10,
    justifyContent: "center",
  },
  footerSection2: {
    marginHorizontal: 10,
    justifyContent: "center",
    alignItems: "center",
  },
  sectionTitle: {
    color: "#fff",
    fontSize: 16,
    fontWeight: "bold",
  },
  sectionText: {
    color: "#fff",
    fontSize: 10,
    marginBottom: 5,
  },
  footerImg: {
    width: 80,
    height: 80,
    alignItems: "center",
    textAlign: "center",
  },

  /* =========== M O D A L  D E  R E G I S T E R =========== */
  modalRegisterBackground: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "rgba(0, 0, 0, 0.5)",
  },
  modalRegisterContainer: {
    width: 320, 
    backgroundColor: "#0F1837", 
    borderRadius: 10,
    padding: 20,
    alignItems: "center",
    position: "relative",
  },
  modalRegisterTitle: {
      fontSize: 24,
      color: "#fff",
      marginBottom: 20,
      textAlign: "center",
  },
  modalRegisterSub: {
    alignSelf: "flex-start",
    fontSize: 16,
    color: "#fff",
    marginBottom: 5,
    marginLeft: 5,
  },
  modalRegister1: {
    color: "#fff",
    fontSize: 14,
    marginTop: 5,
    textDecorationLine: "underline",
    left: 70
  },

/* =========== M O D A L  D E  L O G I N =========== */
  modalBackground: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "rgba(0, 0, 0, 0.5)", 
  },
  modalContainer: {
    width: 320, 
    backgroundColor: "#0F1837", 
    borderRadius: 10,
    padding: 20,
    alignItems: "center",
    position: "relative", 
  },
  closeIcon: {
    position: "absolute",
    top: 10,
    right: 10,
  },
  modalTitle: {
    fontSize: 24,
    color: "#fff",
    marginBottom: 20,
    textAlign: "center",
  },
  modalLabel: {
    alignSelf: "flex-start",
    fontSize: 16,
    color: "#fff",
    marginBottom: 5,
    marginLeft: 5,
  },
  modalInput: {
    width: "100%",
    height: 40,
    backgroundColor: "#fff",
    borderRadius: 5,
    paddingHorizontal: 10,
    marginBottom: 15,
  },
  modalButton: {
    width: "100%",
    height: 40,
    backgroundColor: "#3A4E7A",
    borderRadius: 5,
    justifyContent: "center",
    alignItems: "center",
    marginVertical: 10,
  },
  modalButtonText: {
    color: "#fff",
    fontSize: 16,
    fontWeight: "bold",
  },
  modalRegisterOlvido: {
    color: "#fff",
    fontSize: 14,
    marginTop: 5,
    textDecorationLine: "underline",
    textAlign: "center",
    left: 75
  },
  modalRegister: {
    color: "#fff",
    fontSize: 14,
    marginTop: 5,
    textDecorationLine: "underline",
    textAlign: "center",
    left: 34
  },
});

export default ProfileScreen;