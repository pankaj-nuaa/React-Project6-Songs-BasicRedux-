import React, { Component } from 'react';
import { connect } from 'react-redux';
import { selectSong } from "../actions";

class SongList extends Component {

    renderList() {
        return this.props.songs.map((song) => {
            return (
                <div className="item" key={song.title}>
                    <div className="right floated content">
                        <button
                            className="ui button primary"
                            onClick={() => this.props.selectSong(song)}
                        >
                            select
                    </button>
                    </div>
                    <div className="content">{song.title}</div>
                </div>
            );
        })
    }

    render() {
        return (
            <div className="ui divided list">{this.renderList()}</div>
        );
    }
}

//mapStateToProps is reaching out to provider and re turning props
const mapStateToProps = (state) => {
    return { songs: state.songs };
}
export default connect(mapStateToProps, { selectSong })(SongList);