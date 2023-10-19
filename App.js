import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { PaperProvider } from 'react-native-paper';
import ListadeTarefas from './src/screen/ListadeTarefas';

export default function App() {
  return (
   <PaperProvider>
     <ListadeTarefas></ListadeTarefas>
   </PaperProvider>
  );
}

const styles = StyleSheet.create({
});
