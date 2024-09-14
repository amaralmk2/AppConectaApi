import { useState } from "react";
import { Container, Text, Input, Buttom, TextButtom} from "./styled";
import { View, Alert } from "react-native";
import axios from "axios";

export function Home(){

    const [email, setEmail] = useState('');
    const [name, setName] = useState('');
    const [age, setAge] = useState('');

    const handleSubmit = () => {
        if(!name || !email || !age){
            Alert.alert('Error', "Preencha todos os campos!");
            return;
        }

        if(!email.includes('@')){
            Alert.alert('Error', "Insira um E-mail valido!");
            return;
        }
        if(isNaN(Number(age)) || Number(age) < 0){
            Alert.alert('Error', 'Insira uma idade do tipo numerico e maior que 0');
            return;

        }

    }

    return(
        <Container>
            <View>
                <Text>Digite seu nome</Text>
            <Input keyboardType="default" placeholder="Digite seu E-mail"></Input>
                <Text>Digite seu email</Text>
            <Input keyboardType="email-address" placeholder="Digite seu nome"></Input>
                <Text>Digite sua idade</Text>
            <Input keyboardType="numeric" placeholder="Digite sua idade"></Input>
            <Buttom onPress={handleSubmit}><TextButtom>Enviar dados</TextButtom></Buttom>
            </View>
        </Container>
    );

};