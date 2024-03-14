import { StyleSheet, Text, View } from "react-native"

interface Props {
    name?: string;
}

export const HelloWorldScreen = ({ name = 'World' }: Props) => {
    return (
        <View style={styles.container}>
            <Text numberOfLines={1} ellipsizeMode="tail" style={styles.title}>Hello, {name} Screen!</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#787878',
        alignItems: 'center',
        justifyContent: 'center',
    },
    title: {
        fontSize: 45,
        textAlign: 'center',
        color: 'black',
        padding: 20,
    }
})
