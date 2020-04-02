import React from 'react';
import { View, FlatList, Image, Text, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { Feather } from '@expo/vector-icons';
import logoImg from '../../assets/logo.png';
import styles from './styles';

function Activity() {
  const navigation = useNavigation();

  function navigateToDetail() {
    navigation.navigate('Detail');
  }

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Image source={logoImg} />
        <Text style={styles.headerText}>
          Total de <Text style={styles.headerTextBold}>0 atividades</Text>
        </Text>
      </View>

      <Text style={styles.title}>Hey Hero!</Text>
      <Text style={styles.description}>Salve o dia de alguém! É só esolher abaixo.</Text>

      <FlatList
        style={styles.actvityList}
        keyExtractor={activity => String(activity)}
        showsVerticalScrollIndicator={false}
        data={[1, 2, 3]}
        renderItem={() => (
          <View style={styles.activity}>
            <Text style={styles.activityProperty}>ONG:</Text>
            <Text style={styles.activityValue}>APAD</Text>

            <Text style={styles.activityProperty}>ATIVIDADE:</Text>
            <Text style={styles.activityValue}>Cachorro atropelado</Text>

            <Text style={styles.activityProperty}>VALOR:</Text>
            <Text style={styles.activityValue}>R$500,00</Text>

            <TouchableOpacity style={styles.detailButton} onPress={navigateToDetail}>
              <Text style={styles.detailButtonText}>Ver detalhes</Text>
              <Feather name='arrow-right' size={16} color='#db2745' />
            </TouchableOpacity>
          </View>
        )}
      />
    </View>
  );
}

export default Activity;
