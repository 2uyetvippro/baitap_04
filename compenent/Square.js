import React from "react";
import { StyleSheet, Text, View } from "react-native";


export default function Square() {
    return (
        <View style={styles.container}>
            <View style={styles.ovuong1}>
                <Text>
                    Square 1
                </Text>
            </View>
            <View style={styles.ovuong2}>
                <Text>
                    Square 2
                </Text>
            </View>
            <View style={styles.ovuong3}>
                <Text>
                    Square 3
                </Text>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "gray",
        alignItems: 'center',
        flexDirection: "row",
        justifyContent: "space-around",

    },
    ovuong1: {
        width: 100,
        height: 100,
        backgroundColor: "white",
        alignItems: 'center',
        justifyContent: 'center',
    },
    ovuong2: {
        width: 100,
        height: 100,
        backgroundColor: "green",
        alignItems: 'center',
        justifyContent: 'center',
    },
    ovuong3: {
        width: 100,
        height: 100,
        backgroundColor: "pink",
        alignItems: 'center',
        justifyContent: 'center',
    },
});