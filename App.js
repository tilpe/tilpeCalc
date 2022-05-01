import React, {useState,useEffect} from 'react';
import { StyleSheet, Text, View,StatusBar,SafeAreaView } from 'react-native';
import styled from 'styled-components/native';
import Display from './src/components/Display';

export default function App() {

  const [valorDisplay,setValorDisplay] = useState('');
  const [memoria, setMemoria] = useState('');
  const [resultado, setResultado] =  useState('0');
  const [display,setDisplay] = useState(); 

  function setNumero(numero) {
    numero.toString();
    if (vericarFormato(numero)) {
      if (numero == '*') {
        setValorDisplay(valorDisplay + "X");
        setMemoria(memoria + numero);
      } else {
        setValorDisplay(valorDisplay + numero);
        setMemoria(memoria + numero);
      }
    }
  }

  function vericarFormato(numero) {
      if (memoria == '' && numero == "+") {
        return false;
      } else if (memoria == '' && numero == "-") {
        return false;
      } else if (memoria == '' && numero == "/") {
        return false;
      }else if (memoria == '' && numero == "*") {
        return false;
      }else if (memoria == '' && numero == ".") {
        return false;
      }else{
         return vericarUltimoDigito(numero);
      }
  }

  function vericarUltimoDigito(numero) {
    let ultimoDigito = memoria.substr(-1);

    switch (ultimoDigito) {
        case (ultimoDigito == "+" && numero == "+") :
          return false;
        break;
        case ultimoDigito == "-" && numero == "-" :
          return false;
        break;
        case ultimoDigito == "/" && numero == "/" :
          return false;
        break;
        case ultimoDigito == "*" && numero == "*" :
          return false;
        break;
        case ultimoDigito == "." && numero == "." :
          return false;
        break;
        default : 
          if (ultimoDigito == "+" && (numero == "+" || numero == "-" || numero == "*" || numero == "/" || numero == ".")) {
            return false; 
          } else if (ultimoDigito == "-" && (numero == "+" || numero == "-" || numero == "*" || numero == "/"  || numero == ".")){
            return false
          } else if (ultimoDigito == "/" && (numero == "+" || numero == "-" || numero == "*" || numero == "/"  || numero == ".")){
            return false;
          } else if (ultimoDigito == "*" && (numero == "+" || numero == "-" || numero == "*" || numero == "/"  || numero == ".")){
            return false
          } else if (ultimoDigito == "." && (numero == "+" || numero == "-" || numero == "*" || numero == "/"  || numero == ".")){ 
            return false;
          } else {
            return true;
          }
        break;
    }

  }

  function calcular() {
    let ultimoDigito = memoria.substr(-1);

    if (!((ultimoDigito == "-") || (ultimoDigito == "+") || (ultimoDigito == "/") || (ultimoDigito == "*"))){
      if (memoria != '') {
        let resultado = eval(memoria);
        resultado = parseFloat(resultado);
        setResultado(resultado);
        setDisplay(false);
      }
    } 
  }

  function del() {
     setMemoria(memoria.substring(0, memoria.length - 1));
     setValorDisplay(valorDisplay.substring(0, valorDisplay.length - 1));
  }

  function CC() {
    setMemoria('');
    setValorDisplay('');
    setResultado(0);
  }

  useEffect(()=>{
    calcular();
  },[memoria]);
 

  return (
    <SafeAreaView>
      <Container>
          <StatusBar 
              style="auto" 
              backgroundColor="blue"
              hidden={true}/>
          
            <Display
                valorDisplay = {valorDisplay}
                resultado = {resultado}
                display = {display}
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
                        <Number>AC</Number>
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
                          onPress={() => setDisplay(true)}>
                          <Number>=</Number>
                      </BotaoOperation>     
                      
                </AreaButtonOperatiion>
            </ContainerButton>
      </Container>
    </SafeAreaView>
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
    margin-top: 1px;
`;

const AreaButtonOperatiion = styled.View`
   width: 25%;
   margin-top: 1px;
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
