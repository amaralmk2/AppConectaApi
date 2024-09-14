import { useState } from "react";
import { Container, Text, Input, Buttom, TextButtom} from "./styled";
import { View, Alert, StyleSheet } from "react-native";
import axios from "axios";
import styled from "styled-components";

export function Home(){

    const [email, setEmail] = useState('');
    const [name, setName] = useState('');
    const [age, setAge] = useState('');

    const handleSubmit = async () => {
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

        try{    
            const response = await axios.post('http://10.0.2.2:3000/usuarios', {
                name,
                email,
                age,
            });

            if(response.status = 201) {
                Alert.alert('Success', 'Usuario criado com sucesso!');
                setName('');
                setEmail('');
                setAge('');
            }
        

        }catch(error){
        
            const errorMessage = (error as Error).message || 'Um erro inesperado ocorreu!';
            Alert.alert('Error', errorMessage);
            console.error('Error', errorMessage);

                
        }

    }

    return(
        <Container>
            <View style={styles.box}>
            <View style={styles.container}>
                    <Text>Digite seu nome</Text>
                    
                    <Input 
                     value={name}
                     onChangeText={setName}
                     keyboardType="default" 
                     placeholder="Digite seu E-mail"

            />
                <Text>Digite seu email</Text>
                
                <Input
                value={email}
                onChangeText={setEmail}
                keyboardType="email-address"
                placeholder="Digite seu nome"
            />
                <Text>Digite sua idade</Text>
                
                <Input
                value={age}
                onChangeText={setAge}
                keyboardType="numeric"
                placeholder="Digite sua idade"
                />
            <Buttom onPress={handleSubmit}><TextButtom>Enviar dados</TextButtom></Buttom>
            </View>
            </View>
        </Container>
    );

    
};

const styles = StyleSheet.create({
    container : {

        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',

    },

    box: {
        width: 300,               
        height: 500,              
        borderWidth: 0.5,         
        borderColor: 'black',     
        borderRadius: 40,         
    }
})