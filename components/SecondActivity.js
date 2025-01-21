import { useState } from "react";
import { StyleSheet, TextInput, View } from "react-native";
import AntDesign from "@expo/vector-icons/AntDesign";

export default function SecondActivity({ route, navigation }) {
  const { contact, updateContact } = route.params;

  const [name, setName] = useState(contact.name);
  const [phone, setPhone] = useState(contact.phone);
  const [img, setImg] = useState(contact.img);

  const [errors, setErrors] = useState({
    name: false,
    phone: false,
    img: false,
  });

  const handleSave = () => {
    const newErrors = {
      name: !name,
      phone: !phone,
      img: !img,
    };
    console.log("Route Params: ", route.params);
    if (Object.values(newErrors).includes(true)) {
      setErrors(newErrors);
    } else {
      const updatedContact = { ...contact, name, phone, img };
      updateContact(updatedContact);
      navigation.goBack();
    }
  };

  return (
    <View style={styles.container}>
      <TextInput
        style={[styles.input, errors.name && styles.errorInput]}
        value={name}
        placeholder="Ім’я"
        onChangeText={(text) => setName(text)}
      />
      <TextInput
        style={[styles.input, errors.phone && styles.errorInput]}
        value={phone}
        placeholder="Телефон"
        keyboardType="phone-pad"
        onChangeText={(text) => setPhone(text)}
      />
      <TextInput
        style={[styles.input, errors.img && styles.errorInput]}
        value={img}
        placeholder="URL зображення"
        onChangeText={(text) => setImg(text)}
      />
      <AntDesign
        name="edit"
        size={50}
        color="orange"
        style={styles.editButton}
        onPress={handleSave}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 20,
  },
  input: {
    borderWidth: 1,
    borderColor: "gray",
    borderRadius: 5,
    marginBottom: 15,
    padding: 10,
  },
  editButton: {
    textAlign: "center",
    marginTop: 15,
  },
  errorInput: {
    borderColor: "red",
  },
});
