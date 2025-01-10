import { TouchableOpacity } from "react-native";
import { sharedStyles } from "../../utils/styles";
import filter from "../../assets/filter.png";
import { Image } from "@rneui/themed";
import { makeStyles } from "@rneui/themed";

const Filter = () => {
  var shared: any = sharedStyles();

  return (
    <TouchableOpacity style={styles().container}>
      <Image
        source={filter}
        style={{
          width: 24,
          height: 20,
          margin: 10,
          resizeMode: "contain",
        }}
      />
    </TouchableOpacity>
  );
};

const styles = makeStyles((theme) => ({
  container: {
    height: 45,
    backgroundColor: theme.colors.white,
    borderRadius: 15,
    justifyContent: "center",
  },
}));

export default Filter;
