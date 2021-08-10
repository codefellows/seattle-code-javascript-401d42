import { StatusBar } from 'expo-status-bar';
import React, { useEffect, useState } from 'react';
import { StyleSheet, Text, View, Button, FlatList, Linking } from 'react-native';
import * as Contacts from 'expo-contacts';

export default function App() {

  const [contacts, setContacts] = useState([]);

  useEffect(() => {
    const getContacts = async () => {
      const { status } = await Contacts.requestPermissionsAsync();
      if (status === 'granted') {
        // fetch our contacts and set them to component "state"
        let contactList = await Contacts.getContactsAsync();
        setContacts(contactList.data);
      }
    }

    getContacts();
  }, []);

  function call(person) {
    const phoneNumber = person.phoneNumbers[0].digits;
    const link = `tel:${phoneNumber}`;

    console.log(link);
    Linking.canOpenURL(link)
      .then(supported => Linking.openURL(link))
      .catch(console.error);
  }

  return (
    <View style={styles.container}>
      <Text style={styles.text}>Hello World!</Text>
      <StatusBar style="auto" />
      <Button onPress={() => console.log('Ive been pressed')} title="Click Me"/>
      <FlatList
        style={styles.list} 
        data={contacts}
        // function for what to render given the value of he data Prop.
        renderItem={({ item }) => <Button title={item.name} onPress={() => call(item)}/>}
        // key extractor is here for react to manage dynamic rendering of native components.
        keyExtractor={item => item.id}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    borderColor: '#000',
    borderWidth: 2,
    margin: 20
  },
  text: {
    flex: 1,
    fontSize: 50,
    borderColor: '#0e0',
    borderWidth: 2,
  },

  list: {
    flex: 2,
    borderColor: 'red',
    borderWidth: 2,
  }
});
