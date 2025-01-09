import React, { useState, useEffect } from "react";
import { Button, Text } from "@react-navigation/elements";
import { Input } from "@rneui/base";
import { StyleSheet, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { TextInput } from "react-native-paper";
import { sharedStyles } from "../../utils/styles";

export function Home() {
  const [guestName, setGuestName] = useState("");
  var shared: any = sharedStyles();
  return (
    <SafeAreaView edges={["top", "left", "right"]} style={styles.container}>
      <View>
        <Input
          value={guestName}
          placeholder="Search guests"
          onChangeText={(text) => setGuestName(text)}
          inputContainerStyle={{
            borderBottomWidth: 0,
            borderRadius: 10,
            paddingHorizontal: 20,
            backgroundColor: shared.white.color,
          }}
          leftIcon={
            <TextInput.Icon
              icon="magnify"
              style={{
                pointerEvents: "none",
                marginRight: 0,
              }}
              color={"#A6A3B8"}
            />
          }
          style={{ paddingLeft: 15 }}
        />
        <View></View>
        <Text>Home Screen</Text>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    gap: 10,
    backgroundColor: "#F9F9FF",
  },
});
