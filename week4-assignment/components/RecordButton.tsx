import React from 'react';
import { TouchableOpacity, StyleSheet, Animated } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import Colors from '../constants/Colors';

interface RecordButtonProps {
    onPress?: () => void;
    isRecording?: boolean;
}

export default function RecordButton({ onPress, isRecording = false }: RecordButtonProps) {
    const scaleValue = new Animated.Value(1);

    const handlePressIn = () => {
        Animated.spring(scaleValue, {
            toValue: 0.95,
            useNativeDriver: true,
        }).start();
    };

    const handlePressOut = () => {
        Animated.spring(scaleValue, {
            toValue: 1,
            friction: 3,
            tension: 40,
            useNativeDriver: true,
        }).start();
    };

    return (
        <TouchableOpacity
            onPress={onPress}
            onPressIn={handlePressIn}
            onPressOut={handlePressOut}
            activeOpacity={0.9}
        >
            <Animated.View
                style={[
                    styles.button,
                    {
                        transform: [{ scale: scaleValue }],
                    },
                ]}
            >
                <Ionicons
                    name={isRecording ? 'stop' : 'mic'}
                    size={60}
                    color={Colors.textPrimary}
                />
            </Animated.View>
        </TouchableOpacity>
    );
}

const styles = StyleSheet.create({
    button: {
        width: 120,
        height: 120,
        borderRadius: 60,
        backgroundColor: Colors.primary,
        justifyContent: 'center',
        alignItems: 'center',
        shadowColor: Colors.primary,
        shadowOffset: {
            width: 0,
            height: 8,
        },
        shadowOpacity: 0.5,
        shadowRadius: 16,
        elevation: 10,
    },
});
