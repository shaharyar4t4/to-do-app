import View_addtask from '@/app/screen/view_addtask';
import View_home from '@/app/screen/view_home';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import React from 'react';

export type RootStackParamList = {
  View_home: undefined;
  View_addtask: undefined;
};

const Stack = createNativeStackNavigator<RootStackParamList>();

const Navigation = () => {
  return (
    <Stack.Navigator initialRouteName="View_home" screenOptions={{ headerShown: false }}>
      <Stack.Screen name="View_home" component={View_home} />
      <Stack.Screen name="View_addtask" component={View_addtask} />
    </Stack.Navigator>
  );
};

export default Navigation;
