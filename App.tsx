import React, {Component} from 'react';
import {
  TextInput,
  Button,
  Text,
  View,
  StyleSheet,
} from 'react-native';
import { Formik　}  from 'formik';
import * as yup from 'yup';

export default class App extends Component {
  render() {
    return (
      <View style={styles.container}>
      <Formik 
        initialValues={{ text1: '', text2: '',}}
        validationSchema={validationSchema} //validationSchemaの追加
        >
        {({ values, touched, errors, handleChange, handleBlur, handleSubmit }) => {
          return (
            <View>
              <TextInput
                value={values.text1}
                onChangeText={handleChange('text1')}
                placeholder="Input Box"
                onBlur={handleBlur('text')}
                handleSubmit = {handleSubmit}
              />
              { touched.text1 && errors.text1 && <Text style={styles.error}>{errors.text1}</Text> } 
              <Button 
                title='登録'
                onPress = {handleSubmit}
              />
              <TextInput
                value={values.text2}
                onChangeText={handleChange('text2')}
                placeholder="Input Box"
                onBlur={handleBlur('text')}
                handleSubmit = {handleSubmit}
              />
              { touched.text2 && errors.text2 && <Text style={styles.error}>{errors.text2}</Text> } 
            </View>  
          );
      }}
      </Formik>
      </View>
    );
  }
}

//YupのvalidationSchema
const validationSchema = yup.object().shape({
  text1: yup
    .string() //型は文字列
    .max(20, '10文字以下を入れてください'),
  text2: yup
    .string() //型は文字列
    .max(10, '10文字以下を入れてください'),//11文字以上だったらerrors.textは「10文字以下を入れてください」になる
});



const styles = StyleSheet.create({
  error: {
    color: 'red'
  },
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  }
});