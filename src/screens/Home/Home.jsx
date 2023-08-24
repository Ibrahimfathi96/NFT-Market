import {
  View,
  SafeAreaView,
  Text,
  Animated,
  TouchableWithoutFeedback,
  Keyboard,
} from "react-native";
import React, { useEffect, useRef } from "react";
import styles from "./HomeStyles";
import NFTCard from "../../components/NFTCard";
import { useState } from "react";
import { DATA } from "../../constants";
import HomeHeader from "../../components/HomeHeader";
import { FlashList } from "@shopify/flash-list";

const Home = () => {
  const [NFTData, setNFTData] = useState(DATA);
  const moveSearchAnimation = useRef(new Animated.Value(0)).current;

  /**
   * @desc search for nfts data by name
   * @param value : input Value
   */
  const searchHandler = (value) => {
    if (value) {
      const filteredData = DATA.filter((nft) =>
        nft.name.toLowerCase().includes(value.toLowerCase())
      );
      setNFTData(filteredData);
    } else {
      setNFTData(DATA);
    }
  };

  const NotFoundNFT = () => {
    return (
      <View style={styles.notFoundNFT}>
        <Text style={styles.notFoundText}>OOppps....!</Text>
        <Text style={styles.notFoundText}>There is no NFT with this name</Text>
      </View>
    );
  };

  searchAnimationHandler = () => {
    Animated.spring(moveSearchAnimation, {
      toValue: 1,
      friction: 4,
      useNativeDriver: true,
    }).start();
  };

  useEffect(() => {
    searchAnimationHandler();
  }, [searchAnimationHandler]);

  return (
    <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
      <SafeAreaView style={styles.container}>
        <View style={{ flex: 1 }}>
          <Animated.View
            style={{
              top: -100,
              transform: [
                {
                  translateY: moveSearchAnimation.interpolate({
                    inputRange: [0, 1],
                    outputRange: [0, 100],
                  }),
                },
              ],
            }}
          >
            <HomeHeader searchHandler={searchHandler} />
          </Animated.View>
          {!NFTData.length ? (
            <NotFoundNFT />
          ) : (
            <FlashList
              estimatedItemSize={200}
              data={NFTData}
              renderItem={({ item }) => <NFTCard NFTData={item} />}
              keyExtractor={(item) => item.id}
            />
          )}
        </View>
      </SafeAreaView>
    </TouchableWithoutFeedback>
  );
};

export default Home;
