/**
 * Created by USER on 2017-05-06.
 */
import React, { Component, } from 'react';

import {
    AppRegistry,
    ListView,
    Text,
    StyleSheet,
    View,
    Image,
    TouchableHighlight,
} from 'react-native';

class BookItem extends Component {
    constructor(props) {
        super(props);
    }

    _onPress(){
        this.props.setModalVisible();
    }

    render() {
        return (
            <TouchableHighlight onPress={this._onPress.bind(this)}>
                <View style={styles.bookItem}>
                    <View style={styles.info}>
                        <Text style={styles.title}>{this.props.title}</Text>
                        <Text style={styles.author}>{this.props.author}</Text>
                    </View>
                </View>
            </TouchableHighlight>
        )
    }

}

const styles = StyleSheet.create({
    bookItem:{
        flex: 1,
        flexDirection: 'row',
        backgroundColor: '#FFFFFF',
        borderBottomColor: '#AAAAAA',
        borderBottomWidth: 2,
        padding: 5
    },
    cover: {
        flex:1,
        height: 150,
        resizeMode: 'contain'
    },
    info: {
        flex: 3,
        alignItems: 'center',
        flexDirection: 'column',
        alignSelf: 'center',
        padding: 20
    },
    author: {
        fontSize: 18
    },
    title: {
        fontSize: 18,
        fontWeight: 'bold'
    }
});

export default BookItem;
