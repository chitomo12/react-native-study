import React from 'react';
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
  TouchableOpacity,
  Alert,
  Platform,
} from 'react-native';

const App = () => {
  const isDarkMode = useColorScheme() === 'dark';

  const backgroundStyle = {
    backgroundColor: isDarkMode ? '#000' : '#fff',
  };

  const handleButtonPress = () => {
    if (Platform.OS === 'web') {
      window.alert('Hello! Welcome to React Native Web!');
    } else {
      Alert.alert('Hello!', 'Welcome to React Native!');
    }
  };

  return (
    <SafeAreaView style={[styles.container, backgroundStyle]}>
      <StatusBar
        barStyle={isDarkMode ? 'light-content' : 'dark-content'}
        backgroundColor={backgroundStyle.backgroundColor}
      />
      <ScrollView
        contentInsetAdjustmentBehavior="automatic"
        style={backgroundStyle}>
        <View style={styles.content}>
          <Text style={[styles.title, {color: isDarkMode ? '#fff' : '#000'}]}>
            Welcome to React Native!
          </Text>
          <Text style={[styles.subtitle, {color: isDarkMode ? '#ccc' : '#666'}]}>
            This is a sample React Native application running on {Platform.OS}
          </Text>
          <Text style={[styles.deploymentInfo, {color: isDarkMode ? '#90EE90' : '#006400'}]}>
            🌐 Netlify Web Deployment Test
          </Text>
          <TouchableOpacity style={styles.button} onPress={handleButtonPress}>
            <Text style={styles.buttonText}>Press Me!</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.secondaryButton} onPress={() => {
            if (Platform.OS === 'web') {
              window.alert('This is a test deployment feature!');
            } else {
              Alert.alert('Test Feature', 'This is a test deployment feature!');
            }
          }}>
            <Text style={styles.secondaryButtonText}>Test Deployment</Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  content: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: 10,
  },
  subtitle: {
    fontSize: 16,
    textAlign: 'center',
    marginBottom: 20,
  },
  deploymentInfo: {
    fontSize: 18,
    fontWeight: '600',
    textAlign: 'center',
    marginBottom: 30,
  },
  button: {
    backgroundColor: '#007AFF',
    paddingHorizontal: 30,
    paddingVertical: 15,
    borderRadius: 8,
    marginBottom: 15,
  },
  buttonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: '600',
  },
  secondaryButton: {
    backgroundColor: '#34C759',
    paddingHorizontal: 30,
    paddingVertical: 15,
    borderRadius: 8,
  },
  secondaryButtonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: '600',
  },
});

export default App;