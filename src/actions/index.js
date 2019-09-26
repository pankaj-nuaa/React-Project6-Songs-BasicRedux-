//action creator

export const selectSong = (song) => {
    //ret urn an action 
    return {
        type: 'SONG_SELECTED',
        payload: song
    };
};

