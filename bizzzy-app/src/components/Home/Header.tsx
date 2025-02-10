import React, { useState, useEffect } from "react";
import { StyleSheet, View } from "react-native";
import SearchInput from "./SearchInput";
import Filter from "./Filter";
import Notification from "./Notification";
const Header = () => {
  return (
    <View style={styles.container}>
      <SearchInput />
      <Filter />
      <Notification />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    gap: 10,
  },
});
export default Header;
