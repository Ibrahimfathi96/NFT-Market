import { StatusBar, StyleSheet } from "react-native";
import { COLORS, FONTS, SIZES } from "../../constants";

const HomeStyles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.bg,
    paddingTop: StatusBar.currentHeight + 10,
  },
  notFoundNFT: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    paddingVertical: SIZES.xLarge,
  },
  notFoundText: {
    color: COLORS.white,
    fontFamily: FONTS.bold,
    fontSize: SIZES.xLarge,
  },
});
export default HomeStyles;
