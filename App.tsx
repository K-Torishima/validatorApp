import * as yup from 'yup';
import {Formik} from 'formik';

import React, {Component, Fragment} from 'react';
import {TextInput, Text, Alert, StyleSheet, View} from 'react-native';

export default class App extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Formik
          initialValues={{email: '', password: ''}}
          validationSchema={yup.object().shape({
            email: yup.string().email().required('これれれえr'),
            password: yup
              .string()
              .min(6)
              .required('ergジェrp:青gジェアポrgジェprgj」＠'),
          })}>
          {({values, handleChange, errors, setFieldTouched, touched}) => (
            <Fragment>
              <TextInput
                value={values.email}
                onChangeText={handleChange('email')}
                onBlur={() => setFieldTouched('email')}
                placeholder="E-mail"
              />
              {touched.email && errors.email && (
                <Text style={{fontSize: 10, color: 'red'}}>{errors.email}</Text>
              )}
              <TextInput
                value={values.password}
                onChangeText={handleChange('password')}
                placeholder="Password"
                onBlur={() => setFieldTouched('password')}
                secureTextEntry={true}
              />
              {touched.password && errors.password && (
                <Text style={{fontSize: 10, color: 'red'}}>
                  {errors.password}
                </Text>
              )}
            </Fragment>
          )}
        </Formik>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
