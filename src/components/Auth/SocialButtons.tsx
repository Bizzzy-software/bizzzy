import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from "react-native-responsive-screen";
import React from "react";
import { makeStyles, Icon } from "@rneui/themed";
import { View } from "react-native";
import PrimaryButton from "../PrimaryButton";

export default function SocialButtons({
  googleTitle,
  facebookTitle,
  appleTitle,
}: {
  googleTitle: string;
  facebookTitle: string;
  appleTitle: string;
}) {
  const sharedIcon = ({
    iconName,
    color,
  }: {
    iconName: string;
    color: string;
  }) => (
    <Icon
      name={iconName}
      type="font-awesome"
      color={color}
      iconStyle={styles().iconStyle}
    />
  );

  return (
    <>
      <View style={styles().buttonContainer}>
        <PrimaryButton
          buttonTitle={googleTitle}
          onPress={() => {}}
          titleStyle={styles().titleStyle}
          buttonStyle={styles().buttonStyle}
          icon={sharedIcon({ iconName: "google", color: "#DB4437" })}
        />
      </View>
      <View style={styles().buttonContainer}>
        <PrimaryButton
          buttonTitle={facebookTitle}
          onPress={() => {}}
          titleStyle={styles().titleStyle}
          buttonStyle={styles().buttonStyle}
          icon={sharedIcon({ iconName: "facebook", color: "#4267B2" })}
        />
      </View>
      <View style={styles().buttonContainer}>
        <PrimaryButton
          buttonTitle={appleTitle}
          onPress={() => {}}
          titleStyle={styles().titleStyle}
          buttonStyle={styles().buttonStyle}
          icon={sharedIcon({ iconName: "apple", color: "black" })}
        />
      </View>
    </>
  );
}

const styles = makeStyles((theme) => ({
  buttonContainer: {
    justifyContent: "flex-start",
    width: "100%",
    height: 45,
    paddingHorizontal: wp(15),
    marginBottom: 10,
  },
  buttonStyle: {
    borderRadius: 20,
    padding: wp(2.5),
    borderColor: theme.colors.greyOutline,
    backgroundColor: "#f2f2f2",
    borderWidth: 1,
    justifyContent: "flex-start",
  },
  iconStyle: {
    width: 40,
    paddingHorizontal: 10,
  },
  titleStyle: {
    color: theme.colors.primary,
    fontWeight: 500,
  },
}));
