import React from 'react';
import { TextInput, View, Text } from 'react-native';
import { globalStyles } from '../styles/global.js';
import { Formik } from 'formik';
import * as yup from 'yup';
import FlatButton from '../shared/button.js';

const reviewSchema = yup.object({
  title: yup.string()
    .required()
    .min(4),
  body: yup.string()
    .required()
    .min(8),
  rating: yup.string()
    .required()
    .test('is-num-1-5', 'Rating must be a number 1 - 5', (val) => {
      return parseInt(val) < 6 && parseInt(val) > 0;
    }),
});

{/* Formik's handleSubmit is passed to a <Button onPress={...} /> instead of HTML <form onSubmit={...} /> component
 (since there is no <form /> element in React Native).

<TextInput /> uses Formik's handleChange(fieldName) and handleBlur(fieldName) instead of directly assigning the callbacks
 to props, because we have to get the fieldName from somewhere and with React Native we can't get it automatically like
  in web (using input name attribute). You can also use setFieldValue(fieldName, value) and setFieldTouched(fieldName, 
  bool) as an alternative. */}

export default function ReviewForm({ addReview }) {

  return (
    
    <View style={globalStyles.container}>
      <Formik 
      initialValues={{ title: '', body: '', rating: '' }} 
      validationSchema={reviewSchema}
        onSubmit={(values, actions) => 
        { actions.resetForm(); 
         addReview(values); 
         }}>

        {props => (
          <View>
            <TextInput style={globalStyles.input} 
            placeholder='Review title' 
            onChangeText={props.handleChange('title')}
            onBlur={props.handleBlur('title')}
            value={props.values.title} />

            {/* only if the left value is a valid string, will the right value be displayed */}
            <Text style={globalStyles.errorText}>{props.touched.title && props.errors.title}</Text>

            <TextInput style={globalStyles.input}
             multiline minHeight={60}
              placeholder='Movie year details'
              onChangeText={props.handleChange('year')}
              onBlur={props.handleBlur('year')}
              value={props.values.year} 
              keyboardType='numeric' />
            <Text style={globalStyles.errorText}>{props.touched.year && props.errors.year}</Text>

            <TextInput style={globalStyles.input}
             multiline minHeight={60}
              placeholder='Review details'
              onChangeText={props.handleChange('body')} 
              onBlur={props.handleBlur('body')} 
               value={props.values.body}/>
            <Text style={globalStyles.errorText}>{props.touched.body && props.errors.body}</Text>

            <TextInput style={globalStyles.input} 
            placeholder='Rating (1 - 5)'
              onChangeText={props.handleChange('rating')}
               onBlur={props.handleBlur('rating')} 
              value={props.values.rating}
               keyboardType='numeric' />
            <Text style={globalStyles.errorText}>{props.touched.rating && props.errors.rating}</Text>
            
            <FlatButton onPress={props.handleSubmit} text='submit' />
          </View>
        )}
      </Formik>
    </View>
    
  );
}