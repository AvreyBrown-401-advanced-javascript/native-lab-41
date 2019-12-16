
import React, { useState, useEffect } from 'react';
import { StyleSheet, Text, View, Button, FlatList, Linking, Platform } from 'react-native';
import Torch from 'react-native-torch';
import * as Permissions from 'expo-permissions';
import * as Contacts from 'expo-contacts';
import CameraApp from './components/camera';
import CameraApp2 from './components/camera2';
import CameraComponent from './components/camera3';
import Nav from './main';
import Homescreen from './home';
// import Flashlight from './components/flashlight';

export default function App() {
  const [contacts, setContacts] = useState([]);
  const [permissions, setPermissions] = useState(false);

  const getPermissions = async () => {
    const { status } = await Permissions.askAsync(Permissions.CONTACTS);
    setPermissions(true);
  }

  const call = contact => {
    let phoneNumber = contact.phoneNumbers[0].number.replace(/[\(\)\-\s+]/g, '');
    let link = `tel:${phoneNumber}`;
    Linking.canOpenURL(link)
      .then(isSupported => Linking.openURL(link))
      .catch(console.error);
  }

  const showContacts = async () => {
    const contactsList = await Contacts.getContactsAsync();
    setContacts(contactsList.data);
  }

  const takePic = async (options) => {
    try {
      let photo = await this.camera.takePictureAsync()
      return photo;
    } catch(e) {
      console.error(e);
    }

  }

  useEffect(() => {
    getPermissions();
  }, []);

  return(
    <View style={styles.container}>
      <CameraApp />
      <Nav />
      {/* <Flashlight /> */}
      {/* apparently expo wont let you access the flashlight?? */}
      {/* <Button 
        title="Take Picture"
        onPress={takePic}
      />
      <Button
        title="Get Contacts"
        onPress={showContacts}
      /> */}
      {/* <FlatList
  data={contacts}
  keyExtractor={(item) => item.id}
  renderItem={({ item }) => <Button title={item.name} onPress={() => call(item)} />}
      /> */}
    </View>
  )
  };

const styles = StyleSheet.create(
  {
    container: {
      flex: 1,
      backgroundColor: '#fff',
      alignItems: 'center',
      justifyContent: 'center',
      marginTop: 50,
    }

  });

