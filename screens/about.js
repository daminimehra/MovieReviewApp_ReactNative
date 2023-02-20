import * as React from 'react';
import { Text,View } from "react-native"
import { globalStyles } from '../styles/global';


export default function DetailsScreen({navigation}) {
    return (
      <View style={globalStyles.container}>
             <Text style={globalStyles.titleText}>
              MovR is an app of information related to films, television series, podcasts, home videos, video games, 
              and streaming content online – including cast, production crew and personal biographies, plot summaries, 
              trivia, ratings, and fan and critical reviews</Text>
      </View>
    );
  }