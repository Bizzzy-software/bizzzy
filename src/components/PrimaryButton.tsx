import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from "react-native-responsive-screen";
import { makeStyles, Button } from "@rneui/themed";
import { sharedStyles } from "../utils/styles";
import { sharedTextStyles } from "../utils/textStyles";
import { View } from "react-native";

const PrimaryButton = ({
  buttonTitle,
  buttonStyle,
  titleStyle,
  onPress,
}: {
  buttonTitle: string;
  buttonStyle?: any;
  titleStyle?: any;
  onPress?: () => void;
}) => {
  const style = styles();
  var shared: any = sharedStyles();
  var textStyles: any = sharedTextStyles();

  return (
    <View style={{ flex: 1 }}>
      <Button
        title={buttonTitle}
        buttonStyle={buttonStyle || style.buttonStyle}
        titleStyle={[
          titleStyle || textStyles.whiteMediumRegular,
          { fontSize: 16 },
        ]}
        containerStyle={{}}
        onPress={onPress}
      />
    </View>
  );
};

const styles = makeStyles((theme) => ({
  buttonStyle: {
    backgroundColor: theme.colors.primary,
    borderRadius: 20,
    padding: wp(2.5),
  },
}));

export default PrimaryButton;
