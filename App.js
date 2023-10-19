import { useState } from 'react';
import { StyleSheet, Text, View, Button, TextInput } from 'react-native';

export default function App() {
  
  const[enteredGoalText, setEnteredGoalText] = useState('');
  const[courseGoals,setCourseGoals] = useState([]);

  function goalInputHandler (enteredText) {
    setEnteredGoalText(enteredText);
  };

  function goalButtonHandler () {
    setCourseGoals((currentCourseGoals) => [...currentCourseGoals,enteredGoalText]);
  };

  return (
    <View style = {styles.appContainer}>
      <View style = {styles.inputContainer}>
        <TextInput style = {styles.textInput} placeholder = 'Add your goals' onChangeText={goalInputHandler}/>
        <Button title = 'Add' onPress={goalButtonHandler}/>
      </View>
      <View style = {styles.goalsContainer}>
        {courseGoals.map((goals) => ( 
          <View style = {styles.goalItem} key={goals}>
             <Text style = {styles.goalText}>{goals}</Text>
          </View>
        ))}
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  appContainer: {
    flex: 1,
    paddingTop: 50,
    paddingHorizontal: 20
  },
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
  goalsContainer: {
    flex: 5,
  },
  goalItem: {
    margin: 8,
    padding: 10,
    backgroundColor: '#023047',
    borderRadius: 13,
  },
  goalText: {
    color: 'white',
  },
  
});
