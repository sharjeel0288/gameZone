import React from "react";
import { StyleSheet, View, Text } from "react-native";
import { globalstyles } from "../styles/global";

export default function ReviewDetails() {
    return(
        <View style={globalstyles.container}>
            <Text>ReviewDetails</Text>
        </View>
    )
}

const styles = StyleSheet.create({
  container: {
    padding: 24,
  },
});
