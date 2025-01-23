import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from "react-native-responsive-screen";
import { makeStyles, Text } from "@rneui/themed";
import { View } from "react-native";
import { sharedStyles } from "../../utils/styles";
import { sharedTextStyles } from "../../utils/textStyles";

export function HandyHighlight() {
  var textStyles: any = sharedTextStyles();
  const style = styles();
  const shared: any = sharedStyles();

  const highlight = (number: string, description: string) => {
    return (
      <View style={{ justifyContent: "center", alignItems: "center", gap: 5 }}>
        <Text style={[textStyles.blackBigBold, { fontSize: 20 }]}>
          {number}
        </Text>
        <Text style={textStyles.blackMediumRegular}>{description}</Text>
      </View>
    );
  };

  return (
    <View style={style.container}>
      {highlight("100", "Reviews")}
      <View style={style.verticleLine}></View>
      {highlight("500", "Ongoing")}
      <View style={style.verticleLine}></View>
      {highlight("700", "Clients")}
    </View>
  );
}

const styles = makeStyles((theme) => ({
  container: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignContent: "center",
    marginVertical: hp(2),
    marginHorizontal: wp(5),
  },
  verticleLine: {
    height: "100%",
    width: 0.5,
    backgroundColor: "#909090",
  },
}));
