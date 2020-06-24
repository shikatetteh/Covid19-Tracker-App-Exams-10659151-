import React, { useState } from 'react';
import {
  StyleSheet,
  Text,
  View,
  ScrollView,
  TouchableOpacity,
} from 'react-native';

export default function report() {
  const [update, setUpdate] = useState([
    { name: 'Total Case', key: '1' },
    { name: 'Total Death', key: '2' },
    { name: 'Total Recovery', key: '3' },
    { name: 'Total Active Cases', key: '4' },
  ]);

  const pressHandler = (id) => {
    console.log(id);
  };

  return (
    <View style={styles.content}>
      <Text style={styles.titleText}>Update Page</Text>
      <ScrollView>
        {update.map((info) => {
          return (
            <View key={info.key}>
              <TouchableOpacity onPress={() => pressHandler(info.id)}>
                <Text style={styles.info}>{info.name}</Text>
              </TouchableOpacity>
            </View>
          );
        })}
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    paddingTop: 40,
    paddingHorizontal: 20,
  },
  content: { padding: 40 },
  info: {
    marginTop: 24,
    padding: 30,
    backgroundColor: 'black',
    fontSize: 20,
    color: 'white',
    fontFamily: 'nunito-bold',
  },
  titleText: {
    fontFamily: 'nunito-bold',
    fontSize: 30,
    color: 'red',
    textAlign: 'center',
  },
});
