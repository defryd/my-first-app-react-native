import { useState } from "react"
import { Text, View } from "react-native"
import { globalStyles } from "../theme/global.styles";
import Icon from 'react-native-vector-icons/Ionicons'
import { FAB } from "react-native-paper";


export const CounterM3Screen = () => {

    const [count, setCount] = useState(10);

    return (
        <View style={globalStyles.centerContainer} >
            <Text style={globalStyles.title}>{count}</Text>

            <Icon name="add-outline" size={25} />

            <FAB
                // label="+1"
                style={globalStyles.fab}
                onPress={() => setCount(count + 1)}
                onLongPress={() => setCount(0)}
                icon="add-outline"
            // icon={() => <Icon name="accessibility-outline" size={20} />}
            />
        </View >
    )
}




