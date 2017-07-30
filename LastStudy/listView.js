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
    InputText,
    Button,
    Modal,
    TouchableHighlight,
} from 'react-native';
import BookItem from './BookItem';

var source = {title: 'a', content: 'content1'};
class listView extends Component {
    constructor(props) {
        super(props);
        var ds = new ListView.DataSource({
            rowHasChanged: (r1, r2) => r1 !== r2,
        });
        this.state = {
            dataSource: ds.cloneWithRows(source),
            modalVisible: false,
        }
        this._onListPress = this._onListPress.bind(this);
    }
    _renderRow(rowData) {
        return <BookItem title={rowData.title}
                         content={rowData.content}
                         setModalVisible={()=> this.setModalVisible()}/>;
    }
    _onListPress(){
        this.setModalVisible(true);
    }
    setModalVisible(){
        this.setState({modalVisible: true});
    }
    componentDidMount(){
        this._refreshData();
    }
    _refreshData(){
        this.setState({
            dataSource: this.state.dataSource.cloneWithRows(source),
        })
    }

    render() {
        return (
            <View style={styles.container}>
                <ListView
                    dataSource={this.state.dataSource}
                    renderRow={this._renderRow}
                />
                <Modal
                    animationType={"slide"}
                    transparent={false}
                    visible={this.state.modalVisible}/>
            </View>
        )
    }

}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'column',
        backgroundColor: '#ffffff',
    },
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