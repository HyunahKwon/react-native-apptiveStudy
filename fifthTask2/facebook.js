/**
 * Created by USER on 2017-05-14.
 */

import React, { Component } from 'react';
import {
    StyleSheet,
    Text,
    View,
    Image,
    TextInput,
} from 'react-native';

import styles from './style';

class facebook extends Component {
    render() {
        var bold = {fontWeight: 'bold'};
        return (
            <View style={styles.parent}>
                <View style={styles.cellOne}>
                    <View style={styles.veryLeft}/>
                    <View style={styles.searchBlock}>
                        <TextInput style={styles.Container}>
                            <Image source={require('./img/search.png')}
                                   resizeMode='cover'></Image>
                             검색
                        </TextInput>
                    </View>
                    <View style={styles.msg}>
                        <Image source={require('./img/messenger.png')}
                               resizeMode='cover'></Image>
                    </View>
                    <View style={styles.people}>
                        <Image source={require('./img/user-list.png')}
                               resizeMode='cover'></Image>
                    </View>
                </View>
                <View style={styles.cellTwo}>
                    <View style={styles.TwoAndOne}>
                        <Image source={require('./img/icon.png')}
                               resizeMode='cover'/>
                    </View>
                    <View style={styles.TwoAndTwo}>
                        <Image source={require('./img/earth-globe.png')}
                               resizeMode='cover'/>
                    </View>
                    <View style={styles.TwoAndTwo}>
                        <Image source={require('./img/list-menu.png')}
                               resizeMode='cover'/>
                    </View>
                </View>
                <View style={styles.cellThree}>
                    <View style={styles.cellThreeFirst}>
                        <View style={styles.FirstOfThreeFirst}/>
                        <View style={styles.SecondOfThreeFirst}>
                            <Image source={require('./img/male-user-profile-picture.png')}
                                   resizeMode='cover'/>
                        </View>
                        <View style={styles.FirstOfThreeFirst}/>
                        <View style={styles.ThirdOfThreeFirst}>
                            <Text> 무슨 생각을 하고 계신가요? </Text>
                        </View>
                    </View>
                    <View style={styles.cellThreeSecond}>
                        <View style={styles.FirstOfThreeSecond}>
                            <Image source={require('./img/video-camera.png')}
                                   resizeMode='cover'/>
                            <Text> 라이브 </Text>
                        </View>
                        <View style={styles.SecondOfThreeSecond}>
                            <Image source={require('./img/photo-camera.png')}
                                   resizeMode='cover'/>
                            <Text> 사진 </Text>
                        </View>
                        <View style={styles.ThirdOfThreeSecond}>
                            <Image source={require('./img/place.png')}
                                   resizeMode='cover'/>
                            <Text> 체크인 </Text>
                        </View>
                    </View>
                </View>



                <View style={styles.cellFour}>
                    <View style={styles.cellFourFirst}>
                        <View style={styles.FirstOfFourFirst}/>
                        <View style={styles.SecondOfFourFirst}>
                            <Text><Text style={bold}>권현아</Text>님이 좋아합니다.</Text>
                        </View>
                        <View style={styles.ThirdOfFourFirst}>
                            <Image source={require('./img/down-arrow.png')}
                                   resizeMode='cover'/>
                        </View>
                    </View>
                    <View style={styles.cellFourSecond}>
                        <View style={styles.FirstOfFourSecond}>
                            <View style={styles.FirstOfLast}/>
                            <View style={styles.SecondOfLast}>
                                <Image source={require('./img/male-user-profile-picture.png')}
                                       resizeMode='cover'/>
                            </View>
                            <View style={styles.FirstOfLast}/>
                            <View style={styles.ThirdOfLast}>
                                <View style={styles.ThirdOfLast_One}>
                                    <Text style={bold}>사람 이름</Text>
                                </View>
                                <View style={styles.ThirdOfLast_Two}>
                                    <Text>언제 올렸나요?</Text>
                                </View>
                            </View>
                            <View style={styles.FourthOfLast}>
                                <Image source={require('./img/like.png')}
                                       resizeMode='cover'/>
                            </View>
                        </View>
                        <View style={styles.SecondOfFourSecond}>
                            <Text> 글이 들어가는 자리입니다 </Text>
                        </View>
                    </View>
                </View>
            </View>
        );
    }
}

export default facebook;