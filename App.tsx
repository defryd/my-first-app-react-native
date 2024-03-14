import { SafeAreaView, Text, View } from 'react-native';
import { PaperProvider } from 'react-native-paper';
import { HelloWorldScreen, CounterScreen, CounterM3Screen, BoxObjectModelScreen } from './src/presentation/screens';
import IonIcon from 'react-native-vector-icons/Ionicons'

export const App = () => {
  return (
    <PaperProvider
      settings={{
        icon: (props) => <IonIcon {...props} />
      }}
    >
      <SafeAreaView style={{ flex: 1 }}>
        {/* <HelloWorldScreen name='Freddy Chia' /> */}
        {/* <CounterScreen /> */}
        {/* <CounterM3Screen /> */}
        <BoxObjectModelScreen />
      </SafeAreaView>
    </PaperProvider>
  );
};
