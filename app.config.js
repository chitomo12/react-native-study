export default {
  expo: {
    name: 'ReactNativeSample',
    slug: 'rn-study',
    owner: 'chitomo12',
    version: '1.0.0',
    extra: {
      eas: {
        projectId: '36b72670-be82-47d1-911f-22b299b81261'
      }
    },
    orientation: 'portrait',
    userInterfaceStyle: 'light',
    assetBundlePatterns: [
      '**/*'
    ],
    ios: {
      supportsTablet: true
    },
    android: {
      package: 'com.reactnativesample.app'
    },
    web: {
      bundler: 'webpack'
    },
    updates: {
      url: 'https://u.expo.dev/36b72670-be82-47d1-911f-22b299b81261'
    },
    runtimeVersion: {
      policy: 'appVersion'
    }
  }
};