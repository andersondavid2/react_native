import * as React from 'react';
import { Button, Text, View, StyleSheet } from 'react-native';


class Learn extends React.Component {
    static navigationOptions = {
        title: 'Welcome to my App',
    };
    render() {
        const {navigate} = this.props.navigation;
        return (
            <View>
                <Text>
                    This is the LEARNING PAGE
                </Text>
                
                <Button
                    title="Bankroll Sizing"
                    color="#000000"
                    onPress={() => navigate('BankrollSizing', {name: 'Bankroll Sizing'})}
                    />
            </View>
        );
    }
}

export default Learn