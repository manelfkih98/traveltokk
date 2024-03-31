import React, { useState } from 'react';
import { StyleSheet, Text, View, Image, Dimensions, TextInput, TouchableOpacity, Alert } from 'react-native';

export default function Connecter() {
  const [emailValue, setEmailValue] = useState('');
  const [passwordValue, setPasswordValue] = useState('');

  const handleEmailChange = (text) => {
    setEmailValue(text);
  };

  const handlePasswordChange = (text) => {
    setPasswordValue(text);
  };

  const validateFields = () => {
    let isValid = true;

    if (!emailValue) {
      isValid = false;
      Alert.alert('Erreur', 'Veuillez saisir votre email');
    } else if (!isValidEmail(emailValue)) {
      isValid = false;
      Alert.alert('Erreur', 'Veuillez saisir une adresse email valide');
    }

    if (!passwordValue) {
      isValid = false;
      Alert.alert('Erreur', 'Veuillez saisir votre mot de passe');
    }

    return isValid;
  };

  const isValidEmail = (email) => {
    return /\S+@\S+\.\S+/.test(email);
  };

  const handleConnect = () => {
    if (validateFields()) {
      console.log('Email:', emailValue);
      console.log('Mot de passe:', passwordValue);
    }
  };

  return (
    <View style={styles.container}>
    <Text style={styles.image}>Connexion</Text>
  
    <Image
      source={require('./assets/Rectangle2.png')}
      style={styles.image2}
      resizeMode="cover"
    />
    <Image
      source={require('./assets/Ellipse.png')}
      style={styles.image3}
    />
    <Image
      source={require('./assets/traveltokICONE.png')}
      style={styles.image4}
    />
  
    <View style={styles.inputContainer1}>
     
      <Image
        source={require('./assets/email 5.png')}
        style={styles.icon}
      />
      <TextInput
        style={styles.input}
        value={emailValue}
        onChangeText={handleEmailChange}
        placeholder="Entrez votre email"
        keyboardType="email-address"
      />
    </View>
  
    <View style={styles.inputContainer3}>
     
      <Image
        source={require('./assets/fermer-a-cle 6.png')}
        style={styles.icon}
      />
      <TextInput
        style={styles.input}
        value={passwordValue}
        onChangeText={handlePasswordChange}
        placeholder="Entrez votre mot de passe"
        secureTextEntry={true}
      />
    </View>
  
    <TouchableOpacity style={styles.button} onPress={handleConnect}>
      <Text style={styles.buttonText}>Se Connecter</Text>
    </TouchableOpacity>
  
    <Text style={styles.text3}>ou connectez-vous avec</Text>
  
    <TouchableOpacity style={styles.buttong}>
      <Image
        source={require('./assets/googleIcon.png')}
        style={styles.buttonIcon}
      />
      <Text style={styles.buttonText}>Google</Text>
    </TouchableOpacity>
  
    <TouchableOpacity style={styles.buttonf}>
      <Image
        source={require('./assets/facebookIcon.png')}
        style={styles.buttonIcon}
      />
      <Text style={styles.buttonText}>Facebook</Text>
    </TouchableOpacity>
  </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: 0,
    backgroundColor: '#4369B0',
  },
  centeredContent: {
    alignItems: 'center', // Centrage vertical
  },
  text: {
    fontSize: 24,
    fontWeight: 'bold',
    color: 'blue',
  },
  image: {
    marginTop: 80,
    alignSelf: 'center',
    fontSize: 20,
    color: "#FFFFFF",
  },
  image2: {
    flex: 1,
    width: Dimensions.get('window').width,
    height: Dimensions.get('window').height,
    marginTop: 100,
  },
  image3: {
    position: 'absolute',
    top: 170,
    alignSelf: 'center',
  },
  image4: {
    position: 'absolute',
    top: 178,
    alignSelf: 'center',
  },
  nom: {
    position: 'absolute',
    top: 256,
    left: 60,
    color: '#F0833D',
    fontSize: 12,
  },
  inputContainer1: {
    flexDirection: 'row',
    alignItems: 'center',
    position: 'absolute',
    top: 277,
    left: 51,
    backgroundColor: 'white',
    width: 300,
    height: 40,
    borderRadius: 10,
    borderWidth: 1,
    borderColor: '#878787',
  },
  icon: {
    width: 24,
    height: 24,
    marginHorizontal: 10,
  },
  input: {
    flex: 1,
    padding: 10,
  },
  Email: {
    position: 'absolute',
    top: 256,
    left: 60,
    color: '#F0833D',
    fontSize: 12,
  },
  Mot_de_passe: {
    position: 'absolute',
    top: 325,
    left: 59,
    color: '#F0833D',
    fontSize: 12,
  },
  inputContainer3: {
    flexDirection: 'row',
    alignItems: 'center',
    position: 'absolute',
    top: 350,
    left: 51,
    backgroundColor: 'white',
    width: 300,
    height: 40,
    borderRadius: 10,
    borderWidth: 1,
    borderColor: '#878787',
  },
  button: {
    backgroundColor: '#4369B0',
    paddingHorizontal: 20,
    paddingVertical: 10,
    borderRadius: 5,
    position: 'absolute',
    width: 147,
    height: 35,
    top: 450,
    alignSelf: 'center',
  },
  buttonText: {
    color: 'white',
    textAlign: 'center',
  },
  text3: {
    position: 'absolute',
    top: 550,
    color: '#26425A',
    alignSelf: 'center',
  },
  text4: {
    position: 'absolute',
    top: 616,
    left: 237,
    color: '#F0833D',
  },
  text5: {
    position: 'absolute',
    top: 690,
    alignSelf: 'center',
    color: '#26425A',
  },
  buttong: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#F0833D',
    paddingHorizontal: 20,
    paddingVertical: 10,
    borderRadius: 5,
    position: 'absolute',
    width: 125,
    height: 35,
    top: 630,
    left: 55,
  },
  buttonIcon: {
    marginRight: 5,
  },
  buttonf: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#F0833D',
    paddingHorizontal: 20,
    paddingVertical: 10,
    borderRadius: 5,
    position: 'absolute',
    width: 125,
    height: 35,
    top: 630,
    left: 230,
  },
  errorText: {
    color: 'red',
    fontSize: 12,
    marginLeft: 10, // Ajoute une marge à gauche pour laisser de l'espace par rapport au champ de saisie
  },
});
