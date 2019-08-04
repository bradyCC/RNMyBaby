/**
 * @Author: brady
 * @Date: 2019-08-02
 * @Last Created time: 22:01:51
 * @Description:
 */
import React, { Component } from "react";
import { StyleSheet, View, Text } from "react-native";
import VideoPlayer from "../components/VideoPlayer";

type Props = {};
export default class VideoDetail extends Component<Props> {
  // 默认属性
  static defaultProps = {};

  // 属性类型
  static propTypes = {};

  // 构造
  constructor(props) {
    super(props);
    // 初始状态
    this.state = {};
  }

  // 渲染
  render() {
    return (
      <View style={styles.container}>
        <VideoPlayer />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // justifyContent: "center",
    // alignItems: "center",
    backgroundColor: "#F5FCFF"
  }
});
