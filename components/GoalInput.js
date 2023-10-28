import { useState } from 'react';
import {View, TextInput, Button, StyleSheet} from 'react-native';

function GoalInput(props) {

    const[enteredGoalText, setEnteredGoalText] = useState('');
    function goalInputHandler (enteredText) {
        setEnteredGoalText(enteredText);
      };
    function goalButtonHandler() {
        // avoid adding empty goal
        if(enteredGoalText)
        props.onAdd(enteredGoalText);
        setEnteredGoalText('');
    }

  return (
    <View style = {styles.inputContainer}>
      <TextInput style = {styles.textInput} placeholder = 'Add your goals' value = {enteredGoalText} onChangeText={goalInputHandler} />
      <Button title = 'Add' onPress={goalButtonHandler}/>
    </View>
  );
};


export default GoalInput;

const styles = StyleSheet.create({
    inputContainer: {
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'space-evenly',
        alignItems: 'center',
        marginBottom: 20,
        borderBottomWidth: 1,
        borderBottomColor: 'black'
     },
     textInput: {
       borderWidth: 1,
       borderColor: '#cccccc',
       marginRight: 8,
       padding: 8,
       width: '80%',
     },
});