import React, { useState } from 'react';
import { View, StyleSheet, Dimensions ,Image,TouchableOpacity,Text,TextInput} from 'react-native';
import * as ImagePicker from 'expo-image-picker';
export default function EditProfil() {
  const screenWidth = Dimensions.get('window').width;
  const [profileImage, setProfileImage] = useState(null);
  const [nom, setNom] = useState('manel');
  const [bio, setBio] = useState('');
  const [actuel, setActuel] = useState('manel123');
  const [Nouveau, setNouveau] = useState('');
  const [Confirmer, setConfirmer] = useState('');
  const [errorMessage, setErrorMessage] = useState('');
  const handleInputChange = (text, field) => {
    if (field === 'nom') {
      setNom(text);
    } else if (field === 'bio') {
      setBio(text);
    }else if (field === 'actuel') {
      setActuel(text);
    
  }else if (field === 'Nouveau') {
    setNouveau(text);
  } 
  else if (field === 'Confirmer') {
    setConfirmer(text);
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
  const handleConfirm = () => {
    if (Nouveau !== Confirmer) {
      setErrorMessage("Les mots de passe ne correspondent pas");
      return;
    }  };
  return (
    <View>
    <View style={[styles.rectangle, { width: screenWidth }]}>
      <Image
          source={require('./assets/traveltok ktiba 2.png')}
          style={styles.image}
        />


        <View style={styles.imageContainer}>
  <Image 
        source={require('./assets/OIP 1.png')} 
        style={styles.imagep} 
      />
</View>
<TouchableOpacity  onPress={handleChooseImage}>
      {profileImage ? (
        <Image source={{ uri: profileImage }} style={styles.profileImage} />
      ) : (
        <Text style={styles.addProfileImageText}>Modifier la photo</Text>
      )}
    </TouchableOpacity>
    </View>
    <Text style={styles.nom}> Nom d’utilisateur </Text>
    <View style={styles.inputContainer1}>
    <TextInput
          style={styles.input}
         
          value={nom}
          onChangeText={(text) => handleInputChange(text, 'nom')}
        
        />
    </View>
    <Text style={styles.bio}> Bio </Text>
    <View style={styles.inputContainer2}>
    <TextInput
          style={styles.input}
         
          value={bio}
          onChangeText={(text) => handleInputChange(text, 'bio')}
         
        />
    </View>
    <Text style={styles.actuel}> Mot de passe actuel </Text>
    <View style={styles.inputContainer3}>
    <TextInput
          style={styles.input}
         
          value={actuel}
          onChangeText={(text) => handleInputChange(text, 'actuel')}
         
        />
    </View>
    <Text style={styles.Nouveau}> Nouveau mot de passe </Text>
    <View style={styles.inputContainer4}>
    <TextInput
          style={styles.input}
         placeholder='Nouveau mot de passe'
          value={Nouveau}
          onChangeText={(text) => handleInputChange(text, 'Nouveau')}
         
        />
    </View>
    <Text style={styles.Confirmer}> Confirmer mot de passe </Text>
    <View style={styles.inputContainer5}>
    <TextInput
          style={styles.input}
         placeholder='Confirmer mot de passe'
          value={Confirmer}
          onChangeText={(text) => handleInputChange(text, 'Confirmer')}
         
        />
    </View>
    <TouchableOpacity style={styles.button} >
        <Text style={styles.buttonText}>Confirmer</Text>
      </TouchableOpacity>
      {errorMessage ? <Text style={styles.errorMessage}>{errorMessage}</Text> : null}
    </View>
  );
}

const styles = StyleSheet.create({
  rectangle: {
    height: 190,
    backgroundColor: '#4369B0',  
    borderBottomRightRadius: 58,
    borderBottomLeftRadius:58,
  },
  buttonText: {
    color: 'white',
    textAlign: 'center'
    },
  image: {
    
    position: 'absolute', 
    top: 41, 
    left:312,
  },
  imager: {
    
    position: 'absolute', 
    top: 20, 
    left:30,
    width:25,
    height:25,
  },
  
  imagep: {
    position: 'absolute', 
    top: 70, 
    left:180,
    resizeMode: 'cover', 
  },
  errorMessage:{
    color: 'red',
    fontSize: 12,
  },
  profileImage: {
    width: '100%',
    height: '100%',
    resizeMode: 'cover',
  },
  addProfileImageText: {
    position: 'absolute', 
    fontSize: 14,
    color: '#FFFFFF',
    top: 130, 
    left:140,
  },
  nom:{
    position: 'absolute', 
    top: 220, 
    left:63,
    color:'#F0833D',
    fontSize:15,
    
  },

  input: {
    flex: 1,
    padding: 10,
  },
  inputContainer1: {
    flexDirection: 'row',
    alignItems: 'center',
    position: 'absolute',
    top: 243,
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
    top: 590,
   
    alignSelf: 'center',
  },
  bio:{
    position: 'absolute', 
    top: 295, 
    left:63,
    color:'#F0833D',
    fontSize:15,
    
  },
  inputContainer2: {
    flexDirection: 'row',
    alignItems: 'center',
    position: 'absolute',
    top: 315,
    left: 51,
    backgroundColor: 'white',
    width: 300,
    height: 40,
    borderRadius: 10,
    borderWidth: 1,
    borderColor: '#878787',
  },
  actuel:
  {
    position: 'absolute', 
    top: 360, 
    left:63,
    color:'#F0833D',
    fontSize:15,
  },
   inputContainer3: {
    flexDirection: 'row',
    alignItems: 'center',
    position: 'absolute',
    top: 380,
    left: 51,
    backgroundColor: 'white',
    width: 300,
    height: 40,
    borderRadius: 10,
    borderWidth: 1,
    borderColor: '#878787',
  },
  Nouveau:{
    position: 'absolute', 
    top: 425, 
    left:63,
    color:'#F0833D',
    fontSize:15,
  },
  inputContainer4: {
    flexDirection: 'row',
    alignItems: 'center',
    position: 'absolute',
    top: 445,
    left: 51,
    backgroundColor: 'white',
    width: 300,
    height: 40,
    borderRadius: 10,
    borderWidth: 1,
    borderColor: '#878787',
  },
  inputContainer5: {
    flexDirection: 'row',
    alignItems: 'center',
    position: 'absolute',
    top: 510,
    left: 51,
    backgroundColor: 'white',
    width: 300,
    height: 40,
    borderRadius: 10,
    borderWidth: 1,
    borderColor: '#878787',
  },
  Confirmer:{
    position: 'absolute', 
    top: 490, 
    left:63,
    color:'#F0833D',
    fontSize:15,
  }
});
