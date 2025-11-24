import React, { useState } from 'react';
import {
    View,
    Text,
    StyleSheet,
    ScrollView,
    Alert,
} from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import RecordButton from '../../components/RecordButton';
import TranscriptCard from '../../components/TranscriptCard';
import Colors from '../../constants/Colors';

// Dummy data for transcripts
const DUMMY_TRANSCRIPTS = [
    {
        id: '1',
        title: 'Team Meeting Review',
        date: 'November 13, 2025, 12:26 PM',
        duration: '00:00:11',
    },
    {
        id: '2',
        title: 'Client Pitch Follow-up',
        date: 'November 12, 2025, 08:30 AM',
        duration: '00:02:45',
    },
    {
        id: '3',
        title: 'Project Brainstorm',
        date: 'November 11, 2025, 03:00 PM',
        duration: '00:01:30',
    },
];

export default function HomeScreen() {
    const [isRecording, setIsRecording] = useState(false);

    const handleRecordPress = () => {
        setIsRecording(!isRecording);
        Alert.alert(
            isRecording ? 'Recording Stopped' : 'Recording Started',
            isRecording
                ? 'Your recording has been saved.'
                : 'Tap the button again to stop recording.'
        );
    };

    const handleViewSummary = (title: string) => {
        Alert.alert('View Summary', `Opening summary for: ${title}`);
    };

    return (
        <View style={styles.container}>
            <ScrollView
                style={styles.scrollView}
                contentContainerStyle={styles.scrollContent}
                showsVerticalScrollIndicator={false}
            >
                {/* Header */}
                <View style={styles.header}>
                    <Text style={styles.headerText}>TalkNote</Text>
                </View>

                {/* Recording Section */}
                <View style={styles.recordingSection}>
                    <RecordButton onPress={handleRecordPress} isRecording={isRecording} />
                    <Text style={styles.instructionText}>
                        {isRecording ? 'Recording in progress...' : 'Tap to start recording'}
                    </Text>

                    {/* Waveform Placeholder */}
                    <View style={styles.waveformContainer}>
                        <View style={styles.waveformBar} />
                        <View style={[styles.waveformBar, styles.waveformBarTall]} />
                        <View style={styles.waveformBar} />
                        <View style={[styles.waveformBar, styles.waveformBarShort]} />
                        <View style={[styles.waveformBar, styles.waveformBarTall]} />
                        <View style={styles.waveformBar} />
                    </View>
                </View>

                {/* Recent Transcripts Section */}
                <View style={styles.transcriptsSection}>
                    <Text style={styles.sectionTitle}>Recent Transcripts</Text>

                    {DUMMY_TRANSCRIPTS.map((transcript) => (
                        <TranscriptCard
                            key={transcript.id}
                            title={transcript.title}
                            date={transcript.date}
                            duration={transcript.duration}
                            onPress={() => handleViewSummary(transcript.title)}
                        />
                    ))}
                </View>
            </ScrollView>
        </View>
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
    scrollContent: {
        paddingTop: 20,
        paddingBottom: 100,
    },
    header: {
        paddingBottom: 10,
        alignItems: 'center',
    },
    headerText: {
        fontSize: 24,
        fontWeight: 'bold',
        color: Colors.textPrimary,
    },
    recordingSection: {
        alignItems: 'center',
        paddingVertical: 40,
    },
    instructionText: {
        marginTop: 20,
        fontSize: 16,
        color: Colors.textSecondary,
    },
    waveformContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        marginTop: 30,
        gap: 4,
    },
    waveformBar: {
        width: 4,
        height: 20,
        backgroundColor: Colors.primary,
        borderRadius: 2,
    },
    waveformBarTall: {
        height: 30,
    },
    waveformBarShort: {
        height: 15,
    },
    transcriptsSection: {
        marginTop: 20,
        paddingBottom: 20,
    },
    sectionTitle: {
        fontSize: 20,
        fontWeight: 'bold',
        color: Colors.textPrimary,
        marginLeft: 20,
        marginBottom: 12,
    },
});
