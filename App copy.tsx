import React from 'react';
import {
  createNativeStackNavigator,
  NativeStackScreenProps,
} from '@react-navigation/native-stack';
import {Text, View, Button, StyleSheet} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';

type RootStackParamList = {
  Home: undefined;
  Details: {itemId: number; otherParam?: string};
};

type HomeScreenProps = NativeStackScreenProps<RootStackParamList, 'Home'>;

function HomeScreen({navigation}: HomeScreenProps) {
  return (
    <View style={styles.Home}>
      <Text>Home Screen</Text>
      <Button
        title="Go to Details"
        onPress={() => {
          /* 1. 매개변수를 사용하여 Detalis 경로 이동 */
          navigation.navigate('Details', {
            itemId: 86,
            otherParam: 'anything you want here',
          });
        }}
      />
    </View>
  );
}

// 앱 각 화면이 전환될 수 있는 기본 틀 제공
const Stack = createNativeStackNavigator();

function App() {
  return (
    // 네비게이션 트리를 관리해주는 컴포넌트
    <NavigationContainer>
      {/* 네비게이션 기본틀 스택 생성 */}
      <Stack.Navigator>
        {/* 해당 스택에 들어갈 화면 요소 */}
        <Stack.Screen
          name="Home"
          component={HomeScreen}
          options={{title: '제목'}}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  Home: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default App;
