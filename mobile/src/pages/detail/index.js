import React from 'react';
import { View, Image, Text, TouchableOpacity, Linking } from 'react-native';
import { useNavigation, useRoute } from '@react-navigation/native';
import * as MailComposer from 'expo-mail-composer';
import { Feather } from '@expo/vector-icons';
import logoImg from '../../assets/logo.png';
import styles from './styles';

function Detail() {
  const Route = useRoute();
  const navigation = useNavigation();
  const activity = route.params.activity;
  const message = `Olá ${atividade.nome}, estou entrando em contato pois gostaria de ajudar no caso "${atividade.titulo}", com o valor de ${Intl.NumberFormat('pt-BR', { style: 'currency', currency: 'BRL' }.format)}`;

  function navigateToDashboard() {
    // navigation.goBack();
    navigation.navigate('Activities');
  }

  function sendMail() {
    MailComposer.composeAsync({
      subject: `Herói para o caso ${atividade.titulo}`,
      recipients: [atividade.email],
      body: message,
    });
  }

  function sendWhatsapp() {
    Linking.openURL(`whatsapp://send?phone=55${atividae.whatsapp}&text=${message}`);
  }

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Image source={logoImg} />

        <TouchableOpacity onPress={navigateToDashboard}>
          <Feather name='arrow-left' size={28} color='#db2745' />
        </TouchableOpacity>
      </View>

      <View style={styles.activity}>
        <Text style={styles.activityProperty, { marginTop: 0 }}>ONG:</Text>
        <Text style={styles.activityValue}>{atividade.nome} de {atividade.cidade}/{atividade.uf}</Text>

        <Text style={styles.activityProperty}>ATIVIDADE:</Text>
        <Text style={styles.activityValue}>{atividade.titulo}</Text>

        <Text style={styles.activityProperty}>VALOR:</Text>
        <Text style={styles.activityValue}>
          {Intl.NumberFormat('pt-BR', { style: 'currency', currency: 'BRL' }.format)}
        </Text>


        <View style={styles.contactBox}>
          <Text style={styles.heroTitle}>Salve o dia!</Text>
          <Text style={styles.heroTitle}>Alguém vai ficar feliz.</Text>

          <Text style={styles.heroDescription}>Entre em contato:</Text>

          <View style={styles.actions}>
            <TouchableOpacity style={styles.action} onPress={sendWhatsapp}>
              <Text style={styles.actionText}>Whatsapp</Text>
            </TouchableOpacity>

            <TouchableOpacity style={styles.action} onPress={sendMail}>
              <Text style={styles.actionText}>E-mail</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </View >
  );
}

export default Detail;
