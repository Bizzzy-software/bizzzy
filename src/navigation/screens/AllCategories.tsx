import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from "react-native-responsive-screen";
import { FlatList, View } from "react-native";
import { categoryData } from "../../utils/categoryData";
import { makeStyles, Image, Text } from "@rneui/themed";
import { sharedTextStyles } from "../../utils/textStyles";

export function AllCategories() {
  const data = categoryData;
  const textStyles: any = sharedTextStyles();
  const style = styles();

  return (
    <View style={style.container}>
      <FlatList
        data={data}
        showsHorizontalScrollIndicator={false}
        renderItem={({ item }) => {
          return (
            <View style={[style.card, style.shadowProp]}>
              <View style={[style.imageBg, { backgroundColor: item.bgColor }]}>
                <Image source={item?.imageUrl} style={style.imageStyle} />
              </View>
              <Text style={[{ marginTop: 10 }, textStyles.blackMediumBold]}>
                {item?.Category}
              </Text>
            </View>
          );
        }}
        keyExtractor={(item) => item?.Category}
        numColumns={3}
        columnWrapperStyle={{
          justifyContent: "space-between",
        }}
      />
    </View>
  );
}

const styles = makeStyles((theme) => ({
  container: {
    flex: 1,
    justifyContent: "center",
    padding: wp(3),
    backgroundColor: "#F9F9FF",
  },
  card: {
    backgroundColor: "white",
    borderRadius: 8,
    alignItems: "center",
    justifyContent: "center",
    paddingVertical: 15,
    paddingHorizontal: 10,
    marginVertical: 10,
    width: wp(28),
  },
  shadowProp: {
    shadowColor: "#171717",
    shadowOffset: { width: -2, height: 4 },
    marginLeft: 4,
    shadowOpacity: 0.2,
    shadowRadius: 3,
  },
  imageStyle: {
    width: 45,
    height: 45,
    resizeMode: "contain",
  },
  imageBg: {
    width: 65,
    height: 65,
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 50,
  },
}));
