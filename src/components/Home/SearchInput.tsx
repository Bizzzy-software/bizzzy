import React, { useState, useEffect } from "react";
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from "react-native-responsive-screen";
import { Input } from "@rneui/base";
import { TextInput } from "react-native-paper";
import { makeStyles } from "@rneui/themed";
import { sharedStyles } from "../../utils/styles";

const SearchInput = ({
  width = wp(70),
  title,
  value,
  onChangeText,
}: {
  width?: number;
  title: string;
  value?: string;
  onChangeText?: (text: string) => void;
}) => {
  const [searchBox, setSearchBox] = useState(value || "");
  const shared: any = sharedStyles();

  const handleChangeText = (text: string) => {
    setSearchBox(text);
    if (onChangeText) {
      onChangeText(text);
    }
  };

  return (
    <Input
      value={value !== undefined ? value : searchBox}
      placeholder={title}
      onChangeText={handleChangeText}
      containerStyle={[styles().container, { width: width }]}
      inputContainerStyle={{
        borderBottomWidth: 0,
      }}
      leftIcon={
        <TextInput.Icon
          icon="magnify"
          style={{
            pointerEvents: "none",
            marginLeft: 15,
          }}
          color={shared.secondary.color}
        />
      }
      style={{
        paddingLeft: 20,
      }}
    />
  );
};

const styles = makeStyles((theme) => ({
  container: {
    backgroundColor: theme.colors.white,
    borderRadius: 15,
    height: 45,
  },
}));

export default SearchInput;
