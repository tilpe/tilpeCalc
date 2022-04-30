import React, {useState} from 'react';
import { StyleSheet, Text, View,StatusBar } from 'react-native';
import styled from 'styled-components/native';
import Display from './src/components/Display';

export default function App() {

  const [numeros,setNumeros] = useState('');
  const [resultado, setResultado] =  useState('0');

  function setNumero(numero) {

    let  aux = numero.toString();
    let  novoNumero = numeros + aux;
    setNumeros(novoNumero)
  }

  function calcular() {
       let resultado = eval(numeros);
       resultado = parseFloat(resultado);
       setResultado(resultado);
  }

  function del() {
     let novoNumero = numeros.substring(0, numeros.length - 1);
     setNumeros(novoNumero);
  }

  function CC() {
    setNumeros('');
    setResultado(0);
  }

  return (
    <Container>
        <StatusBar 
            style="auto" 
            backgroundColor="blue"
            hidden={true}/>
        
          <Display
              numeros = {numeros}
              resultado = {resultado}
          />
          <ContainerButton>
              <AreaButtonNumber>
                  <Botao 
                    activeOpacity={1}
                    underlayColor="#b31c17"
                    onPress={() => setNumero(7)}>
                      <Number>7</Number>
                  </Botao>      

                  <Botao 
                    activeOpacity={1}
                    underlayColor="#b31c17"
                    onPress={() => setNumero(8)}>
                      <Number>8</Number>
                  </Botao> 

                  <Botao 
                    activeOpacity={1}
                    underlayColor="#b31c17"
                    onPress={() => setNumero(9)}>
                      <Number>9</Number>
                  </Botao> 

                  <Botao 
                    activeOpacity={1}
                    underlayColor="#b31c17"
                    onPress={() =>setNumero(4)}>
                      <Number>4</Number>
                  </Botao> 

                  <Botao 
                    activeOpacity={1}
                    underlayColor="#b31c17"
                    onPress={() => setNumero(5)}>
                      <Number>5</Number>
                  </Botao> 

                  <Botao 
                    activeOpacity={1}
                    underlayColor="#b31c17"
                    onPress={() => setNumero(6)}>
                      <Number>6</Number>
                  </Botao> 

                  <Botao 
                    activeOpacity={1}
                    underlayColor="#b31c17"
                    onPress={() => setNumero(1)}>
                      <Number>1</Number>
                  </Botao> 

                  <Botao 
                    activeOpacity={1}
                    underlayColor="#b31c17"
                    onPress={() => setNumero(2)}>
                      <Number>2</Number>
                  </Botao> 

                  <Botao 
                    activeOpacity={1}
                    underlayColor="#b31c17"
                    onPress={() => setNumero(3)}>
                      <Number>3</Number>
                  </Botao>       

                  <Botao 
                    activeOpacity={1}
                    underlayColor="#b31c17"
                    onPress={() =>del()}>
                      <Number>del</Number>
                  </Botao>  

                  <Botao 
                    activeOpacity={1}
                    underlayColor="#b31c17"
                    onPress={() => setNumero(0)}>
                      <Number>0</Number>
                  </Botao>     

                  <Botao 
                    activeOpacity={1}
                    underlayColor="#b31c17"
                    onPress={() => setNumero('.')}>
                      <Number>.</Number>
                  </Botao> 

                  <BotaoCC
                       activeOpacity={1}
                       underlayColor="#b31c17"
                       onPress={() => CC()}>
                      <Number>CC</Number>
                  </BotaoCC>
              </AreaButtonNumber>

              <AreaButtonOperatiion>
                    <BotaoOperation 
                        activeOpacity={1}
                        underlayColor="#b31c17"
                        onPress={() => setNumero('/')}>
                        <Number>/</Number>
                    </BotaoOperation>   

                    <BotaoOperation 
                        activeOpacity={1}
                        underlayColor="#b31c17"
                        onPress={() => setNumero('*')}>
                        <Number>X</Number>
                    </BotaoOperation>   

                    <BotaoOperation 
                        activeOpacity={1}
                        underlayColor="#b31c17"
                        onPress={() => setNumero('-')}>
                        <Number>-</Number>
                    </BotaoOperation>   

                    <BotaoOperation 
                        activeOpacity={1}
                        underlayColor="#b31c17"
                        onPress={() => setNumero('+')}>
                        <Number>+</Number>
                    </BotaoOperation> 

                    <BotaoOperation 
                        activeOpacity={1}
                        underlayColor="#b31c17"
                        onPress={() => calcular()}>
                        <Number>=</Number>
                    </BotaoOperation>     
                    
              </AreaButtonOperatiion>
          </ContainerButton>
    </Container>
  );
}


const Container = styled.View`
   width:100%;
   height:100%;
   background-color: #000
`;

const ContainerButton  = styled.View`
   flex: 1;
   flex-direction: row;
   justify-content:center;
`;

const AreaButtonNumber = styled.View`
    width: 75%;
    height: 100%;
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: center;
    margin-top: 10px;
`;

const AreaButtonOperatiion = styled.View`
   width: 25%;
   margin-top: 10px;
   padding-right: 10px
`;

const Botao = styled.TouchableHighlight`
   width:  98px;
   height: 98px;
   margin: 2px;
   justify-content: center
   align-items: center;
   border-radius: 22px
`; 

const BotaoOperation = styled.TouchableHighlight`
   width:  100%;
   height: 99px;
   margin: 2px;
   justify-content: center;
   align-items: center;
   border-radius: 15px
`; 

const BotaoCC = styled.TouchableHighlight`
   width:  100%;
   height: 98px;
   margin: 2px;
   justify-content: center
   align-items: center;
   border-radius: 22px
`; 

const Number = styled.Text`
    color: #fff;
    font-size:55px;
    width:100%;
    height: 100%;
    text-align: center;
`;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    color: 'blue',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
