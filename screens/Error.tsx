import { Button, Text, View } from 'react-native';

const Error = ({navigation}:any) => {

    return (
        <View>
            <Text>Something went wrong...</Text>
            <Button onPress={() => navigation.navigate('Home')} title='Home'/>
        </View>
    );
};

export default Error;