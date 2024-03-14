import { useState } from "react"
import { Platform, Pressable, StyleSheet, Text, View } from "react-native"
import { PrimaryButton } from "../components";
import { Button } from "react-native-paper";

export const CounterScreen = () => {

    const [count, setCount] = useState(10);

    return (
        <View style={styles.container}>
            <Text style={styles.title}>{count}</Text>

            {/* Botton personalizado  */}
            {/* <PrimaryButton
                label='Increment'
                onPress={() => setCount(count + 1)}
                onLongPress={() => setCount(0)}
            /> */}
            {/* Botton personalizado  */}

            <Button
                onPress={() => setCount(count + 1)}
                onLongPress={() => setCount(0)}
                mode='contained'
            >
                Incrementar
            </Button>



            <Pressable
                style={({ pressed }) => [
                    styles.button,
                    pressed && styles.buttonPressed,
                ]}
                onPress={() => setCount(count + 1)}
            >
                <Text
                    style={styles.buttonText} >+1</Text>
            </Pressable>

            <Pressable
                style={({ pressed }) => [
                    styles.button,
                    pressed && styles.buttonPressed,
                ]}
                onPress={() => setCount(0)}
            >
                <Text style={styles.buttonText} >Reset</Text>
            </Pressable>

            <Pressable
                style={({ pressed }) => [
                    styles.button,
                    pressed && styles.buttonPressed,
                ]}
                onPress={() => setCount(count - 1)}>
                <Text style={styles.buttonText} >-1</Text>
            </Pressable>

        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#787878',
        alignItems: 'center',
    },
    title: {
        fontSize: 80,
        fontWeight: '300',
        textAlign: 'center',
        color: 'black',
        padding: 20,
    },
    button: {
        backgroundColor: '#5856D6',
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
        backgroundColor: Platform.OS === 'android' ? '#4746AB' : 'grey',
    }
})


