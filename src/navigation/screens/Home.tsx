import React, { useState, useEffect } from "react";
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from "react-native-responsive-screen";
import { SafeAreaView } from "react-native-safe-area-context";
import Header from "../../components/Home/Header";
import { sharedTextStyles } from "../../utils/textStyles";
import ViewAll from "../../components/Home/ViewAll";
import { categoryData } from "../../utils/categoryData";
import CategoryList from "../../components/Home/CategoryList";
import { makeStyles } from "@rneui/themed";

export function Home() {
  var textStyles: any = sharedTextStyles();
  const style = styles();
  const data = categoryData;

  return (
    <SafeAreaView style={style.container}>
      <Header />
      <ViewAll />
      <CategoryList />
    </SafeAreaView>
  );
}

const styles = makeStyles((theme) => ({
  container: {
    flex: 1,
    width: wp(100),
    backgroundColor: "#F9F9FF",
    paddingHorizontal: wp(3),
  },
}));
