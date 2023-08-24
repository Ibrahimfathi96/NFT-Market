import { View, Text, StyleSheet } from "react-native";
import React from "react";
import { COLORS, FONTS, SIZES } from "../constants";
import { AntDesign, Feather } from "@expo/vector-icons";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import ButtonComponent from "./Button";
const NFTInfo = ({ comments, views, price, love }) => {
  return (
    <View style={styles.container}>
      <View style={styles.wrapper}>
        <Feather name="eye" size={20} color="white" />
        <Text style={styles.text}>{views}</Text>
      </View>
      <View style={styles.wrapper}>
        <MaterialCommunityIcons
          name="comment-text-outline"
          size={18}
          color={COLORS.white}
        />
        <Text style={styles.text}>{comments}</Text>
      </View>
      <View style={styles.wrapper}>
        <MaterialCommunityIcons
          name="ethereum"
          size={20}
          color={COLORS.white}
        />
        <Text style={styles.text}>{views}</Text>
      </View>
      {love && (
        <View>
          <ButtonComponent
            Icon={<AntDesign name="heart" size={20} color={COLORS.second} />}
            buttonStyles={styles.heartButton}
          />
        </View>
      )}
    </View>
  );
};

export default NFTInfo;
const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    justifyContent: "space-around",
    alignItems: "center",
  },
  wrapper: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: COLORS.second,
    width: 90,
    borderRadius: SIZES.xLarge,
    paddingVertical: 3,
    gap: 4,
  },
  text: {
    fontFamily: FONTS.medium,
    fontSize: SIZES.medium,
    color: COLORS.white,
  },
  heartButton: {
    backgroundColor: COLORS.bg,
    padding: 6,
    borderRadius: 20,
    borderWidth: 1,
    borderColor: COLORS.second,
  },
});
