import React from'react';
import { Text, View, SectionList } from'react-native';
import { Red, Green } from './TextColor';
const DATA = [
    {
        title: 'Main dishes',
        data: ['Pizza', 'Burger', 'Risotto'],
    },
    {
        title:'Sides',
        data: ['French Fries', 'OnionRings', 'Fried Shrimps'],
    },
    {
        title:'Drinks',
        data:['Water', 'Coke', 'Beer'],
    },
    {
        title:'Desserts',
        data:['CheeseCake', 'IceCream'],
    },
];


export function List(){
    return <>
    <SectionList sections={DATA} keyExtractor={(item, index) =>item+ index}
        renderItem={({item}) =>(
            <View>
                <Green><Text>{item}</Text></Green>
            </View>
            )}
        renderSectionHeader={({section: {title}}) =>(
            <Red><Text>{title}</Text></Red>   
            )}/></>
}