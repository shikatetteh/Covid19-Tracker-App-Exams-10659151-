import React, { useState } from 'react';
import {
  StyleSheet,
  View,
  Button,
  Image,
  Picker,
  TouchableOpacity,
} from 'react-native';

import { AntDesign, Feather } from '@expo/vector-icons';

import { useQuery } from '@apollo/react-hooks';
import { GET_GLOBAL_DATA } from '../components/Query';
import {
  formatNum,
  countries,
  communicate,
  statsData,
} from '../components/global';

export default function report({ navigation }) {
  const { data: globalData, loading: globalDataLoading } = useQuery(
    GET_GLOBAL_DATA
  );

  const [search, setSearch] = useState('');

  return (
    <View style={styles.container}>
      <View style={styles.stretch}>
        <View style={styles.searchContainer}>
          <Picker
            style={styles.search}
            onValueChange={(itemValue, itemIndex) => {
              setSearch(itemValue);
            }}
            selectedValue={search}
          >
            <Picker.Item value=" " label="Select a Country" />
            {countries.map((country) => {
              return (
                <Picker.Item label={country} value={country} key={country} />
              );
            })}
          </Picker>
        </View>

        <View style={styles.MySearch}>
          <TouchableOpacity
            style={styles.search}
            onPress={() => {
              search !== ''
                ? navigation.navigate('Dashboard', {
                    countryName: search,
                    screen: 'DashboardScreen',
                  })
                : null;
            }}
          >
            <AntDesign name="arrowright" size={25} color="black" />
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'row',
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    margin: 10,
  },
  titleText: {
    fontFamily: 'nunito-regular',
    fontSize: 20,
    color: 'black',
  },
  stretch: {
    width: '50%',
    height: 200,
    resizeMode: 'stretch',
  },
});
