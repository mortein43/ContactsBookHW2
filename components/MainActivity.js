import { Text, StyleSheet, FlatList, View, Image, Modal } from "react-native";
import { useNavigation } from "@react-navigation/native";
import AntDesign from "@expo/vector-icons/AntDesign";
import Ionicons from "@expo/vector-icons/Ionicons";
import { useState } from "react";
import Form from "./Form";

export default function MainActivity() {
  const navigation = useNavigation();

  const [contacts, setContacts] = useState([
    {
      name: "Андрій",
      phone: "+380972580102",
      img: "https://fsx1.itstep.org/api/v1/files/sZPKVNraKol83LuteAdWp8zfeSCY9Baq?r=face&h=250&f=webp",
      key: "1",
    },
    {
      name: "Олександр Олександрович",
      phone: "Просив не розголошувати",
      img: "https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcR6FzuiKDM-ZzNWSi0hWDs0nrCzENYul7Uehp1IgbenPqQAhmEs",
      key: "2",
    },
  ]);

  const [modalWindow, setModalWindow] = useState(false);

  const addContact = (contact) => {
    setContacts((list) => {
      contact.key = Math.random().toString();
      return [contact, ...list];
    });
    setModalWindow(false);
  };

  const updateContact = (updatedContact) => {
    setContacts((prevContacts) =>
      prevContacts.map((contact) =>
        contact.key === updatedContact.key ? updatedContact : contact
      )
    );
  };

  const deleteContact = (key) => {
    setContacts((list) => list.filter((contact) => contact.key !== key));
  };

  return (
    <>
      <Modal visible={modalWindow}>
        <View>
          <Form addContact={addContact} />
        </View>
      </Modal>
      <Ionicons
        name="add-circle"
        size={35}
        color="green"
        style={styles.addButton}
        onPress={() => setModalWindow(true)}
      />
      <FlatList
        style={styles.list}
        data={contacts}
        renderItem={({ item }) => (
          <View style={styles.listItem}>
            <Image style={styles.image} source={{ uri: item.img }} />
            <View>
              <Text>{item.name}</Text>
              <Text>{item.phone}</Text>
            </View>
            <View style={styles.iconsInListItem}>
              <AntDesign
                name="edit"
                size={35}
                color="orange"
                style={{ marginRight: 15 }}
                onPress={() =>
                  navigation.navigate("SecondActivity", {
                    contact: item,
                    updateContact,
                  })
                }
              />
              <AntDesign
                name="delete"
                size={35}
                color="red"
                onPress={() => deleteContact(item.key)}
              />
            </View>
          </View>
        )}
      />
    </>
  );
}

const styles = StyleSheet.create({
  text: {
    textAlign: "center",
  },
  list: {
    paddingInline: 5,
  },
  listItem: {
    borderWidth: 0,
    marginBottom: 5,
    borderRadius: 5,
    padding: 5,
    borderColor: "silver",
    flexDirection: "row",
    alignItems: "center",
  },
  image: {
    width: 50,
    aspectRatio: 1,
    borderRadius: 50,
    marginRight: 15,
  },
  iconsInListItem: {
    position: "absolute",
    flexDirection: "row",
    alignItems: "center",
    right: 25,
  },
  addButton: {
    textAlign: "center",
    marginBlock: 5,
  },
});
