import { StyleSheet, Image, Platform } from 'react-native';

import { Collapsible } from '@/components/Collapsible';
import { ExternalLink } from '@/components/ExternalLink';
import ParallaxScrollView from '@/components/ParallaxScrollView';
import { ThemedText } from '@/components/ThemedText';
import { ThemedView } from '@/components/ThemedView';
import { IconSymbol } from '@/components/ui/IconSymbol';

export default function TabTwoScreen() {
  return (
    <ParallaxScrollView
      headerBackgroundColor={{ light: '#D0D0D0', dark: '#353636' }}
      headerImage={
        <IconSymbol
          size={310}
          color="#808080"
          name="chevron.left.forwardslash.chevron.right"
          style={styles.headerImage}
        />
      }>
      <ThemedView style={styles.titleContainer}>
        <ThemedText type="title">Olá (seu nome)!</ThemedText>
      </ThemedView>
      <ThemedText>Obrigada por se juntar ao nosso banco!</ThemedText>
      <Collapsible title="Saldo disponível:"> 
      <ThemedText>R$3678,57</ThemedText>
      </Collapsible>
      <Collapsible title="Limite máximo:">
        <ThemedText>
          R$7000,00{' '}
          <ThemedText type="defaultSemiBold"></ThemedText> disponível até 11/05/2025.
        </ThemedText>
      </Collapsible>
      <ThemedText>{'                                                                              '}</ThemedText>
      <Collapsible title="Extrato">
        <ThemedText>
          Pix recebido - R$34,00{' '}
          <ThemedText style={{ fontFamily: 'SpaceMono' }}>
          </ThemedText>
        </ThemedText>
        <ThemedText>Pix enviado - R$299,00</ThemedText>
        <ThemedText>Compra com cartão - R$2,99</ThemedText>
      
        <ExternalLink href="">
          <ThemedText type="link">ver tudo</ThemedText>
        </ExternalLink>
      </Collapsible>
      <Collapsible title="Pix">
        <ThemedText>
          This template has light and dark mode support. The{' '}
          <ThemedText type="defaultSemiBold"></ThemedText> hook lets you inspect
          what the user's current color scheme is, and so you can adjust UI colors accordingly.
        </ThemedText>
      </Collapsible>
      <Collapsible title="Animations">
        <ThemedText>
          This template includes an example of an animated component. The{' '}
          <ThemedText type="defaultSemiBold">components/HelloWave.tsx</ThemedText> component uses
          the powerful <ThemedText type="defaultSemiBold">react-native-reanimated</ThemedText>{' '}
          library to create a waving hand animation.
        </ThemedText>
        {Platform.select({
          ios: (
            <ThemedText>
              The <ThemedText type="defaultSemiBold">components/ParallaxScrollView.tsx</ThemedText>{' '}
              component provides a parallax effect for the header image.
            </ThemedText>
          ),
        })}
      </Collapsible>
    </ParallaxScrollView>
  );
}

const styles = StyleSheet.create({
  headerImage: {
    color: '#808080',
    bottom: -90,
    left: -35,
    position: 'absolute',
  },
  titleContainer: {
    flexDirection: 'row',
    gap: 8,
  },
});
