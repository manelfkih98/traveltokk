import React from 'react';
import { TouchableOpacity, ImageBackground, Image, StyleSheet, Text, View } from 'react-native';
import { useNavigation } from '@react-navigation/native'; // Importez useNavigation

export default function Page1() {
  const navigation = useNavigation(); // Initialisez la navigation

  return (
    <ImageBackground
      source={require('./assets/jairph-1XLyzi17Z2M-unsplash 1 (1).png')}
      style={styles.background}>
      <View style={styles.container}>
        <Image
          source={require('./assets/traveltok.png')}
          style={styles.image}
        />
        <Image
          source={require('./assets/moment.png')}
          style={styles.moment}
        />
        <Image
          source={require('./assets/Explorez.png')}
          style={styles.explorez}
        />
        {/* Utilisez TouchableOpacity pour rendre le texte "Bienvenue" cliquable */}
        <TouchableOpacity onPress={() => navigation.navigate('Page2')}>
          <Text style={styles.button}>Bienvenue</Text>
        </TouchableOpacity>
      </View>
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  background: {
    flex: 1,
    resizeMode: 'cover',
    justifyContent: 'center',
  },
  image: {
    alignSelf: 'center', // Centrer horizontalement
    marginTop: 75,
  },
  moment: {
    marginLeft: 29,
    marginTop: 200,
  },
  explorez: {
    marginLeft: 31,
    marginTop: 20,
  },
  button: {
    position: 'absolute', 
    backgroundColor: '#F0833D',
    paddingVertical: 10,
    paddingHorizontal: 20,
    width: 204,
    height: 40,
    borderRadius: 8,
    alignSelf: 'center',
    Top: 400,
    color: 'white',
    fontSize: 16,
    fontFamily: 'Kavoon',
    textAlign: 'center',
    fontWeight: 'bold',
    textAlignVertical: 'center',
  },
});
