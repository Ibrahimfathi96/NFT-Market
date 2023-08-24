import { View, Text, SafeAreaView, Animated } from "react-native";
import React from "react";
import NFTImage from "../../components/NFTImage";
import styles from "./NFTDetailsStyles";
import NFTAvatars from "../../components/NFTAvatars";
import NFTTitle from "../../components/NFTTitle";
import NFTInfo from "../../components/NFTInfo";
import NFTMoreInfo from "../../components/NFTMoreInfo";
import { COLORS, SIZES } from "../../constants";
import { FontAwesome } from "@expo/vector-icons";
import ButtonComponent from "../../components/Button";
import { useRef, useEffect } from "react";

const NFTDetails = ({ route, navigation }) => {
  const moveAnimation = useRef(new Animated.Value(0)).current;
  const fadeAnimation = useRef(new Animated.Value(0)).current;
  const { NFTData } = route.params;
  /**
   * @desc go back to home
   */
  const pressHandler = () => {
    navigation.navigate("Home");
  };

  const moveAnimationHandler = () => {
    Animated.spring(moveAnimation, {
      toValue: 1,
      friction: 6,
      tension: 80,
      useNativeDriver: true,
    }).start();
  };
  const fadeAnimationHandler = () => {
    Animated.timing(fadeAnimation, {
      toValue: 1,
      duration: 1000,
      delay: 300,
      useNativeDriver: true,
    }).start();
  };

  useEffect(() => {
    moveAnimationHandler(), fadeAnimationHandler();
  }, [moveAnimationHandler, fadeAnimationHandler]);

  return (
    <SafeAreaView style={styles.container}>
      <Animated.View
        style={{
          flex: 1,
          transform: [
            {
              translateY: moveAnimation.interpolate({
                inputRange: [0, 1],
                outputRange: [200, 0],
              }),
            },
          ],
        }}
      >
        <NFTImage
          image={NFTData.image}
          imageStyles={styles.imageStyles}
          Love
          arrow
          pressHandler={pressHandler}
        />
        <View style={{ paddingHorizontal: SIZES.xLarge }}>
          <View style={{ marginTop: -SIZES.xLarge }}>
            <NFTAvatars avatars={NFTData.avatars} />
          </View>
          <View style={{ marginVertical: SIZES.medium }}>
            <NFTTitle
              _name={NFTData.name}
              creator={NFTData.creator}
              date={NFTData.date}
            />
          </View>
          <View style={{ marginVertical: SIZES.medium }}>
            <NFTInfo
              price={NFTData.price}
              views={NFTData.views}
              comments={NFTData.comments}
            />
          </View>
          <View style={{ marginVertical: SIZES.medium }}>
            <NFTMoreInfo
              address={NFTData.address}
              tokenId={NFTData.tokenId}
              tokenSt={NFTData.tokenSt}
              blockchain={NFTData.blockchain}
            />
          </View>
        </View>
        <Animated.View
          style={[
            styles.buttonContainer,
            {
              opacity: fadeAnimation,
            },
          ]}
        >
          <View style={styles.wrapper}>
            <View>
              <Text style={styles.text}>Top Bid</Text>
              <View style={styles.buttonContent}>
                <FontAwesome name="dollar" size={16} color={COLORS.white} />
                <Text style={styles.text}>{NFTData.topBid}</Text>
              </View>
            </View>
            <ButtonComponent
              buttonStyles={styles.button}
              textTitle="Place a Bid"
              textStyles={styles.textButton}
            />
          </View>
        </Animated.View>
      </Animated.View>
    </SafeAreaView>
  );
};

export default NFTDetails;
