import React from 'react';
import {
  StyleSheet,
  Text,
  View,
  Dimensions,
  ActivityIndicator,
} from 'react-native';
import Header from '../components/Header';
import { PieChart } from 'react-native-chart-kit';
import { useQuery } from 'react-apollo';
import { GET_COUNTRY_DATA } from '../components/Query';
import { FlatList } from 'react-native-gesture-handler';
import { statsData, formatNum } from '../components/global';

const DashboardScreen = ({ route, navigation }) => {
  const { countryName } = route.params;
  const { data: countryData, loading, error } = useQuery(GET_COUNTRY_DATA, {
    variables: { countryName },
  });

  if (error) {
    console.log(error);
  }

  return (
    <View style={styles.container}>
      <Header navigation={navigation} title={countryName} />
      <View>
        <View style={{ alignItems: 'center', paddingVertical: 5 }}>
          <Text style={{ fontSize: 20, fontFamily: 'nunito-bold' }}>
            Representation of Cases Using the PieChart
          </Text>
        </View>

        <View>
          {loading ? (
            <View style={{ justifyContent: 'center', alignItems: 'center' }}>
              <ActivityIndicator size="large" color="#ED4430" />
            </View>
          ) : countryData ? (
            <View
              style={{
                backgroundColor: 'black',
                alignItems: 'center',
                justifyContent: 'center',
              }}
            >
              <View>
                <Text>Cases</Text>
                <Text>{countryData.country.result.cases}</Text>
              </View>

              <View>
                <Text>Death Cases</Text>
                <Text>{countryData.country.result.deaths}</Text>
              </View>

              <View>
                <Text>Tests</Text>
                <Text>{countryData.country.result.tests}</Text>
              </View>

              <View>
                <Text>Recovered Cases</Text>
                <Text>{countryData.country.result.recovered}</Text>
              </View>
            </View>
          ) : null}
        </View>
      </View>
    </View>
  );
};

export default DashboardScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFF',
  },
  card: {
    width: 160,
    height: 55,
    margin: 3,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 3,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.22,
    shadowRadius: 2.22,

    elevation: 3,
  },
  summary: {
    justifyContent: 'center',
    alignItems: 'center',
    paddingVertical: 10,
  },
});
