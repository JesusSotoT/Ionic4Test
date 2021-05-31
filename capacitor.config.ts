import { CapacitorConfig } from '@capacitor/cli';

const config: CapacitorConfig = {
  appId: 'com.strapberrytest.app',
  appName: 'StrapBerry_Test',
  webDir: 'www',
  bundledWebRuntime: false,
  cordova: {
    preferences: {
      ScrollEnabled: 'false',
      'android-minSdkVersion': '19',
      BackupWebStorage: 'none',
      SplashMaintainAspectRatio: 'true',
      FadeSplashScreenDuration: '300',
      SplashShowOnlyFirstTime: 'false',
      SplashScreen: 'screen',
      AutoHideSplashScreen: 'false',
      ShowSplashScreenSpinner: 'false',
      SplashScreenDelay: '3000'
    }
  }
};

export default config;
