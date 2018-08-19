import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'space-between',
    backgroundColor: '#fff',    
  },
  top: {
    marginTop: 50,
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
    marginTop: 100,
  },
  roblox: {    
    borderWidth: 2,
    width: '80%',
    height: 200,
  },
  question: {
    flex: 1,
    alignItems: 'center',
    padding: 20,   
  },
  progress: {
    marginTop: 10,
    marginBottom: 10,
  },
  bottom: { 
    flexDirection: 'row',
    alignItems: 'flex-end',    
    justifyContent: 'center',
    width: 350,
    height: '30%',
    marginBottom: 20,
  },

});

export default styles;
