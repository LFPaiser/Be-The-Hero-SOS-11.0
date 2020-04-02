import React from 'react';
import { View, Image, Text, TouchableOpacity, Linking} from 'react-native';
import { useNavigation } from '@react-navigation/native';
import * as MailComposer from 'expo-mail-composer';
import { Feather } from '@expo/vector-icons';
import logoImg from '../../assets/logo.png';
import styles from './styles';

function Detail() {
  const navigation = useNavigation();
  const message = 'Olá APAD, estou entrando em contato pois gostaria de ajudar no caso "Cachorro Atropelado", com o valor de R$500,00';

  function navigateToDashboard() {
    // navigation.goBack();
    navigation.navigate('Activities');
  }

  function sendMail() {
    MailComposer.composeAsync({
      subject: 'Herói para o caso Cachorro Atropelado',
      recipients: ['fernandopaiser@gmail.com'],
      body: message,
    });
  }

  function sendWhatsapp() {
    Linking.openURL(`whatsapp://send?phone=5519991620649&text=${message}`);
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
        <Text style={styles.activityValue}>APAD</Text>

        <Text style={styles.activityProperty}>ATIVIDADE:</Text>
        <Text style={styles.activityValue}>Papel</Text>

        <Text style={styles.activityProperty}>VALOR:</Text>
        <Text style={styles.activityValue}>R$120</Text>

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
    </View>
  );
}

export default Detail;
