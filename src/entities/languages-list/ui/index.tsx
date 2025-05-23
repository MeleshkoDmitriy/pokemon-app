import { FC } from 'react';
import { FlatList } from 'react-native';
import { LanguagesListProps } from '../model';
import { Button } from '@/src/shared/buttons';

export const LanguagesList: FC<LanguagesListProps> = ({ langs, onPress, currentLang }) => {
  return (
    <FlatList
      data={langs}
      keyExtractor={item => item}
      renderItem={({ item: lang }) => (
        <Button
          label={lang}
          onPress={() => onPress(lang)}
          variant={currentLang === lang ? 'solid' : 'outline'}
        />
      )}
    />
  );
};
