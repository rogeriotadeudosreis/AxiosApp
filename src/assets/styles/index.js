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
    marginBottom: 25,
  },
  containerBotoes: {
    marginLeft: 10,
    width: 100,
   
  },
  containerResultado: {
    width: '100%',
    backgroundColor: 'yellow',
  },
  cep: {
    fontSize: 18,
    color: '#FFF',
    backgroundColor: '#000',
    marginLeft: 2,
    marginTop:5,
    padding:5,
    height: 40,
    borderRadius:5,
  },
});

export default styles;
