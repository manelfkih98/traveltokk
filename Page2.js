import React from 'react';
import { TouchableOpacity, Image, StyleSheet, Text, View, Platform, ImageBackground } from 'react-native';
import { useNavigation } from '@react-navigation/native';

export default function Page2() {
  const navigation = useNavigation();
  
  return (
    <ImageBackground
      source={require('./assets/jairph-1XLyzi17Z2M-unsplash 1 (1).png')}
      style={styles.background}>
   
      <View style={styles.container}>
        <Image
          source={require('./assets/Vous.png')}
          style={styles.image}
        />
        <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('Inscrire')}>
          <Text style={styles.buttonText}> Créateur de contenu</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.button}>
          <Text style={styles.buttonText}>Utilisateur</Text> 
        </TouchableOpacity>
        <TouchableOpacity style={styles.button}>
          <Text style={styles.buttonText}>Responsable d’agence</Text>
        </TouchableOpacity>
      </View>
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  background: {
    flex: 1,
    resizeMode: 'cover',
    justifyContent: 'center',
  },
  image: {
    alignSelf: 'center',
    marginTop: 1,
  },
  button: {
    backgroundColor: '#F0833D',
    paddingVertical: 10,
    paddingHorizontal: 20,
    width: 250,
    height: 55,
    borderRadius: 8,
    alignSelf: 'center',
    marginTop: 25,
  },
  buttonText: {
    color: 'white',
    fontSize: 16,
    fontWeight: 'bold',
    textAlign: 'center',
    fontFamily: 'Montserrat-Regular', 
  },
});
