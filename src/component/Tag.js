import React from 'react';

export default function Tag({tag: { id, name}}){

    return <div className="tag-box">
        <p className="tag-text">{name}</p>
    </div>
};
