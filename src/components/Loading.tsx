import React from "react";
import { ActivityIndicator, StyleSheet, Text, View } from "react-native";

type LoadingProps = {
  mensagem?: string;
};

export default function Loading({ mensagem = "Carregando..." }: LoadingProps) {
  return (
    <View style={styles.container}>
      <ActivityIndicator size="large" color="#79059C" />
      <Text style={styles.mensagem}>{mensagem}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#f5f5f5",
    padding: 24,
  },
  mensagem: {
    marginTop: 12,
    color: "#666",
    fontSize: 16,
    textAlign: "center",
  },
});

