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
  TouchableHighlight
} from "react-native";
import propTypes from "prop-types";

type Props = {};
export default class VideoCommentModal extends Component<Props> {
  // 默认属性
  static defaultProps = {};

  // 属性类型
  static propTypes = {
    modalVisible: propTypes.boolean
  };

  // 构造
  constructor(props) {
    super(props);
    // 初始状态
    this.state = {
      modalVisible: false
    };
  }

  setModalVisible = visible => {
    this.setState({
      modalVisible: visible
    });
  };

  // 渲染
  render() {
    return (
      <View style={styles.container}>
        <Modal
          animationType="slide"
          transparent={false}
          visible={this.state.modalVisible}
          onRequestClose={() => {
            Alert.alert("Modal has been closed.");
          }}
          style={styles.modalStyle}
        >
          <View style={{ marginTop: 22 }}>
            <View>
              <Text>Hello World!</Text>

              <TouchableHighlight
                onPress={() => {
                  this.setModalVisible(!this.state.modalVisible);
                }}
              >
                <Text>Hide Modal</Text>
              </TouchableHighlight>
            </View>
          </View>
        </Modal>
      </View>
    );
  }

  componentDidMount() {
    const { modalVisible } = this.props;
    this.setState({
      modalVisible: modalVisible
    });
  }
}

const styles = StyleSheet.create({
  container: {
    // flex: 1,
    // justifyContent: "center",
    // alignItems: "center",
    // backgroundColor: "#F5FCFF"
  },
  modalStyle: {
    backgroundColor: "#000"
  }
});
