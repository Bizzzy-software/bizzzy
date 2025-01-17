import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from "react-native-responsive-screen";
import { TouchableOpacity, View } from "react-native";
import { makeStyles, Image, Text } from "@rneui/themed";
import { sharedStyles } from "../utils/styles";
import heartIcon from "../assets/heart.png";
import starIcon from "../assets/star.png";
import mockImage from "../assets/mock_image.jpg";
import { sharedTextStyles } from "../utils/textStyles";

export function HandyCard() {
  var shared: any = sharedStyles();

  const textStyles: any = sharedTextStyles();

  const textInfo = () => {
    return (
      <View style={style.textInfoContainer}>
        <TouchableOpacity>
          <Image source={heartIcon} style={style.imgStyle} />
        </TouchableOpacity>
        <View style={{ flexDirection: "row", alignItems: "center" }}>
          <Text>4.9</Text>
          <Image source={starIcon} style={style.imgStyle} />
        </View>
      </View>
    );
  };

  const handyImage = () => {
    return (
      <View style={style.imgContainer}>
        <View style={style.handyImage}>
          <Image source={mockImage} style={style.cardImage} />
        </View>
        <View style={style.nameAndRate}>
          <Text style={textStyles.whiteMediumRegular}>John Smith</Text>
          <Text style={textStyles.whiteSmallRegular}>$20.00/hr</Text>
        </View>
      </View>
    );
  };
  const style = styles();
  return (
    <View style={[style.card, style.shadowProp]}>
      {textInfo()}
      {handyImage()}
    </View>
  );
}

const styles = makeStyles((theme) => ({
  card: {
    backgroundColor: "white",
    borderRadius: 8,
    marginVertical: 10,
    width: wp(25),
  },
  shadowProp: {
    shadowColor: "#171717",
    shadowOffset: { width: -2, height: 4 },
    marginLeft: 4,
    shadowOpacity: 0.2,
    shadowRadius: 3,
  },
  textInfoContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginHorizontal: 10,
    marginTop: 5,
  },
  imgStyle: {
    width: wp(3),
    height: wp(3),
    resizeMode: "contain",
  },
  cardImage: {
    width: wp(19),
    height: wp(19),
    borderRadius: 100,
  },
  nameAndRate: {
    marginTop: wp(12),
    alignItems: "center",
    gap: 3,
  },
  handyImage: {
    width: wp(19),
    height: wp(19),
    backgroundColor: "grey",
    borderRadius: 100,
    position: "absolute",
    top: -wp(9.5),
    left: wp(3),
  },
  imgContainer: {
    backgroundColor: "orange",
    alignItems: "center",
    height: hp(11),
    borderRadius: 8,
    marginTop: wp(10),
  },
}));
