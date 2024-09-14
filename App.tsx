import { StatusBar } from 'expo-status-bar';
import { Home } from './src/screens/Home';
import light from './src/Theme/light';
import { ThemeProvider } from 'styled-components';


export default function App() {
  return (
    <ThemeProvider theme={light}>
    <Home />
    </ThemeProvider>
  );
};