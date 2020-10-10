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
        initialValues={{ text: ''}}
        onSubmit={values => alert("問題ありません")}
        validationSchema={validationSchema} //validationSchemaの追加
        >
        {({ values, touched, errors, handleChange, handleBlur, handleSubmit }) => {
          return (
            <View>
              <TextInput
                value={values.text}
                onChangeText={handleChange('text')}
                placeholder="Input Box"
                onBlur={handleBlur('text')}
              />
              {
                //touchedとerrorはtrueでしたらエラーメッセージを出力します
                touched.text && errors.text &&
                <Text style={styles.error}>{errors.text}</Text>
              } 
              <Button 
                title='登録'
                onPress = {handleSubmit}
              />
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
  text: yup
    .string() //型は文字列
    .max(10, '10文字以下を入れてください')　//11文字以上だったらerrors.textは「10文字以下を入れてください」になる
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