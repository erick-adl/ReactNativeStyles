import React, { Component } from 'react';
import {
  Platform,
  StyleSheet,
  Text,
  View,
  ScrollView,  
} from 'react-native';

import Repo from '../components/Repo'
export default class App extends Component {

  state = {
    repos:[
      {
        id: 1,
        thumbnail: 'https://meuip.com',
        title: 'erick.adl.com',
        author: 'erick',
      },
      {
        id: 2,
        thumbnail: 'https://meuip2.com',
        title: 'erick2.adl.com',
        author: 'erick2',
      },
    ],
  };

  render() {
    return (

      <View style={styles.container}>
        <View style={styles.header}>
          <Text style={styles.textHeader}>Header React Native</Text>
        </View>
        <ScrollView contentContainerStyle={styles.repoList}>          
          
          {this.state.repos.map(repo => < Repo key={repo.id}/>)}

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
    padding: 20,
  }, 
});
