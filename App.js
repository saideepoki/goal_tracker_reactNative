import { useState } from 'react';
import { StyleSheet, View, FlatList } from 'react-native';
import GoalItem from './components/GoalItem';
import GoalInput from './components/GoalInput';


export default function App() {
  
  const[courseGoals,setCourseGoals] = useState([]);


  function goalButtonHandler (enteredGoalText) {
    setCourseGoals((currentCourseGoals) => [...currentCourseGoals,{text: enteredGoalText, id: Math.random().toString()}]);
  };

  function goalRemoveHandler (id) {
     setCourseGoals((currentCourseGoals) => {
      return currentCourseGoals.filter((goal) => goal.id != id);
     })
  }

  return (
    <View style = {styles.appContainer}>
      < GoalInput onAdd = {goalButtonHandler} />
      <View style = {styles.goalsContainer}>
       <FlatList data = {courseGoals} renderItem = {(itemData) => {
        return (
          <GoalItem text = {itemData.item.text} id = {itemData.item.id} onDeleteItem = {goalRemoveHandler}/>
          );
       }} alwaysBounceVertical = {true}
          keyExtractor={(item,index) => {
            return item.id
          }}
        />
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
