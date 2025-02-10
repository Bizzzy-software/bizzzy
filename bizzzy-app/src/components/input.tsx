import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from "react-native-responsive-screen";
import { sharedStyles } from "../util/styles";
import React, { forwardRef } from "react";
import { TextInput as RNTextInput } from "react-native-paper";
type RNTextInputType = typeof RNTextInput;
import { FONTS } from "../util/fonts";
import { Text } from "@rneui/themed";
import { Platform } from "react-native";
import { View } from "react-native";

export const INPUT_HEIGHT = 42;

type InputProps = {
  label?: string;
  onPress?: () => void;
  value?: string;
  style?: any;
  multiline?: boolean;
  rightText?: string;
  icon?: string;
};

const Input = forwardRef(
  (props: InputProps, ref: React.Ref<RNTextInput | null>) => {
    const shared = sharedStyles();
    const textStyle = sharedTextStyles();

    return (
      <View
        style={{
          flexDirection: "row",
          alignItems: "center",
          justifyContent: "space-between",
        }}
      >
        <RNTextInput
          {...props}
          ref={ref}
          label={<Text style={shared.greyText}>{props?.label}</Text>}
          mode="outlined"
          spellCheck={false}
          autoComplete="off"
          autoCorrect={false}
          contextMenuHidden={true}
          onPress={() => props?.onPress && props.onPress()}
          errorStyle={{ display: "none" }}
          outlineStyle={{ borderColor: shared.borderColor.color }}
          contentStyle={{
            fontFamily: props?.value ? FONTS.M_500 : FONTS.M_400,
            paddingHorizontal: 15,
          }}
          style={[
            {
              flex: 1,
              lineHeight: 16,
              paddingBottom: Platform.select({ ios: 1, android: 2 }),
              fontFamily: props?.value ? FONTS.M_500 : FONTS.M_400,
              backgroundColor: shared.background.backgroundColor,
              fontSize: 14,
            },
            props?.style,
            !props?.multiline
              ? { height: INPUT_HEIGHT }
              : { minHeight: 100, maxHeight: 250 },
          ]}
          height={INPUT_HEIGHT}
          allowFontScaling={false}
          activeOutlineColor={shared.secondary.color}
          right={
            props?.icon && (
              <TextInput.Icon
                icon={props.icon}
                pointerEvents="none"
                style={{ paddingTop: 2 }}
              />
            )
          }
        />
        {!props?.rightText?.length ? null : (
          <Text
            style={[
              { marginLeft: wp(5), paddingTop: 4 },
              textStyle.blackMediumRegular,
              shared.greyText,
            ]}
          >
            {props?.rightText}
          </Text>
        )}
      </View>
    );
  }
);

export default Input;
