import { useTranslation } from 'react-i18next';
import { ScrollView, StyleSheet, Text } from 'react-native';

export default function HomeScreen() {
  const { t } = useTranslation();
  return (
    <ScrollView style={styles.container}>
      <Text>{t('Home')}</Text>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
