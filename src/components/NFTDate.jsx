import { View, Text, StyleSheet } from "react-native";
import React from "react";
import { COLORS, FONTS, SIZES } from "../constants";

const NFTDate = ({ date }) => {
  return (
    <View>
      <Text style={styles.textDate}>{date}</Text>
    </View>
  );
};

export default NFTDate;
const styles = StyleSheet.create({
  textDate: {
    fontFamily: FONTS.semiBold,
    fontSize: SIZES.medium,
    color: COLORS.gray,
  },
});
