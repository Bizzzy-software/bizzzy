import { Assets as NavigationAssets } from "@react-navigation/elements";
import { Asset } from "expo-asset";
import * as SplashScreen from "expo-splash-screen";
import * as React from "react";
import { Navigation } from "./navigation";
import { ThemeProvider } from "@rneui/themed";
import { theme } from "./utils/theme";

Asset.loadAsync([
  ...NavigationAssets,
  require("./assets/home.png"),
  require("./assets/activity.png"),
  require("./assets/message.png"),
  require("./assets/user.png"),
]);

SplashScreen.preventAutoHideAsync();

export function App() {
  return (
    <ThemeProvider theme={theme}>
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
    </ThemeProvider>
  );
}
