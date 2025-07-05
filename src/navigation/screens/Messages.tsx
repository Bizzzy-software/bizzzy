import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from "react-native-responsive-screen";
import { View, FlatList, Alert } from "react-native";
import { makeStyles, Text, Image } from "@rneui/themed";
import SearchInput from "../../components/Home/SearchInput";
import { sharedTextStyles } from "../../utils/textStyles";
import { sharedStyles } from "../../utils/styles";
import { MessageBox } from "../../components/Messages/MessageBox";
import { mockMessages, Message } from "../../utils/messageData";
import { useState, useMemo } from "react";

export function Messages() {
  const style = styles();
  const textStyles: any = sharedTextStyles();
  const shared: any = sharedStyles();
  const [searchQuery, setSearchQuery] = useState("");

  const filteredMessages = useMemo(() => {
    if (!searchQuery.trim()) {
      return mockMessages;
    }

    return mockMessages.filter(
      (message) =>
        message.senderName.toLowerCase().includes(searchQuery.toLowerCase()) ||
        message.lastMessage.toLowerCase().includes(searchQuery.toLowerCase())
    );
  }, [searchQuery]);

  const handleMessagePress = (message: Message) => {
    Alert.alert("Message", `Opening conversation with ${message.senderName}`);
    // TODO: Navigate to individual chat screen
  };

  const renderMessage = ({ item }: { item: Message }) => (
    <MessageBox message={item} onPress={() => handleMessagePress(item)} />
  );

  const renderEmptyList = () => (
    <View style={style.emptyContainer}>
      <Text style={[textStyles.blackMediumBold, { textAlign: "center" }]}>
        {searchQuery ? "No messages found" : "No messages yet"}
      </Text>
      <Text
        style={[
          textStyles.blackSmallSemiBold,
          { textAlign: "center", color: shared.greyOutline.color },
        ]}
      >
        {searchQuery
          ? "Try adjusting your search terms"
          : "Start a conversation to see messages here"}
      </Text>
    </View>
  );

  const renderHeader = () => (
    <SearchInput
      width={wp(90)}
      title="Search Inbox"
      value={searchQuery}
      onChangeText={setSearchQuery}
    />
  );

  return (
    <View style={style.container}>
      <FlatList
        data={filteredMessages}
        renderItem={renderMessage}
        keyExtractor={(item) => item.id}
        showsVerticalScrollIndicator={false}
        contentContainerStyle={style.listContainer}
        ListHeaderComponent={renderHeader}
        ListEmptyComponent={renderEmptyList}
      />
    </View>
  );
}

const styles = makeStyles((theme) => ({
  container: {
    flex: 1,
    width: wp(100),
    backgroundColor: theme.colors.background,
  },
  listContainer: {
    paddingHorizontal: wp(5),
    paddingTop: wp(5),
    paddingBottom: wp(5),
  },
  emptyContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    paddingVertical: wp(20),
    minHeight: hp(60),
  },
}));
