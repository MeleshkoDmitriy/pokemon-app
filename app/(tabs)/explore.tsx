import { ScrollView, StyleSheet, Text } from 'react-native';

export default function ExploreScreen() {
  return (
    <ScrollView style={styles.container}>
      <Text>Explore</Text>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
