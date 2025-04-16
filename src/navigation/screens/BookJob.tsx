import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from "react-native-responsive-screen";
import { makeStyles } from "@rneui/themed";
import { View } from "react-native";
import { sharedStyles } from "../../utils/styles";
import { useState } from "react";
import { sharedTextStyles } from "../../utils/textStyles";
import PrimaryButton from "../../components/PrimaryButton";
import { ScrollView } from "react-native-gesture-handler";
import { JobDetails } from "../../components/BookJob/JobDetails";
import { PageMark } from "../../components/BookJob/PageMark";
import { DateAndTime } from "../../components/BookJob/DateAndTime";

export function BookJob() {
  const style = styles();
  const shared = sharedStyles();
  const textStyles = sharedTextStyles();
  const [index, setIndex] = useState(0);

  return (
    <ScrollView style={style.container}>
      <View style={style.bookingCard}>
        <PageMark />
        {index == 0 ? <DateAndTime /> : null}
        {index == 1 ? <JobDetails /> : null}
        <View style={style.buttonContainer}>
          <PrimaryButton buttonTitle="Continue" />
        </View>
      </View>
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
  bookingCard: {
    backgroundColor: theme.colors.white,
    borderRadius: 20,
    paddingVertical: hp(3),
  },
  buttonContainer: {
    flexDirection: "row",
    alignSelf: "center",
    width: "90%",
  },
}));
