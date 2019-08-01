/**
 * @Author: brady
 * @Date: 2019-07-31
 * @Last Created time: 20:24:02
 * @Description:
 */
import React, { Component } from "react";
import {
  StyleSheet,
  View,
  Text,
  Dimensions,
  Platform,
  FlatList,
  Image,
  TouchableOpacity,
  TouchableHighlight,
  Alert
} from "react-native";
import Icon from "react-native-vector-icons/Ionicons";
// import Mock from "mockjs";

// Dimensions 用于获取设备宽、高、分辨率
const { width, height } = Dimensions.get("window");

let resultData = {
  page: 1,
  step: 1,
  total: 0,
  resultList: []
};

type Props = {};
export default class Video extends Component<Props> {
  // 默认属性
  static defaultProps = {};

  // 属性类型
  static propTypes = {};

  // 构造
  constructor(props) {
    super(props);
    // 初始状态
    this.state = {
      isLoading: false,
      isRefreshing: false
    };
  }

  // 获取数据
  fetchData = () => {
    console.log("执行了");
    // 使用 Mockjs 配置模拟数据
    // let result = Mock.mock({
    //   success: true,
    //   "data|20": [
    //     {
    //       _id: "@guid",
    //       title: "@cparagraph(1,3)",
    //       video: "@url('https')",
    //       thumb: "@img(1280x720, @color())"
    //     }
    //   ],
    //   total: 20
    // });
    // this.setState(
    //   {
    //     resultList: result.data
    //   },
    //   () => {
    //     console.log(this.state.resultList);
    //   }
    // );

    this.setState({
      isLoading: true
    });

    // 使用 fetch 获取模拟数据
    let url = `http://rap2api.taobao.org/app/mock/227073/api/videolist?accessToken=123?${
      resultData.page
    }`;
    let options = {
      method: "GET",
      headers: {
        "Content-Type": "application/json"
      }
    };

    fetch(url, options)
      .then(response => response.json())
      .then(result => {
        console.log(result);
        resultData.resultList =
          resultData.resultList.length > 0
            ? [...resultData.resultList, ...result.data]
            : result.data;

        this.setState(
          {
            isLoading: false
          },
          () => {
            console.log(resultData.resultList);
          }
        );
      })
      .catch(err => {
        console.error(err);
      });
  };

  // 加载更多数据 - 上啦加载更多、滑动分页
  fetchMoreData = () => {
    console.log("触底了!");
    if (resultData.resultList.length == resultData.total) {
      return false;
    }
    setTimeout(() => {
      if (!this.state.isLoading) {
        resultData.page = resultData.page + resultData.step;
        this.fetchData();
      }
    }, 3000);
  };

  // 渲染
  render() {
    return (
      <View style={styles.container}>
        {Platform.OS === "ios" ? null : (
          <View style={styles.header}>
            <Text style={styles.headerText}>视频列表</Text>
          </View>
        )}
        <FlatList
          data={resultData.resultList}
          extraData={this.state}
          keyExtractor={item => item._id}
          onEndReached={() => this.fetchMoreData()}
          renderItem={({ item }) => (
            <View style={styles.item}>
              <Text style={styles.title}>{item.title}</Text>
              <TouchableOpacity onPress={() => Alert.alert(item.thumb)}>
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
                  onPress={() => Alert.alert("喜欢")}
                >
                  <View style={styles.handleBox}>
                    <Icon
                      // name={focused ?   // name={focuse-home"}
                      name="ios-heart-empty"
                      size={28}
                      style={styles.up}
                    />
                    <Text style={styles.handleText}>喜欢</Text>
                  </View>
                </TouchableOpacity>
                <TouchableOpacity
                  style={styles.flexStyle}
                  onPress={() => Alert.alert("点赞")}
                >
                  <View style={[styles.handleBox, styles.handleBoxRight]}>
                    <Icon
                      // name={focused ? "ios-home" : "ios-home"}
                      name="ios-chatbubbles"
                      size={28}
                      style={styles.commentIcon}
                    />
                    <Text style={styles.handleText}>点赞</Text>
                  </View>
                </TouchableOpacity>
              </View>
            </View>
          )}
        />
      </View>
    );
  }

  componentDidMount() {
    this.fetchData();
  }
}

const styles = StyleSheet.create({
  flexStyle: {
    flex: 1
  },
  container: {
    flex: 1,
    // justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#F5FCFF"
  },
  header: {
    width: width,
    alignItems: "center",
    backgroundColor: "#108ee9",
    paddingTop: 12,
    paddingBottom: 12
  },
  headerText: {
    fontSize: 16,
    fontWeight: "bold",
    color: "#fff"
  },
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
    borderRadius: 23,
    color: "#ed7b66"
  },
  itemFooter: {
    flexDirection: "row",
    // justifyContent: "space-between"
    backgroundColor: "#eee",
    paddingTop: 4,
    paddingBottom: 4
  },
  handleBox: {
    flex: 1,
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
