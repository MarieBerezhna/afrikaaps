import { ScrollView, StyleSheet, Text, View } from 'react-native';
import data from '../data.json';

export const Lessons = ({ route }: any) => {
    const level = route.params.id || 'Level '; 
    return (
        <Text>
            {level}
        </Text>
    )

};