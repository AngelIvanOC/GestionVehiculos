import { section } from 'framer-motion/client';
import React, { useState } from 'react';
import { View, Text, Image, StyleSheet, SafeAreaView, TouchableOpacity, Modal, Pressable } from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';
import FontAwesome from "react-native-vector-icons/FontAwesome";
const img1 = require('../assets/porscheUno.avif');
const img2 = require('../assets/PorscheDos.avif');
import Footer from "../components/Footer.js";

const CarScreen = () => {
  const [modalVisible, setModalVisible] = useState(false);

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView contentContainerStyle={styles.scrollContent}>

        <Modal
          animationType="slide"
          transparent={true}
          visible={modalVisible}
          onRequestClose={() => {
            setModalVisible(!modalVisible);
          }}>
          <View style={styles.centeredView}>
            <View style={styles.modalView}>
            <Pressable
                style={styles.botonFlotante}
                onPress={() => setModalVisible(!modalVisible)}>
                <Text><FontAwesome name="times-circle" size={40} color="#0f1837"/></Text>
              </Pressable>
              <Text style={styles.modalTitle}><FontAwesome name="check-circle" size={80} color="green"/></Text>
              <Text style={styles.modalText}>¡Compra confirmada!</Text>
              <Pressable
                style={[styles.button, styles.buttonClose]}
                onPress={() => setModalVisible(!modalVisible)}>
                <Text style={styles.textStyle}>Cerrar</Text>
              </Pressable>
            </View>
          </View>
        </Modal>

        <View style={styles.section}>
          <Image source={img1} style={styles.image} resizeMode='contain' />
          <View>
            <Text style={styles.title}>Pieco Total Sugerido:</Text>
            <Text style={styles.price}>$915,000 MXN</Text>
          </View>
        </View>

        <View style={styles.section}>
          <Image source={img2} style={styles.image} resizeMode='contain' />
          <Text style={styles.name}>Chevy POP</Text>
          <View>
            <Text style={styles.title}>Pieco Total Sugerido:</Text>
            <Text style={styles.info}>$915,000 MXN</Text>
          </View>

          <View>
            <Text style={styles.title}>Color:</Text>
            <Text style={styles.info}>Plateado</Text>
          </View>

          <View>
            <Text style={styles.title}>Motor:</Text>
            <Text style={styles.info}>1.6L, 4 cilindros</Text>
          </View>

          <View>
            <Text style={styles.title}>Kilometraje promedio:</Text>
            <Text style={styles.info}>120,000 km</Text>
          </View>
        </View>

        <TouchableOpacity onPress={() => setModalVisible(true)}>
          <Text style={styles.boton}>Comprar Auto</Text>
        </TouchableOpacity>

        <Footer />
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
    paddingBottom: 20,
    borderColor: "#c9c9c9",
    borderTopWidth: 2,
  },
  image: {
    width: 300,
    height: 200,
    resizeMode: "cover"
  },
  title: {
    fontSize: 10,
    marginBottom: 0,
    color: "gray"
  },
  info: {
    fontSize: 35,
    marginBottom: 10,
    textAlign: "left"
  },
  price: {
    fontSize: 35,
    marginBottom: 10,
    textAlign: "center"
  },
  details: {
    fontSize: 16,
    color: 'gray',
  },
  name: {
    fontSize: 50,
    textAlign: "center",
  },
  boton: {
    backgroundColor: "#0f1837",
    paddingVertical: 10,
    paddingHorizontal: 30,
    marginBottom: 20,
    borderRadius: 10,
    fontSize: 20,
    color: "white"
  },
  centeredView: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: 'rgba(0, 0, 0, 0.3)',
  },
  modalView: {
    margin: 20,
    backgroundColor: "white",
    borderRadius: 20,
    padding: 35,
    alignItems: "center",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5
  },
  modalTitle: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 15,
    textAlign: "center"
  },
  modalText: {
    fontSize: 18,
    marginBottom: 20,
    textAlign: "center"
  },
  button: {
    borderRadius: 10,
    padding: 10,
    elevation: 2
  },
  buttonClose: {
    backgroundColor: "#0f1837",
  },
  textStyle: {
    color: "white",
    fontWeight: "bold",
    textAlign: "center",
    fontSize: 18
  },
  botonFlotante: {
    position: "absolute",
    top: 10,
    right: 10
  }
});

export default CarScreen;