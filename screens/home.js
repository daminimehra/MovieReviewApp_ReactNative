import * as React from 'react';
import { useState } from 'react';
import { StyleSheet, View, Text, TouchableOpacity, Modal,
  TouchableWithoutFeedback, Keyboard } from 'react-native';
import { FlatList } from 'react-native-gesture-handler';
import {MaterialIcons } from '@expo/vector-icons';
import { globalStyles } from '../styles/global';
import Card from '../shared/card';
import Form from './form';



export default function HomeScreen({ navigation }) {
const [modalOpen , setModalOpen] = useState(false);
const [reviews, setReviews] = useState([
  { title: 'Shehzada', year:'2023',rating: 3, body: 'Bantu is hated by his father Valmiki since he was a toddler. Samara, his boss show him affection and love until he discovers that the Jindals are his parents. Bantu decides to seek Jindals love and protect them from threats they facing.', key: '1' },
  { title: 'Mission Majnu', year:'2023', rating: 4, body: 'In the 1970s, an undercover Indian spy takes on a deadly mission to expose a covert nuclear weapons program in the heart of Pakistan.', key: '2' },
  { title: 'Kantara', rating: 5, year:'2022', body: 'It involves culture of Kambala and Bhootha Kola. A human and nature conflict where Shiva is a rebel who defends his village and nature. A death leads to war between villagers and evil forces. Will he be able to regain peace in the village?', key: '3' },
  { title: 'Sita Raman', rating: 5, year:'2022', body: 'An orphan soldier, Lieutenant Ram life changes, after he gets a letter from a girl named Sita. He meets her and love blossoms between them. When he comes back to his camp in Kashmir,After he gets caught in jail, he sends a letter to Sita which would not reach her.', key: '4' },
  { title: 'Brahmastra Part One: Shiva', year:'2022', rating: 4, body: 'This is the story of Shiva who sets out in search of love and self-discovery. During his journey, he has to face many evil forces that threaten our existence.', key: '5' },
]);


const addReview = (review) =>{
  review.key = Math.random().toString();
  setReviews((currentReviews)=>{
    return [review, ...currentReviews];
  })
  setModalOpen(false);
}

  return (
    <View style={globalStyles.container}>

    <Modal visible={modalOpen} animationType="slide">
    <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
      <View style={styles.modalContent}>
        <MaterialIcons name="close" size={24}  style={{...styles.modalToggle, ...styles.modalClose}} 
              onPress={() => setModalOpen(false)} />
      <Form addReview={addReview} />
      </View>
      </TouchableWithoutFeedback>
    </Modal>


    <MaterialIcons name="add"  size={24} 
        style={styles.modalToggle}
        onPress={() => setModalOpen(true)}   />

      <FlatList data={reviews} renderItem = {({item})=>(  
        <TouchableOpacity onPress={()=>navigation.navigate('Review', item)}>
        <Card>
        <Text style={globalStyles.titleText}>{item.title}</Text>
        <Text style={globalStyles.titleText}>{item.year}</Text>
        </Card>
        </TouchableOpacity>
      )}/>

    </View>
  );
}


const styles = StyleSheet.create({
  modalToggle: {
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 10,
    borderWidth: 0,
   
    padding: 10,
    borderRadius: 10,
    alignSelf: 'center',
  },
  modalClose: {
    marginTop: 20,
    marginBottom: 0,
  },
  modalContent: {
    flex: 1,
  }
});