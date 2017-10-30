import React, { Component } from "React";
import { View, Text } from "react-native";


export default class ComA extends Component {
    constructor(props) {
        super(props);
        this.state = {
            mau: "black"
        }
    }

    doiMauC() {
        this.setState({
            mau: "yellow"
        });
    }

    render() {
        return (
            <View style={{ width: 100, height: 100, backgroundColor: this.state.mau, justifyContent: "center", alignItems: "center" }}>

            </View>
        )

    }
}
