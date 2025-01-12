import React, { useState, useEffect } from "react";
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from "react-native-responsive-screen";
import { Text } from "@rneui/themed";
import { StyleSheet, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import Header from "../../components/Home/Header";
import { sharedTextStyles } from "../../utils/textStyles";
import ViewAll from "../../components/Home/ViewAll";

export function Home() {
  var textStyles: any = sharedTextStyles();

  return (
    <SafeAreaView style={styles.container}>
      <Header />
      <ViewAll />
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
