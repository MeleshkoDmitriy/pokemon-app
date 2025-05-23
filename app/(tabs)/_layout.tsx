import { Colors } from '@/constants/Colors';
import { Tabs } from 'expo-router';
import React from 'react';
import { useTranslation } from 'react-i18next';
import { Platform, SafeAreaView, useColorScheme } from 'react-native';

export default function TabLayout() {
  const colorScheme = useColorScheme();
  const { t } = useTranslation();

  return (
    <SafeAreaView style={{ flex: 1 }}>
      <Tabs
        screenOptions={{
          tabBarActiveTintColor: Colors[colorScheme ?? 'light'].tint,
          headerShown: false,
          tabBarStyle: Platform.select({
            ios: {
              position: 'absolute',
            },
            default: {},
          }),
        }}
      >
        <Tabs.Screen
          name="index"
          options={{
            title: t('Screens.Home.Title'),
          }}
        />
        <Tabs.Screen
          name="settings"
          options={{
            title: t('Screens.Settings.Title'),
          }}
        />
      </Tabs>
    </SafeAreaView>
  );
}
