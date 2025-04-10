import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from "react-native-responsive-screen";
import { makeStyles, Text, Icon } from "@rneui/themed";
import { View, ViewStyle } from "react-native";
import { sharedStyles } from "../../utils/styles";
import { useState } from "react";
import { PageMark } from "../../components/BookJob/PageMark";

export function BookJob() {
  const style = styles();
  const shared = sharedStyles();
  const [index, setIndex] = useState(0);

  return (
    <View style={style.container}>
      <View>
        <PageMark />
      </View>
    </View>
  );
}

const styles = makeStyles((theme) => ({
  container: {
    flex: 1,
    width: wp(100),
    backgroundColor: theme.colors.background,
    padding: wp(5),
  },
}));
