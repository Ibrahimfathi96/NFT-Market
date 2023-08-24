import { Text, TouchableOpacity } from "react-native";
import React from "react";

const ButtonComponent = ({
  pressHandler,
  Icon,
  textStyles,
  textTitle,
  buttonStyles,
}) => {
  /**
   * @description we have two choices
   * (1): the button contains text.
   * (2): the button contains icon.
   * this function show content you need
   * @render Text or Icon
   */
  const RenderContentIconOrText = () => {
    if (!Icon) {
      return <Text style={textStyles}>{textTitle && textTitle}</Text>;
    } else {
      return Icon;
    }
  };
  return (
    <TouchableOpacity
      style={buttonStyles}
      onPress={pressHandler && pressHandler}
    >
      <RenderContentIconOrText />
    </TouchableOpacity>
  );
};

export default ButtonComponent;
