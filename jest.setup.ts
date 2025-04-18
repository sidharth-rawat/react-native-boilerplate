// Import React Native Testing Library
import '@testing-library/react-native';

// Mock Animated module
jest.mock('react-native/Libraries/Animated/Animated', () => {
  const Animated = jest.requireActual('react-native/Libraries/Animated/Animated');
  return {
    ...Animated,
    useNativeDriver: false,
  };
});
