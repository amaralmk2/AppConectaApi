import styled from "styled-components/native";
import light from "../../Theme/light";

export const Container = styled.View`
    flex: 1;
    align-items: center;
    justify-content: center;
    background-color: ${({theme}) => theme.COLORS.BACKGROUND};
    
`;

export const Text = styled.Text`
    color: ${({theme}) => theme.COLORS.PRIMARY_800};
    padding: 4px;
    font-size: 19px;
    font-style: helveltica;
`;

export const TextButtom = styled.Text`
    color: black;
    padding: 4px;
    font-size: 12px;
    font-style: italic;

`

export const Input = styled.TextInput`

    padding: 6px;
    margin: 5px;
    width: 50%;
    color: black;
    border: none;
    border-radius: 6px;
    background-color: ${({theme}) => theme.COLORS.PRIMARY_700};

`;

export const Buttom = styled.TouchableOpacity`
    
    margin-top: 15px;
    padding: 6px;
    width: 100px;
    background-color: ${({theme}) => theme.COLORS.PRIMARY_800};
    border-radius: 25px;
    align-items: center;
    justify-content: center;

`;