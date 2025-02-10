import React, { useState, useEffect } from "react";
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from "react-native-responsive-screen";
import { makeStyles, Text } from "@rneui/themed";
import { TouchableOpacity, View } from "react-native";
import { sharedTextStyles } from "../utils/textStyles";
import { useNavigation } from "@react-navigation/native";
import { sharedStyles } from "../utils/styles";

type ViewAllProps = {
  title: string;
  textStyle?: any;
  onPress: () => void;
};

const ViewAll: React.FC<ViewAllProps> = ({
  title,
  onPress,
  textStyle = sharedTextStyles().blackBigBold,
}) => {
  var textStyles: any = sharedTextStyles();
  const navigation = useNavigation();
  const shared = sharedStyles();

  return (
    <View style={styles().container}>
      <Text style={textStyle}>{title}</Text>
      <TouchableOpacity onPress={onPress}>
        <Text
          style={[
            textStyles.secondaryMediumRegular,
            { color: shared.secondary.color },
          ]}
        >
          View All +
        </Text>
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
