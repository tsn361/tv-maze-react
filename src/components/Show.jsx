import React from 'react'

const Show = (props) => {
    const { show } = props;
    console.log(show);
    return (
        <div>
            <h1>{show.name}</h1>
        </div>
    )
}

export default Show;