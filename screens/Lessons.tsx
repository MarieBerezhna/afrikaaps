import { ScrollView, StyleSheet, Text, View, Pressable } from 'react-native';
import data from '../data.json';
import { styles } from '../kit/styles';

type ExerciseProps = {
    content: string;
    translation: string;
    options: string[];
}

type LessonProps = {
    name: string;
    // data: ExerciseProps;
}

const Lesson = ({ name }: LessonProps) => {
    return <Pressable>
        <View style={styles.level}>
            <Text style={styles.label}>{name}</Text>
        </View>
    </Pressable>
}

export const Lessons = ({ route, navigation }: any) => {
    const level = route.params.id || null; 
    if (!level) {
        navigation.navigate('Error');
    }
    let lessons;
    for (const [key, value] of Object.entries(data)) {
        if (key === level) {
            lessons = value;
            return (
                <ScrollView style={styles.container} showsHorizontalScrollIndicator={false}>
                    {lessons.map(l => {
                        return <Lesson key={l.name} name={l.name}  />
                    })}
                </ScrollView>
            )
        }
    }
    return null;
};