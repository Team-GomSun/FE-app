import React from 'react';
import {Alert, SafeAreaView} from 'react-native';
import {WebView} from 'react-native-webview';

function App(): React.JSX.Element {
  return (
    <SafeAreaView style={{flex: 1}}>
      <WebView
        source={{uri: 'https://gooroomi.vercel.app/'}}
        style={{flex: 1}}
        onError={syntheticEvent => {
          const {nativeEvent} = syntheticEvent;
          Alert.alert('에러', `${nativeEvent.description}`);
        }}
        onLoadEnd={() => console.log('로드 완료')}
      />
    </SafeAreaView>
  );
}

export default App;
