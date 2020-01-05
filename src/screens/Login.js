// Formik x React Native example
import React from 'react';
import {Button, TextInput, Text, StyleSheet, View} from 'react-native';
import {Formik} from 'formik';

const Login = props => (
  <Formik
    initialValues={{email: ''}}
    onSubmit={values => console.tron.log(values)}>
    {({handleChange, handleBlur, handleSubmit, values}) => (
      <View style={styles.viewStyle}>
        {console.tron.log('hello rendering world')}
        <Text style={styles.textStyle}>Email</Text>
        <TextInput
          onChangeText={handleChange('email')}
          onBlur={handleBlur('email')}
          value={values.email}
          style={styles.textInputStyle}
        />
        <Button onPress={handleSubmit} title="Submit" />
      </View>
    )}
  </Formik>
);
const styles = StyleSheet.create({
  textStyle: {
    fontSize: 20,
  },
  textInputStyle: {
    backgroundColor: 'cyan',
    height: 30,
  },
  viewStyle: {
    flex: 1,
  },
});
export default Login;
