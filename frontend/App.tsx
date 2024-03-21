import React from 'react';
import {Provider} from 'react-redux'; // Import Provider from react-redux
import {SafeAreaView, Text} from 'react-native';
import {StackNavigator} from './src/navigation/StackNavigator';
import {store} from './src/redux/store'; // Import your Redux store

function App(): React.JSX.Element {
  return (
    <Provider store={store}>
      <StackNavigator />
    </Provider>
  );
}

export default App;
