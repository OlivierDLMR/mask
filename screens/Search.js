import React, {Component} from 'react';
import {View, Text} from 'react-native';
import {SearchBar} from "react-native-elements";


class Search extends Component {
    state = {
        search: '',
    };

    updateSearch = search => {
        this.setState({ search });
    };

    render() {
        const { search } = this.state;

        return (
            <SearchBar
                placeholder="Type Here..."
                onChangeText={this.updateSearch}
                value={search}
            />
        );
    }
}

export default Search;