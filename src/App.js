import React, { Component } from 'react';
import {
  Platform,
  StyleSheet,
  Text,
  View,
  ScrollView,  
} from 'react-native';


export default class App extends Component {
  render() {
    return (

      <View style={styles.container}>
        <View style={styles.header}>
          <Text style={styles.textHeader}>Header React Native</Text>
        </View>
        <ScrollView contentContainerStyle={styles.repoList}>          
          <View style={styles.repo}/>
          <View style={styles.repo}/>
          <View style={styles.repo}/>
          <View style={styles.repo}/>
        </ScrollView>
        
      </View>
      
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#333',        
  },
  header: {
    height: (Platform === 'ios') ? 20 : 50,    
    paddingTop: (Platform === 'ios') ? 20 : 0,
    backgroundColor:'#FFF',
    justifyContent: 'center',
    alignItems:'center'

  },
  textHeader: {
    fontSize: 20,
    fontWeight: 'bold'

    },
  repoList: {
    padding: 10,
  },
  repo: {
    padding: 10,
    backgroundColor: '#666',
    height:100,
    marginBottom: 20,
    borderRadius: 10,

  }   
});
