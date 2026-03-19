import { useState } from "react";
import {
  Button,
  FlatList,
  StyleSheet,
  Text,
  TextInput,
  View,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

export default function Index() {
  const [enteredGoalText, setEnteredGoalText] = useState("");
  const [goals, setGoals] = useState<string[]>([]);

  function goalInputHandler(enteredText: string) {
    setEnteredGoalText(enteredText);
  }

  function addGoals() {
    if (!enteredGoalText) return;
    setGoals((currentGoals) => [...currentGoals, enteredGoalText]);
    setEnteredGoalText("");
  }

  return (
    <SafeAreaView>
      <View style={styles.inputStyle}>
        <TextInput
          value={enteredGoalText}
          onChangeText={goalInputHandler}
          style={styles.input}
          placeholder="Enter your goals!"
        />

        <Button onPress={addGoals} title="Add" />
      </View>

      <Text style={styles.titleGoals}>List of goals</Text>

      <FlatList
        data={goals}
        renderItem={(itemData) => (
          <Text style={styles.goalItem}>{itemData.item}</Text>
        )}
        keyExtractor={(item, index) => index.toString()}
      />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  inputStyle: {
    flexDirection: "row",
    justifyContent: "space-between",
    paddingHorizontal: 16,
  },

  input: {
    borderWidth: 1,
    borderColor: "black",
    width: "85%",
    paddingHorizontal: 16,
  },

  titleGoals: {
    padding: 16,
    fontSize: 18,
    fontWeight: "bold",
  },

  goalItem: {
    padding: 12,
    marginHorizontal: 16,
    marginVertical: 4,
    backgroundColor: "#ddd",
  },
});
