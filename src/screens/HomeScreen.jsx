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

function HomeScreen({ navigation }) {
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
  return (
<MainLayout>
    <SafeAreaView>
      <ToDoList tasks={tasks} />
      <ToDoForm addTask={handleAddTask}/>
      <Button
            title="Go to About"
            onPress={() => navigation.navigate('About')}
        />
    </SafeAreaView>
    </MainLayout>

  );

}

export default App;