import React from "react";
import { Text, StyleSheet, SafeAreaView, ScrollView } from "react-native";

const DetailsScreen = () => {
  return (
    <SafeAreaView style={styles.container}>
      <ScrollView contentContainerStyle={styles.scrollContent}>
        <Text>Pantalla de Detalles</Text>
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: { flex: 1 },
  scrollContent: { flexGrow: 1, justifyContent: "center", alignItems: "center" },
});

export default DetailsScreen;