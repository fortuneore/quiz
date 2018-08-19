import React, { Component } from 'react';
import { View, Text, Button } from 'react-native';
import styles from './styles/HomeScreen';

class HomeScreen extends Component {  

  render() {
    const { navigate } = this.props.navigation;
    return (    
      <View style={styles.container}>
        <View style={styles.top}>
          <Text id='1' style={styles.title}>Welcom to the</Text>
          <Text id='2' style={styles.title}>Trivia Challenge!</Text>
        </View>
        <View style={styles.highMiddle}>
          <Text id='3'>You will be presented</Text>
          <Text id='4'>with 10 True of False</Text>
          <Text id='5'>questions.</Text>
        </View>
        <View style={styles.lowMiddle}>
          <Text id='6'>Can you score 100%</Text>
        </View>
        <View style={styles.bottom}>        
          <Button
            onPress={() => navigate('Quiz')}
            title="BEGIN"
            color="#841584"
          />   
        </View>
      </View>  
    );
  }
}

export default HomeScreen;
