import React, { Component } from 'react';
import {
  Platform,
  StyleSheet,
  Text,
  View,
  ScrollView,  
  TouchableOpacity
} from 'react-native';

import Repo from '../components/Repo'
export default class App extends Component {

  state = {
    repos:[
      {
        id: 1,
        thumbnail: 'https://avatars2.githubusercontent.com/u/29154501?s=400&u=119d28501875914a513d64a2a0161709a4b5fd27&v=4',
        title: 'erick.adl.com',
        author: 'erick',
      },
      {
        id: 2,
        thumbnail: 'https://avatars2.githubusercontent.com/u/29154501?s=400&u=119d28501875914a513d64a2a0161709a4b5fd27&v=4',
        title: 'erick2.adl.com',
        author: 'lima',
      },
    ],
  };

  render() {
    return (

      <View style={styles.container}>
        <View style={styles.header}>
          <Text style={styles.textHeader}>Header React Native</Text>
          <TouchableOpacity onPress={() => {}}>
          <Text style={styles.headerButton}>+</Text>
          </TouchableOpacity>
        </View>
        <ScrollView contentContainerStyle={styles.repoList}>

          {this.state.repos.map(repo => < Repo key={repo.id} data ={repo}/>)}

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
    justifyContent: 'space-between',    
    alignItems:'center',
    flexDirection: 'row',
    paddingHorizontal: 20
  },

  headerButton: {
    fontSize: 20,
    fontWeight: 'bold'
  },

  textHeader: {
    fontSize: 10,
    fontWeight: 'bold'

    },
  repoList: {
    padding: 20,
  }, 
  textExample: {
    fontSize: 20,
    fontWeight: 'bold',    
    color: '#666DDD',    
  }
});
