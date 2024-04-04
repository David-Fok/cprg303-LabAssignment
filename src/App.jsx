/**
 * My To Do List App
 *
 * @format
 */

import React from 'react';
import { useState } from 'react';
import {
  SafeAreaView,
} from 'react-native';
import ToDoList from './components/ToDoList';
import ToDoForm from './components/ToDoForm';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import MainLayout from '../layouts/MainLayout';

function App() {
  const Stack = createNativeStackNavigator();

  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="About" component={AboutScreen} />
      </Stack.Navigator>
    {/*
    <SafeAreaView>
      <ToDoList tasks={tasks} />
      <ToDoForm addTask={handleAddTask}/>
    </SafeAreaView>
    */}
    </NavigationContainer>
  );

{/*
  const [tasks, setTasks] = useState([
    'Do laundry',
    'Go to gym',
    'Walk dog'
  ]);

const handleAddTask = (task) => {
  setTasks([...tasks,task]);

  //tasks.push(task);
  //setTasks(tasks);

  //setTasks((prevTasks) => [...prev, task]);

  //setTasks(tasks.concat(task));

}
*/}

}

export default App;