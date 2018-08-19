import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  top: {
    marginTop: 100,
    width: 350,
    alignItems: 'center',
  },  
  title: {    
    fontWeight: 'bold',
    fontSize: 20,
  },
  middle: {
    alignItems: 'center',    
    justifyContent: 'center',    
    width: 350,
    marginTop: 10,
  },
  item: {
    padding: 1,
    fontSize: 15,
    height: 20,
  },
  bottom: {
    width: 350,
    alignItems: 'center',
    marginBottom: 100,
  },
});

export default styles;
