/**
 * Created by USER on 2017-04-22.
 */

import React, { Component } from 'react';
import {
    StyleSheet,
    Text,
    View,
    TouchableHighlight
} from 'react-native';

class thirdStudy extends Component {
    constructor(props) {
        super(props);
        this.state = ({pressing: false, long : false});
    }

    onPressIn = () => {
        this.setState({pressing: true, long : false});
    }

    onPressOut = () => {
        this.setState({pressing: false, long : false});
    }

    onLongPress = () => {
        this.setState({long : true});
    }

    render() {
        return (
            <View style={styles.container}>
                <TouchableHighlight
                    onPressIn={this.onPressIn}
                    onPressOut={this.onPressOut}
                    onLongPress={this.onLongPress}
                    style={styles.touchable}>

                    <View style={styles.button}>
                        <Text style={this.state.long ? styles.welcomeBigger : styles.welcome}>
                            {this.state.pressing ? 'EEK!' : 'PUSH ME'}
                        </Text>
                    </View>
                </TouchableHighlight>

            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#F5FCFF'
    },
    welcome: {
        fontSize: 20,
        textAlign: 'center',
        margin: 10,
        color: '#FFFFFF'
    },
    welcomeBigger: {
        fontSize: 40,
        textAlign: 'center',
        margin: 10,
        color: '#FFFFFF'
    },
    touchable: {
        borderRadius: 100
    },
    button: {
        backgroundColor: '#FF0000',
        borderRadius: 100,
        height: 200,
        width: 200,
        justifyContent: 'center'
    },
});

export default thirdStudy;