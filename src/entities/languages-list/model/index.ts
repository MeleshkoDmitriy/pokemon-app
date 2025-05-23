export interface LanguagesListProps {
  langs: string[];
  onPress: (lang: string) => void;
  currentLang: string;
}
