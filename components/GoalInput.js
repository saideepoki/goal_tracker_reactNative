import { useState } from "react";
import { View, TextInput, Button, StyleSheet, Modal } from "react-native";
import GoalItem from "./GoalItem";

function GoalInput(props) {
  const [enteredGoalText, setEnteredGoalText] = useState("");
  function goalInputHandler(enteredText) {
    setEnteredGoalText(enteredText);
  }
  function goalButtonHandler() {
    // avoid adding empty goal
    if (enteredGoalText) props.onAdd(enteredGoalText);
    setEnteredGoalText("");
  }

  return (
    <Modal visible={props.visible} animationType="fade">
      <View style={styles.inputContainer}>
        <TextInput
          style={styles.textInput}
          placeholder="Add your goals"
          value={enteredGoalText}
          onChangeText={goalInputHandler}
        />
        <View style={styles.buttonContainer}>
          <View style = {styles.button}>
            <Button title="Add" onPress={goalButtonHandler} />
          </View>
          <View style = {styles.button}> 
            <Button title="Cancel" onPress = {props.closeGoal}/>
          </View>
        </View>
      </View>

    </Modal>
  );
}

export default GoalInput;

const styles = StyleSheet.create({
  inputContainer: {
    flex: 1,
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    marginBottom: 20,
    borderBottomWidth: 1,
    borderBottomColor: "black",
    padding: 16
  },
  textInput: {
    borderWidth: 1,
    borderColor: "#cccccc",
    padding: 8,
    width: "94%",
  },
  buttonContainer: {
    marginTop: 15,
    flexDirection: "row",
  },
  button: {
    width: '25%',
    marginRight: 15
  }
});
