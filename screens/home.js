import React from "react";
import { StyleSheet, View, Text } from "react-native";
import { globalstyles } from "../styles/global";

export default function Home() {
  return (
    <View style={globalstyles.container}>
      <Text style={globalstyles.title}>Home</Text>
    </View>
  );
}


