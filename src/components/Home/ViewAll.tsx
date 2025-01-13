import React, { useState, useEffect } from "react";
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from "react-native-responsive-screen";
import { makeStyles, Text } from "@rneui/themed";
import { TouchableOpacity, View } from "react-native";
import { sharedTextStyles } from "../../utils/textStyles";
import { useNavigation } from "@react-navigation/native";

const ViewAll = () => {
  var textStyles: any = sharedTextStyles();
  const navigation = useNavigation();

  return (
    <View style={styles().container}>
      <Text style={textStyles.blackBigBold}>What needs to be done?</Text>
      <TouchableOpacity
        onPress={() => {
          navigation.navigate("AllCategories");
        }}
      >
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
