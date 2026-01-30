import React from 'react';
import { StyleSheet, Text, View, Image, TouchableOpacity } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import mainImage from '../assests/mainImg.png';

const WelcomeScreen = ({ navigation }) => {
  // const mainImage = "https://sunflowerbroking.com/service/online-trading/";

  const openWebView = (title, url) => {
    navigation.navigate('WebView', { title, url });
  };

  return (
    <SafeAreaView style={styles.screen}>
      <View style={styles.backgroundBlobTop} />
      <View style={styles.backgroundBlobBottom} />

      <View style={styles.container}>
        <View style={styles.header}>
          <View style={styles.badge}>
            <Text style={styles.badgeText}>SUNFLOWER BROKING</Text>
          </View>
        </View>

        <View style={styles.content}>
          <Text style={styles.welcomeText}>Welcome to</Text>

          <View style={styles.imageContainer}>
            <Image
              source={mainImage}
              style={styles.mainImage}
              resizeMode="contain"
            />
          </View>

          <Text style={styles.description}>
            Your trusted partner in financial growth and investment solutions
          </Text>

          <TouchableOpacity
            style={styles.bigButton}
            onPress={() =>
              openWebView(
                'User Boarding',
                'https://sunflow.d1sykzzbdt8k89.amplifyapp.com/',
              )
            }
            activeOpacity={0.8}
          >
            <Text style={styles.bigButtonText}>User Onboard</Text>
          </TouchableOpacity>

          <View style={styles.bottomSection}>
            <Text style={styles.bottomText}>
              RM Login
            </Text>

            <TouchableOpacity
              style={styles.smallButton}
              onPress={() =>
                openWebView(
                  'RM Login',
                  'https://sundash.d24w73wbybdc68.amplifyapp.com/rmLogin',
                )
              }
              activeOpacity={0.8}
            >
              <Text style={styles.smallButtonText}>RM Login</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </SafeAreaView>
  );
};

export default WelcomeScreen;

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    backgroundColor: '#FFFFFF',
  },
  backgroundBlobTop: {
    position: 'absolute',
    top: -100,
    right: -80,
    width: 200,
    height: 200,
    borderRadius: 200,
    backgroundColor: 'rgba(216, 148, 20, 0.1)',
  },
  backgroundBlobBottom: {
    position: 'absolute',
    bottom: -120,
    left: -80,
    width: 240,
    height: 240,
    borderRadius: 240,
    backgroundColor: 'rgba(92, 55, 28, 0.08)',
  },
  container: {
    flex: 1,
    paddingHorizontal: 24,
    paddingVertical: 32,
  },
  header: {
    alignItems: 'center',
    marginBottom: 20,
  },
  badge: {
    backgroundColor: '#D89414',
    paddingHorizontal: 20,
    paddingVertical: 10,
    borderRadius: 20,
    borderWidth: 1,
    borderColor: 'rgba(92, 55, 28, 0.2)',
    shadowColor: '#5C371C',
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowOpacity: 0.15,
    shadowRadius: 8,
    elevation: 4,
  },
  badgeText: {
    fontSize: 14,
    fontWeight: '700',
    color: '#FFFFFF',
    letterSpacing: 1,
  },
  content: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 20,
  },
  welcomeText: {
    fontSize: 28,
    fontWeight: '300',
    color: '#5C371C',
    marginBottom: 20,
    textAlign: 'center',
  },
  imageContainer: {
    width: '100%',
    height: 220,
    borderRadius: 20,
    borderWidth: 2,
    borderColor: 'rgba(216, 148, 20, 0.1)',
    marginBottom: 30,
    overflow: 'hidden',
    shadowColor: '#5C371C',
    shadowOffset: {
      width: 0,
      height: 4,
    },
     alignItems: "center",
  justifyContent: "center",
    shadowOpacity: 0.8,
    shadowRadius: 12,
    elevation: 10,
  },
  mainImage: {
    width: '70%',
    height: '100%',
  },
  description: {
    fontSize: 16,
    color: '#5C371C',
    textAlign: 'center',
    lineHeight: 24,
    marginBottom: 40,
    paddingHorizontal: 20,
    opacity: 0.9,
  },
  bigButton: {
    backgroundColor: '#D89414',
    width: '100%',
    paddingVertical: 20,
    borderRadius: 15,
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 40,
    borderWidth: 2,
    borderColor: 'rgba(92, 55, 28, 0.3)',
    shadowColor: '#5C371C',
    shadowOffset: {
      width: 0,
      height: 6,
    },
    shadowOpacity: 0.25,
    shadowRadius: 15,
    elevation: 8,
  },
  bigButtonText: {
    fontSize: 20,
    fontWeight: '700',
    color: '#FFFFFF',
    letterSpacing: 1,
  },
  bottomSection: {
    width: '100%',
    alignItems: 'center',
    marginTop: 'auto',
    paddingTop: 20,
    borderTopWidth: 1,
    borderTopColor: 'rgba(216, 148, 20, 0.2)',
  },
  bottomText: {
    fontSize: 14,
    color: '#5C371C',
    marginBottom: 20,
    opacity: 0.8,
    textAlign: 'center',
  },
  smallButton: {
    backgroundColor: '#5C371C',
    paddingHorizontal: 40,
    paddingVertical: 14,
    borderRadius: 12,
    borderWidth: 2,
    borderColor: 'rgba(216, 148, 20, 0.3)',
    shadowColor: '#5C371C',
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowOpacity: 0.2,
    shadowRadius: 8,
    elevation: 4,
  },
  smallButtonText: {
    fontSize: 16,
    fontWeight: '600',
    color: '#FFFFFF',
    letterSpacing: 0.5,
  },
});
