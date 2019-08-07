/**
 * @Author: brady
 * @Date: 2019/8/2
 * @Last Created time: 14:48:15
 * @Description:
 */
import React, { Component } from "react";
import {
  StyleSheet,
  View,
  Text,
  Dimensions,
  Image,
  TouchableOpacity,
  TouchableHighlight,
  Alert
} from "react-native";
import Icon from "react-native-vector-icons/Ionicons";
import propTypes from "prop-types";

// Dimensions 用于获取设备宽、高、分辨率
const { width, height } = Dimensions.get("window");

type Props = {};
export default class VideoListItem extends Component<Props> {
  // 默认属性
  static defaultProps = {};

  // 属性类型
  static propTypes = {
    item: propTypes.object,
    showModal: propTypes.func
  };

  // 构造
  constructor(props) {
    super(props);
    // 初始状态
    this.state = {
      like: false
    };
  }

  // 点赞
  giveLike = id => {
    let url = "http://rap2api.taobao.org/app/mock/227073/api/givelike";
    let options = {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        accessToken: "123",
        id: id,
        like: true
      })
    };

    fetch(url, options)
      .then(response => response.json())
      .then(result => {
        if (result.success) {
          this.setState({
            like: !this.state.like
          });
        }
      })
      .catch(err => {
        console.error(err);
      });
  };

  // 渲染
  render() {
    const { item, props, showModal } = this.props;
    return (
      <View>
        <View style={styles.item}>
          <Text style={styles.title}>{item.title}</Text>
          <TouchableOpacity
            onPress={() =>
              props.navigation.navigate("VideoDetail", {
                id: item._id,
                title: item.title,
                video: item.video,
                author: item.author
              })
            }
          >
            <View style={styles.thumbBox}>
              <Image style={styles.thumb} source={{ uri: item.thumb }} />
              <Icon
                // name={focused ? "ios-home" : "ios-home"}
                name="ios-play"
                size={28}
                style={styles.play}
              />
            </View>
          </TouchableOpacity>
          <View style={styles.itemFooter}>
            <TouchableOpacity
              style={styles.flexStyle}
              onPress={() => this.giveLike(item._id)}
            >
              <View style={styles.handleBox}>
                <Icon
                  // name={focused ? "ios-home" : "ios-home"} // ios-heart-empty
                  name={this.state.like ? "ios-heart" : "ios-heart-empty"}
                  size={28}
                  style={styles.up}
                />
                <Text style={styles.handleText}>点赞</Text>
              </View>
            </TouchableOpacity>
            <TouchableOpacity
              style={styles.flexStyle}
              onPress={() => showModal(true, item._id)}
            >
              <View style={[styles.handleBox, styles.handleBoxRight]}>
                <Icon
                  // name={focused ? "ios-home" : "ios-home"}
                  name="ios-chatbubbles"
                  size={28}
                  style={styles.commentIcon}
                />
                <Text style={styles.handleText}>评论</Text>
              </View>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  item: {
    width: width,
    // marginTop: 12,
    alignItems: "center"
  },
  title: {
    fontSize: 18,
    padding: 10,
    color: "#333"
  },
  thumbBox: {
    // backgroundColor: "#108ee9"
  },
  thumb: {
    width: width,
    height: width * 0.56,
    resizeMode: "cover"
  },
  play: {
    position: "absolute",
    right: 14,
    bottom: 14,
    width: 46,
    height: 46,
    paddingTop: 9,
    paddingLeft: 18,
    borderWidth: 1,
    // backgroundColor: "transparent",
    borderColor: "#000",
    borderRadius: 23
    // color: "#ed7b66"
  },
  itemFooter: {
    flexDirection: "row",
    // justifyContent: "space-between"
    backgroundColor: "#eee",
    paddingTop: 4,
    paddingBottom: 4
  },
  handleBox: {
    width: width / 2,
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    padding: 10,
    backgroundColor: "#fff"
  },
  handleBoxRight: {
    borderLeftWidth: 1,
    borderLeftColor: "#eee"
  },
  up: {
    fontSize: 22,
    color: "#ed7b66"
  },
  commentIcon: {
    fontSize: 22,
    color: "#333"
  },
  handleText: {
    fontSize: 18,
    color: "#333",
    marginLeft: 12
  }
});
