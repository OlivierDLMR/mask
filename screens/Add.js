import React, {Component} from 'react';
import {View, Text, TextInput, Button} from 'react-native';

class Add extends Component {
    render() {
        return (
            <View style = {{ padding:20 }}>
                <Text style = {{ color: 'black', fontSize: 50, textAlign: 'center', marginBottom: 50 }}>
                    Ajouter une pharmacie
                </Text>

                <Text>Nom</Text>
                <TextInput  style={{ height:40, borderColor:'black', borderWidth: 1, marginBottom: 10}}
                            name="Nom"
                            Type='TextInput' returnKeyType='done'/>

                <Text>Adresse</Text>
                <TextInput  style={{ height:40, borderColor:'black', borderWidth: 1, marginBottom: 10}}
                            name="Adresse"
                            Type='TextInput' returnKeyType='done'/>

                <Text>Latitude</Text>
                <TextInput  style={{ height:40, borderColor:'black', borderWidth: 1, marginBottom: 10}}
                            name="Latitude"
                            Type='TextInput' returnKeyType='done'/>

                <Text>Longitude</Text>
                <TextInput  style={{ height:40, borderColor:'black', borderWidth: 1, marginBottom: 50}}
                            name="Longitude"
                            Type='TextInput' returnKeyType='done'/>

                <Button title='Enregistrer' onPress={() => this.onSubmit()}
                        style={{ paddingTop: 10 }}/>




            </View>
        );
    }
}

export default Add;