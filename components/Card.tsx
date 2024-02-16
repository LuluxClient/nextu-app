import React from 'react';
import { View, Text, Image, StyleSheet, Pressable } from 'react-native';

interface CardProps {
    // title: string;
    // subtitle: string;
    // price: string;
}

const Card: React.FC<CardProps> = (props) => {
    const title = 'Galactic Cruiser';
    const subtitle = 'Exploration';
    const price = '$150000';
    const imagePath = require('../assets/images/galactic_cruiser.png');
//   const imagePath = './assets/images/galactic_cruiser.png'; 

    return (
        <View style={styles.card}>
            <Image source={imagePath} style={styles.image} />
            <Text style={styles.title}>{title}</Text>
            <Text style={styles.subtitle}>{subtitle}</Text>
            <View style={styles.priceButtonContainer}>
                <Text style={styles.price}>{price}</Text>
                {/* <TouchableOpacity style={styles.button}> */}
                <Pressable style={styles.button}>
                    <Text>+</Text>
                {/* </TouchableOpacity> */}
                </Pressable>
{/* Il est préférable d'utiliser Pressable au lieu de <Button/> ! */}

            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    card: {
        backgroundColor: '#fff',
        borderRadius: 8,
        padding: 16,
        alignItems: 'center',
    },
    image: {
        width: 150,
        height: 100,
        borderRadius: 8,
    },
    title: {
        fontSize: 18,
        fontWeight: 'bold',
    },
    subtitle: {
    },
    priceButtonContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        marginTop: 8,
    },


    price: {
        marginRight: 8,
    },
    button: {
        padding: 8,
        borderRadius: 4,
        backgroundColor: '#f0f0f0',
    },
});

export default Card;
