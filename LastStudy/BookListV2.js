/**
 * Created by USER on 2017-05-06.
 */
/**
 * Created by USER on 2017-05-06.
 */
import React, { Component, } from 'react';
import { Navigation } from 'react-native-navigation';
import {
    AppRegistry,
    ListView,
    Text,
    StyleSheet,
    View,
    Image,
    Navigator,
    TouchableHighlight,
    AsyncStorage,
    Button,
} from 'react-native';

import BookItem from './BookItem';

const STORAGE_KEY = 'listview:list';
const API_KEY = '73b19491b83909c7e07016f4bb4644f9:2:60667290';
const QUERY_TYPE = 'hardcover-fiction';
const API_STEM = 'http://api.nytimes.com/svc/books/v3/lists';
const ENDPOINT = `${API_STEM}/${QUERY_TYPE}?response-format=json&api-key=${API_KEY}`;

class BookList extends Component {
    constructor(props) {
        super(props);
        var ds = new ListView.DataSource({
            rowHasChanged: (r1, r2) => r1 !== r2,
        });
        this.state = {
            dataSource: ds.cloneWithRows([]),
        }
    }

    componentDidMount() {
        this._refreshData();
    }

    _renderRow(rowData) {
        return <BookItem coverURL={rowData.book_image}
                         title={rowData.title}
                         author={rowData.author}/>;
    }

    _renderHeader() {
        return (
            <View style={styles.sectionDivider}>
                <Text style={styles.headingText}>
                    Bestsellers in Hardcover Fiction
                </Text>
                <Button
                    onPress={this._onCount}
                    title='Write'>
                </Button>
            </View>
        );
    }

    _renderFooter() {
        return(
            <View style={styles.sectionDivider}>
                <Text>Data from the New York Times bestsellers list.</Text>
            </View>
        );
    }

    _refreshData() {
        fetch(ENDPOINT)
            .then((response) => response.json())
            .then((rjson) => {
                this.setState({
                    dataSource: this.state.dataSource.cloneWithRows(rjson.results.books),
                })
            })
    }

    componentWillMount() {
        AsyncStorage.getItem(STORAGE_KEY)
            .then((value) => {
                if (value !== null) {
                    this.setState({cnt: Number(value)});
                }
            })


    }

    _onCount = () => {
        this.setState({
            cnt:  this.state.cnt + 1,
        });

        AsyncStorage.setItem(STORAGE_KEY, (this.state.cnt + 1).toString())
            .then(() => console.log('saved Count to disk: ' + this.state.cnt))
            .catch((error) => console.log('AsynchStorage error:' + error.message))
            .done();
    }

    render() {
        return (
            <ListView
                style={{marginTop: 24}}
                dataSource={this.state.dataSource}
                renderRow={this._renderRow}
                renderHeader={this._renderHeader}
                renderFooter={this._renderFooter}
            />

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
    list: {
        flex: 1,
        flexDirection: 'column'
    },
    listContent: {
        flex: 1,
        flexDirection: 'column',
    },
    row: {
        flex: 1,
        fontSize: 14,
        padding: 42,
        borderWidth: 1,
        borderColor: '#DDDDDD',
    },
    sectionDivider: {
        padding: 8,
        backgroundColor: '#EEEEEE',
        alignItems: 'center',
    },
    headingText: {
        flex: 1,
        fontSize: 24,
        alignSelf: 'center',
    },
    buttonStyle:{

    }
});

export default BookList;
