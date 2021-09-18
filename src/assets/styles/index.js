import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#182522',
    // color: #804000
    alignItems: 'center',
    justifyContent: 'center',
  },
  texto: {
    fontSize: 24,
    fontWeight: 'bold',
  },
  inputEbotao: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 20,
  },
  titulo: {
    fontSize: 24,
    color: '#FFF',
  },
  subtitulo: {
    fontSize: 20,
    color: '#FFF',
    marginTop: 10,
  },
  botaoLimpar: {
    width: 100,
  },
  containerBotoes: {
    marginLeft: 10,
    width: 100,
  },
});

export default styles;
