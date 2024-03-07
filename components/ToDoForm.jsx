import React from "react";
import {
    StyleSheet,
    View,
    TextInput,
    Button
  } from 'react-native';

import { useState } from 'react';

function ToDoForm({addTask}) {
//function ToDoForm(props) {
//const{addTask} = props;
//const addTask = props.addTask;

  const [ input,setInput ] = useState('');

  const handleChangeText = (text) => {
    setInput(text);
  }

  addTask(input);

  const handlePress = () => {
    addTask(input);
    //setInput('');
  }

  return (
    <>
      <View style={styles.form}>
        <TextInput
          style={styles.input}
          placeholder="Add a new task..."
          onChangeText={(text) => setTaskText(text)}
          value={taskText}
        />
        <Button title="Add" />
      </View>
    </>
  );
}

const styles = StyleSheet.create({

    form: {
      flexDirection: 'row',
      justifyContent: 'space-between',
      alignItems: 'center',
      marginHorizontal: 20,
      marginTop: 20,
    },
    input: {
      flex: 1,
      borderWidth: 1,
      borderColor: '#ccc',
      paddingHorizontal: 10,
      paddingVertical: 5,
      marginRight: 10,
    },
  });

export default ToDoForm;