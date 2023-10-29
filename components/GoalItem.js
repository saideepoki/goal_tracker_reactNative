import { StyleSheet, View, Text, Pressable } from "react-native";

function GoalItem(props) {

  return (
    <View style = {styles.goalItem}>
      <Pressable 
      android_ripple = {{color: '#1a98ca'}} 
      onPress = {props.onDeleteItem.bind(this, props.id)}
      style = {({pressed}) => pressed && styles.pressedItem}>
        <Text style = {styles.goalText}>{props.text}</Text>
      </Pressable>
    </View>
  );
};

export default GoalItem;

const styles = StyleSheet.create({
    goalItem: {
        margin: 8,
        backgroundColor: '#ef476f',
        borderRadius: 13,
      },
      goalText: {
        color: 'white',
        padding: 10,
        fontWeight: '700'
      },
      pressedItem: {
        opacity: 0.5
      }
});