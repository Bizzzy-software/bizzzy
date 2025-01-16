import React, { useState, useEffect } from "react";
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from "react-native-responsive-screen";
import { makeStyles, Text } from "@rneui/themed";
import { TouchableOpacity, View } from "react-native";
import { sharedTextStyles } from "../utils/textStyles";
import { useNavigation } from "@react-navigation/native";

type ViewAllProps = {
  title: string;
  onPress: () => void;
};

const ViewAll: React.FC<ViewAllProps> = ({ title, onPress }) => {
  var textStyles: any = sharedTextStyles();
  const navigation = useNavigation();

  return (
    <View style={styles().container}>
      <Text style={textStyles.blackBigBold}>{title}</Text>
      <TouchableOpacity onPress={onPress}>
        <Text style={textStyles.secondaryMediumRegular}>View All +</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = makeStyles((theme) => ({
  container: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginVertical: 5,
    marginRight: wp(2),
    alignItems: "center",
  },
}));

export default ViewAll;
