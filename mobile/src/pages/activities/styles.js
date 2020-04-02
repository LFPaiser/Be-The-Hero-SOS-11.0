import { StyleSheet } from 'react-native';
import Constants from 'expo-constants';

export default StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 24,
    paddingTop: Constants.statusBarHeight + 20,
  },

  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center'
  },

  headerText: {
    fontSize: 15,
    color: '#636375',
  },

  headerTextBold: {
    fontWeight: 'bold',
  },

  title: {
    fontSize: 30,
    marginBottom: 16,
    marginTop: 48,
    color: '#15151f',
    fontWeight: 'bold',
  },

  description: {
    fontSize: 16,
    lineHeight: 24,
    color: '#636375'
  },

  activityList: {
    marginTop: 32,
  },

  activity: {
    padding: 24,
    borderRadius: 3,
    backgroundColor: '#f4f4f6',
    marginBottom: 16,
  },

  activityProperty: {
    fontSize: 14,
    color: '#41414d',
    fontWeight: 'bold',
  },

  activityValue: {
    marginTop: 8,
    marginBottom: 24,
    fontSize: 15,
    color: '#636375',
  },

  detailButton: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },

  detailButtonText: {
    color: '#db2745',
    fontWeight: 'bold',
  },

})
