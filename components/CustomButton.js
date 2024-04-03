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
    backgroundColor: "pink",
    borderRadius: 24,
    height: 65,
    width: 400,
    marginBottom: 20,
    marginLeft: 15,
    marginRight: 20,
  },

  primaryTitle: {
    color: "white",
    fontSize: 30,
    fontWeight: "bold",
    justifyContent: "center",
  },
  secondaryButton: {
    backgroundColor: "#E4CCFF",
    borderRadius: 24,
    height: 65,
    width: 400,
    marginBottom: 20,
    marginLeft: 15,
    marginRight: 20,
  },
  secondaryTitle: {
    color: "#1E1E1E",
    fontSize: 30,
    fontWeight: "bold",
  },
};
