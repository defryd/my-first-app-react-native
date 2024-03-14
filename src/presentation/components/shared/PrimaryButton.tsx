import { Platform, Pressable, StyleSheet, Text } from "react-native"

interface Props {
    label: string;
    onPress?: () => void;
    onLongPress?: () => void;
}

export const PrimaryButton = ({ label, onPress, onLongPress }: Props) => {
    return (
        <Pressable
            onPress={() => onPress && onPress()}
            onLongPress={() => onLongPress && onLongPress()}
            style={({ pressed }) => [
                styles.button,
                pressed && styles.buttonPressed,
            ]}
        >
            <Text style={styles.buttonText} >{label}</Text>
        </Pressable>
    )
}
const styles = StyleSheet.create({
    button: {
        backgroundColor: '#56c1d6',
        margin: 10,
        paddingHorizontal: 20,
        paddingVertical: 10,
        borderRadius: 10,
        borderWidth: 2,
        borderColor: 'black',
    },
    buttonText: {
        fontSize: 15,
        fontWeight: 'bold',
        textAlign: 'center',
        color: Platform.OS === 'ios' ? 'white' : 'black',
    },
    buttonPressed: {
        backgroundColor: Platform.OS === 'android' ? '#439aab' : 'grey',
    }
})
