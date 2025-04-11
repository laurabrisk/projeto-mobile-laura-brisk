import { Image, StyleSheet, Platform, Button } from 'react-native';

import { HelloWave } from '@/components/HelloWave';
import ParallaxScrollView from '@/components/ParallaxScrollView';
import { ThemedText } from '@/components/ThemedText';
import { ThemedView } from '@/components/ThemedView';

export default function HomeScreen() {
  return (
    <ParallaxScrollView
      headerBackgroundColor={{ light: '#A1CEDC', dark: '#1D3D47' }}
      headerImage={
        <Image
          source={require('@/assets/images/logo-banco-do-brasil-4096.png')}
          style={styles.reactLogo}
        />
      }>
      <ThemedView style={styles.titleContainer}>
        <ThemedText type="title">Bem vindo(a) ao seu banco!</ThemedText>
        <HelloWave />
      </ThemedView>
      <ThemedView style={styles.stepContainer}>
        <ThemedText type="subtitle">Entre com sua senha ou crie uma conta para ver seu saldo.
          
        <Button color={'black'}
  onPress={() => {
    console.log('You tapped the button!');
  }}
  title="crie sua conta!"
/>
<ThemedText>{'                                                               '}</ThemedText>
<Button
  onPress={() => {
    console.log('You tapped the button!');
  }}
  title="entre"
/>
<ThemedText>{"                                                                                                                                 "}</ThemedText>
           <ThemedText type="defaultSemiBold"></ThemedText>{'                                                                                                                          '}
          
          <ThemedText type="defaultSemiBold">
          
            {Platform.select({          ios: 'cmd + d',
              android: 'cmd + m',
              web: ''
            })}
            
          </ThemedText>{'                                         '}

         Saldo disponível: R$***
         <ThemedText>{'                                             '}</ThemedText>
        
         Limte: R$***
        </ThemedText>
      </ThemedView>
      <ThemedView style={styles.stepContainer}>
        <ThemedText type="subtitle"></ThemedText>
        <ThemedText>
          
        </ThemedText>
      </ThemedView>
      <ThemedView style={styles.stepContainer}>
        <ThemedText type="subtitle"></ThemedText>
        <ThemedText>
        <Button color={'black'}
  onPress={() => {
    console.log('You tapped the button!');
  }}
  title="ver extrato"

  
/>{'                                                                                                                   '}
<Button color= {"black"}
  onPress={() => {
    console.log('You tapped the button!');
  }}
  title="Pix"
/>
          <ThemedText type="defaultSemiBold"></ThemedText> {'                                                                                       '}
          
          <ThemedText type="defaultSemiBold"></ThemedText> {'                                                                              '}
          <Button color={"black"}
  onPress={() => {
    console.log('You tapped the button!');
  }}
  title="Atendimento"
/>
          <ThemedText type="defaultSemiBold"></ThemedText> {' '}
          <ThemedText type="defaultSemiBold"></ThemedText>
        </ThemedText>
      </ThemedView>
    </ParallaxScrollView>
  );
}

const styles = StyleSheet.create({
  titleContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 8,
  },
  stepContainer: {
    gap: 8,
    marginBottom: 8,
  },
  reactLogo: {
    height: 260,
    width: 450,
    bottom: -10,
    left: -28,
    position: 'absolute',
  },
});
