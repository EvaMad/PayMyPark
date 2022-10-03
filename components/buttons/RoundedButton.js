
import React, { Component } from "react";
import propTypes from "prop-types";
import colors from "vuetify/lib/util/colors";
import { Text, View, TouchableHighlight, StyleSheet, ImageComponent} from "react-native";

export default class RoundedButton extends Component {
    render() {
        const { text, icon, textColor, backgroundColor} = this.props;
        return (
            <TouchableHighlight style={[{ backgroundColor }, styles.wrapper]}>
            <Text style={[{ textColor }, styles.buttonText]}>{text}</Text>
          </TouchableHighlight>
          );
        }
      }
      RoundedButton.propTypes = {
        text: propTypes.string.isRequired,
        textColor: propTypes.string,
        backgroundColor: propTypes.string
      };
      const styles = StyleSheet.create({
        wrapper: {
            padding: 15,
            display: "flex",
            borderRadius: 40,
            borderWidth: 1,
            borderColor: colors.white,
            marginBottom: 15,
            alignItems: "center"
        },
        buttonText: {
          fontSize: 16,
          width: "100%",
          textAlign: "center"
        }
      });