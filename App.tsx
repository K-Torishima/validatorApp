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

// export default class App extends Component {
//   render() {
//     return (
//       <View style={styles.container}>
//       <Formik 
//         initialValues={{ text1: '', text2: '',}}
//         validationSchema={validationSchema} //validationSchemaの追加
//         >
//         {({ values, touched, errors, handleChange, handleBlur, handleSubmit }) => {
//           return (
//             <View>
//               <TextInput
//                 value={values.text1}
//                 onChangeText={handleChange('text1')}
//                 placeholder="Input Box"
//                 onBlur={handleBlur('text1')}
//                 handleSubmit = {handleSubmit}
//               />
//               { touched.text1 && errors.text1 && <Text style={styles.error}>{errors.text1}</Text> } 
//               <Button 
//                 title='登録'
//                 onPress = {handleSubmit}
//               />
//               <TextInput
//                 value={values.text2}
//                 onChangeText={handleChange('text2')}
//                 placeholder="Input Box"
//                 onBlur={handleBlur('text')}
//                 handleSubmit = {handleSubmit}
//               />
//               { touched.text2 && errors.text2 && <Text style={styles.error}>{errors.text2}</Text> } 
//             </View>  
//           );
//       }}
//       </Formik>
//       </View>
//     );
//   }
// }

// //YupのvalidationSchema
// const validationSchema = yup.object().shape({
//   text1: yup
//     .string() //型は文字列
//     .max(20, '10文字以下を入れてください'),
//   text2: yup
//     .string() //型は文字列
//     .max(10, '10文字以下を入れてください'),
// });

// const styles = StyleSheet.create({
//   error: {
//     color: 'red'
//   },
//   container: {
//     flex: 1,
//     alignItems: 'center',
//     justifyContent: 'center',
//   }
// });




export default class App extends Component {
  render() {
    return (
      <View style={styles.container}>
      <Formik 
        initialValues={{ 
          text: '',
          email: '',
          password: '',
          zenkaku: '',
          hangakueisuji: '',
          number: '',
          date: ''
        }}
        onSubmit={values => alert("問題ありません")}
        validationSchema={validationSchema} //validationSchemaを追加
        >
        {({ values, touched, errors, handleChange, handleBlur, handleSubmit }) => {
          return (
            <View>
              <TextInput style={styles.input}
                value={values.text}
                onChangeText={handleChange('text')}
                placeholder="10文字以下"
                onBlur={handleBlur('text')}
              />
              {
                //touchedとerrorはtrueでしたらエラーメッセージを出力します
                touched.text && errors.text &&
                <Text style={styles.error}>{errors.text}</Text>
              } 
              <TextInput style={styles.input}
                value={values.email}
                onChangeText={handleChange('email')}
                placeholder="メールアドレス"
                onBlur={handleBlur('email')}
              />
              {
                touched.email && errors.email &&
                <Text style={styles.error}>{errors.text}</Text>
              }
              <TextInput style={styles.input}
                value={values.password}
                onChangeText={handleChange('password')}
                placeholder="パスワード"
                onBlur={handleBlur('password')}
                secureTextEntry={true}　//文字を隠れるために
              />
              {
                touched.password && errors.password &&
                <Text style={styles.error}>{errors.password}</Text>
              }
              <TextInput style={styles.input}
                value={values.zenkaku}
                onChangeText={handleChange('zenkaku')}
                placeholder="全角文字のみ（空文字OK）"
                onBlur={handleBlur('zenkaku')}
              />
              {
                touched.zenkaku && errors.zenkaku &&
                <Text style={styles.error}>{errors.zenkaku}</Text>
              }
              <TextInput style={styles.input}
                value={values.hangakueisuji}
                onChangeText={handleChange('hangakueisuji')}
                placeholder="半角英数字のみ（空文字OK）"
                onBlur={handleBlur('hangakueisuji')}
              />
              {
                touched.hangakueisuji && errors.hangakueisuji &&
                <Text style={styles.error}>{errors.hangakueisuji}</Text>
              }
              <TextInput style={styles.input}
                value={values.number}
                onChangeText={handleChange('number')}
                placeholder="数字"
                onBlur={handleBlur('number')}
              />
              {
                touched.number && errors.number &&
                <Text style={styles.error}>{errors.number}</Text>
              }
              <TextInput style={styles.input}
                value={values.date}
                onChangeText={handleChange('date')}
                placeholder="日付"
                onBlur={handleBlur('date')}
              />
              {
                touched.date && errors.date &&
                <Text style={styles.error}>{errors.date}</Text>
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

const validationSchema = yup.object().shape({
  text: yup
    .string()
    .required('メッセージを入力してください') //空白でしたらerrors.textは「メッセージを入力してください」になる
    .max(10, '10文字以下を入れてください'),　//11文字以上だったらerrors.textは「10文字以下を入れてください」になる
  email: yup
    .string()
    .email('正しいメールアドレスを入力してください'),
  password: yup
    .string()
    .required('パスワードを入れてください'),
  zenkaku: yup
    .string()
    .matches(/^[^\x20-\x7e]*$/), //全角文字のみ（空文字OK）
  hangakueisuji: yup
    .string()
    .matches(/^[0-9a-zA-Z]+$/),　//半角英数字のみ（空文字OK）
  number: yup
    .number()
    .typeError('数字を入れてください')
    .max(1000, '1000以下を入力してください'),
  date: yup
    .date()
    .typeError('正しい日付を入力してください')
});



const styles = StyleSheet.create({
  error: {
    color: 'red'
  },
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    },
  input: {
    height: 50,
    fontSize: 20
  }
});