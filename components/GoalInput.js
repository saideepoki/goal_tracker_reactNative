import { useState } from "react";
import {
  View,
  TextInput,
  Button,
  StyleSheet,
  Modal,
  Image,
} from "react-native";
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
        <Image 
        source={require("../assets/images/goal.png")}
        style={styles.goalImage} 
        />
        <TextInput
          style={styles.textInput}
          placeholder="Add your goals"
          value={enteredGoalText}
          onChangeText={goalInputHandler}
          placeholderTextColor={'white'}
        />
        <View style={styles.buttonContainer}>
          <View style={styles.button}>
            <Button title="Add" onPress={goalButtonHandler} />
          </View>
          <View style={styles.button}>
            <Button title="Cancel" onPress={props.closeGoal} color='#ef476f' />
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
    padding: 16,
    backgroundColor: '#023e8a'
  },
  textInput: {
    borderWidth: 1,
    borderColor: "#cccccc",
    padding: 12,
    width: "94%",
    color: 'white',
    backgroundColor : '#0077B6',
    borderColor: '#0077B6',
    borderRadius: 10
  },
  buttonContainer: {
    marginTop: 25,
    flexDirection: "row",
  },
  button: {
    width: "25%",
    marginRight: 15,
  },
  goalImage: {
    marginBottom: 20,
    height: 100,
    width: 100,
  },
});
