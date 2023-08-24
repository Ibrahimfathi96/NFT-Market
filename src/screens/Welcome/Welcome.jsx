import { View, Text, Image, Animated, SafeAreaView } from "react-native";
import { SIZES } from "../../constants";
import React, { useEffect, useRef } from "react";
import nft08 from "../../assets/images/nft08.jpg";
import nft06 from "../../assets/images/nft06.jpg";
import nft04 from "../../assets/images/nft04.jpg";
import styles from "./WelcomeStyles";
import ButtonComponent from "../../components/Button";
import { useNavigation } from "@react-navigation/native";
const Welcome = () => {
  const navigation = useNavigation();
  const duration = 1000;
  const delay = duration + 300;
  const fadeImagesAnimation = useRef(new Animated.Value(0)).current;
  const moveImagesAnimation = useRef(
    new Animated.ValueXY({ x: 100, y: 100 })
  ).current;
  const fadeTextAnimation = useRef(new Animated.Value(0)).current;
  const moveButtonAnimation = useRef(new Animated.Value(1)).current;

  /**
   * go to home page
   */
  const pressHandler = () => {
    navigation.navigate("Home");
  };

  /**
   * @description Images Animations Handler Function
   */
  const imagesAnimationHandler = () => {
    Animated.sequence([
      Animated.timing(fadeImagesAnimation, {
        toValue: 1,
        duration,
        useNativeDriver: true,
      }),
      Animated.spring(moveImagesAnimation, {
        toValue: { x: 0, y: 0 },
        duration,
        useNativeDriver: true,
      }),
    ]).start();
  };

  /**
   * @description Text Animation Handler Function
   */
  const textAnimationHandler = () => {
    Animated.timing(fadeTextAnimation, {
      toValue: 1,
      duration,
      delay,
      useNativeDriver: true,
    }).start();
  };

  /**
   * @description Button Animation Handler Function
   */
  const buttonAnimationHandler = () => {
    Animated.spring(moveButtonAnimation, {
      toValue: 0,
      friction: 4,
      delay,
      useNativeDriver: true,
    }).start();
  };

  useEffect(() => {
    imagesAnimationHandler();
    textAnimationHandler();
    buttonAnimationHandler();
  }, [imagesAnimationHandler, textAnimationHandler, buttonAnimationHandler]);

  return (
    <SafeAreaView style={styles.container}>
      <Animated.View
        style={[
          styles.imageContainer,
          {
            opacity: fadeImagesAnimation,
            transform: moveImagesAnimation.getTranslateTransform(),
          },
        ]}
      >
        <View style={styles.imageCard}>
          <Image style={styles.image} source={nft06} />
        </View>
        <View style={[styles.imageCard, { top: SIZES.medium + 17 }]}>
          <Image style={styles.image} source={nft08} />
        </View>
        <View style={styles.imageCard}>
          <Image style={styles.image} source={nft04} />
        </View>
      </Animated.View>
      <Animated.View
        style={[
          styles.textContainer,
          {
            opacity: fadeTextAnimation,
          },
        ]}
      >
        <Text style={styles.mainText}>Find, Collect & Sell Amazing NFTs</Text>
        <Text style={styles.subText}>
          Explore the top collection of NFTs, buy & sell your NFTs as well
        </Text>
      </Animated.View>
      <Animated.View
        style={[
          styles.buttonContainer,
          {
            transform: [
              {
                translateY: moveButtonAnimation.interpolate({
                  inputRange: [0, 1],
                  outputRange: [0, 200],
                }),
              },
            ],
          },
        ]}
      >
        <ButtonComponent
          textTitle="Get Started"
          pressHandler={pressHandler}
          textStyles={styles.textButton}
          buttonStyles={styles.button}
        ></ButtonComponent>
      </Animated.View>
    </SafeAreaView>
  );
};

export default Welcome;
