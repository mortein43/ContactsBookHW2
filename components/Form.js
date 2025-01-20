import { Formik } from "formik";
import { TextInput, View, StyleSheet, Button } from "react-native";
import FontAwesome6 from "@expo/vector-icons/FontAwesome6";
import { useState } from "react";

export default function Form({ addContact }) {
  const [errors, setErrors] = useState({
    name: false,
    phone: false,
    img: false,
  });

  const handleSubmit = (values, actions) => {
    const newErrors = {
      name: !values.name,
      phone: !values.phone,
      img: !values.img,
    };

    if (Object.values(newErrors).includes(true)) {
      setErrors(newErrors);
    } else {
      addContact(values);
      actions.resetForm();
      setErrors({
        name: false,
        phone: false,
        img: false,
      });
    }
  };

  return (
    <View style={styles.formWrapper}>
      <Formik
        initialValues={{ name: "", phone: "", img: "" }}
        onSubmit={handleSubmit}
      >
        {(props) => (
          <View>
            <TextInput
              style={[styles.input, errors.name && styles.errorInput]}
              placeholder="Введіть ім’я"
              onChangeText={props.handleChange("name")}
            />
            <TextInput
              style={[styles.input, errors.phone && styles.errorInput]}
              placeholder="Введіть номер телефону"
              onChangeText={props.handleChange("phone")}
              keyboardType="phone-pad"
            />
            <TextInput
              style={[styles.input, errors.img && styles.errorInput]}
              placeholder="Введіть url картинки"
              onChangeText={props.handleChange("img")}
            />
            <FontAwesome6
              style={styles.addButton}
              name="circle-check"
              size={50}
              color="green"
              onPress={props.handleSubmit}
            />
          </View>
        )}
      </Formik>
    </View>
  );
}

const styles = StyleSheet.create({
  formWrapper: {
    paddingInline: 10,
  },
  input: {
    borderWidth: 1,
    borderRadius: 10,
    marginTop: 10,
    borderColor: "silver",
  },
  addButton: {
    textAlign: "center",
    marginTop: 15,
    opacity: 0.75,
  },
  errorInput: {
    borderColor: "red",
  },
});
