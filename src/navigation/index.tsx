import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { HeaderButton, Text } from "@react-navigation/elements";
import {
  createStaticNavigation,
  StaticParamList,
} from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { Image, ImageSourcePropType } from "react-native";
import home from "../assets/bottom tab nav/home.png";
import activity from "../assets/bottom tab nav/activity.png";
import message from "../assets/bottom tab nav/message.png";
import user from "../assets/bottom tab nav/user.png";
import { Home } from "./screens/Home";
import { Profile } from "./screens/Profile";
import { Settings } from "./screens/Settings";
import { NotFound } from "./screens/NotFound";
import { Messages } from "./screens/Messages";
import { Activities } from "./screens/Activities";
import { sharedStyles } from "../utils/styles";
import { AllCategories } from "./screens/AllCategories";
const HomeTabs = createBottomTabNavigator({
  screens: {
    Home: {
      screen: Home,
      options: createTabOptions(home),
    },
    Activities: {
      screen: Activities,
      options: createTabOptions(activity),
    },
    Messages: {
      screen: Messages,
      options: createTabOptions(message),
    },
    Profile: {
      screen: Profile,
      options: createTabOptions(user),
    },
  },
});

// Helper function to generate tab options
function createTabOptions(iconSource: ImageSourcePropType | undefined) {
  return {
    tabBarIcon: ({ color, size }: { color: string; size: number }) => (
      <Image
        source={iconSource}
        tintColor={color}
        style={{
          width: 24,
          height: 20,
          resizeMode: "contain",
        }}
      />
    ),
    tabBarActiveTintColor: "#f28f55",
    tabBarInactiveTintColor: "#8A8D9F",
    tabBarShowLabel: false,
    headerShown: false,
  };
}

const RootStack = createNativeStackNavigator({
  screens: {
    HomeTabs: {
      screen: HomeTabs,
      options: {
        title: "Home",
        headerShown: false,
      },
    },
    Profile: {
      screen: Profile,
      linking: {
        path: ":user(@[a-zA-Z0-9-_]+)",
        parse: {
          user: (value) => value.replace(/^@/, ""),
        },
        stringify: {
          user: (value) => `@${value}`,
        },
      },
    },
    // Keep it, this is popup screen
    Settings: {
      screen: Settings,
      options: ({ navigation }) => ({
        presentation: "modal",
        headerRight: () => (
          <HeaderButton onPress={navigation.goBack}>
            <Text>Close</Text>
          </HeaderButton>
        ),
      }),
    },
    AllCategories: {
      screen: AllCategories,
      options: {
        title: "Category",
        headerBackButtonDisplayMode: "minimal",
        headerTintColor: "black",
        headerTitleStyle: {
          fontWeight: "bold",
          fontSize: 20,
        },
        headerStyle: {
          backgroundColor: "#fff",
          borderBottomWidth: 0,
        },
      },
    },
    NotFound: {
      screen: NotFound,
      options: {
        title: "404",
      },
      linking: {
        path: "*",
      },
    },
  },
  screenOptions: { headerShadowVisible: false, headerBackTitleVisible: false },
});

export const Navigation = createStaticNavigation(RootStack);

type RootStackParamList = StaticParamList<typeof RootStack>;

declare global {
  namespace ReactNavigation {
    interface RootParamList extends RootStackParamList {}
  }
}
