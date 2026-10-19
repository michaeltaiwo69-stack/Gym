import { StatusBar } from "expo-status-bar";
import { Linking, useColorScheme } from "react-native";
import { SafeAreaProvider, SafeAreaView } from "react-native-safe-area-context";
import { WebView } from "react-native-webview";
import html from "./gymHtml";

// A stable origin so the page's localStorage (the workout log) persists between launches.
const BASE_URL = "https://replab.app/";

function openExternally(url) {
  Linking.openURL(url).catch(() => {});
}

export default function App() {
  const dark = useColorScheme() === "dark";
  const bg = dark ? "#0f1113" : "#eceff2";

  return (
    <SafeAreaProvider>
      <SafeAreaView style={{ flex: 1, backgroundColor: bg }} edges={["top", "left", "right"]}>
        <StatusBar style={dark ? "light" : "dark"} />
        <WebView
          originWhitelist={["*"]}
          source={{ html, baseUrl: BASE_URL }}
          style={{ flex: 1, backgroundColor: bg }}
          domStorageEnabled
          javaScriptEnabled
          setSupportMultipleWindows={false}
          forceDarkOn={dark}
          onShouldStartLoadWithRequest={(req) => {
            const { url } = req;
            if (url.startsWith(BASE_URL) || url.startsWith("about:") || url.startsWith("data:")) return true;
            // Research links (PubMed) open in the phone's browser instead of replacing the app.
            if (/^https?:/.test(url) && req.navigationType === "click") {
              openExternally(url);
              return false;
            }
            return true;
          }}
          onOpenWindow={(e) => openExternally(e.nativeEvent.targetUrl)}
        />
      </SafeAreaView>
    </SafeAreaProvider>
  );
}
