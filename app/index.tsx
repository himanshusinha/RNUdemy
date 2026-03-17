import { Button, StyleSheet, Text, View } from "react-native";

export default function Index() {
  return (
    <View style={styles.container}>
      <View style={styles.dummyText}>
        <Text>Another piece of text!</Text>
      </View>
      <Text style={styles.dummyText}>Hello World!</Text>
      <Button title="Tap new!" />
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#fff",
  },
  dummyText: {
    margin: 16,
    padding: 16,
    borderWidth: 1,
    borderColor: "blue",
  },
});
