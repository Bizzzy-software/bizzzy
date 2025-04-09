import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from "react-native-responsive-screen";
import { makeStyles, Text, Icon } from "@rneui/themed";
import { View, ViewStyle } from "react-native";
import { sharedStyles } from "../../utils/styles";

export function BookJob() {
  const style = styles();
  const shared = sharedStyles();

  const outerCircle = (isTrue: boolean): ViewStyle => ({
    height: 35,
    width: 35,
    borderRadius: 40,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: isTrue ? "#f7c9aa" : shared.grey5.color,
  });

  const innerCircle = (isTrue: boolean): ViewStyle => ({
    height: 23,
    width: 23,
    borderRadius: 25,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: isTrue ? shared.primary.color : shared.white.color,
  });

  const checkMark = (isActivePage: boolean) => {
    return (
      <View style={{ alignItems: "center" }}>
        <View style={outerCircle(isActivePage)}>
          <View style={innerCircle(isActivePage)}>
            <Icon
              name="check"
              type="font-awesome-5"
              color={shared.white.color}
              size={15}
              solid
            />
          </View>
        </View>
        <Text>Date & Time</Text>
      </View>
    );
  };

  return (
    <View style={style.container}>
      <View>
        <View style={{ flexDirection: "row", justifyContent: "space-between" }}>
          {checkMark(true)}
          {checkMark(true)}
          {checkMark(false)}
        </View>
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
