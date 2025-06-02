import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from "react-native-responsive-screen";
import React from "react";
import { makeStyles } from "@rneui/themed";
import { View } from "react-native";
import PrimaryButton from "../PrimaryButton";

export default function SocialButtons() {
  return (
    <>
      <View style={styles().buttonContainer}>
        <PrimaryButton buttonTitle="Sign up with Google" onPress={() => {}} />
      </View>
      <View style={styles().buttonContainer}>
        <PrimaryButton buttonTitle="Sign up with Facebook" onPress={() => {}} />
      </View>
      <View style={styles().buttonContainer}>
        <PrimaryButton buttonTitle="Sign up with Apple" onPress={() => {}} />
      </View>
    </>
  );
}

const styles = makeStyles((theme) => ({
  buttonContainer: {
    width: "100%",
    height: 45,
    marginBottom: 5,
  },
}));
