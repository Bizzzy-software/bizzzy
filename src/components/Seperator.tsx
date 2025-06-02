import React from "react";
import { makeStyles, Text } from "@rneui/themed";
import { View } from "react-native";
import { sharedTextStyles } from "../utils/textStyles";

export default function Seperator({ color = "black", lineHeight = 1 }) {
  const textStyles = sharedTextStyles();
  return (
    <View style={styles().container}>
      <View
        style={[styles().line, { backgroundColor: color, height: lineHeight }]}
      />
      <Text
        style={[
          textStyles.blackBigLight,
          { marginHorizontal: 5, color: color },
        ]}
      >
        OR
      </Text>
      <View
        style={[styles().line, { backgroundColor: color, height: lineHeight }]}
      />
    </View>
  );
}

const styles = makeStyles((theme) => ({
  container: {
    flexDirection: "row",
    alignItems: "center",
    marginVertical: 15,
  },
  line: {
    flex: 1,
    height: 2,
    backgroundColor: "black",
  },
}));
