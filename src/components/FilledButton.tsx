import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from "react-native-responsive-screen";
import React from "react";
import { makeStyles, Button } from "@rneui/themed";
import { StyleSheet } from "react-native";
import { sharedTextStyles } from "../utils/textStyles";

export default function FilledButton({ title }: { title: string }) {
  const textStyle = sharedTextStyles();

  return <Button radius={50} title={title} buttonStyle={styles().button} />;
}

const styles = makeStyles((theme) => ({
  button: {
    width: wp(70),
    height: 45,
  },
}));
