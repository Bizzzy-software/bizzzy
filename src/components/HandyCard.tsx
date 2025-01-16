import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from "react-native-responsive-screen";
import { TouchableOpacity, View } from "react-native";
import { sharedStyles } from "../utils/styles";
import { Image } from "@rneui/themed";
import heartIcon from "../assets/heart.png";
import starIcon from "../assets/star.png";
import { makeStyles, Text } from "@rneui/themed";

const HandyCard = () => {
  var shared: any = sharedStyles();
  const style = styles();

  const textInfo = () => {
    return (
      <View
        style={{
          flexDirection: "row",
          justifyContent: "space-between",
          alignItems: "center",
          marginHorizontal: 10,
          marginTop: 5,
        }}
      >
        <TouchableOpacity>
          <Image
            source={heartIcon}
            style={{
              width: wp(3),
              height: wp(3),
              resizeMode: "contain",
            }}
          />
        </TouchableOpacity>
        <View style={{ flexDirection: "row", alignItems: "center" }}>
          <Text>4.9</Text>
          <Image
            source={starIcon}
            style={{
              width: wp(3),
              height: wp(3),
              resizeMode: "contain",
            }}
          />
        </View>
      </View>
    );
  };

  return <View style={[style.card, style.shadowProp]}>{textInfo()}</View>;
};

const styles = makeStyles((theme) => ({
  card: {
    backgroundColor: "white",
    borderRadius: 8,
    marginVertical: 10,
    width: wp(25),
    height: hp(10),
  },
  shadowProp: {
    shadowColor: "#171717",
    shadowOffset: { width: -2, height: 4 },
    marginLeft: 4,
    shadowOpacity: 0.2,
    shadowRadius: 3,
  },
}));

export default HandyCard;
