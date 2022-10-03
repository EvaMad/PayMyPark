import React, { Component } from "react";
import colors from "vuetify/lib/util/colors";
import RoundedButton from "../components/buttons/RoundedButton";
import { StyleSheet, Text, View, Image, Icon, TouchableHighlight } from "react-native";

export default class LoggedOut extends Component {
  render() {
    return (
      <View style={styles.wrapper}> 
        <View style={styles.welcomeWrapper}>
          <Image
            style={styles.logo}
            source={require("../assets/logo.png")}
          />
          <Text style={styles.welcomeText}>
            Welcome to PayMyPark application !
          </Text>
          <RoundedButton
             text="Connect to Facebook" 
             textColor={colors.green01}
             backgroundColor= '#8fc1e3' 
             icon={<Icon name="facebook" size={20} />}
          />
          <RoundedButton text="Create Account" textColor={colors.white} />
          <TouchableHighlight
            style={styles.moreOptionsButton}
            onPress={this.onMoreOptionsPress}
          >
            <Text style={styles.moreOptionsButtonText}>More options</Text>
          </TouchableHighlight>
          <View style={styles.termsAndConditions}>
            <Text style={styles.termsText}>
              By tapping Continue, Create Account or More
            </Text>
            <Text style={styles.termsText}>{" options,"}</Text>
            <Text style={styles.termsText}>{"I agree to Airbnb's "}</Text>
            <TouchableHighlight style={styles.linkButton}>
              <Text style={styles.termsText}>Terms of Service</Text>
            </TouchableHighlight>
            <Text style={styles.termsText}>,</Text>
            <TouchableHighlight style={styles.linkButton}>
              <Text style={styles.termsText}>Payments Terms of Service</Text>
            </TouchableHighlight>
            <Text style={styles.termsText}>,</Text>
            <TouchableHighlight style={styles.linkButton}>
              <Text style={styles.termsText}>Privacy Policy</Text>
            </TouchableHighlight>
            <Text style={styles.termsText}>, and</Text>
            <TouchableHighlight style={styles.linkButton}>
              <Text style={styles.termsText}>Nondiscrimination Policy</Text>
            </TouchableHighlight>
            <Text style={styles.termsText}>.</Text>
          </View>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  wrapper: {
    flex: 2,
    display: "flex",
    backgroundColor: '#8fc1e3' 
  },
  welcomeWrapper: {
    flex: 2,
    display: "flex",
    marginTop: 40,
    padding: 10
  },
  logo: {
    width: 400,
    height: 100,
    marginTop: 100,
    marginBottom: 80
  },
  welcomeText: {
    fontSize: 20,
    color: '#000000',
    fontWeight: "300",
    marginBottom: 40
  },
  moreOptionsButton: {
    marginTop: 50,
  },
  moreOptionsButtonText: {
    color: colors.white,
    fontSize: 16,
  },
  termsAndConditions: {
    flexWrap: 'wrap',
    alignItems: 'flex-start',
    flexDirection: 'row',
    marginTop: 30,
  },
  termsText: {
    color: colors.white,
    fontSize: 16,
    fontWeight: '600',
  },
  linkButton: {
    borderBottomWidth: 1,
    borderBottomColor: colors.white,
  },
});