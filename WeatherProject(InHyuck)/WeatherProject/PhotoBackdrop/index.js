import React, {
  Component,
} from 'react';

import {
  Image,
  Platform
} from 'react-native';

import ImagePicker from 'react-native-image-picker';
import styles from './style.js';
import Button from './../Button';

class PhotoBackdrop extends Component {
  constructor(props) {
    super(props);
    this.state = {
      photoSource: require('./flowers.png')
    };
  }

  _pickImage() {
    // See https://github.com/marcshilling/react-native-image-picker#usage

    var options = {
      title: 'Select Avatar',
      customButtons: [
        {name: 'fb', title: 'Choose Photo from Facebook'},
      ],
      storageOptions: {
        skipBackup: true,
        path: 'images'
      }
    };

    ImagePicker.showImagePicker(options, (response) => {
      console.log('Response = ', response);

      if (response.didCancel) {
        console.log('User cancelled image picker');
      }
      else if (response.error) {
        console.log('ImagePicker Error: ', response.error);
      }
      else if (response.customButton) {
        console.log('User tapped custom button: ', response.customButton);
      }
      else {
        let source = { uri: response.uri };

        // You can also display the image using data:
        // let source = { uri: 'data:image/jpeg;base64,' + response.data };

        this.setState({
          photoSource: source
        });
      }
    });
  }

  render() {
    return (
    // <Image source={this.state.avatarSource} style={styles.uploadAvatar} />

    <Image
        style={styles.backdrop}
        source={ this.state.photoSource }
        resizeMode='cover'>
        {this.props.children}
        <Button
          style={styles.button}
          label="Load Image"
          onPress={this._pickImage.bind(this)}/>
      </Image>
      );
  }
}

export default PhotoBackdrop;