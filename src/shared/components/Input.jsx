import { TextInput, View, Text, StyleSheet } from 'react-native';
import { COLORS, SPACING, FONT_SIZE, SHADOWS } from '../constants/theme';

const Input = ({ label, error, ...props }) => {
    return(
        <View style={styles.container}>  
            {label && <Text style={styles.label}>{label}</Text>}
            <TextInput
                style={[styles.input, error && styles.errorInput]}
                placeholderTextColor={COLORS.secondary}
                {...props}
            />
            {error && <Text style={styles.errorText}>{error}</Text>}
        </View>
    )
}