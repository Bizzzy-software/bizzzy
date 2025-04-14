import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from "react-native-responsive-screen";
import { makeStyles, Text, Icon, Input } from "@rneui/themed";
import { View, ViewStyle } from "react-native";
import { sharedStyles } from "../../utils/styles";
import { useState } from "react";
import { PageMark } from "../../components/BookJob/PageMark";
import { MainInput } from "../../components/MainInput";
import { sharedTextStyles } from "../../utils/textStyles";
import PrimaryButton from "../../components/PrimaryButton";
import { ScrollView } from "react-native-gesture-handler";

export function BookJob() {
  const style = styles();
  const shared = sharedStyles();
  const textStyles = sharedTextStyles();
  const [index, setIndex] = useState(0);

  const JobForms = () => {
    return (
      <View style={style.jobFormContainer}>
        <Text style={textStyles.blackMediumSemiBold}>Job Title</Text>
        <MainInput title="Title of the job" />
        <Text style={textStyles.blackMediumSemiBold}>Address</Text>
        <MainInput title="Destination" />
        <Text style={textStyles.blackMediumSemiBold}>Notes</Text>
        <MainInput title="You have note for shipper?" />
      </View>
    );
  };

  return (
    <ScrollView style={style.container}>
      <View style={style.bookingCard}>
        <PageMark />
        <JobForms />
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
  jobFormContainer: {
    padding: wp(5),
    gap: hp(1),
  },
  buttonContainer: {
    flexDirection: "row",
    alignSelf: "center",
    width: "90%",
  },
}));
