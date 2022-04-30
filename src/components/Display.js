import react from "react";
import styled from 'styled-components/native';
import { StyleSheet, Text, View,StatusBar } from 'react-native';

export default (props) => {
    return(
        <Display>
            <Numeros>
                {props.numeros}
            </Numeros>
            
            <Resultado>
               {(props.resultado == '0') ? '' : '='} {props.resultado}
            </Resultado>
        </Display>
    );
}

const Display = styled.View`
   width: 90%;
   height: 250px;
   margin: 30px auto;
   border-radius: 20px;
   justify-content: center;
`;

const Numeros = styled.Text`
    color: #fff; 
    width: 100%; 
    font-size: 40px;
    text-align: right;
`


const Resultado = styled.Text`
    color: #fff; 
    width: 100%; 
    font-size: 60px;
    text-align: right;
`;