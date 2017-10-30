import React, { Component } from "React";
import { View, Text } from "react-native";

import ComC from "./ComC";


export default class ComA extends Component {
    clickB() {
        this.refs.mrC.doiMauC();
    }

    render() {
        return (
            <View style={{ width: 150, height: 150, backgroundColor: "red", justifyContent: "center", alignItems: "center" }}>
                <ComC ref="mrC" />

            </View>
        )

    }
}
