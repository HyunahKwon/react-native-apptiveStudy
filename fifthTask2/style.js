/**
 * Created by USER on 2017-05-14.
 */

import React from 'react';
import {
    StyleSheet,
} from 'react-native';

const styles = StyleSheet.create({
    parent: {
        flexDirection: 'column',
        position: 'absolute',
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        backgroundColor: '#dadee1',
    },
    cellOne: {
        flex: 1,
        backgroundColor: '#3a5a97',
        flexDirection: 'row',
        alignItems: 'center',
    },
    cellTwo: {
        flex: 1,
        backgroundColor: '#ffffff',
        flexDirection: 'row',
        alignItems: 'center',
    },
    cellThree: {
        backgroundColor: '#ffffff',
        flex: 2,
        marginTop: 20,
        flexDirection: 'column',
    },
    cellFour: {
        flex: 6,
        backgroundColor: '#FFFFFF',
        marginTop: 20,
        flexDirection: 'column',
    },
    searchBlock: {
        flex: 4,
    },
    veryLeft:{
        flex: 0.5,
        backgroundColor: '#000000',
    },
    msg:{ //페메
        flex: 1,
        alignItems: 'center',
    },
    people:{ //친구리스트
        flex: 1,
        alignItems: 'center',
    },
    TwoAndOne: { //뉴스피드
        flex: 1,
        alignItems: 'center',
    },
    TwoAndTwo: { //지구
        flex: 1,
        alignItems: 'center',
    },
    TwoAndThree: { //메뉴
        flex: 1,
        alignItems: 'center',
    },

    cellThreeFirst: {
        flex: 2,
        flexDirection: 'row',
        alignItems: 'center',
    },
    cellThreeSecond: {
        flex: 1.5,
        flexDirection: 'row',
        alignItems: 'center',
        borderWidth: 0.5,
        borderColor: '#dadee1',
    },
    FirstOfThreeFirst: {
      flex: 0.2,
    },
    SecondOfThreeFirst: {
      flex: 1,
    },
    ThirdOfThreeFirst: {
      flex: 5,
    },
    FirstOfThreeSecond: {
        flex: 1,
        alignItems: 'center',
    },
    SecondOfThreeSecond: {
        flex: 1,
        alignItems: 'center',
    },
    ThirdOfThreeSecond: {
        flex: 1,
        alignItems: 'center',
    },
    cellFourFirst: {
        flex: 0.5,
        alignItems: 'center',
        flexDirection: 'row',
        borderWidth: 0.5,
        borderColor: '#dadee1',
    },
    FirstOfFourFirst: {
        flex: 1,
    },
    SecondOfFourFirst: {
        flex: 55,
    },
    ThirdOfFourFirst: {
        flex: 5,
    },
    cellFourSecond: {
        flex: 4,
    },
    FirstOfFourSecond: {
        flex: 1,
        flexDirection: 'row',
    },
    SecondOfFourSecond: {
        flex: 4,
        backgroundColor: '#ffff00',
    },
    FirstOfLast: {
        flex: 0.2,
    },
    SecondOfLast: {
        flex: 1,
    },
    ThirdOfLast: {
        flex: 4.5,
        flexDirection: 'column',
    },
    FourthOfLast: {
        flex: 0.5,
        alignSelf: 'center',
    },

    ThirdOfLast_One: {
        flex: 1,
    },
    ThirdOfLast_Two: {
        flex: 1,
    },
    Container: {
        width: 210,
        color: '#dddddd'
    },
});


export default styles;