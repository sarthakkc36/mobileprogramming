import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import Colors from '../constants/Colors';

interface TranscriptCardProps {
    title: string;
    date: string;
    duration: string;
    onPress?: () => void;
}

export default function TranscriptCard({ title, date, duration, onPress }: TranscriptCardProps) {
    return (
        <View style={styles.card}>
            <View style={styles.header}>
                <Text style={styles.title}>{title}</Text>
                <Ionicons name="time-outline" size={20} color={Colors.textSecondary} />
            </View>
            <Text style={styles.date}>{date}</Text>
            <Text style={styles.duration}>Duration: {duration}</Text>
            <TouchableOpacity style={styles.button} onPress={onPress}>
                <Text style={styles.buttonText}>View Summary</Text>
            </TouchableOpacity>
        </View>
    );
}

const styles = StyleSheet.create({
    card: {
        backgroundColor: Colors.cardBackground,
        borderRadius: 12,
        padding: 16,
        marginHorizontal: 20,
        marginVertical: 8,
    },
    header: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginBottom: 8,
    },
    title: {
        fontSize: 16,
        fontWeight: '600',
        color: Colors.textPrimary,
        flex: 1,
    },
    date: {
        fontSize: 13,
        color: Colors.textSecondary,
        marginBottom: 4,
    },
    duration: {
        fontSize: 13,
        color: Colors.textSecondary,
        marginBottom: 12,
    },
    button: {
        backgroundColor: Colors.primary,
        borderRadius: 8,
        paddingVertical: 10,
        paddingHorizontal: 16,
        alignItems: 'center',
    },
    buttonText: {
        color: Colors.textPrimary,
        fontSize: 14,
        fontWeight: '600',
    },
});
