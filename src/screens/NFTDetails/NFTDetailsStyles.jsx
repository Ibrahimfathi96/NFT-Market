import { StyleSheet } from "react-native";
import { COLORS, FONTS, SIZES } from "../../constants";

const NFTDetailsStyles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.bg,
  },
  imageStyles: {
    width: "100%",
    height: 400,
    borderRadius: 20,
  },
  buttonContainer: {
    width: "100%",
    position: "absolute",
    bottom: SIZES.small,
    justifyContent: "center",
    alignItems: "center",
    zIndex: 1,
  },
  wrapper: {
    backgroundColor: COLORS.cardBg,
    width: 300,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    padding: 20,
    borderRadius: 20,
  },
  text: {
    fontSize: SIZES.medium,
    fontFamily: FONTS.semiBold,
    color: COLORS.white,
  },
  buttonContent: {
    flexDirection: "row",
    alignItems: "center",
    gap: 2,
    padding: SIZES.small - 4,
  },
  button: {
    backgroundColor: COLORS.second,
    padding: 16,
    width: 150,
    borderRadius: 20,
  },
  textButton: {
    color: COLORS.white,
    textAlign: "center",
    fontFamily: FONTS.semiBold,
    fontSize: 16,
  },
});

export default NFTDetailsStyles;
