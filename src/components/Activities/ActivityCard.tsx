import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from "react-native-responsive-screen";
import React, { useState } from "react";
import { makeStyles, Text, Image, Icon } from "@rneui/themed";
import { View } from "react-native";
import { sharedStyles } from "../../utils/styles";
import { sharedTextStyles } from "../../utils/textStyles";
import mockImage from "../../assets/mock_image.jpg";
import calendar from "../../assets/calendar.png";
import money_bag from "../../assets/money_bag.png";

export function ActivityCard() {
  var textStyles: any = sharedTextStyles();
  const style = styles();
  const shared: any = sharedStyles();

  const iconText = (text: string, icon: any) => {
    return (
      <View style={style.horizontalLayer}>
        <Image source={icon} style={style.imageStyle} />
        <Text
          style={[
            textStyles.blackSmallSemiBold,
            { color: shared.greyOutline.color },
          ]}
        >
          {text}
        </Text>
      </View>
    );
  };

  return (
    <View style={style.container}>
      <View style={style.imageParent}>
        <Image source={mockImage} style={style.cardImage} />
      </View>
      <View style={{ width: wp(65), gap: 5 }}>
        <View
          style={{
            flexDirection: "row",
            justifyContent: "space-between",
          }}
        >
          <Text style={[textStyles.blackMediumBold, { fontSize: 16 }]}>
            Cleaning needed
          </Text>
          <View style={style.statusText}>
            <Text
              style={[
                textStyles.blackMediumSemiBold,
                { color: shared.white.color },
              ]}
            >
              Active
            </Text>
          </View>
        </View>
        <Text style={textStyles.primaryMediumRegular}>General Cleaning</Text>
        <Text
          style={[
            textStyles.blackSmallSemiBold,
            { color: shared.greyOutline.color },
          ]}
        >
          Iris Watson P.O. Box 283 8562 Fusce Rd
        </Text>
        <View style={{ flexDirection: "row", gap: 15 }}>
          {iconText("20 Feb, 2020", calendar)}
          {iconText("$20.00/hr", money_bag)}
        </View>
      </View>
    </View>
  );
}

const styles = makeStyles((theme) => ({
  container: {
    flexDirection: "row",
    gap: wp(5),
    marginVertical: wp(5),
    backgroundColor: theme.colors.white,
    padding: wp(2),
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.3,
    shadowRadius: 4,
    borderRadius: 10,
  },
  cardImage: {
    width: wp(15),
    height: wp(15),
    borderRadius: 200,
  },
  imageStyle: {
    width: 15,
    height: 15,
    resizeMode: "contain",
  },
  horizontalLayer: {
    flexDirection: "row",
    gap: 5,
    alignItems: "center",
    justifyContent: "center",
  },
  statusText: {
    backgroundColor: "#FFBC00",
    borderRadius: 12,
    paddingVertical: 5,
    paddingHorizontal: 15,
    position: "absolute",
    right: wp(2),
  },
  imageParent: {
    justifyContent: "center",
    alignItems: "center",
  },
}));
