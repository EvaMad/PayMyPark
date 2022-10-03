import { StatusBar } from 'expo-status-bar';
import React, { Component } from "react";
import { Platform, Text, View, StyleSheet } from 'react-native';
import LoggedOut from "./screens/LoggedOut";
import Login from "./screens/Login";

export default class App extends Component {
  render() {
    return <Login />;
  }
  
}

