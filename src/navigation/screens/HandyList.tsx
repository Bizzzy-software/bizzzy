import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from "react-native-responsive-screen";
import { FlatList, View } from "react-native";
import { makeStyles } from "@rneui/themed";
import { HandyCard } from "../../components/HandyCard";
import { categoryData } from "../../utils/categoryData";

export function HandyList() {
  const style = styles();
  const data = categoryData;

  return (
    <View style={style.container}>
      <FlatList
        data={data}
        showsHorizontalScrollIndicator={false}
        numColumns={3}
        columnWrapperStyle={{
          justifyContent: "space-between",
        }}
        ItemSeparatorComponent={() => <View style={{ width: 5 }} />}
        renderItem={({ item }) => {
          return <HandyCard />;
        }}
        keyExtractor={(item) => item?.Category}
      />
    </View>
  );
}

const styles = makeStyles((theme) => ({
  container: {
    flex: 1,
    width: wp(100),
    backgroundColor: theme.colors.background,
    padding: wp(3),
  },
}));
