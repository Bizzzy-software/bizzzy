import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from "react-native-responsive-screen";
import { makeStyles } from "@rneui/themed";
import { View } from "react-native";
import { useState } from "react";
import PrimaryButton from "../../components/PrimaryButton";
import { ScrollView } from "react-native-gesture-handler";
import { JobDetails } from "../../components/BookJob/JobDetails";
import { PageMark } from "../../components/BookJob/PageMark";
import { DateAndTime } from "../../components/BookJob/DateAndTime";
import { FinalizeBooking } from "../../components/BookJob/FinalizeBooking";
import { useNavigation } from "@react-navigation/native";

export function BookJob() {
  const style = styles();

  const [index, setIndex] = useState(0);
  const navigation = useNavigation();

  return (
    <ScrollView style={style.container}>
      <View style={style.bookingCard}>
        <PageMark index={index} />
        {index == 0 ? <DateAndTime /> : null}
        {index == 1 ? <JobDetails /> : null}
        {index == 2 ? <FinalizeBooking /> : null}
        <View style={style.buttonContainer}>
          <PrimaryButton
            buttonTitle={index === 2 ? "Submit" : "Continue"}
            onPress={() => {
              if (index == 2) {
                navigation.navigate("Home");
                setIndex(0);
              } else {
                setIndex(index + 1);
              }
            }}
          />
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
