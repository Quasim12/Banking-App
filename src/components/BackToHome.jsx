import React from "react";
import { View, TouchableOpacity, StyleSheet } from "react-native";
import { FontAwesome } from '@expo/vector-icons'; // Make sure you have this package installed
import { useNavigation } from '@react-navigation/native'; // Assuming you're using React Navigation

const BackToHome = () => {
    const navigation = useNavigation(); // Hook to get navigation object

    return (
        <View style={styles.row}>
            <TouchableOpacity style={styles.col3} onPress={() => navigation.navigate('Homee')}>
                <FontAwesome name="angle-left" size={24} color="white" />
            </TouchableOpacity>
        </View>
    );
};

const styles = StyleSheet.create({
    row: {
        alignItems: "center",
        flexDirection: "row",
        padding: 20,
        backgroundColor: 'blue',
    },
    col3: {
        justifyContent: 'center',
        alignItems: 'center',
    }
});

export default BackToHome;
