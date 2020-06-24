import React, { useState } from 'react';
import * as Font from 'expo-font';
import { NavigationContainer } from '@react-navigation/native';
import { AppLoading } from 'expo';
import HomeStack from './navigation/stackNavigation';
import { AppRegistry } from 'react-native';
import { ApolloClient } from 'apollo-client';
import { HttpLink } from 'apollo-link-http';
import { InMemoryCache } from 'apollo-cache-inmemory';
import { ApolloProvider } from '@apollo/react-hooks';

const client = new ApolloClient({
  link: new HttpLink({ uri: 'https://covid19-graphql.netlify.app/' }),
  cache: new InMemoryCache(),
});

const getFonts = () =>
  Font.loadAsync({
    'nunito-regular': require('./assets/fonts/Nunito-Regular.ttf'),
    'nunito-bold': require('./assets/fonts/Nunito-Bold.ttf'),
  });

export default function App() {
  const [fontsLoaded, setFontsLoaded] = useState(false);

  if (fontsLoaded) {
    return (
      <NavigationContainer>
        <ApolloProvider client={client}>
          <HomeStack />
        </ApolloProvider>
      </NavigationContainer>
    );
  } else {
    return (
      <AppLoading startAsync={getFonts} onFinish={() => setFontsLoaded(true)} />
    );
  }
}

AppRegistry.registerComponent('MyApplication', () => App);
