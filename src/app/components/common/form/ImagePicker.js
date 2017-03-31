import React from 'react';
import { View, Image, TouchableOpacity } from 'react-native';
import ImagePicker from 'react-native-image-picker';
import { Text } from '../content/Text';
import { formStyles } from '../../../stylesheet';

export default class MyImagePicker extends React.Component {

  constructor(props) {
    super(props);

    this.state = {
      avatarSource: null,
    };
  }

  showPicker() {
    // More info on all the options is below in the README...just some common use cases shown here
    const options = {
      title: 'Select Avatar',
      customButtons: [
        { name: 'fb', title: 'Choose Photo from Facebook' },
      ],
      storageOptions: {
        skipBackup: true,
        path: 'images',
      },
    };

    /**
     * The first arg is the options object for customization
     * (it can also be null or omitted for default options),
     * The second arg is the callback which sends object: response (more info below in README)
     */
    ImagePicker.showImagePicker(options, (response) => {
      console.log('Response = ', response);

      if (response.didCancel) {
        console.log('User cancelled image picker');
      } else if (response.error) {
        console.log('ImagePicker Error: ', response.error);
      } else if (response.customButton) {
        console.log('User tapped custom button: ', response.customButton);
      } else {
        const source = response.uri;

        // You can also display the image using data:
        // let source = { uri: 'data:image/jpeg;base64,' + response.data };

        this.setState({
          avatarSource: source,
        });
      }
    });
  }

  render() {
    const pic = this.state.avatarSource || this.props.value;

    return (
      <View style={formStyles.imagePickerWrapper}>
        {
          pic ?
            <Image
              source={{ uri: pic }}
              style={formStyles.imagePickerImage}
            />
            :
            null
        }
        <TouchableOpacity onPress={() => this.showPicker()}>
          <Text style={formStyles.imagePickerReplaceText}>Select image</Text>
        </TouchableOpacity>
      </View>
    );
  }
}
