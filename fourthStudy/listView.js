/**
 * Created by USER on 2017-05-06.
 */

import React, { Component, } from 'react';

import {
    AppRegistry,
    ListView,
    Text,
    StyleSheet,
} from 'react-native';

class listView extends Component {
    constructor(props) {
        super(props);
        var ds = new ListView.DataSource({
            rowHasChanged: (r1, r2) => r1 !== r2,
        });
        this.state = {
            dataSource: ds.cloneWithRows(['a', 'b', 'c', 'a longer example', 'd', 'e']),
        }

    }
    _renderRow(rowData) {
        return <BookItem coverURL={rowData.book_image}
                         title={rowData.title}
                         author={rowData.author}/>;
    }

    render() {
        return (
            <ListView
                dataSource={this.state.dataSource}
                renderRow={this._renderRow}
            />
        )
    }

}

const styles = StyleSheet.create({
    row: {
        flex: 1,
        fontSize: 14,
        padding: 42,
        borderWidth: 1,
        borderColor: '#DDDDDD',
    }
});

export default listView;

AppRegistry.registerComponent('listView', () => listView);