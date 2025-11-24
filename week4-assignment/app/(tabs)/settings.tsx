import React from 'react';
import { View, Text, StyleSheet, SafeAreaView, ScrollView } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import Colors from '../../constants/Colors';

export default function SettingsScreen() {
    return (
        <SafeAreaView style={styles.container}>
            <ScrollView style={styles.scrollView}>
                <View style={styles.content}>
                    <Ionicons name="settings-outline" size={80} color={Colors.primary} />
                    <Text style={styles.title}>Settings</Text>
                    <Text style={styles.description}>
                        Configure your TalkNote preferences here.
                    </Text>
                    <View style={styles.placeholder}>
                        <Text style={styles.placeholderText}>
                            Settings options will be available in future updates.
                        </Text>
                    </View>
                </View>
            </ScrollView>
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: Colors.background,
    },
    scrollView: {
        flex: 1,
    },
    content: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        padding: 20,
        paddingTop: 60,
    },
    title: {
        fontSize: 28,
        fontWeight: 'bold',
        color: Colors.textPrimary,
        marginTop: 20,
        marginBottom: 10,
    },
    description: {
        fontSize: 16,
        color: Colors.textSecondary,
        textAlign: 'center',
        marginBottom: 30,
    },
    placeholder: {
        backgroundColor: Colors.cardBackground,
        borderRadius: 12,
        padding: 20,
        marginTop: 20,
    },
    placeholderText: {
        fontSize: 14,
        color: Colors.textSecondary,
        textAlign: 'center',
    },
});
