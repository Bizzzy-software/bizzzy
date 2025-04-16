import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from "react-native-responsive-screen";
import React, { useState } from "react";
import { Button, makeStyles, Text } from "@rneui/themed";
import { View } from "react-native";
import { sharedStyles } from "../../utils/styles";
import { sharedTextStyles } from "../../utils/textStyles";
import DatePicker from "react-native-date-picker";

export function DateAndTime() {
  var textStyles: any = sharedTextStyles();
  const style = styles();
  const shared: any = sharedStyles();

  const [startDate, setStartDate] = useState(null);
  const [endDate, setEndDate] = useState(null);
  const [endTime, setEndTime] = useState(new Date());
  const [startTime, setStartTime] = useState(new Date());

  const [openStartDate, setOpenStartDate] = useState(false);
  const [openEndDate, setOpenEndDate] = useState(false);
  const [openStartTime, setOpenStartTime] = useState(false);
  const [openEndTime, setOpenEndTime] = useState(false);

  const options = {
    month: "short",
    day: "numeric",
    year: "numeric",
  };

  const DateButton = () => {
    return (
      <Button
        buttonStyle={style.button}
        titleStyle={[textStyles.blackMediumLight, { textAlign: "left" }]}
        titleProps={{ numberOfLines: 2 }}
        title={
          (startDate
            ? (startDate as Date).toLocaleDateString("en-US", options)
            : "Start") +
          " - " +
          (endDate
            ? (endDate as Date).toLocaleDateString("en-US", options)
            : "End")
        }
        onPress={() => setOpenStartDate(true)}
      />
    );
  };

  const DateSelector = () => {
    return (
      <>
        <DatePicker
          modal
          mode="date"
          title="Start date"
          open={openStartDate}
          date={startDate || new Date()}
          onConfirm={(date) => {
            setOpenStartDate(false);
            setStartDate(date);
            setOpenEndDate(true);
          }}
          onCancel={() => {
            setOpenStartDate(false);
          }}
        />
        <DatePicker
          modal
          title="End date"
          open={openEndDate}
          date={endDate || new Date()}
          mode="date"
          onConfirm={(date) => {
            setOpenEndDate(false);
            setEndDate(date);
          }}
          onCancel={() => {
            setOpenEndDate(false);
          }}
        />
      </>
    );
  };

  return (
    <View style={style.container}>
      <Text>Pickup Date</Text>
      <DateButton />
      <DateSelector />
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
  seeMoreButton: {
    color: "blue",
    marginTop: 5,
    alignSelf: "flex-end",
  },

  button: {
    paddingVertical: 8,
    borderRadius: 15,
    borderWidth: 1,
    justifyContent: "flex-start",
    backgroundColor: theme.colors.background,
    paddingHorizontal: 15,
    marginTop: 12,
  },
}));
