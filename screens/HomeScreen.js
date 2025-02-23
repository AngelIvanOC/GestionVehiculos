import React, { useState } from "react";
import {
  Text,
  StyleSheet,
  SafeAreaView,
  ScrollView,
  TouchableOpacity,
  View,
  Image,
} from "react-native";
import FontAwesome from "react-native-vector-icons/FontAwesome";
import Footer from "../components/Footer.js";

const images = [
  require("../assets/Audi.png"),
  require("../assets/BMW.png"),
  require("../assets/Kia.png"),
  require("../assets/Mazda.png"),
  require("../assets/Nissan.png"),
];


const Carousel = ({ images }) => {
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
    <View style={styles.carousel}>
      <Image source={images[currentIndex]} style={styles.image} />

      <View style={styles.controls}>
        <TouchableOpacity onPress={handlePrevious}>
           <FontAwesome name="chevron-circle-left" size={40} color="white"/>
        </TouchableOpacity>
        
      </View>
    </View>
  );
};

const ProfileScreen = () => {
  return (
    <SafeAreaView style={styles.container}>
      <ScrollView contentContainerStyle={styles.scrollContent}>
        <View style={styles.section}>
          <Text style={styles.titulo}>LUXURY MOTORS</Text>
          <Text style={styles.parrafo}>
            Descubre la excelencia en cada detalle. Nuestra colección de vehículos
            de lujo representa la perfecta combinación de elegancia, rendimiento
            y exclusividad.
          </Text>

          <View>
            <TouchableOpacity>
              <Text style={styles.botonTexto}>Registrarse</Text>
            </TouchableOpacity>
            <TouchableOpacity>
              <Text style={styles.botonTexto}>Iniciar sesión</Text>
            </TouchableOpacity>
          </View>

          <FontAwesome name="angle-double-down" size={40} color="black" />
        </View>

        <View style={styles.section}>
          <Text style={styles.titulo}>Marcas</Text>
          <Carousel images={images} />
        </View>

        <View style={styles.hola}>
          <Text style={styles.titulo}>Populares</Text>
          <View style={styles.card}>
            <Image source={require('../assets/uno.png')} style={styles.imageCard} />
            <TouchableOpacity style={styles.buyButton}>
              <Text style={styles.buyText}>Comprar</Text>
            </TouchableOpacity>
            <View style={styles.priceContainer}>
              <Text style={styles.priceText}>$1,355,000</Text>
            </View>
          </View>

          <View style={styles.card}>
            <Image source={require('../assets/dos.png')} style={styles.imageCard} />
            <TouchableOpacity style={styles.buyButton}>
              <Text style={styles.buyText}>Comprar</Text>
            </TouchableOpacity>
            <View style={styles.priceContainer}>
              <Text style={styles.priceText}>$1,355,000</Text>
            </View>
          </View>
        </View>

        <Footer/>
      </ScrollView>
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
    marginBottom: 50
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
    width: "80%"
  },
  priceText: {
    fontSize: 16,
    fontWeight: "bold",
    textAlign: "center",
    color: "white",
    zIndex: 1,
  },
  footer: {
    backgroundColor: '#0f1837',
    paddingVertical: 20,
  },
  footerContent: {
    flexDirection: 'row',
    justifyContent: 'space-evenly',
  },
  footerSection: {
    marginHorizontal: 10,
    justifyContent: "center",
  },
  footerSection2: {
    marginHorizontal: 10,
    justifyContent: "center",
    alignItems: "center"
  },
  sectionTitle: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
  },
  sectionText: {
    color: '#fff',
    fontSize: 10,
    marginBottom: 5,
  },
  footerImg: {
    width: 80,
    height:80,
    alignItems: "center",
    textAlign: "center"
  },
  bottomText: {
    color: '#fff',
    fontSize: 12,
  },
});


export default ProfileScreen;
