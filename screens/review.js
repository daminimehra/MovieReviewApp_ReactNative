import * as React from 'react';
import { StyleSheet,Text,View,Button ,Image } from "react-native"
import { globalStyles, images } from '../styles/global';
import Card from '../shared/card';


export default function Review({ route}){
const title = route.params;
const rating = route.params.rating;
  return (
    <View style={globalStyles.container}>
     <Card>
     <Text style={globalStyles.titleText}>{route.params.title}</Text>
      <Text >{route.params.body}</Text>
      <View style={styles.rating}>
      <Text >Movie Rating: </Text>
          <Image source={images.ratings[rating]} />
     </View>
     </Card>
    </View>
  );
}

const styles = StyleSheet.create({
  rating: {
    flexDirection: 'row',
    justifyContent: 'center',
    paddingTop: 16,
    marginTop: 16,
    borderTopWidth: 1,
    borderTopColor: '#eee',
  }
});
