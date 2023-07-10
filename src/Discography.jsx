import React from "react";
import Song from './Song.jsx';

export default function Details() {
    const albums = [
        {
            cover: "https://storage.highresaudio.com/2020/02/13/wyg9c2-blowinyour-preview-m3.jpg",
            title: "Blowin' Your Mind!",
            year: 1967,
            songs: ["Brown Eyed Girl", "He Ain't Give You None", "T.B. Sheets", "Spanish Rose", "Goodbye Baby (Baby Goodbye)", "Ro Ro Rosey", "Who Drove The Red Sports Car", "Midnight Special"],
        },
        {
            cover: "https://i.ebayimg.com/images/g/MCMAAOSwdFxhK0nJ/s-l640.jpg",
            title: "Astral Weeks",
            year: 1968,
            songs: ["Astral Weeks", "Beside You", "Sweet Thing", "Cyprus Avenue", "The Way Young Lovers Do", "Madame George", "Ballerina", "Slim Slow Slider"],
        },
        {
            cover: "https://media.pitchfork.com/photos/5bef25deb3693510111d3ff6/1:1/w_600/van%20morrison_moondance.jpg",
            title: "Moondance",
            year: 1970,
            songs: ["And It Stoned Me", "Moondance", "Crazy Love", "Caravan", "Into the Mystic", "Come Running", "These Dreams of You", "Brand New Day", "Everyone", "Glad Tidings"],
        },
        {
            cover: "https://m.media-amazon.com/images/I/81ugnXBWBYL._UF894,1000_QL80_.jpg",
            title: "His Band and the Street Choir",
            year: 1970,
            songs: ["Domino", "Crazy Face", "Give Me A Kiss", "Gypsy Queen", "Street Choir", "I've Been Working", "Call Me Up In Dreamland", "I'll Be Your Lover, Too", "Blue Money", "Virgo Clowns", "If I Ever Needed Someone", "Sweet Jannie"],
        },
        {
            cover: "https://images-eu.ssl-images-amazon.com/images/I/51GaTtjLklL._AC_UL600_SR600,600_.jpg",
            title: "Tupelo Honey",
            year: 1971,
            songs: ["Wild Night", "(Straight to Your Heart) Like a Cannonball", "Old Old Woodstock", "Starting a New Life", "You're My Woman", "Tupelo Honey", "I Wanna Roo You (Scottish Derivative)", "When That Evening Sun Goes Down", "Moonshine Whiskey"],
        },
    ];

    return (
        <>
            {albums.map((album) => (
                <div className="album" key={album.title}>
                    <img src={album.cover} width="300px" alt={`${album.title} Cover`} />
                    <h2>({album.year}) {album.title}</h2>
                    <ul>
                        {album.songs.map((song, index) => (
                            <Song name={song} key={index} />
                        ))}
                    </ul>
                </div>
            ))}
        </>
    );
}
