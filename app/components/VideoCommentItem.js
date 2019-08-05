/**
 * @Author: brady
 * @Date: 2019/8/5
 * @Last Created time: 15:06:48
 * @Description:
 */
import React, { Component } from "react";
import { StyleSheet, View, Text, Image } from "react-native";
import propTypes from "prop-types";

type Props = {};
export default class VideoCommentItem extends Component<Props> {
  // 默认属性
  static defaultProps = {};

  // 属性类型
  static propTypes = {
    item: propTypes.object
  };

  // 构造
  constructor(props) {
    super(props);
    // 初始状态
    this.state = {};
  }

  // 渲染
  render() {
    const { item } = this.props;
    return (
      <View style={styles.container}>
        <View style={styles.commentInfo} key={item._id}>
          <View style={styles.infoLeft}>
            <Image
              source={{ uri: item.replyBy.avatar }}
              style={styles.commentHeader}
            />
          </View>
          <View style={styles.infoRight}>
            <Text style={styles.nickname}>{item.replyBy.nickname}</Text>
            <Text>{item.content}</Text>
          </View>
        </View>
      </View>
    );
  }

  componentDidMount() {}
}

const styles = StyleSheet.create({
  container: {
    // flex: 1,
    // justifyContent: "center",
    // alignItems: "center",
    // backgroundColor: "#F5FCFF"
  },
  commentInfo: {
    padding: 12,
    flexDirection: "row",
    // alignItems: "center",
    borderTopWidth: 1,
    borderTopColor: "#dbdbdb"
  },
  commentHeader: {
    width: 48,
    height: 48,
    borderRadius: 24
  },
  infoRight: {
    flex: 1,
    marginLeft: 8
  },
  nickname: {
    color: "#f00"
  }
});
