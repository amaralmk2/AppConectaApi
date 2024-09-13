import { Container, Text, Input, Buttom, TextButtom } from "./styled";
import { View } from "react-native";
import axios from "axios";

export function Home(){

    return(
        <Container>
            <View>
                <Text>Digite seu nome</Text>
            <Input type="text" placeholder="Digite alguma coisa..."></Input>
                <Text>Digite seu email</Text>
            <Input type="text" placeholder="Digite alguma coisa..."></Input>
                <Text>Digite sua idade</Text>
            <Input type="text" placeholder="Digite alguma coisa..."></Input>
            <Buttom onPress={() => console.log("Você pressionou o botão!")}><TextButtom>Enviar dados</TextButtom></Buttom>
            </View>
        </Container>
    );

};