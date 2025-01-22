import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from "react-native-responsive-screen";
import { makeStyles, Image, Text, Divider } from "@rneui/themed";
import { View } from "react-native";
import mockImage from "../../assets/mock_image.jpg";
import Icon from "react-native-vector-icons/Ionicons";
import { sharedStyles } from "../../utils/styles";
import { sharedTextStyles } from "../../utils/textStyles";
import { Rating } from "react-native-ratings";

export function HandyBulletin() {
  var textStyles: any = sharedTextStyles();
  const style = styles();
  const shared: any = sharedStyles();

  const userName = () => {
    return (
      <View style={[style.rowStyle, { gap: 15 }]}>
        <Text style={textStyles.blackBigBold}>Alexa Smith</Text>
        <Icon name="checkmark-circle" size={20} color={shared.primary.color} />
      </View>
    );
  };

  const userRate = () => {
    return (
      <View style={[style.rowStyle, { gap: 5 }]}>
        <Rating
          type="custom"
          ratingColor={shared.primary.color}
          ratingBackgroundColor={shared.primary.color}
          ratingCount={5}
          imageSize={17}
          readonly={true}
        />
        <Text style={textStyles.blackMediumBold}>4.9</Text>
      </View>
    );
  };

  return (
    <View style={style.container}>
      <Image source={mockImage} style={style.cardImage} />
      <View style={style.textInfoContainer}>
        {userName()}
        <Text
          style={
            (textStyles.primaryMediumRegular, { color: shared.grey3.color })
          }
        >
          10 Year Experience
        </Text>
        {userRate()}
        <Text
          style={[textStyles.primaryMediumBold, { color: shared.error.color }]}
        >
          $20.00/hr
        </Text>
      </View>
      <Divider style={{ width: wp(100) }} />
    </View>
  );
}

const styles = makeStyles((theme) => ({
  container: {
    justifyContent: "center",
    alignItems: "center",
    marginTop: hp(2),
  },
  cardImage: {
    width: wp(25),
    height: wp(25),
    borderRadius: 200,
  },
  rowStyle: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
  },
  textInfoContainer: {
    marginVertical: hp(2),
    gap: 5,
    alignItems: "center",
  },
}));
