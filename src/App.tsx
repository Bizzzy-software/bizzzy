import { Assets as NavigationAssets } from "@react-navigation/elements";
import { Asset } from "expo-asset";
import * as SplashScreen from "expo-splash-screen";
import * as React from "react";
import { Navigation } from "./navigation";
import { ThemeProvider } from "@rneui/themed";
import { theme } from "./utils/theme";
import { GestureHandlerRootView } from "react-native-gesture-handler";

Asset.loadAsync([
  ...NavigationAssets,
  require("./assets/bottom tab nav/home.png"),
  require("./assets/bottom tab nav/activity.png"),
  require("./assets/bottom tab nav/message.png"),
  require("./assets/bottom tab nav/user.png"),
]);

SplashScreen.preventAutoHideAsync();

export function App() {
  return (
    <ThemeProvider theme={theme}>
      <GestureHandlerRootView style={{ flex: 1 }}>
        <Navigation
          linking={{
            enabled: "auto",
            prefixes: [
              // Change the scheme to match your app's scheme defined in app.json
              "helloworld://",
            ],
          }}
          onReady={() => {
            SplashScreen.hideAsync();
          }}
        />
      </GestureHandlerRootView>
    </ThemeProvider>
  );
}
