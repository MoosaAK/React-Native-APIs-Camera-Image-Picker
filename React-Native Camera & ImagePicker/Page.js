import React from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';

export default class Page extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <Text style={{fontSize:50}}>PAGE</Text>


        {/* switchers buttons */}
        <Button
          title="Camera, Image-Picker"
          onPress={() =>
            this.props.navigation.navigate('Page1')
          }
        />
        {/* <Button
          title="Page2"
          onPress={() =>
            this.props.navigation.navigate('Page2')
          }
        /> */}
        {/* <Button
          title="Page3"
          onPress={() =>
            this.props.navigation.navigate('Page3')
          }
        /> */}
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
