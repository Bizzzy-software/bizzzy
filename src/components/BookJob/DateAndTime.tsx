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
  const [endTime, setEndTime] = useState(null);
  const [startTime, setStartTime] = useState(null);

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
        titleStyle={[textStyles.blackMediumLight, { textAlign: "right" }]}
        titleProps={{ numberOfLines: 2 }}
        title={
          (startDate
            ? (startDate as Date).toLocaleDateString("en-US", options)
            : "Start date") +
          " - " +
          (endDate
            ? (endDate as Date).toLocaleDateString("en-US", options)
            : "End date")
        }
        onPress={() => setOpenStartDate(true)}
      />
    );
  };

  const TimeButton = () => {
    return (
      <Button
        buttonStyle={style.button}
        titleStyle={[textStyles.blackMediumLight, { textAlign: "center" }]}
        titleProps={{ numberOfLines: 2 }}
        title={
          (!startTime
            ? "Start time"
            : startTime.toLocaleTimeString([], {
                hour: "2-digit",
                minute: "2-digit",
                hour12: true,
              })) +
          " - " +
          `${startTime ? "\n" : ""}` +
          (!endTime
            ? "End time"
            : endTime.toLocaleTimeString([], {
                hour: "2-digit",
                minute: "2-digit",
                hour12: true,
              }))
        }
        onPress={() => setOpenStartTime(true)}
      />
    );
  };

  const DateSelector = () => {
    return (
      <>
        <Text>Pickup Date</Text>
        <DateButton />
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

  const TimeSelector = () => {
    return (
      <>
        <Text>Pickup Time</Text>
        <TimeButton />
        <DatePicker
          modal
          mode="time"
          title="Start time"
          open={openStartTime}
          date={startTime || new Date()}
          onConfirm={(time) => {
            setOpenStartTime(false);
            setStartTime(time);
            setOpenEndTime(true);
          }}
          onCancel={() => {
            setOpenStartDate(false);
          }}
        />
        <DatePicker
          modal
          title="End time"
          open={openEndTime}
          date={endTime || new Date()}
          mode="time"
          onConfirm={(time) => {
            setOpenEndTime(false);
            setEndTime(time);
          }}
          onCancel={() => {
            setOpenEndTime(false);
          }}
        />
      </>
    );
  };

  return (
    <View style={style.container}>
      <DateSelector />
      <TimeSelector />
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
