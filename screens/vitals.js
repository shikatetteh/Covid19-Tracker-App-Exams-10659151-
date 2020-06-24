import React, { useState } from 'react';
import {
  View,
  Text,
  Button,
  StyleSheet,
  Dimensions,
  ScrollView,
  Image,
} from 'react-native';

const { width } = Dimensions.get('window');
const height = width * 0.6;

const images = [
  'https://images.pexels.com/photos/3807629/pexels-photo-3807629.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500',
  'https://images.pexels.com/photos/3985214/pexels-photo-3985214.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500',
  'https://images.pexels.com/photos/3961224/pexels-photo-3961224.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500',
];

const vitals = () => {
  const change = ({ nativeEvent }) => {
    const slide = Math.ceil(
      nativeEvent.contentOffset.x / nativeEvent.layoutMeasurement.width
    );

    if (slide !== active) {
      setActive({ active: slide });
    }
  };

  const [active, setActive] = useState(0);

  return (
    <ScrollView>
      <View style={styles.Container}>
        <View>
          <View
            style={{
              paddingTop: 30,
              backgroundColor: 'black',
              alignItems: 'center',
              paddingBottom: 30,
            }}
          >
            <Text
              style={{
                fontFamily: 'nunito-bold',
                fontSize: 25,
                color: 'white',
              }}
            >
              Covid-19 Symptoms And Self Care Advice
            </Text>
          </View>
        </View>

        <View
          style={{
            padding: 30,
            alignItems: 'center',
          }}
        >
          <View style={styles.Slider_Container}>
            <ScrollView
              onScroll={change}
              pagingEnabled
              horizontal
              showsHorizontalScrollIndicator={false}
              style={styles.Scroll}
            >
              {images.map((images, index) => (
                <Image source={{ uri: images }} style={styles.Image_style} />
              ))}
            </ScrollView>
            <View style={styles.pagination}>
              {images.map((i, k) => (
                <Text
                  key={k}
                  style={
                    k == setActive
                      ? styles.paging_ActiveText
                      : styles.paging_Text
                  }
                >
                  ⚪
                </Text>
              ))}
            </View>
          </View>
        </View>

        <View
          style={{
            backgroundColor: 'brown',
            paddingBottom: 30,
            paddingLeft: 10,
            paddingTop: 28,
          }}
        >
          <Text
            style={{
              color: 'white',
            }}
          >
            The symptoms of coronavirus disease 2019 (COVID-19) may appear
            between two to 14 days after exposure. To date, there are no
            specific vaccines or medicines for COVID-19. Treatments are under
            investigation, and will be tested through clinical trials by World
            Health Organization. Symptoms to watch out for are:
          </Text>

          <View
            style={{
              paddingTop: 30,
            }}
          >
            <View
              style={{
                paddingBottom: 20,
              }}
            >
              <Text
                style={{
                  color: 'black',
                  fontSize: 15,
                  fontFamily: 'nunito-regular',
                }}
              >
                ⚪ Dry Cough
              </Text>
            </View>
            <View
              style={{
                paddingBottom: 15,
              }}
            >
              <Text
                style={{
                  color: 'black',
                  fontSize: 15,
                  fontFamily: 'nunito-regular',
                }}
              >
                ⚪ Fever
              </Text>
            </View>
            <View
              style={{
                paddingBottom: 15,
              }}
            >
              <Text
                style={{
                  color: 'black',
                  fontSize: 15,
                  fontFamily: 'nunito-regular',
                }}
              >
                ⚪ Tiredness
              </Text>
            </View>
            <View
              style={{
                paddingBottom: 30,
              }}
            >
              <Text
                style={{
                  color: 'black',
                  fontSize: 15,
                  fontFamily: 'nunito-regular',
                }}
              >
                ⚪ Diarrhoea
              </Text>

              <Text
                style={{
                  color: 'white',
                }}
              >
                It’s very important that you stay at home for 7 days if you have
                symptoms that may be caused by coronavirus (COVID-19), even if
                you think your symptoms are mild.
              </Text>

              <Text
                style={{
                  color: 'black',
                  fontSize: 15,
                  fontFamily: 'nunito-bold',
                }}
              >
                ⚪ Self Care Advice
              </Text>

              <Text
                style={{
                  color: 'white',
                }}
              >
                There are a few things you can do to take care of yourself at
                home. Do not go to your GP, pharmacy or hospital. It’s safe to
                treat most fevers at home. However, you may be at risk of
                becoming dehydrated. You should: wear loose, comfortable
                clothing - don’t try to make yourself too cold drink more fluids
                – you should be peeing (approximately) every 6 hours monitor
                your pee colour – a pale yellow colour means you’re unlikely to
                be dehydrated, whilst darker pee means you should drink more
                water take paracetamol if you have a temperature – always follow
                the manufacturer’s instructions keep your room at a comfortable
                temperature and make sure fresh air is circulating.You should
                phone 111 if you develop any of the following symptoms: Severe
                thirst and peeing less Light-headedness or weakness New, severe
                muscle cramps You should also phone 111 if your symptoms worsen
                or if you notice new symptoms.
              </Text>
            </View>
          </View>
        </View>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  Container: {},
  Slider_Container: {
    marginTop: 10,
    width,
    height,
    paddingTop: 10,
  },
  Scroll: {
    width,
    height,
  },
  Image_style: {
    width,
    height,
    resizeMode: 'cover',
  },
  pagination: {
    flexDirection: 'row',
    position: 'absolute',
    bottom: 0,
    alignSelf: 'center',
  },
  paging_Text: {
    color: '#7C89D6',
    margin: 3,
    fontSize: width / 30,
  },
  paging_ActiveText: {
    color: 'black',
    margin: 3,
    fontSize: width / 30,
  },
});

export default vitals;
