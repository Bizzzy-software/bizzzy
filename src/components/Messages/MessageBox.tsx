import { View, TouchableOpacity } from "react-native";
import { makeStyles, Text, Image, Badge } from "@rneui/themed";
import { sharedTextStyles } from "../../utils/textStyles";
import { sharedStyles } from "../../utils/styles";
import { Message } from "../../utils/messageData";
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from "react-native-responsive-screen";

interface MessageBoxProps {
  message: Message;
  onPress?: () => void;
}

export function MessageBox({ message, onPress }: MessageBoxProps) {
  const style = styles();
  const textStyles: any = sharedTextStyles();
  const shared: any = sharedStyles();

  return (
    <TouchableOpacity style={style.messageContainer} onPress={onPress}>
      <View style={style.imageContainer}>
        <Image source={message.senderImage} style={style.cardImage} />
        {message.isOnline && <View style={style.onlineIndicator} />}
      </View>
      <View style={style.messageContentContainer}>
        <View style={style.nameAndDateContainer}>
          <Text style={[textStyles.blackMediumBold, { fontSize: 16 }]}>
            {message.senderName}
          </Text>
          <Text style={textStyles.blackSmallSemiBold}>{message.timestamp}</Text>
        </View>
        <View style={style.messageAndBadgeContainer}>
          <Text
            style={[
              textStyles.blackSmallSemiBold,
              {
                color: shared.greyOutline.color,
                flex: 1,
                marginRight: message.unreadCount ? 10 : 0,
              },
            ]}
            numberOfLines={1}
          >
            {message.lastMessage}
          </Text>
          {(message.unreadCount || 0) > 0 && (
            <Badge
              value={message.unreadCount || 0}
              status="primary"
              containerStyle={style.badgeContainer}
            />
          )}
        </View>
      </View>
    </TouchableOpacity>
  );
}

const styles = makeStyles((theme) => ({
  messageContainer: {
    flexDirection: "row",
    paddingHorizontal: wp(5),
    paddingVertical: wp(3),
    backgroundColor: theme.colors.white,
    borderRadius: 5,
    marginTop: wp(5),
    gap: wp(5),
  },
  imageContainer: {
    position: "relative",
  },
  cardImage: {
    width: 60,
    height: 60,
    borderRadius: 200,
  },
  onlineIndicator: {
    position: "absolute",
    bottom: 2,
    right: 2,
    width: 16,
    height: 16,
    borderRadius: 8,
    backgroundColor: "#4CAF50",
    borderWidth: 2,
    borderColor: theme.colors.white,
  },
  nameAndDateContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    width: wp(60),
    alignItems: "center",
  },
  messageContentContainer: {
    flexDirection: "column",
    justifyContent: "space-between",
    marginVertical: 5,
    flex: 1,
  },
  messageAndBadgeContainer: {
    flexDirection: "row",
    alignItems: "center",
    marginTop: 5,
  },
  badgeContainer: {
    alignSelf: "flex-start",
  },
}));
