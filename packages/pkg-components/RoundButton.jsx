import * as React from "react";
import { StyleSheet, TouchableOpacity } from "react-native";

export function RoundButton(props) {
  const { disabled, children, ...touchableProps } = props;
  return (
    <TouchableOpacity
      style={[styles.base, disabled ? styles.disabled : null]}
      disabled={disabled}
      {...touchableProps}
    >
      {children}
    </TouchableOpacity>
  );
}
RoundButton.defaultProps = {
  disabled: false
};

const styles = StyleSheet.create({
  base: {
    paddingVertical: 8,
    paddingHorizontal: 16,
    backgroundColor: "red"
  },
  disabled: {
    opacity: 0.4
  }
});
