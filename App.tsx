import React, {Component} from 'react';
import {StyleSheet, View, TextInput, Button, Text} from 'react-native';

export default class App extends Component {
  state = {
    text: '',
    error: '',
  };

  //ボタンを押した場合
  _onPress() {
    //入力した文字列は11桁以上だったらエラーをセット
    if (this.state.text.length > 10)
      this.setState({error: '10文字以下を入れてください'});
    //10桁以下だったらエラーをクリアーして、アラート
    else {
      this.setState({error: ''});
      alert('問題ありません');
    }
  }

  render() {
    return (
      <View style={styles.container}>
        <TextInput
          placeholder="Input Box"
          onChangeText={(text) => this.setState({text: text})}
          value={this.state.text}
        />
        {/*stateのerrorはpropsでInputに渡す*/}
        <Input error={this.state.error}></Input>
        <Button title="登録" onPress={() => this._onPress()} />
      </View>
    );
  }
}

class Input extends Component {
  //エラーがあったらTextでエラーメッセージをリターンする
  render() {
    if (!this.props.error) return null;

    return <Text style={styles.error}>{this.props.error}</Text>;
  }
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
