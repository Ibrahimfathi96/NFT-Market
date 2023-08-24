import { View, Text, StyleSheet, Image, TextInput } from "react-native";
import React from "react";
import { COLORS, FONTS, SIZES } from "../constants";
import avatar from "../assets/images/avatars/avatar02.jpg";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { MaterialIcons } from "@expo/vector-icons";
const HomeHeader = ({ searchHandler }) => {
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <View>
          <Image source={avatar} resizeMode="contain" style={styles.image} />
        </View>
        <View>
          <View style={styles.userRow}>
            <Text style={styles.userText}>Ibrahim Fathi</Text>
            <MaterialCommunityIcons
              name="check-decagram"
              size={24}
              color="white"
            />
          </View>
          <View>
            <Text style={{ color: COLORS.white }}>Creator</Text>
          </View>
        </View>
      </View>
      <View style={styles.search}>
        <View style={styles.searchContainer}>
          <MaterialIcons name="search" size={24} color={COLORS.white} />
          <TextInput
            placeholder="Search by NFT name"
            placeholderTextColor={COLORS.white}
            style={styles.textInput}
            onChangeText={searchHandler}
          />
        </View>
      </View>
    </View>
  );
};

export default HomeHeader;
const styles = StyleSheet.create({
  container: {
    padding: SIZES.small,
  },
  header: {
    flexDirection: "row",
    alignItems: "center",
    gap: 16,
    paddingHorizontal: 10,
  },
  userText: {
    color: COLORS.white,
    fontFamily: FONTS.semiBold,
    fontSize: SIZES.xLarge,
  },
  searchContainer: {
    width: "100%",
    borderRadius: SIZES.small,
    backgroundColor: COLORS.cardBg,
    flexDirection: "row",
    alignItems: "center",
    paddingVertical: 8,
    paddingHorizontal: 10,
    marginVertical: 10,
  },
  image: {
    width: 44,
    height: 44,
    borderRadius: 30,
  },
  userRow: {
    flexDirection: "row",
    alignItems: "center",
    gap: 8,
  },
  search: {
    marginTop: SIZES.small,
    paddingHorizontal: 10,
  },
  textInput: {
    flex: 1,
    color: COLORS.white,
  },
});
