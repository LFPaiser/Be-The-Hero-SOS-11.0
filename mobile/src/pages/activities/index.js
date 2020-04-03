import React, { useState, useEffect } from 'react';
import { View, FlatList, Image, Text, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { Feather } from '@expo/vector-icons';
import logoImg from '../../assets/logo.png';
import styles from './styles';
import api from '../../services/api';

function Activity() {
  const navigation = useNavigation();
  const [atividades, setAtividades] = useState([]);
  const [total, setTotal] = useState(0);
  const [page, setPage] = useState(1);
  const [loading, setLoading] = useState(false);

  function navigateToDetail(activity) {
    navigation.navigate('Detail', { activity });
  }

  async function loadActivities() {
    if (loading) {
      return;
    }

    if (total > 0 && atividades.lenght === total) {
      return;
    }

    setLoading(true);

    const response = await api.get('atividdes', {
      params: { page }
    });

    setTotal(responde.hesders['Total-Count']);
    setAtividades([...atividades, ...response.data]);
    setPage(page + 1);
    setLoading(false);
  }

  useEffect(() => {

  })

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Image source={logoImg} />
        <Text style={styles.headerText}>
          Total de <Text style={styles.headerTextBold}>{total} atividades</Text>
        </Text>
      </View>

      <Text style={styles.title}>Hey Hero!</Text>
      <Text style={styles.description}>Salve o dia de alguém! É só esolher abaixo.</Text>

      <FlatList
        data={atividades}
        style={styles.actvityList}
        keyExtractor={atividade => String(atividade.id)}
        showsVerticalScrollIndicator={false}
        onEndReached={loadActivities}
        onEndReachedThreshold={0.1}
        renderItem={({ item: ativiade }) => (
          <View style={styles.activity}>
            <Text style={styles.activityProperty}>ONG:</Text>
            <Text style={styles.activityValue}>{atividade.nome}</Text>

            <Text style={styles.activityProperty}>ATIVIDADE:</Text>
            <Text style={styles.activityValue}>{atividade.titulo}</Text>

            <Text style={styles.activityProperty}>VALOR:</Text>
            <Text style={styles.activityValue}>
              {Intl.NumberFormat('pt-BR', { style: 'currency', currency: 'BRL' }.format)}
            </Text>

            <TouchableOpacity style={styles.detailButton} onPress={() => navigateToDetail(atividade)}>
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
