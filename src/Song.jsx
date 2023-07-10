import React, { useState } from 'react';

function Song({ name }) {
    const [liked, setLiked] = useState(false);

    const handleClick = () => {
        setLiked(!liked);
    }

    return (
        <li>
            {name}
            <button onClick={handleClick}>
                {liked ? '👍' : 'Click to like'}
            </button>
        </li>
    )
}

export default Song;
