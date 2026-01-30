import { Appearance } from "react-native";

const scheme = Appearance.getColorScheme();

export const colors = {
  background: scheme === "dark" ? "#0f172a" : "#f8fafc",
  card: scheme === "dark" ? "#020617" : "#ffffff",
  text: scheme === "dark" ? "#f8fafc" : "#020617",
  button: "#2563eb",
};
