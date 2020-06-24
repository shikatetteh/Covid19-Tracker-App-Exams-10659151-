import React from 'react';
import { StyleSheet, Text, View, Button, ScrollView } from 'react-native';

export default function Information({ navigation }) {
  return (
    <View style={styles.container}>
      <ScrollView>
        <Text style={styles.titleText}>Know About COVID-19</Text>
        <Text style={styles.text}>
          <Text>
            • Coronavirus (COVID-19) is an illness caused by a virus that can
            spread from person to person.{' '}
          </Text>
          <Text>
            • The virus that causes COVID-19 is a new coronavirus that has
            spread throughout the world.
          </Text>
          • COVID-19
          <Text>
            Symptoms can range from mild (or no symptoms) to severe illness.
          </Text>
          <Text>Know how COVID-19 is spread</Text>
          <Text>
            • You can become infected by coming into close contact (about 6 feet
            or two arm lengths) with a person who has COVID-19. COVID-19 is
            primarily spread from person to person.
          </Text>
          <Text>
            • You can become infected from respiratory droplets when an infected
            person coughs, sneezes, or talks.
          </Text>
          <Text>
            • You may also be able to get it by touching a surface or object
            that has the virus on it, and then by touching your mouth, nose, or
            eyes. Protect yourself and others from COVID-19
          </Text>
          <Text>
            •There is currently no vaccine to protect against COVID-19. The best
            way to protect yourself is to avoid being exposed to the virus that
            causes COVID-19.
          </Text>
          <Text>
            • Stay home as much as possible and avoid close contact with others.
          </Text>
          <Text>
            • Wear a cloth face covering that covers your nose and mouth in
            public settings.
          </Text>
          <Text> • Clean and disinfect frequently touched surfaces.</Text>
          <Text>
            • Wash your hands often with soap and water for at least 20 seconds,
            or use an alcoholbased hand sanitizer that contains at least 60%
            alcohol. Practice social distancing
          </Text>
          <Text>
            • Buy groceries and medicine, go to the doctor, and complete banking
            activities online when possible.
          </Text>
          <Text>
            • If you must go in person, stay at least 6 feet away from others
            and disinfect items you must touch. • Get deliveries and takeout,
            and limit in-person contact as much as possible. Prevent the spread
            of COVID-19 if you are sick
          </Text>
          <Text>
            • Stay home if you are sick, except to get medical care. • Avoid
            public transportation, ride-sharing, or taxis. • Separate yourself
            from other people and pets in your home. • There is no specific
            treatment for COVID-19, but you can seek medical care to help
            relieve your symptoms. • If you need medical attention, call ahead.
            Know your risk for severe illness • Everyone is at risk of getting
            COVID-19. • Older adults and people of any age who have serious
            underlying medical conditions may be at higher risk for more severe
            illness. To prevent the spread of COVID-19: Clean your hands often.
            Use soap and water, or an alcohol-based hand rub. Maintain a safe
            distance from anyone who is coughing or sneezing. Don’t touch your
            eyes, nose or mouth. Cover your nose and mouth with your bent elbow
            or a tissue when you cough or sneeze. Stay home if you feel unwell.
            If you have a fever, cough and difficulty breathing, seek medical
            attention. Call in advance. Follow the directions of your local
            health authority. Avoiding unneeded visits to medical facilities
            allows healthcare systems to operate more effectively, therefore
            protecting you and others.
          </Text>
        </Text>
      </ScrollView>
      <View style={{ alignItems: 'flex-end', justifyContent: 'flex-end' }}>
        <Button
          title="Get Updates On Countries"
          onPress={() => navigation.navigate('home', { screen: 'home' })}
          color="black"
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  titleText: {
    fontFamily: 'nunito-bold',
    fontSize: 30,
    color: 'red',
    textAlign: 'center',
    height: 80,
  },
  text: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    padding: 25,
    fontFamily: 'nunito-bold',
    fontSize: 15,
    marginVertical: 8,
    lineHeight: 20,
  },
});
