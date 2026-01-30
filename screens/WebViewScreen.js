import React, { useLayoutEffect } from "react";
import { ActivityIndicator, StyleSheet } from "react-native";
import { WebView } from "react-native-webview";
import { SafeAreaView } from "react-native-safe-area-context";

export default function WebViewScreen({ route, navigation }) {
  const { title, url } = route.params;

  useLayoutEffect(() => {
    navigation.setOptions({ 
      title,
      headerTitleStyle: styles.headerTitle,
      headerStyle: styles.headerStyle,
      headerTintColor: "#5C371C",
      headerTitleAlign: "center",
    });
  }, [navigation, title]);

  return (
    <SafeAreaView
      edges={["left", "right", "bottom"]}
      style={{ flex: 1, backgroundColor: "#FFFFFF" }}
    >
      <WebView
        source={{ uri: url }}
        startInLoadingState
        renderLoading={() => (
          <ActivityIndicator
            size="large"
            color="#D89414"
            style={styles.loader}
          />
        )}
      />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  loader: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  headerTitle: {
    fontSize: 18,
    fontWeight: "600",
    color: "#5C371C",
  },
  headerStyle: {
    backgroundColor: "#FFFFFF",
    borderBottomWidth: 1,
    borderBottomColor: "rgba(216, 148, 20, 0.2)",
    elevation: 0,
    shadowOpacity: 0,
  },
});