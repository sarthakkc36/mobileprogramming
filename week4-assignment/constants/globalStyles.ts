import { StyleSheet } from 'react-native';
import Colors from './Colors';

export const globalStyles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: Colors.background,
    },
    centerContainer: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: Colors.background,
    },
    header: {
        fontSize: 24,
        fontWeight: 'bold',
        color: Colors.textPrimary,
    },
    subheader: {
        fontSize: 18,
        fontWeight: '600',
        color: Colors.textPrimary,
    },
    bodyText: {
        fontSize: 16,
        color: Colors.textPrimary,
    },
    smallText: {
        fontSize: 14,
        color: Colors.textSecondary,
    },
    card: {
        backgroundColor: Colors.cardBackground,
        borderRadius: 12,
        padding: 16,
        marginVertical: 8,
    },
});

export default globalStyles;
