import React, {Component, useState} from 'react';
import { StyleSheet } from 'react-native';
import {View} from "react-native-ui-lib";
import { List, MD3Colors, Avatar, Card, IconButton } from 'react-native-paper';

import {BottomNavigation, Text, TouchableRipple} from 'react-native-paper';

const MusicRoute = () => (
    <Card.Title
        title="Card Title"
        subtitle="Card Subtitle"
        left={(props) => <Avatar.Icon {...props} icon="folder" />}
        right={(props) => <IconButton {...props} icon="dots-vertical" onPress={() => {}} />}
    />
)

const AlbumsRoute = () => <Text>Albums</Text>;

const RecentsRoute = () => <Text>Recents</Text>;

const NotificationsRoute = () => <Text>Notifications</Text>;

const Dashboard  = ({ navigation }) =>  {
    const [index, setIndex] = React.useState(0);
    const [routes] = React.useState([
        { key: 'music', title: 'Favorites', focusedIcon: 'heart', unfocusedIcon: 'heart-outline'},
        { key: 'albums', title: 'Albums', focusedIcon: 'album' },
        { key: 'recents', title: 'Recents', focusedIcon: 'history' },
        { key: 'notifications', title: 'Notifications', focusedIcon: 'bell', unfocusedIcon: 'bell-outline' },
    ]);

    const renderScene = BottomNavigation.SceneMap({
        music: MusicRoute,
        albums: AlbumsRoute,
        recents: RecentsRoute,
        notifications: NotificationsRoute,
    });

    return (
        <BottomNavigation
            navigationState={{ index, routes }}
            onIndexChange={setIndex}
            renderScene={renderScene}
        />
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

export default Dashboard