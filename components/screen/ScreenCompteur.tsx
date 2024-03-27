import React from 'react';
import { Button, StyleSheet } from 'react-native';
import { Text, View } from '../Themed';
import { ExoUseInterval,AddToNumber } from '../Compteur';
import styles from '../css/style';
import { ThemeButtons } from '../ButonSwitchColor';

export default function ScreenCompteur({ path }: { path: string }) {
    return (
        <View style={styles.body}>
            <ThemeButtons/>
            <View style={styles.container}>
                <Text style={styles.textCenter}>Compteur avec un bouton</Text>
                    <AddToNumber></AddToNumber>
                <Text>Compteur par seconde</Text>
                <ExoUseInterval></ExoUseInterval>
            </View>
        </View>

    );

}