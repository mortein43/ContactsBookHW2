import { StyleSheet, Text, View } from "react-native";
import { SafeAreaView, SafeAreaProvider } from "react-native-safe-area-context";
import Navigate from "./navigate";
import "react-native-gesture-handler";
import { ContactProvider } from "./components/ContactContext";

export default function App() {
  return (
    <ContactProvider>
      <SafeAreaProvider>
        <SafeAreaView style={styles.container}>
          <Navigate />
        </SafeAreaView>
      </SafeAreaProvider>
    </ContactProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    marginTop: -65,
  },
});
