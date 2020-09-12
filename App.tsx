import React, {Component} from 'react';
import {StyleSheet, View, TextInput, Button, Text} from 'react-native';
import {Formik} from 'formik';
import * as yup from 'yup';
// https://rocksystem6611.hatenablog.com/entry/reactnative03
// サンプルサイト

////////////////// パッケージ使ってない場合 /////////////////////
// export default class App extends Component {
//   state = {
//     text: '',
//     error: '',
//   };

//   //ボタンを押した場合
//   _onPress() {
//     //入力した文字列は11桁以上だったらエラーをセット
//     if (this.state.text.length > 10)
//       this.setState({error: '10文字以下を入れてください'});
//     //10桁以下だったらエラーをクリアーして、アラート
//     else {
//       this.setState({error: ''});
//       alert('問題ありません');
//     }
//   }

//   render() {
//     return (
//       <View style={styles.container}>
//         <TextInput
//           placeholder="Input Box"
//           onChangeText={(text) => this.setState({text: text})}
//           value={this.state.text}
//         />
//         {/*stateのerrorはpropsでInputに渡す*/}
//         <Input error={this.state.error}></Input>
//         <Button title="登録" onPress={() => this._onPress()} />
//       </View>
//     );
//   }
// }

// class Input extends Component {
//   //エラーがあったらTextでエラーメッセージをリターンする
//   render() {
//     if (!this.props.error) return null;

//     return <Text style={styles.error}>{this.props.error}</Text>;
//   }
// }

////// Formikを使った場合 //////////////
export default class App extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Formik
          //------------------Formikのpropsをセットする部分------------------//
          initialValues={{text: ''}} //フォーム変数の最初の値
          onSubmit={(values) => alert('問題ありません')} //submitをクリックしたら関数を実行する
          // validate={validate}
          //入力チェックの関数(エラーがあったらonSubmitは実行されない)
          //---------------------------------------------------------------//
          validationSchema={yup.object().shape({
            text: yup.string().min(6).required(),
          })}>
          {/*色々なステートやヘルパーがpropsとして使えます*/}
          {({
            values,
            touched,
            errors,
            handleChange,
            handleBlur,
            handleSubmit,
          }) => {
            return (
              <View>
                <TextInput
                  //-----------------------値を代入----------------------------------//
                  value={values.text}
                  onChangeText={handleChange('text')}
                  placeholder="Input Box"
                  onBlur={() => setFieldTouched('text')}
                  //----------------------------------------------------------------//
                />
                {
                  //touchedとerrorはtrueでしたらエラーメッセージを出力します
                  touched.text && errors.text && (
                    <Text style={styles.error}>{errors.text}</Text>
                  )
                }
                <Button title="登録" onPress={handleSubmit} />
              </View>
            );
          }}
        </Formik>
      </View>
    );
  }
}

//エラーチェックの関数
//value.textは11文字以上だったらリターンするerrorのerror.textはエラーメッセージになります
function validate(value) {
  let error = {};
  if (value.text.length > 10) {
    error.text = '10文字以下を入れてください';
  }
  return error;
}

const styles = StyleSheet.create({
  error: {
    color: 'red',
  },
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
