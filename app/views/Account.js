/**
 * @Author: brady
 * @Date: 2019-07-31
 * @Last Created time: 20:19:28
 * @Description:
 */
import React, { Component} from "react";
import { StyleSheet, View, Text } from "react-native";

type Props = {};
export default class Account extends Component<Props> {
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
        <Text>Account</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#F5FCFF"
  }
});
