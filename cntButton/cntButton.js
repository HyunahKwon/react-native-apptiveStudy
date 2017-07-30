/** Created by USER on 2017-05-20. ...*/

import React, { Component } from 'react';
import {
    StyleSheet,
    Text,
    View,
    TouchableHighlight,
    Button,
    Alert,
    AsyncStorage,
} from 'react-native';

import styles from './style';

const STORAGE_KEY = '@cntButton:count';

class cntButton extends Component {
    constructor(props) {
        super(props);
        this.state = ({count: 0, pressing: false});
    }

    componentWillMount() {
        AsyncStorage.getItem(STORAGE_KEY)
            .then((value) => {
                if (value !== null) {
                    this.setState({count: Number(value)});
                }
            })
            .catch((error) => console.log('AsyncStorage error: ' + error.message))
            .done();
    }

    onPressIn = () => {
        this.setState({count: this.state.count + 1, pressing: true});

        AsyncStorage.setItem(STORAGE_KEY, (this.state.count + 1).toString())
            .then(() => {})
            .catch((error) => console.log('AsyncStorage error:' + error.message))
            .done();
    }

    onPressOut = () => {
        this.setState({pressing: false, });
    }

    onPressReset = () => {
        Alert.alert('Reset!');
        this.setState({count: 0});

       AsyncStorage.setItem(STORAGE_KEY, '0')
            .then(() => {})
            .catch((error) => console.log('AsyncStorage error:' + error.message))
            .done();
    }


    render() {
        return (
            <View style={styles.container}>
                <TouchableHighlight
                    onPressIn={this.onPressIn}
                    onPressOut={this.onPressOut}

                    style={styles.touchable}>

                    <View style={styles.button}>
                        <Text style={styles.welcome}>
                            {this.state.pressing ? 'Add One!' : 'PUSH ME then...'}
                        </Text>
                    </View>
                </TouchableHighlight>
                <View style={styles.container2}>
                    <Button
                        onPress={this.onPressReset}
                        title="Reset"
                        color="#c0c0c0"
                        accessibilityLabel="Hello"
                    >
                    </Button>
                </View>
                <Text>
                    count : {this.state.count} </Text>
            </View>
        );
    }
}


export default cntButton;