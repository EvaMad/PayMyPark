import React, { Component } from "react";
import colors from "vuetify/lib/util/colors"; 
import InputField from "../components/form/InputField";
import {
  View,
  Text,
  ScrollView,
  StyleSheet,
  KeyboardAvoidingView,
} from "react-native";
import NextArrowButton from "../components/buttons/NextArrowButton";
export default class Login extends Component {
  render() {
    return (
      <KeyboardAvoidingView style={styles.wrapper} behavior="padding">
        <View style={styles.scrollViewWrapper}>
        <ScrollView style={styles.scrollView}>
            <Text style={styles.loginHeader}>Login</Text>
            <InputField 
              labelText="EMAIL ADDRESS" 
              labelTextSize={14} 
              labelColor= '#FFFFFF'
              textColor= '#FFFFFF'
              borderBottomColor= '#FFFFFF'
              inputType="email" 
              customStyle={{paddingLeft:30, marginBottom: 30}} 
                
            />
            <InputField 
              labelText="PASSWORD" 
              labelTextSize={14} 
              labelColor='#FFFFFF'
              textColor='#FFFFFF'
              borderBottomColor='#FFFFFF'
              inputType="password"  
              customStyle={{paddingLeft:30, marginBottom:30}}

            />
          </ScrollView>
          <NextArrowButton/>
        </View>
      </KeyboardAvoidingView>
    );
  }
}
const styles = StyleSheet.create({
  wrapper: {
    display: "flex",
    flex: 1,
    backgroundColor: "#8fc1e3",
  },
  scrollViewWrapper: {
    marginTop: 70,
    flex: 1,
  },
  avoidView: {
    paddingLeft: 30,
    paddingRight: 30,
    paddingTop: 20,
    flex: 1,
  },
  loginHeader: {
    fontSize: 28,
    color: "#FFFFFF",
    fontWeight: "300",
    marginBottom: 40,
    marginTop: 40,
    paddingLeft: 30,
  },
});
