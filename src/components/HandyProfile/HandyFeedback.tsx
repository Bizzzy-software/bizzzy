import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from "react-native-responsive-screen";
import React from "react";
import { makeStyles, Text, Image } from "@rneui/themed";
import { FlatList, View } from "react-native";
import { sharedStyles } from "../../utils/styles";
import { sharedTextStyles } from "../../utils/textStyles";
import mockImage from "../../assets/mock_image.jpg";
import { Rating } from "react-native-ratings";
import { handymanData } from "../../utils/categoryData";
import ViewAll from "../ViewAll";

export function HandyFeedback() {
  var textStyles: any = sharedTextStyles();
  const style = styles();
  const shared: any = sharedStyles();
  const data = handymanData;

  const photoAndRate = () => {
    return (
      <View style={{ gap: 15 }}>
        <View style={style.imageAndName}>
          <View style={style.nameAndDate}>
            <Image source={mockImage} style={style.cardImage} />
            <View>
              <Text>Alexa</Text>
              <Text>01-06-2021</Text>
            </View>
          </View>
          <Rating
            type="custom"
            ratingColor={shared.primary.color}
            ratingBackgroundColor={shared.primary.color}
            ratingCount={5}
            imageSize={17}
            readonly={true}
          />
        </View>
        <Text
          style={[
            textStyles.blackMediumLight,
            { color: shared.greyOutline.color },
          ]}
        >
          I have bought over 10 suits from this seller ...wow … what a service.
          Thank you !
        </Text>
      </View>
    );
  };

  return (
    <View style={style.container}>
      <ViewAll
        title="Feedbacks"
        onPress={() => console.log("object")}
        textStyle={textStyles.blackMediumBold}
      />
      <FlatList
        data={data.slice(0, 2)}
        showsHorizontalScrollIndicator={false}
        ItemSeparatorComponent={() => <View style={{ height: 15 }} />}
        renderItem={({ item }) => {
          return photoAndRate();
        }}
        keyExtractor={(item) => item?.name}
        scrollEnabled={false}
      />
    </View>
  );
}

const styles = makeStyles((theme) => ({
  container: {
    margin: wp(2),
    backgroundColor: theme.colors.white,
    padding: wp(4),
    borderRadius: 15,
    gap: 10,
  },
  cardImage: {
    width: wp(15),
    height: wp(15),
    borderRadius: 200,
  },
  viewAllButton: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginBottom: 10,
  },
  imageAndName: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
  nameAndDate: {
    flexDirection: "row",
    alignItems: "center",
    gap: 10,
  },
}));
