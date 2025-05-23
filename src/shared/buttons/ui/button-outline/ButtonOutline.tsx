import { FC } from 'react';
import { Pressable, StyleSheet, Text } from 'react-native';
import { ButtonProps } from '../../model';

export const ButtonOutline: FC<Omit<ButtonProps, 'variant'>> = ({ label, onPress }) => {
  return (
    <Pressable onPress={onPress} style={styles.button}>
      <Text style={styles.text}>{label}</Text>
    </Pressable>
  );
};

const styles = StyleSheet.create({
  button: {
    backgroundColor: 'white',
    paddingVertical: 5,
    paddingHorizontal: 10,
    borderRadius: 5,
    borderWidth: 1,
    borderColor: 'black',
  },
  text: {
    color: 'black',
    textAlign: 'center',
  },
});
