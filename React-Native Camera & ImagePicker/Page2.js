// // import React from 'react';
// // import { StyleSheet, Text, View, Button } from 'react-native';

// // export default class Page2 extends React.Component {
// //   render() {
// //     return (
// //       <View style={styles.container}>
// //        <Text style={{fontSize:50}}>PAGE 2</Text> 
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
// //     backgroundColor: 'grey',
// //     alignItems: 'center',
// //     justifyContent: 'center',
// //   },
// // });







































































import React from 'react';
import { Text, View, TouchableOpacity, Image } from 'react-native';
import * as Permissions from 'expo-permissions';
import { Camera } from 'expo-camera';
// import * as FileSystem from 'expo-file-system';


export default class Page2 extends React.Component {
    state = {
        hasCameraPermission: null,
        type: Camera.Constants.Type.back,
    };

    async componentDidMount() {
        const { status } = await Permissions.askAsync(Permissions.CAMERA);
        this.setState({ hasCameraPermission: status === 'granted' });
    }

    render() {
        const { hasCameraPermission } = this.state;
        if (hasCameraPermission === null) {
            return <View />;
        } else if (hasCameraPermission === false) {
            return <Text>No access to camera</Text>;
        } else {
            return (
                <View style={{ flex: 1 }}>
                    <Camera style={{ flex: 1 }} type={this.state.type} ref={ref => {
                        this.camera = ref;
                    }}>
                        <View
                            style={{
                                flex: 1,
                                backgroundColor: 'transparent',
                                flexDirection: 'row',
                            }}>

                          

                            <TouchableOpacity style={{
                                flex: 1,
                                alignSelf: 'flex-end',
                                alignItems: 'center',
                            }} onPress={
                                async () => {
                                    if (this.camera) {
                                        let photo = await this.camera.takePictureAsync();
                                        console.log(photo)
                                    }
                                }
                            }>

                                <Image
                                    style={{ width: 80, height: 80 }}
                                    source={require('./assets/cap2.png')}
                                />
                            </TouchableOpacity>
                        </View>
                    </Camera>
                </View>
            );
        }
    }
}