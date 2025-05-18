import React, {useEffect} from 'react';
import {Alert, PermissionsAndroid, Platform, SafeAreaView} from 'react-native';
import {WebView} from 'react-native-webview';

const requestCameraPermission = async () => {
  if (Platform.OS === 'android') {
    try {
      const granted = await PermissionsAndroid.request(
        PermissionsAndroid.PERMISSIONS.CAMERA,
        {
          title: '카메라 권한',
          message: '카메라 사용을 위해 권한이 필요합니다.',
          buttonNeutral: '나중에',
          buttonNegative: '거부',
          buttonPositive: '허용',
        },
      );
      return granted === PermissionsAndroid.RESULTS.GRANTED;
    } catch (err) {
      console.warn(err);
      return false;
    }
  }
  return true;
};

function App(): React.JSX.Element {
  useEffect(() => {
    requestCameraPermission();
  }, []);

  return (
    <SafeAreaView style={{flex: 1}}>
      <WebView
        source={{uri: 'https://gooroomi.vercel.app/'}}
        style={{flex: 1}}
        mediaPlaybackRequiresUserAction={false}
        domStorageEnabled={true}
        javaScriptEnabled={true}
        allowsInlineMediaPlayback={true}
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
