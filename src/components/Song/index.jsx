import React, { useState } from 'react';

function Song({ name }) {
    const [liked, setLiked] = useState(false);

    const handleClick = () => {
        setLiked(!liked);
    }

    return (
        <li>
            {name}&nbsp;&nbsp;&nbsp;
            <button onClick={handleClick}>
                {liked ? '👍' : 'Like?'}
            </button>
        </li>
    )
}

export default Song;
