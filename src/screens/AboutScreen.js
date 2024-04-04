import React from 'react';
import {useState} from 'react';
import {SafeAreaView} from 'react-native';
import ToDoList from './components/ToDoList';
import ToDoForm from './components/ToDoForm';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import MainLayout from '../layouts/MainLayout';

function AboutScreen({navigation}) {
  const styles = StyleSheet.create({
    title: {
      fontSize: 20,
      fontWeight: 'bold',
      marginBottom: 10,
    },
    name: {
      fontSize: 20,
      marginBottom: 10,
    },
    date: {
      fontSize: 20,
      marginBottom: 10,
    },
  });
  return (
    <MainLayout>
      <SafeAreaView>
        <Text style={styles.title}>Name of the app: To Do List App</Text>
        <Text style={styles.name}>Name: David Fok</Text>
        <Text style={styles.date}>
          Current date: {new Date().toDateString()}
        </Text>
      </SafeAreaView>
    </MainLayout>
  );
}

export default App;
