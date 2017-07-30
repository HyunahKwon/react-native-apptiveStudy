import React, {
    Component,
} from 'react';

import {
    Switch,
    View,
    StyleSheet,
    Text,
} from 'react-native';

class SwitchExample extends Component {
    constructor(props){
        super(props);
        this.state = {value: false};
    }

    _onValueChange(value){
        this.setState({value: value});
        if(this.props._onValueChange){
            this.props._onValueChange(value);
        }
    }

    render() {
        var colorClass;
        colorClass = this.state.value ? {color: styles.blueContainer, nextColor: "Red"} : {
            color: styles.redContainer, nextColor: "Blue"};
        return (
            <View style={[styles.container, colorClass.color]}>
                <Text style={styles.welcome}>
                    Make me {colorClass.nextColor}!
                </Text>
                <Switch
                    onValueChange={(value) => this.setState({value: value})}
                    style={{marginBottom: 10}}
                    value={this.state.value}
                />
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#ffffff',
        paddingTop: 24,
    },
    blueContainer: {
        backgroundColor: '#5555FF'
    },
    redContainer: {
        backgroundColor: '#FF5555'
    },
    welcome: {
        fontSize: 20,
        textAlign: 'center',
        margin: 10,
    }
});

export default SwitchExample
