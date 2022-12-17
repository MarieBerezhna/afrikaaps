import { ScrollView, StyleSheet, Text, View } from 'react-native';
import data from '../data.json';

export const Lessons = ({ route }: any) => {
    const level = route.params.id || null; 
    if (!level) {
        return <Text>Oops</Text>
    }
    const content: any = Object.values(data);

    return (
        <Text>
            {level}
        </Text>
    )

};