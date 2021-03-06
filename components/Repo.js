import React, { Component } from 'react';

import {View, Text, Image, StyleSheet } from 'react-native';

export default class Repo extends Component {
    render(){
        return(
            <View style={styles.repo}>
                <Image
                    style={styles.repoimage}
                    source={{uri: this.props.data.thumbnail}}
                />
                <View style={styles.repoInfo}>
                    <Text style={styles.repoTitle}>{this.props.data.title} </Text>
                    <Text style={styles.repoAuthor}>{this.props.data.author} </Text>
                </View>
            </View>            
        );
    }
}

const styles = StyleSheet.create({   
    repo: {
      padding: 10,
      backgroundColor: '#FFF',
      height:100,
      marginBottom: 20,
      borderRadius: 10,
      flexDirection: 'row',
      alignItems: 'center'
  
    },
    repoImage:{
        height: 50,
        width: 50,
        borderRadius: 25,
    },
    repoInfo:{
        marginLeft: 10,
    },
    repoTitle:{
        fontWeight: 'bold',
        color: '#333'
    },
    repoAuthor:{
        fontSize: 12,
        color: '#999'
    },
  });

