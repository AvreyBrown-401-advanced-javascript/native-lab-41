import React, { useState, useEffect } from 'react';
import { Text, View, TouchableOpacity } from 'react-native';
import { Camera } from 'expo-camera'; 

class CameraComponent extends React.Component {

    state = {
      hasCameraPermission: null,
      type: Camera.Constants.Type.back
    }
  
    async componentWillMount() {
      const { status } = await Permissions.askAsync(Permissions.CAMERA);
      this.setState({ hasCameraPermission: status === 'granted' })
    }
  
    render() {
      const { hasCameraPermission } = this.state
  
      if (hasCameraPermission === null) {
        return <View />
      }
      else if (hasCameraPermission === false) {
        return <Text> No access to camera</Text>
      }
      else {
        return (
          <View style={{ flex: 1 }}>
            <Camera 
              style={{ flex: 1, justifyContent: 'space-between' }}
              type={this.state.type}
            >
              <Header
                searchBar
                rounded
                style={{
                  position: 'absolute',
                  backgroundColor: 'transparent',
                  left: 0,
                  top: 0,
                  right: 0,
                  zIndex: 100,
                  alignItems: 'center'
                }}
              >
                <View style={{ flexDirection: 'row', flex: 4 }}>
                  <Ionicons name="md-camera" style={{ color: 'white' }} />
                  <Item style={{ backgroundColor: 'transparent' }}>
                    <Icon name="ios-search" style={{ color: 'white', fontSize: 24, fontWeight: 'bold' }}></Icon>
                  </Item>
                </View>
  
                <View style={{ flexDirection: 'row', flex: 2, justifyContent: 'space-around' }}>
                  <Icon name="ios-flash" style={{ color: 'white', fontWeight: 'bold' }} />
                  <Icon
                    onPress={() => {
                      this.setState({
                        type: this.state.type === Camera.Constants.Type.back ?                                        
                                              Camera.Constants.Type.front :
                                              Camera.Constants.Type.back
                      })
                    }}
                    name="ios-reverse-camera"
                    style={{ color: 'white', fontWeight: 'bold' }}
                  />
                </View>
              </Header>
  
              <View style={{ flexDirection: 'row', justifyContent: 'space-between', paddingHorizontal: 30, marginBottom: 15, alignItems: 'flex-end' }}>
                <Ionicons name="ios-map" style={{ color: 'white', fontSize: 36 }}></Ionicons>
                <View></View>
                <View style={{ alignItems: 'center' }}>
                  <MaterialCommunityIcons name="circle-outline"   // This is the icon which should take and save image
                    style={{ color: 'white', fontSize: 100 }}
                  ></MaterialCommunityIcons>
                  <Icon name="ios-images" style={{ color: 'white', fontSize: 36 }} />
                </View>
              </View>
            </Camera>
          </View>
        )
      }
    }
  }
  
  export default CameraComponent;


