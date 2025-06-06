import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from "react-native-responsive-screen";
import { makeStyles } from "@rneui/themed";
import { ScrollView } from "react-native-gesture-handler";
import { ChipButtons } from "../../components/Activities/ChipButtons";
import { ActivityCard } from "../../components/Activities/ActivityCard";

export function Activities() {
  const style = styles();

  return (
    <ScrollView style={style.container}>
      <ChipButtons />
      <ActivityCard />
    </ScrollView>
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
