import { useTranslation } from 'react-i18next';
import { ScrollView, StyleSheet, Text } from 'react-native';

export default function SettingsScreen() {
  const { t } = useTranslation();
  return (
    <ScrollView style={styles.container}>
      <Text>{t('Settings')}</Text>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
