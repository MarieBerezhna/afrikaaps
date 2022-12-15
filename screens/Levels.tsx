import { ScrollView, StyleSheet, Text, View } from 'react-native';

const levels = [
    { label: 'A1' }, 
    { label: 'A2' }, 
    { label: 'B1' }, 
    { label: 'B2' }, 
    { label: 'C1' }, 
    { label: 'C2' },
];

type LevelProps = {
    label: string;
};
const Level = ({label} : LevelProps) => {
    return (
        <View style={styles.level}>
            <Text style={styles.label}>{label}</Text>
        </View>
    )
};
const Levels = () => {
    return (

        <ScrollView style={styles.container} showsHorizontalScrollIndicator={false}>
            <Text>Here we go 2</Text>
            {levels.map(d => {
                return (<Level key={d.label} label={d.label}></Level>);
            })}
        </ScrollView>
    );
};

export default Levels;

const styles = StyleSheet.create({
    container: {
        width: '100%',
        textAlign: 'center',
        // overflow: 'hidden',
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