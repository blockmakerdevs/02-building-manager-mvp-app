import React, {Component, useEffect, useState} from 'react';
import { StyleSheet } from 'react-native';
import { TextInput, Button, Card } from 'react-native-paper';
import {View} from "react-native-ui-lib";


const Login  = ({ navigation }) =>  {

    const handerClick = () => navigation.reset({
        index: 0,
        routes: [{ name: 'Dashboard' }],
    });
    //navigation.push('dashboard')

    const [text, setText] = useState('');

        return (
            <View flex paddingH-25 paddingT-120>
                <Card.Cover source={{ uri: 'https://picsum.photos/700' }} />
                <TextInput
                    style={styles.input}
                    label="Email"
                    value={text}
                    onChangeText={text => setText(text)}
                />

                <TextInput
                    style={styles.input}
                    label="Password"
                    value={text}
                    onChangeText={text => setText(text)}
                />

                <Button style={styles.input} mode="contained-tonal" onPress={() => handerClick()}>
                    Login
                </Button>
            </View>
        );
}

const styles = StyleSheet.create({
    input: {
        marginTop: 15,
    },
    textFormat: {
        fontSize: 20,
        textAlign: 'center',
        margin: 10,
    },
});

export default Login