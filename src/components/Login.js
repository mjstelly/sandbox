// Formik x React Native example
import React from 'react';
import {Button, TextInput, Text, View} from 'react-native';
import {Formik} from 'formik';
import Reactotron from 'reactotron-react-native';

const Login = props => (
  <Formik
    initialValues={{email: ''}}
    onSubmit={values => Reactotron.log(values)}>
    {({handleChange, handleBlur, handleSubmit, values}) => (
      // eslint-disable-next-line react-native/no-inline-styles
      <View style={{flex: 1}}>
        {Reactotron.log('hello rendering world')}
        <Text style={{fontSize: 20}}>Email</Text>
        <TextInput
          onChangeText={handleChange('email')}
          onBlur={handleBlur('email')}
          value={values.email}
          style={{backgroundColor: 'cyan', height: 30}}
        />
        <Button onPress={handleSubmit} title="Submit" />
      </View>
    )}
  </Formik>
);
export default Login;
