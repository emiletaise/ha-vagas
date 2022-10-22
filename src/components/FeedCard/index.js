import React from "react";
import { TouchableOpacity, Text } from "react-native";
import { Card, CardImage, CardContent } from 'react-native-cards';
import Icon from "react-native-vector-icons/AntDesign";

import { useNavigation, useRoute } from '@react-navigation/native';

import {
    Avatar, NomeEmpresa, NomeProduto, DescricaoProduto, PrecoProduto, Likes
} from '../../assets/styles';
import vaga from "../../assets/imgs/vaga.jpg";


export default class FeedCard extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            feed: this.props.feed,
            navegador: this.props.navegador
        }
    }

    render = () => {
        const { feed, navegador } = this.state;

        return (
            <TouchableOpacity onPress={
                () => {
                    navegador.navigate("Detalhes", { feedId: feed._id })
                }
            }>
                <Card>
                    <CardImage source={vaga} />
                    <CardContent>
                        <NomeEmpresa>{feed.company.name}</NomeEmpresa>
                    </CardContent>
                    <CardContent>
                        <NomeProduto>{feed.vaga.name}</NomeProduto>
                    </CardContent>
                    <CardContent>
                        <DescricaoProduto>{feed.vaga.description}</DescricaoProduto>
                    </CardContent>
                </Card>
            </TouchableOpacity>
        );
    }
}