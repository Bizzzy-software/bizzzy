import React, { useState, useEffect } from "react";
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from "react-native-responsive-screen";
import { Button, Text } from "@react-navigation/elements";
import { Input } from "@rneui/base";
import { StyleSheet, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { TextInput } from "react-native-paper";
import { sharedStyles } from "../../utils/styles";
import filter from "../../assets/filter.png";
import { Image } from "@rneui/themed";

export function Home() {
  const [searchBox, setSearchBox] = useState("");
  var shared: any = sharedStyles();
  return (
    <SafeAreaView style={styles.container}>
      <View
        style={{
          flexDirection: "row",
          alignItems: "center", // Vertically center the items
          justifyContent: "space-between",
          gap: 10,
        }}
      >
        <Input
          value={searchBox}
          placeholder="Search guests"
          onChangeText={(text) => setSearchBox(text)}
          containerStyle={{
            backgroundColor: shared.white.color,
            borderRadius: 15,
            width: wp(70),
            height: 45,
          }}
          inputContainerStyle={{
            borderBottomWidth: 0,
          }}
          leftIcon={
            <TextInput.Icon
              icon="magnify"
              style={{
                pointerEvents: "none",
                marginLeft: 15,
              }}
              color={"#A6A3B8"}
            />
          }
          style={{
            paddingLeft: 20,
          }}
        />
        <View style={{ backgroundColor: "red" }}>
          <Image
            source={filter}
            style={{
              width: 24,
              height: 20,
              resizeMode: "contain",
            }}
          />
        </View>
        <View style={{ backgroundColor: "black" }}>
          <Image
            source={filter}
            style={{
              width: 24,
              height: 20,
              resizeMode: "contain",
            }}
          />
        </View>
      </View>
      <Text>Home Screen</Text>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: wp(100),
    backgroundColor: "#F9F9FF",
    paddingHorizontal: wp(3),
  },
});
