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

import RecyclerviewList, { DataSource } from 'react-native-recyclerview-list';

// Take an array as data
var rawdata = [
  { id: 1, text: 'Item #1' },
  { id: 2, text: 'Item #2' },
  { id: 3, text: 'Item #3' },
  { id: 4, text: 'Item #4' },
  { id: 5, text: 'Item #5' }
];

var dataSource = new DataSource(rawdata, (item, index) => item.id);

export default class App extends Component {

  state = {
    repos: [
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
          <Text style={styles.textHeader}>Lista de Repositorios</Text>
          <TouchableOpacity onPress={() => {

          }}>
            <Text style={styles.headerButton}>+</Text>
          </TouchableOpacity>
        </View>
        <ScrollView contentContainerStyle={styles.repoList}>

          {this.state.repos.map(repo => < Repo key={repo.id} data={repo} />)}

        </ScrollView>
        <RecyclerviewList
          style={{ flex: 1 }}
          dataSource={dataSource}
          renderItem={({ item, index }) => (
            <Text>{item.text} - {index}</Text>
          )} />

      </View>

    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#666',
  },
  header: {
    height: (Platform === 'ios') ? 20 : 40,
    paddingTop: (Platform === 'ios') ? 20 : 0,
    backgroundColor: '#FFF',
    justifyContent: 'space-between',
    alignItems: 'center',
    flexDirection: 'row',
    paddingHorizontal: 20
  },

  headerButton: {
    fontSize: 25,
    fontWeight: 'bold',

  },

  textHeader: {
    fontSize: 20,
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
