import React from 'react';
import {Text,StyleSheet, View, Button, Pressable} from 'react-native';
import Tts from 'react-native-tts';

const Test = () => {
  const syllabes = [
    'loris',
    'pa',
    'ta',
    'ka',
    'sa',
    'ma',
    'na',
    'za',
    'la',
    'fa',
    'ra',
  ];


  return (
    <View>
      {syllabes.map(e => (
        <Pressable style={styles.Button} onPress={() => Tts.speak(e)}>
          <Text style={styles.text}>{e}</Text>
        </Pressable>
      ))}
    </View>
  );
};

export default Test;


const styles = StyleSheet.create({
    Button: {
      margin: 30,
    },
    text:{
        fontSize:50,
        fontWeight:"900"
    }
})