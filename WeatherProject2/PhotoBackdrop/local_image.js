/**
 * Created by USER on 2017-05-18.
 */
import React, {
    Component,
} from 'react';

import {
    Image
} from 'react-native';

import styles from './style.js';

class PhotoBackdrop extends Component {
    render() {
        return (
            <Image
                style={styles.backdrop}
                source={require('./flowers.png')}
                resizeMode='cover'>
                {this.props.children}
            </Image>
        );
    }
}

export default PhotoBackdrop;