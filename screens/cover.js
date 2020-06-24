import React from 'react';
import { StyleSheet, View, Text, Button } from 'react-native';
import { TextInput } from 'react-native-gesture-handler';
import Header from '../shared/header';

export default function Cover({ navigation }) {
  return (
    <View style={styles.container}>
      <Header />
      <Text style={styles.titleText}>Covid'19 Tracker App</Text>

      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <Button
          title="Let's get started"
          onPress={() => navigation.navigate('Information')}
          color="black"
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 20,
    flex: 1,
    backgroundColor: 'transparent',
  },

  titleText: {
    fontFamily: 'nunito-bold',
    fontSize: 25,
    color: 'red',
    textAlign: 'center',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
