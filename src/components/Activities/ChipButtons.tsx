import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from "react-native-responsive-screen";
import React, { useState } from "react";
import { makeStyles, Text } from "@rneui/themed";
import { View } from "react-native";
import { sharedStyles } from "../../utils/styles";
import { sharedTextStyles } from "../../utils/textStyles";
import PrimaryButton from "../PrimaryButton";

export function ChipButtons() {
  const [index, setIndex] = useState(0);

  var textStyles: any = sharedTextStyles();
  const style = styles();
  const shared: any = sharedStyles();

  return (
    <View style={style.container}>
      <PrimaryButton
        buttonTitle="Request"
        onPress={() => setIndex(0)}
        buttonStyle={index != 0 ? style.nonActiveButton : undefined}
        titleStyle={
          index != 0
            ? [textStyles.blackMediumRegular, { fontSize: 18 }]
            : undefined
        }
      />
      <PrimaryButton
        buttonTitle="Active"
        onPress={() => setIndex(1)}
        buttonStyle={index != 1 ? style.nonActiveButton : undefined}
        titleStyle={index != 1 ? textStyles.blackMediumRegular : undefined}
      />
      <PrimaryButton
        buttonTitle="Completed"
        onPress={() => setIndex(2)}
        buttonStyle={index != 2 ? style.nonActiveButton : undefined}
        titleStyle={index != 2 ? textStyles.blackMediumRegular : undefined}
      />
    </View>
  );
}

const styles = makeStyles((theme) => ({
  container: {
    flexDirection: "row",
    gap: 5,
  },
  nonActiveButton: {
    backgroundColor: theme.colors.white,
    borderRadius: 20,
    padding: wp(2.5),
  },
}));
