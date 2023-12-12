import React from "react";
import { Button } from "react-native-elements";

export const ButtonType = {
  PRIMARY: "primary",
  SECONDARY: "secondary",
};

export default function CustomButton({ title, type, onPress }) {
  const isPrimary = type === ButtonType.PRIMARY;
  const buttonStyle = isPrimary ? styles.primaryButton : styles.secondaryButton;
  const titleStyle = isPrimary ? styles.primaryTitle : styles.secondaryTitle;

  return (
    <Button
      title={title}
      onPress={onPress}
      buttonStyle={buttonStyle}
      titleStyle={titleStyle}
    />
  );
}

const styles = {
  primaryButton: {
    backgroundColor: "#9747FF",
    borderRadius: 24,
    height: 40,
    width: 150,
    marginRight: 20,
  },

  primaryTitle: {
    color: "#FFFFFF",
    fontSize: 20,
    fontWeight: "bold",
  },
  secondaryButton: {
    backgroundColor: "#E4CCFF",
    borderRadius: 24,
    height: 40,
    width: 150,
  },
  secondaryTitle: {
    color: "#1E1E1E",
    fontSize: 20,
    fontWeight: "bold",
  },
};
