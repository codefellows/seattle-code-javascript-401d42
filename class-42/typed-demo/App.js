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

  // function that can use Device linking to call a contact.
  function call(person) {
    const phoneNumber = person.phoneNumbers[0].digits;
    const link = `tel:${phoneNumber}`;

    console.log(link);
    Linking.canOpenURL(link)
      .then(supported => Linking.openURL(link))
      .catch(console.error);
  }

  // Component for Rendering formatted children on a Card
  const CardHeader = ({ children }) => (
    <View style={{
      flexDirection: 'row',
      justifyContent: 'flex-start',
      alignItems: 'center',
      padding: 5,
    }}>
      {children}
    </View>
  )

  // Component for rendering Total Contact Contents.
  const ContactCard = ({ contact }) => {

    let first = '';
    let last = '';
    if (contact.firstName) {
      first = contact.firstName[0];
    }
    if (contact.lastName) {
      last = contact.lastName[0];
    }

    let styles = StyleSheet.create({
      avatar: {
        margin: 10,
        backgroundColor: 'rgba(0, 0, 0, 0.6)'
      },
    });

    return (
      <Card>
        <CardHeader>
          <Avatar
            containerStyle={styles.avatar}
            rounded
            size="large"
            title={`${first}${last}`}
            icon={{name: 'user'}}
            onPress={() => console.log("Works!")}
          />
          <Text h4>{contact.name}</Text>
        </CardHeader>
        <Icon.Button
          name="phone"
          size={30}
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
