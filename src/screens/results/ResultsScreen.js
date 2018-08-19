import React, { Component } from 'react';
import { View, Text, Button, FlatList } from 'react-native';
import styles from './styles/ResultsScreen';

class ResultsScreen extends Component {  
  render() {
    const { navigation } = this.props;
    const { navigate } = navigation;
    const total = navigation.getParam('total', 10);
    const answers = navigation.getParam('answers');
    // how many correct answers in the answer collection
    const correctArr = answers.filter(curVal => curVal === 'correct');
    return (    
      <View style={styles.container}>
        <View style={styles.top}>
          <Text style={styles.title}>You Scored</Text>
          <Text style={styles.title}>{correctArr.length}/{total}</Text>
        </View>
        <View style={styles.middle}>
          <FlatList
            data={answers.map((curVal, index) => ({ key: `Q${(index + 1)} - ${curVal}` }))}
            renderItem={({ item }) => <Text style={styles.item}>{item.key}</Text>}
          />  
        </View>
        <View style={styles.bottom}>
          <Button
            onPress={() => navigate('Home')}
            title="PLAY AGAIN?"
            color="#841584"
            accessibilityLabel="Learn more about this purple button"
          />   
        </View>
      </View>  
    );
  }
}

export default ResultsScreen;
