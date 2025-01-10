import React, { useState, useEffect } from "react";
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from "react-native-responsive-screen";
import { Input } from "@rneui/base";
import { TextInput } from "react-native-paper";
import { makeStyles } from "@rneui/themed";

const Header = () => {
  const [searchBox, setSearchBox] = useState("");
  return (
    <Input
      value={searchBox}
      placeholder="Search guests"
      onChangeText={(text) => setSearchBox(text)}
      containerStyle={styles().container}
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
          color={"#A6A3B8"}
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
    width: wp(70),
    height: 45,
  },
}));

export default Header;
