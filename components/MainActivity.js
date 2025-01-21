import { Text, StyleSheet, FlatList, View, Image, Modal } from "react-native";
import { useNavigation } from "@react-navigation/native";
import AntDesign from "@expo/vector-icons/AntDesign";
import Ionicons from "@expo/vector-icons/Ionicons";
import { useState } from "react";
import Form from "./Form";
import { useContactRepository } from "./ContactContext";

export default function MainActivity({ navigation }) {
  const contactRepo = useContactRepository();

  const [contacts, setContacts] = useState(contactRepo.getAllContacts());
  const [modalWindow, setModalWindow] = useState(false);

  const addContact = (contact) => {
    contactRepo.addContact(contact);
    setContacts([...contactRepo.getAllContacts()]);
    setModalWindow(false);
  };

  const updateContact = (contact) => {
    contactRepo.updateContact(contact);
    setContacts([...contactRepo.getAllContacts()]);
  };

  const handleDelete = (id) => {
    contactRepo.deleteContact(id);
    setContacts([...contactRepo.getAllContacts()]);
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
                onPress={() => handleDelete(item.id)}
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
