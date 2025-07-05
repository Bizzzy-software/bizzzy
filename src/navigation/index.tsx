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
import add from "../assets/bottom tab nav/add.png";
import { Home } from "./screens/Home";
import { Profile } from "./screens/Profile";
import { Settings } from "./screens/Settings";
import { NotFound } from "./screens/NotFound";
import { Messages } from "./screens/Messages";
import { Activities } from "./screens/Activities";
import { AllCategories } from "./screens/AllCategories";
import { HandyList } from "./screens/HandyList";
import { HandyUserProfile } from "./screens/HandyUserProfile";
import { BookJob } from "./screens/BookJob";
import { SignUp } from "./screens/SignUp";
import { Login } from "./screens/Login";

const HomeTabs = createBottomTabNavigator({
  screens: {
    Home: {
      screen: Home,
      options: createTabOptions(home),
    },
    Activities: {
      screen: Activities,
      options: {
        ...createTabOptions(activity),
        headerShown: true,
        title: "My Activity",
        headerTitleStyle: {
          fontWeight: "bold",
          fontSize: 20,
        },
        headerStyle: {
          backgroundColor: "#fff",
          borderBottomWidth: 0,
        },
        headerShadowVisible: false,
      },
    },
    BookJob: {
      screen: BookJob,
      options: {
        ...createTabOptions(add),
        headerShown: true,
        title: "Booking",
        headerTitleStyle: {
          fontWeight: "bold",
          fontSize: 20,
        },
        headerStyle: {
          backgroundColor: "#fff",
          borderBottomWidth: 0,
        },
        headerShadowVisible: false,
      },
    },
    Messages: {
      screen: Messages,
      options: {
        ...createTabOptions(message),
        headerShown: true,
        title: "Messages",
        headerTitleStyle: {
          fontWeight: "bold",
          fontSize: 20,
        },
        headerStyle: {
          backgroundColor: "#fff",
          borderBottomWidth: 0,
        },
        headerShadowVisible: false,
      },
    },
    Profile: {
      screen: Profile,
      options: createTabOptions(user),
    },
  },
});

// Helper function to generate tab options
function createTabOptions(
  iconSource: ImageSourcePropType | undefined,
  width: number = 24,
  height: number = 20
) {
  return {
    tabBarIcon: ({ color, size }: { color: string; size: number }) => (
      <Image
        source={iconSource}
        tintColor={color}
        style={{
          width: width,
          height: height,
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
    // Login: {
    //   screen: Login,
    //   options: {
    //     headerShown: false,
    //   },
    // },
    // SignUp: {
    //   screen: SignUp,
    //   options: {
    //     headerShown: false,
    //   },
    // },
    HomeTabs: {
      screen: HomeTabs,
      options: {
        title: "Home",
        headerShown: false,
      },
    },
    Home: {
      screen: Home,
    },
    BookJob: {
      screen: BookJob,
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
    HandyList: {
      screen: HandyList,
      options: {
        title: "Roofing",
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
    HandyUserProfile: {
      screen: HandyUserProfile,
      options: {
        title: "John Doe",
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
