import { View, StyleSheet, Image, StatusBar } from "react-native";
import React from "react";
import ButtonComponent from "../components/Button";
import { COLORS } from "../constants";
import { Feather } from "@expo/vector-icons";
import { AntDesign } from "@expo/vector-icons";

const NFTImage = ({ image, imageStyles, Love, arrow, pressHandler }) => {
  return (
    <View style={styles.container}>
      <Image source={image} style={imageStyles} />
      {Love && (
        <ButtonComponent
          buttonStyles={styles.heartButton}
          Icon={<AntDesign name="heart" size={20} color={COLORS.second} />}
        />
      )}
      {arrow && (
        <ButtonComponent
          buttonStyles={styles.arrowButton}
          Icon={<Feather name="arrow-left" size={20} color={COLORS.second} />}
          pressHandler={pressHandler && pressHandler}
        />
      )}
    </View>
  );
};

export default NFTImage;
const styles = StyleSheet.create({
  container: {
    width: "100%",
    position: "relative",
  },
  heartButton: {
    position: "absolute",
    top: StatusBar.currentHeight + 10,
    right: 10,
    backgroundColor: COLORS.white,
    padding: 10,
    borderRadius: 40,
  },
  arrowButton: {
    position: "absolute",
    top: StatusBar.currentHeight + 10,
    left: 10,
    backgroundColor: COLORS.white,
    padding: 10,
    borderRadius: 40,
  },
});
