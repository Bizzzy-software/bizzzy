import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from "react-native-responsive-screen";
import { Input, makeStyles } from "@rneui/themed";

const TextInput = ({ placeholderText }: { placeholderText: string }) => {
  return (
    <Input
      placeholder={placeholderText}
      containerStyle={styles().container}
      inputContainerStyle={styles().inputContainer}
      inputStyle={styles().input}
      placeholderTextColor="#6F7976"
    />
  );
};

const styles = makeStyles((theme) => ({
  container: {
    borderColor: theme.colors.greyOutline,
    borderWidth: 1,
    borderRadius: 20,
    width: wp(70),
    height: 45,
  },
  input: {
    color: "#6F7976",
    fontWeight: "300",
    paddingLeft: 10,
    margin: 0,
    fontSize: 16,
  },
  inputContainer: {
    borderBottomWidth: 0,
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    height: "100%",
  },
}));

export default TextInput;
