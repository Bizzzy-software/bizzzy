import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from "react-native-responsive-screen";
import { FlatList, View } from "react-native";
import { sharedStyles } from "../../utils/styles";
import { makeStyles } from "@rneui/themed";
import { sharedTextStyles } from "../../utils/textStyles";
import { categoryData } from "../../utils/categoryData";
import { HandyCard } from "../HandyCard";

const HandyCardList = () => {
  var shared: any = sharedStyles();
  const style = styles();
  const textStyles: any = sharedTextStyles();
  const data = categoryData;

  return (
    <View>
      <FlatList
        data={data}
        horizontal
        showsHorizontalScrollIndicator={false}
        ItemSeparatorComponent={() => <View style={{ width: 5 }} />}
        renderItem={({ item }) => {
          return <HandyCard />;
        }}
        keyExtractor={(item) => item?.Category}
      />
    </View>
  );
};

const styles = makeStyles((theme) => ({}));

export default HandyCardList;
