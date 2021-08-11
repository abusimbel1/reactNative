import React from 'react';
import { useState } from 'react';
import { StyleSheet, View, Text, Button } from 'react-native';

export default function ChallengeScreen({ navigation }) {

  const [challenge, setChallenge] = useState(challenges);

  const challenges = [
    {title: 'Go to bed'},
    {title: 'Go home'},
    {title: 'etc'},
  ]

  const pressHandler = () => {
    navigation.goBack();
  }

  return (
    <View style={styles.container}>
      <Text style={styles.header}>Hello my friend!</Text>
      <Text style={styles.challenge}>Your current challenge</Text>
      <ScrollView>
        {challenge.map(item => {
          return <Text>{item.title}</Text>
        })}
      </ScrollView>
      <Button title='Log out' onPress={pressHandler} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    alignContent: 'center',
    alignItems: 'center',
  },
  header: {
    fontSize: '15px',
    borderWidth: 1,
    padding: 10,
  },
  challenge: {

  }
});