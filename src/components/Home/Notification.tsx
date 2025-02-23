import React, { useState, useEffect } from "react";
import { TouchableOpacity } from "react-native";
import { sharedStyles } from "../../utils/styles";
import notification from "../../assets/notification.png";
import { Image } from "@rneui/themed";
import { makeStyles } from "@rneui/themed";

const Notification = () => {
  var shared: any = sharedStyles();

  return (
    <TouchableOpacity>
      <Image source={notification} style={styles().container} />
    </TouchableOpacity>
  );
};

const styles = makeStyles((theme) => ({
  container: {
    width: 30,
    height: 25,
    resizeMode: "contain",
  },
}));

export default Notification;
