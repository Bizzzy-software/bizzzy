import React, { useState, useEffect } from "react";
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from "react-native-responsive-screen";
import { SafeAreaView } from "react-native-safe-area-context";
import Header from "../../components/Home/Header";
import { sharedTextStyles } from "../../utils/textStyles";
import ViewAll from "../../components/ViewAll";
import CategoryList from "../../components/Home/CategoryList";
import { makeStyles } from "@rneui/themed";
import { useNavigation } from "@react-navigation/native";
import HandyCard from "../../components/Home/HandyCardList";
import { ScrollView } from "react-native-gesture-handler";

export function Home() {
  var textStyles: any = sharedTextStyles();
  const style = styles();
  const navigation = useNavigation();

  return (
    <SafeAreaView style={style.container} edges={["top"]}>
      <ScrollView showsVerticalScrollIndicator={false}>
        <Header />
        <ViewAll
          title="What needs to be done?"
          onPress={() => navigation.navigate("AllCategories")}
        />
        <CategoryList />
        <ViewAll title="Cleaning" onPress={() => console.log("Cleaning")} />
        <HandyCard />
        <ViewAll
          title="Electrician"
          onPress={() => console.log("Electrician")}
        />
        <HandyCard />
        <ViewAll title="Roofing" onPress={() => console.log("Roofing")} />
        <HandyCard />
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = makeStyles((theme) => ({
  container: {
    flex: 1,
    width: wp(100),
    backgroundColor: theme.colors.background,
    paddingHorizontal: wp(3),
  },
}));
