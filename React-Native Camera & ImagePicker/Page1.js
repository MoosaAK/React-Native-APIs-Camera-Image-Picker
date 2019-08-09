// // import React from 'react';
// // import { StyleSheet, Text, View, Button } from 'react-native';

// // export default class Page1 extends React.Component {
// //   render() {
// //     return (
// //       <View style={styles.container}>
// //         <Text style={{fontSize:50}}>PAGE 1</Text>
// //         <Button
// //           title="Back to Page"
// //           onPress={() =>
// //             this.props.navigation.navigate('Page')
// //           }
// //         />
// //       </View>
// //     );
// //   }
// // }

// // const styles = StyleSheet.create({
// //   container: {
// //     flex: 1,
// //     backgroundColor: '#708090',
// //     alignItems: 'center',
// //     justifyContent: 'center',
// //   },
// // });






































































import * as React from 'react';
import { Button, Image, View } from 'react-native';
// import {Permissions} from 'expo'
import * as ImagePicker from "expo-image-picker"
import * as Permissions from 'expo-permissions';
import Constants from "expo-constants"


// import * as React from 'react';
// import { Button, Image, View } from 'react-native';
// import { ImagePicker, Permissions, Constants } from 'expo';


export default class Page1 extends React.Component {
    state = {
        image: null,
    };

    render() {
        let { image } = this.state;

        return (
            <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
                <Button
                    title="Pick an image from camera roll"
                    onPress={this._pickImage}
                />
                {image &&
                    <Image source={{ uri: image }} style={{ width: 200, height: 200 }} />}

                <Button
                    title="Camera"
                    onPress={() =>
                        this.props.navigation.navigate('Page2')
                    }
                />
            </View>
        );
    }

    componentDidMount() {
        this.getPermissionAsync();
    }

    getPermissionAsync = async () => {
        if (Constants.platform.ios) {
            const { status } = await Permissions.askAsync(Permissions.CAMERA_ROLL);
            if (status !== 'granted') {
                alert('Sorry, we need camera roll permissions to make this work!');
            }
        }
    }

    _pickImage = async () => {
        let result = await ImagePicker.launchImageLibraryAsync({
            mediaTypes: ImagePicker.MediaTypeOptions.All,
            allowsEditing: true,
            aspect: [4, 3],
        });

        console.log(result);

        if (!result.cancelled) {
            this.setState({ image: result.uri });
        }
    };
}