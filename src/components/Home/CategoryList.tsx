import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from "react-native-responsive-screen";
import { FlatList, View } from "react-native";
import { Image, Text, makeStyles } from "@rneui/themed";
import { categoryData } from "../../utils/categoryData";
import { sharedTextStyles } from "../../utils/textStyles";

const CategoryList = () => {
  const textStyles: any = sharedTextStyles();
  const style = styles();
  const data = categoryData;

  return (
    <View style={{ justifyContent: "center", paddingLeft: 2 }}>
      <FlatList
        data={data}
        horizontal
        showsHorizontalScrollIndicator={false}
        ItemSeparatorComponent={() => <View style={{ width: 5 }} />}
        renderItem={({ item }) => {
          return (
            <View style={[style.card, style.shadowProp]}>
              <View style={[style.imageBg, { backgroundColor: item.bgColor }]}>
                <Image source={item?.imageUrl} style={style.imageStyle} />
              </View>
              <Text
                style={[{ marginVertical: 10 }, textStyles.blackMediumBold]}
              >
                {item?.Category}
              </Text>
            </View>
          );
        }}
        keyExtractor={(item) => item?.Category}
      />
    </View>
  );
};

const styles = makeStyles((theme) => ({
  card: {
    backgroundColor: "white",
    borderRadius: 8,
    alignItems: "center",
    justifyContent: "center",
    marginVertical: 10,
    width: wp(23),
  },
  shadowProp: {
    shadowColor: "#171717",
    shadowOffset: { width: -2, height: 4 },
    marginLeft: 4,
    shadowOpacity: 0.2,
    shadowRadius: 3,
  },
  imageStyle: {
    width: wp(8),
    height: wp(8),
    resizeMode: "contain",
  },
  imageBg: {
    width: wp(13),
    height: wp(13),
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 50,
    marginTop: 15,
  },
}));

export default CategoryList;
