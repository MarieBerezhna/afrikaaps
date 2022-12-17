import { ScrollView, StyleSheet, Text, View, Pressable } from 'react-native';
import data from '../data.json';

const levels = Object.keys(data);

type LevelProps = {
    label: string;
    onPress: any;
};
const Level = ({label, onPress} : LevelProps) => {
    return (
        <Pressable onPress={onPress}>
        <View style={styles.level}  >
            <Text style={styles.label}>{label}</Text>
            </View>
        </Pressable>
    )
};
const Levels = ({navigation }: any) => {
    return (
        <ScrollView style={styles.container} showsHorizontalScrollIndicator={false}>
            {levels.map(d => {
                return (<Level onPress={() => navigation.navigate('Level', {id: d})} key={d} label={d} />);
            })}
        </ScrollView>
    );
};

export default Levels;

const styles = StyleSheet.create({
    container: {
        width: '100%',
        textAlign: 'center',
    },
    level: {
        margin: 25,
        padding: 100,
        borderColor: '#ccc',
        borderWidth: 5,
        borderRadius: 25,
        alignItems: 'center',
        
    },
    label: {
        fontSize: 50,
    }
});