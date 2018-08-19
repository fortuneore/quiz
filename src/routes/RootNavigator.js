import { createStackNavigator } from 'react-navigation';

import { HomeScreen, QuizScreen, ResultsScreen } from '../screens';

const RootNavigator = createStackNavigator({
  // HomeScreen
  Home: { 
    screen: HomeScreen,  
    navigationOptions: {      
      header: null,
    },
  },
  // QuizScreen
  Quiz: { 
    screen: QuizScreen,  
    navigationOptions: {      
      header: null,
    }, 
  },
  // ResultsScreen
  Results: { 
    screen: ResultsScreen,  
    navigationOptions: {      
      header: null,
    }, 
  },
}); 

export default RootNavigator;
