import React, {useState} from 'react';
import styled from 'styled-components/native';
import { StyleSheet, Text, View,StatusBar } from 'react-native';

export default (props) => {

    const [displayDigitos, setDisplayDigitos] = useState();
    return(
        <Display>
            {props.display && 
                 <Resultado>
                    {props.resultado}
                 </Resultado>
            } 

            {!props.display && 
                <>
                    <Numeros>
                    {props.valorDisplay}
                    </Numeros>
                    
                    <Resultado>
                    {(props.resultado == '0') ? '' : '='} {props.resultado}
                    </Resultado>
                </>
            } 
           
        </Display>
    );
}

const Display = styled.View`
   width: 90%;
   height: 28%;
   margin: 30px auto;
   border-radius: 20px;
   justify-content: center;
`;

const Numeros = styled.TextInput`
    color: #fff; 
    width: 100%;
    font-size: 40px;
    text-align: right;
    flex:1;
`


const Resultado = styled.TextInput`
    color: #fff; 
    width: 100%; 
    font-size: 60px;
    text-align: right;
`;