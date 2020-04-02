import { StyleSheet } from 'react-native';
import Constants from 'expo-constants';


export default StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 24,
    paddingTop: Constants.statusBarHeight + 20,
  },

  header: {
    marginTop: 48,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },

  activity: {
    padding: 24,
    borderRadius: 3,
    backgroundColor: '#f4f4f6',
    marginTop: 48,
  },

  activityProperty: {
    marginTop: 24,
    fontSize: 14,
    color: '#41414d',
    fontWeight: 'bold',
  },

  activityValue: {
    marginTop: 8,
    fontSize: 15,
    color: '#636375',
  },

  contactBox: {
    padding: 24,
    borderRadius: 3,
    backgroundColor: '#f4f4f6',
    marginBottom: 16,
  },

  heroTitle: {
    fontWeight: 'bold',
    fontSize: 20,
    color: '#15151f',
    lineHeight: 30,
  },

  heroDescription: {
    fontSize: 15,
    color: '#636375',
    marginTop: 16,
  },

  actions: {
    marginTop: 16,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },

  action: {
    backgroundColor: '#db2745',
    borderRadius: 3,
    height: 50,
    width: '48%',
    justifyContent: 'center',
    alignItems: 'center',
  },

  actionText: {
    color: "#f4f4f6",
    fontSize: 15,
    fontWeight: 'bold'
  }
});
