import React from "react";
import { StyleSheet, Text, View } from "react-native";

type EmptyStateProps = {
  icone?: string;
  mensagem: string;
};

export default function EmptyState({ icone = "📭", mensagem }: EmptyStateProps) {
  return (
    <View style={styles.container}>
      <Text style={styles.icone}>{icone}</Text>
      <Text style={styles.mensagem}>{mensagem}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    padding: 32,
  },
  icone: {
    fontSize: 64,
    marginBottom: 16,
  },
  mensagem: {
    color: "#666",
    fontSize: 16,
    textAlign: "center",
  },
});

