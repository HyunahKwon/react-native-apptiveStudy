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
} from 'react-native';


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
        alignItems: 'flex-end',
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

class BookItem extends Component{
    propTypes: {
        coverURL: React.PropTypes.string.isRequired,
        author: React.PropTypes.string.isRequired,
        title: React.PropTypes.string.isRequired
    }
    render(){
        return(
            <View style={styles.bookItem}>
                <Image style={styles.cover} source={{uri: this.props.coverURL}}/>
                <View style={styles.info}>
                    <Text style={styles.author}>{this.props.author}</Text>
                    <Text style={styles.title}>{this.props.title}</Text>
                </View>
            </View>
        );
    }
}

export default BookItem;
