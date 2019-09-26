import { combineReducers } from 'redux';
//creating reducers

const songsReducer = () => {
    return [
        { title: 'No Scrubs', duration: '4:05' },
        { title: 'Macarena', duration: '3:56' },
        { title: 'I want it that wa y', duration: '5:23' },
        { title: 'All Star', duration: '3:30' },
    ]
}

const selectedSongReducer = (selectedSong = null, action) => {
    if (action.type === 'SONG_SELECTED') {
        return action.payload
    }
    return selectedSong;
}

export default combineReducers({
    songs: songsReducer,
    selectedSong: selectedSongReducer
})