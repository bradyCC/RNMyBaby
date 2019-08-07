/**
 * @Author: brady
 * @Date: 2019/8/7
 * @Last Created time: 10:01:59
 * @Description:
 */
import React, { Component } from "react";
import {
  StyleSheet,
  View,
  Text,
  Modal,
  Alert,
  TouchableHighlight,
  TouchableOpacity,
  Dimensions,
  TextInput,
  Button
} from "react-native";
import Icon from "react-native-vector-icons/Ionicons";
import propTypes from "prop-types";

// Dimensions 用于获取设备宽、高、分辨率
const { width, height } = Dimensions.get("window");

type Props = {};
export default class VideoCommentModal extends Component<Props> {
  // 默认属性
  static defaultProps = {};

  // 属性类型
  static propTypes = {
    modalVisible: propTypes.bool,
    showModal: propTypes.func
  };

  // 构造
  constructor(props) {
    super(props);
    // 初始状态
    this.state = {
      text: ``
    };
  }

  // TextInput数据初始化
  textInit = () => {
    this.setState({
      text: ``
    });
  };

  // 渲染
  render() {
    const { modalVisible, id, showModal } = this.props;
    return (
      <View style={styles.container}>
        <Modal
          animationType="slide"
          transparent={true}
          visible={modalVisible}
          onRequestClose={() => {
            Alert.alert("Modal has been closed.");
          }}
        >
          <View style={styles.modalView}>
            <View style={styles.modalBox}>
              <View style={styles.modalHeader}>
                <Text style={styles.modalHeaderTitle}>视频评论：</Text>
                <TouchableOpacity
                  onPress={() => [showModal(false), this.textInit()]}
                >
                  <Icon
                    // name={focused ? "ios-home" : "ios-home"} // ios-heart-empty
                    name="ios-close"
                    size={28}
                    style={styles.close}
                  />
                </TouchableOpacity>
              </View>
              <View style={styles.modalContent}>
                <TextInput
                  placeholder="请输入评论内容"
                  onChangeText={text => this.setState({ text })}
                  value={this.state.text}
                  multiline={true}
                  numberOfLines={4}
                  autoFocus={true}
                  style={styles.modalTextInput}
                />
                <View style={styles.modalButton}>
                  <Button
                    title="提交"
                    color="#108ee9"
                    onPress={() => Alert.alert(id)}
                  />
                </View>
              </View>
            </View>
          </View>
        </Modal>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    // flex: 1,
    // justifyContent: "center",
    // alignItems: "center",
    // backgroundColor: "#F5FCFF"
  },
  modalView: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "rgba(0,0,0,0.5)"
  },
  modalBox: {
    width: width * 0.8,
    height: width,
    padding: 20,
    borderRadius: 20,
    // flex: 1,
    // justifyContent: "center",
    // alignItems: "center",
    backgroundColor: "#F5FCFF"
  },
  modalHeader: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center"
  },
  modalHeaderTitle: {
    color: "#333"
  },
  modalContent: {
    marginTop: 20
  },
  modalTextInput: {
    padding: 10,
    borderWidth: 1,
    borderColor: "#dbdbdb",
    borderRadius: 10
  },
  modalButton: {
    marginTop: 20
  }
});
