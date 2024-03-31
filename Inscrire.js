import React, { useState } from 'react';
import { StyleSheet, Text, View, Image, Dimensions, TextInput, TouchableOpacity, Alert } from 'react-native';
import * as ImagePicker from 'expo-image-picker';
import { useNavigation } from '@react-navigation/native';

export default function Inscrire() {
 
  const [email, setEmail] = useState('');
  const [nom, setNom] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [profileImage, setProfileImage] = useState(null);
  const isValidEmail = (email) => {
    return /\S+@\S+\.\S+/.test(email);
  };
  const navigation = useNavigation();
  const handleInputChange = (text, field) => {
    if (field === 'nom') {
      setNom(text);
    } else if (field === 'email') {
      setEmail(text);
    } else if (field === 'password') {
      setPassword(text);
    } else if (field === 'confirmPassword') {
      setConfirmPassword(text);
    }
  };

  const handleChooseImage = async () => {
    const permissionResult = await ImagePicker.requestMediaLibraryPermissionsAsync();

    //if (permissionResult.granted === false) {
    //  Alert.alert('Permission Denied', 'Permission to access camera roll is required!');
    //  return;
   // }

    const pickerResult = await ImagePicker.launchImageLibraryAsync();

    if (pickerResult.cancelled === true) {
      return;
    }

    setProfileImage(pickerResult.uri);
  };

  const handleSignUp = () => {
    // Perform validation
    if (!email || !password || !confirmPassword || !nom) {
      Alert.alert('Error', 'Veuillez remplir tous les champs obligatoires');
      return;
    }

    if (password !== confirmPassword) {
      Alert.alert('Error', 'Les mots de passe ne correspondent pas');
      return;

    }
if (!isValidEmail(email)) {
      isValid = false;
      Alert.alert('Erreur', 'Veuillez saisir une adresse email valide');
    }
    // Proceed with sign up process
    // Your sign-up logic here
  };

  return (
    <View style={styles.container}>
      <Text style={styles.image}> Créer un nouveau compte</Text>
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
      <Text style={styles.nom}> Votre Nom</Text>
      <View style={styles.inputContainer1}>
        <Image
          source={require('./assets/utilisateur.png')}
          style={styles.icon}
        />
        <TextInput
          style={styles.input}
          placeholder="Enter your name"
          value={nom}
          onChangeText={(text) => handleInputChange(text, 'nom')}
        />
      </View>
      <Text style={styles.Email}> Votre Email</Text>
      <View style={styles.inputContainer2}>
        <Image
          source={require('./assets/email 5.png')}
          style={styles.icon}
        />
        <TextInput
          style={styles.input}
          placeholder="Enter your email"
          value={email}
          onChangeText={(text) => handleInputChange(text, 'email')}
          keyboardType="email-address"
        />
      </View>
      <TouchableOpacity style={styles.profileImageContainer} onPress={handleChooseImage}>
        {profileImage ? (
          <Image source={{ uri: profileImage }} style={styles.profileImage} />
        ) : (
          <Text style={styles.addProfileImageText}>Ajouter une photo de profil</Text>
        )}
      </TouchableOpacity>
      <Text style={styles.Mot_de_passe}> Votre Mot de passe</Text>
      <View style={styles.inputContainer3}>
        <Image
          source={require('./assets/fermer-a-cle 6.png')}
          style={styles.icon}
        />
        <TextInput
          style={styles.input}
          placeholder="Enter your password"
          secureTextEntry={true}
          value={password}
          onChangeText={(text) => handleInputChange(text, 'password')}
        />
      </View>
      <Text style={styles.Confirmez}> Confirmez votre mot de passe</Text>
      <View style={styles.inputContainer4}>
        <Image
          source={require('./assets/fermer-a-cle 6.png')}
          style={styles.icon}
        />
        <TextInput
          style={styles.input}
          placeholder="Confirm your password"
          secureTextEntry={true}
          value={confirmPassword}
          onChangeText={(text) => handleInputChange(text, 'confirmPassword')}
        />
      </View>
      <TouchableOpacity style={styles.button} onPress={handleSignUp}>
        <Text style={styles.buttonText}>S’inscrire</Text>
      </TouchableOpacity>
      <Text style={styles.text3}>Vous avez déjà un compte ?</Text>
      <Text style={styles.text4} onPress={() => navigation.navigate('Connecter')}> Se Connecter</Text>

      <Text style={styles.text5}> ou inscrivez-vous avec</Text>
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
    fontSize:20,
    color:"#FFFFFF"

  },
  image2:{
    
    flex: 1, 
    width: Dimensions.get('window').width,
    height: Dimensions.get('window').height, 
    marginTop: 50
  },
  image3:{
    position: 'absolute', 
    top: 125, 
    alignSelf: 'center',
  },
  image4:{
    position: 'absolute', 
    top: 135, 
    alignSelf: 'center',
  },
  nom:{
    position: 'absolute', 
    top: 225, 
    left:60,
    color:'#F0833D',
    fontSize:12,
    
  },
  inputContainer1: {
    flexDirection: 'row',
    alignItems: 'center',
    position: 'absolute',
    top: 250,
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
  Email:{
    position: 'absolute', 
    top: 300,
    left:59,
   
    color:'#F0833D',
    fontSize:12,
  },inputContainer2: {
    flexDirection: 'row',
    alignItems: 'center',
    position: 'absolute',
    top: 325,
    left: 51,
    backgroundColor: 'white',
    width: 300,
    height: 40,
    borderRadius: 10,
    borderWidth: 1,
    borderColor: '#878787',
  },
  Mot_de_passe:{
    position: 'absolute', 
    top: 370, 
    left:59,
    color:'#F0833D',
    fontSize:12,
  },
  inputContainer3:{
    flexDirection: 'row',
    alignItems: 'center',
    position: 'absolute',
    top: 400,
    left: 51,
    backgroundColor: 'white',
    width: 300,
    height: 40,
    borderRadius: 10,
    borderWidth: 1,
    borderColor: '#878787',
  },
  Confirmez:{
    position: 'absolute', 

    top: 450,
    left:59,
    color:'#F0833D',
    fontSize:12,
  },
  inputContainer4:{
    flexDirection: 'row',
    alignItems: 'center',
    position: 'absolute',
    top: 475,
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
    width:147,
    height:35,
    top: 610,
   
    alignSelf: 'center',
  },
  buttonText: {
    color: 'white',
    textAlign: 'center'
    },
    text3:{
      position: 'absolute', 
      top: 675,
      left:51,
      color:'#26425A'
    },
    text4:{
      position: 'absolute', 
      top: 675,
      left:237,
      color:'#F0833D'
    },
    text5:{
      position: 'absolute', 
      top: 710,
      alignSelf: 'center',
      color:'#26425A'
    }
    ,
  buttong: {
    flexDirection: 'row', // Pour aligner l'icône et le texte horizontalement
    alignItems: 'center',
    backgroundColor: '#F0833D',
    paddingHorizontal: 20,
    paddingVertical: 10,
    borderRadius: 5,
    position: 'absolute', 
    width:125,
    height:35,
    top: 750,
    left:55,
  },
  buttonIcon: {
   
    marginRight: 5, // Ajoute une marge à droite de l'icône
  },
  buttonf: {
    flexDirection: 'row', // Pour aligner l'icône et le texte horizontalement
    alignItems: 'center',
    backgroundColor: '#F0833D',
    paddingHorizontal: 20,
    paddingVertical: 10,
    borderRadius: 5,
    position: 'absolute', 
    width:125,
    height:35,
    top: 750,
    left:230,
    flexDirection: 'row', 
  },
  image: {
    marginTop: 80, 
    alignSelf: 'center',
    fontSize:20,
    color:"#FFFFFF"
  },
  profileImageContainer: {
    position: 'absolute', 
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'white',
    borderRadius: 10,
    borderWidth: 1,
    borderColor: '#878787',
    backgroundColor: 'white',
    width: 300,
    height: 40,
    borderRadius: 10,
    borderWidth: 1,
    borderColor: '#878787',
    alignSelf: 'center',
    top:540,
    left: 51,
  },
  profileImage: {
    width: '100%',
    height: '100%',
    borderRadius: 10,
  },
  addProfileImageText: {
    color: '#878787',
    fontSize: 16,
  },

});
