import { LanguageSettings } from '@/src/widgets/language-settings';
import { useTranslation } from 'react-i18next';
import { ScrollView, StyleSheet, Text } from 'react-native';

export const SettingsScreen = () => {
  const { t } = useTranslation();
  return (
    <ScrollView style={styles.container}>
      <Text>{t('Screens.Settings.Title')}</Text>
      <LanguageSettings />
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
