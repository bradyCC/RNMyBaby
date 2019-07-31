/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */
import React, { Fragment, Component } from "react";
import { StyleSheet, Platform, View, SafeAreaView } from "react-native";
import AppNavigator from "./app/router/index";
import SplashScreen from "react-native-splash-screen";
// import { Button } from "@ant-design/react-native"; // 集成ant-mobile-rn, 按需引入

const content = Platform.select({
  ios: (
    <View style={{ flex: 1, backgroundColor: "#F5FCFF" }}>
      <AppNavigator />
    </View>
  ),
  android: (
    <SafeAreaView style={{ flex: 1, backgroundColor: "#F5FCFF" }}>
      <AppNavigator />
    </SafeAreaView>
  )
});

export default class App extends Component {
  render() {
    return <Fragment>{content}</Fragment>;
  }

  componentDidMount() {
    SplashScreen.hide(); // 关闭启动屏
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#F5FCFF"
  }
});
