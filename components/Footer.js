import React, { useState } from "react";
import {
  Text,
  StyleSheet,
  View,
  Image,
} from "react-native";
import FontAwesome from "react-native-vector-icons/FontAwesome";

const Footer = () => {
  return ( 
        <View style={styles.footer}>
          <View style={styles.footerContent}>
            <View style={styles.footerSection}>
              <Text style={styles.sectionText}><FontAwesome name="envelope" size={20} color="white" /> Correo: luxueyMotor@gmail.com</Text>
              <Text style={styles.sectionText}><FontAwesome name="phone" size={20} color="white" /> Teléfono: 777 598 8744</Text>
              <Text style={styles.sectionText}><FontAwesome name="map-marker" size={20} color="white" /> Ubicación: Emiliano Zapata</Text>
              <Text style={styles.sectionText}>CP: 566163</Text>
            </View>
            <View style={styles.footerSection2}>
              <Image source={require("../assets/TodoBlanco.jpg")} style={styles.footerImg}/>
              <Text style={styles.sectionTitle}>Luxury Motors</Text>
            </View>
          </View>
        </View>
  );
};

const styles = StyleSheet.create({
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

export default Footer;
