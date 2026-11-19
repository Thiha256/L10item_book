// ===== Imports =====
import {StatusBar} from 'expo-status-bar';
import {StyleSheet, Text, View, SectionList, TouchableOpacity, Alert, Image} from 'react-native';
import {MaterialCommunityIcons} from '@expo/vector-icons';

// ===== Helper =====
// The item name (slug) is the variable at the end of the URL
const itemUrl = (slug) =>
    'https://mlbbhub.com/images/items/' + slug + '.png';

// ===== Data =====
const datasource = [
    {
        title: 'Attack', icon: 'sword', bgcolor: 'firebrick', color: 'white',
        data: [
            {key: "Berserker's Fury",   slug: 'berserkers-fury',    cost: 2390, stats: '+60 Phys ATK, +25% Crit'},
            {key: 'Blade of Despair',   slug: 'blade-of-despair',   cost: 3010, stats: '+160 Phys ATK, +5% MS'},
            {key: 'Great Dragon Spear', slug: 'great-dragon-spear', cost: 2140, stats: '+70 Phys ATK, +20% Crit, +10% CDR'}]
    },
    {
        title: 'Magic', icon: 'auto-fix', bgcolor: 'darkviolet', color: 'white',
        data: [
            {key: 'Holy Crystal',       slug: 'holy-crystal',       cost: 3000, stats: '+165 Magic Power'},
            {key: 'Enchanted Talisman', slug: 'enchanted-talisman', cost: 2070, stats: '+300 HP, +75 Magic Power, +15% CDR'},
            {key: 'Blood Wings',        slug: 'blood-wings',        cost: 2100, stats: '+90 Magic Power'},
        ],
    },
    {
        title: 'Defense', icon: 'shield', bgcolor: 'seagreen', color: 'white',
        data: [
            {key: 'Antique Cuirass', slug: 'antique-cuirass', cost: 2170, stats: '+920 HP, +40 Phys DEF, +4 HP Regen'},
            {key: "Athena's Shield", slug: 'athenas-shield',  cost: 2150, stats: '+900 HP, +48 Magic DEF, +2 HP Regen'},
            {key: 'Guardian Helmet', slug: 'guardian-helmet', cost: 2500, stats: '+1800 HP, +20 HP Regen'},

        ],
    },
    {
        title: 'Movement', icon: 'run-fast', bgcolor: 'goldenrod', color: 'midnightblue',
        data: [
            {key: 'Arcane Boots',  slug: 'arcane-boots',  cost: 720, stats: '+15 Magic Power, +10 Magic Pen, +40 MS'},
            {key: 'Swift Boots',   slug: 'swift-boots',   cost: 720, stats: '+15% ATK Spd, +40 MS'},
            {key: 'Rapid Boots',   slug: 'rapid-boots',   cost: 720, stats: '+55 MS, +12 HP Regen'},

        ],
    },
];

// ===== Section header (one per category) =====
const renderSectionHeader = ({section}) => {
    return (
        <View style={[styles.headerStyle, {backgroundColor: section.bgcolor}]}>
            <MaterialCommunityIcons name={section.icon} size={26} color={section.color}/>
            <Text style={[styles.headerText, {color: section.color}]}>{section.title}</Text>
        </View>
    );
};

// ===== Item card (one per item) =====
const renderItem = ({item, section}) => {
    return (
        <TouchableOpacity
            style={[styles.opacityStyle, {borderColor: section.bgcolor}]}
            onPress={() => Alert.alert(
                section.title + ' Item',
                item.key + '\nCost: ' + item.cost + ' gold\n' + item.stats
            )}>
            <View style={styles.textBox}>
                <Text style={styles.textStyle}>{item.key}</Text>
                <Text style={styles.costStyle}>{item.cost} gold</Text>
                <Text style={styles.statsStyle}>{item.stats}</Text>
            </View>
            <Image source={{uri: itemUrl(item.slug)}} style={styles.imageStyle}/>
        </TouchableOpacity>
    );
};

// ===== Main screen =====
export default function App() {
    return (
        <View style={styles.container}>
            <TouchableOpacity
                style={styles.buttonStyle}
                onPress={() => Alert.alert('Add Item', 'This feature is coming next lesson!')}>
                <Text style={styles.buttonText}>ADD ITEM</Text>
            </TouchableOpacity>

            <SectionList
                sections={datasource}
                renderSectionHeader={renderSectionHeader}
                renderItem={renderItem}
                contentContainerStyle={{padding: 12}}
            />

            <StatusBar style="light"/>
        </View>
    );
}

// ===== Styles =====
const styles = StyleSheet.create({
    // Screen
    container: {
        flex: 1,
        backgroundColor: 'darkblue',
        marginTop: 30,
    },

    // Add button
    buttonStyle: {
        backgroundColor: 'goldenrod',
        margin: 10,
        padding: 15,
        borderRadius: 10,
    },
    buttonText: {
        color: 'midnightblue',
        fontSize: 16,
        fontWeight: 'bold',
        textAlign: 'center',
    },

    // Section header
    headerStyle: {
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 10,
        marginBottom: 6,
        padding: 8,
        borderRadius: 10,
    },
    headerText: {
        fontSize: 20,
        marginLeft: 8,
        fontWeight: 'bold',
    },

    // Item card
    opacityStyle: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        backgroundColor: 'navy',
        borderWidth: 2,
        borderRadius: 10,
        padding: 10,
        marginBottom: 8,
    },
    textBox: {
        flex: 1,
        marginRight: 10,
    },
    textStyle: {
        fontSize: 18,
        fontWeight: 'bold',
        color: 'white',
    },
    costStyle: {
        fontSize: 14,
        color: 'gold',
        marginTop: 4,
    },
    statsStyle: {
        fontSize: 12,
        color: 'lightsteelblue',
        marginTop: 4,
    },
    imageStyle: {
        width: 80,
        height: 80,
    },
});
