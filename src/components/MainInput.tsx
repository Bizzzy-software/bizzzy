import { makeStyles, Input, Text } from "@rneui/themed";
import { sharedStyles } from "../utils/styles";
import { sharedTextStyles } from "../utils/textStyles";

export function MainInput({ title }: { title: string }) {
  var shared: any = sharedStyles();
  const style = styles();
  const textStyles: any = sharedTextStyles();

  return (
    <Input
      placeholder={title}
      placeholderTextColor="#9E9E9E"
      containerStyle={style.containerStyle}
      inputContainerStyle={style.inputContainerStyle}
      inputStyle={style.inputStyle}
      errorStyle={{ height: 0 }}
    />
  );
}

const styles = makeStyles((theme) => ({
  inputContainerStyle: {
    borderBottomWidth: 0,
    backgroundColor: "#F5F6F8",
    borderRadius: 25,
    paddingHorizontal: 20,
    paddingVertical: 5,
  },
  containerStyle: {
    paddingHorizontal: 0,
    paddingVertical: 0,
    margin: 0,
  },
  inputStyle: {
    textAlignVertical: "center",
    padding: 0,
    margin: 0,
  },
}));
