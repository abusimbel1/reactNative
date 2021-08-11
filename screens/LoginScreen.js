import React from 'react';
import { StyleSheet, View, Text, Button, TextInput } from 'react-native';
import { globalStyles } from '../styles/global';

export default function LoginScreen ({ navigation }) {
  const [text, onChangeText] = React.useState("Log in...");

  const pressHandler = () => {
    navigation.navigate('ChallengeScreen');
  }

  return (
    <View style={styles.container}>
      <Text>Log in</Text>
      <TextInput
        style={styles.input}
        onChangeText={onChangeText}
        value={text}
      />
      <Button title='Log in' onPress={pressHandler} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    alignContent: 'center',
    alignItems: 'center',
  },
  input: {
    height: 40,
    margin: 12,
    borderWidth: 1,
    padding: 10,
  },
});