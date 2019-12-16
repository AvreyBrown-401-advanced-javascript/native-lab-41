import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View,Button} from 'react-native';
import Torch from 'react-native-torch';
export default class Flashlight extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isTorchOn: false,
    };
  }
  _handlePress() {
    try{
    const { isTorchOn } = this.state;
    Torch.switchState(!isTorchOn);
    this.setState({ isTorchOn: !isTorchOn });
    } catch(e) {
        console.error(e);
    }
  }
  render() {
    return (
      <View style={styles.container}>
      <Text style={styles.welcome}>
          Torch / Flash Light Demo
        </Text>
        <Button
          onPress={this._handlePress.bind(this)}
          title={this.state.isTorchOn ? "Turn off the Torch":"Turn on the Torch"}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
      backgroundColor: '#F5FCFF',
    },
    welcome: {
      fontSize: 20,
      textAlign: 'center',
      margin: 10,
    },
    instructions: {
      textAlign: 'center',
      color: '#333333',
      marginBottom: 5,
    },
  });
