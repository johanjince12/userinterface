import React from 'react';
import { Text, View, StyleSheet, Image, TextInput } from 'react-native';
import { FlatList } from "react-native-gesture-handler";

import { Header } from 'react-native-elements';
import CountDown from 'react-native-countdown-component';
import moment from 'moment';

export default class App extends React.Component {
  constructor(props) {
    super(props);
    //initialize the counter duration
    this.state = {
      totalDuration: 1500,
    };
  }

  keyExtractor = (item, index) => index.toString();

  renderItem = ({ item: list }) => {
    return <ListCard list={story} navigation={this.props.navigation} />;
  };
  
  addToList=()=>{
    //This requires a database
  }

  render(){
    return (
      <View style={styles.container}>
        <Header
          backgroundColor={'#1b5c74'}
          centerComponent={{
            text: 'EF App',
            style: { color: '#fff', fontSize: 40 },
          }}
        />
        <Image
          style={styles.imageIcon}
          source={require('./assets/logo.png')}
        />
        <CountDown
          until={this.state.totalDuration}
          //duration of countdown in seconds
          style={{marginLeft:165, marginTop:-150}}
          digitStyle={{backgroundColor:'#1b5c74'}}
          digitTxtStyle={{color:'white'}}
          timetoShow={['H', 'M', 'S']}
          //formate to show
          onFinish={() => alert('Good job!')}
          //on Finish call
          onPress={() => alert('hello')}
          //on Press call
          size={20}
        />
        <TextInput
          style={styles.inputBox}
          placeholder="Time in minutes"
          onChangeText={text => {
            this.setState({ totalDuration: text*60 });
          }}
          value={this.state.text}
        />
        <TextInput
          style={styles.inputBox2}
          placeholder="Add to list"
          onChangeText={ text => this.addToList(text)}
          value={this.state.text}/>
        <FlatList
          keyExtractor={this.keyExtractor}
          data={this.state.stories}
          renderItem={this.renderItem}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ecf0f1',
  },
  imageIcon: {
    width: 150,
    height: 180,
    marginLeft: 35,
    marginTop:5
  },
  inputBox: {
    marginTop: 10,
    marginLeft:175,
    width: '50%',
    height: 40,
    textAlign: 'center',
    borderWidth: 1,
  },
  inputBox2: {
    marginTop: 40,
    justifyContent:'center',
    marginLeft:10,
    alignSelf: 'center',
    width: '80%',
    height: 40,
    textAlign: 'center',
    borderWidth: 1,
  },
});
