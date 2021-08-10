import { StatusBar } from 'expo-status-bar';
import React, { useEffect, useState } from 'react';
import { StyleSheet, View, FlatList, Linking } from 'react-native';
import { Text, Header, Card, Avatar } from 'react-native-elements';
import Icon from 'react-native-vector-icons/FontAwesome';
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

  const ContactCard = ({ contact }) => {

    let first = '';
    let last = '';
    if (contact.firstName) {
      first = contact.firstName[0];
    }
    if (contact.lastName) {
      last = contact.lastName[0];
    }

    return (
      <Card style={styles.card}>
        <Avatar
          size="small"
          title="BP"
          onPress={() => console.log("Works!")}
        />
        <Text>{contact.name}</Text>
        <Icon.Button
          name="phone"
          onPress={() => call(contact)}>
            {contact.phoneNumbers[0].number}
        </Icon.Button>
      </Card>
    )
  }

  return (
    <View style={styles.container}>
      <Header
        placement="left"
        centerComponent={{ text: 'Call your Contacts', style: { color: '#fff', fontSize: 30 } }}
      />
      <StatusBar style="auto" />
      <FlatList
        style={styles.list} 
        data={contacts}
        // function for what to render given the value of he data Prop.
        // renderItem={({ item }) => <Button title={item.name} onPress={() => call(item)}/>}

        renderItem={({item}) => <ContactCard contact={item}/>}
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
  },
  list: {
    flex: 2,
    width: '100%',
  }
});
