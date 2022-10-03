import React, { Component } from "react";
import colors from "vuetify/lib/util/colors";
import { View, Text, StyleSheet, TextInput, TouchableOpacity } from "react-native";
class InputField extends Component {
  constructor(props) {
    super(props);
    this.state = {
      secureInput: !(props.inputType === "text" || props.inputType === "email")
    };

    this.toggleShowPassword = this.toggleShowPassword.bind(this);
  }
  toggleShowPassword() {
    this.setState({ secureInput: !this.state.secureInput });
  }
  render() {
    const {
      labelText,
      labelTextSize,
      labelColor,
      textColor,
      onChangeText,
      borderBottomColor,
      inputType,
      customStyle,
    } = this.props;
    const color = labelColor || colors.white;
    const { secureInput, scaleCheckmarkValue } = this.state;
    const fontSize = labelTextSize || 14;
    const inputColor = textColor || colors.white;
    const keyboardType = inputType == "email" ? "email-address" : "default";
    const borderBottom = borderBottomColor || "transparent";
    return (
      <View style={[customStyle, styles.wrapper]}>
        <Text style={[{ color, fontSize }, styles.label]}>{labelText}</Text>
        {inputType === "password" ? (
          <TouchableOpacity
            style={styles.showButton}
            onPress={this.toggleShowPassword}
          >
            <Text style={styles.showButtonText}>
              {secureInput ? "Show" : "Hide"}
            </Text>
          </TouchableOpacity>
        ) : null}
        <TextInput
          autoCorrect={false}
          style={[
            { color: inputColor, borderBottomColor: borderBottom },
            styles.inputFiled
          ]}
          secureTextEntry={secureInput}
          onChangeText={onChangeText}
          autoCapitalize="none"
          keyboardType={keyboardType}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  wrapper: {
    display: "flex",
  },
  label: { fontWeight: "700", marginBottom: 10 },
  inputFiled: {
    borderBottomWidth: 1,
    paddingTop: 3,
    paddingBottom: 7,
  },
  showButton: {
    position: "absolute",
    right: 0,
  },
  showButtonText: {
    color: colors.white,
    fontWeight: "700",
  },
});

export default InputField;
