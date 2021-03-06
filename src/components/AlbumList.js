import React, {Component} from 'react';
import {Text, View} from 'react-native';
import axios from 'axios';

import AlbumDetail from './AlbumDetail'

class AlbumList extends Component {
    state = {albums: {}}

    componentDidMount(){
        axios.get('https://rallycoding.herokuapp.com/api/music_albums')
        .then(response => {
            this.setState({albums: response.data})
        })
    }

    renderAlbums(){

    }

    render() {
        console.log(this.state)
        return (
            <View>
                <Text>Album List</Text>
            </View>
        );
    }
}

export default AlbumList;
