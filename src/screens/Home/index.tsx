import { Container, Text, Input, Buttom } from "./styled";
import { View } from "react-native";

export function Home(){

    return(
        <Container>
            <Text>Olá isso é um teste!</Text>
            <View>
                <Text>Digite seu nome</Text>
            <Input type="text" placeholder="Digite alguma coisa..."></Input>
                <Text>Digite seu email</Text>
            <Input type="text" placeholder="Digite alguma coisa..."></Input>
                <Text>Digite sua idade</Text>
            <Input type="text" placeholder="Digite alguma coisa..."></Input>
            <Buttom title="submit"/>
            </View>
        </Container>
    );

};