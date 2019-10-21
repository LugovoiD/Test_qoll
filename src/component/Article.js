import React from 'react';
import Moment from "react-moment";
import { Link } from "react-router-dom";
import Tag from "./Tag";
import stack from '../stackoverflow-tile.svg';
import tagLogo from '../tag.png';

export default function Article({article: { id, url, title, addedAt, tags}}){

    const logo = () => {

        if(url) return stack;
    };
    return <div className="link">
        <div className="rectangle">
            <img className="source-logo" src={logo}/>
            <h1 className="cqrs-is-easy-with-sy">{title}</h1>
            <div className="container">
                <p>Added on <Moment format="MMM Do YYYY">{addedAt}</Moment></p>
                <img src={tagLogo} alt="tag_logo" style={{height: 12,	width: 15}}/>
                {
                    tags.map(tag => (
                        <Tag key={tag.id} tag={tag}/>
                    ))
                }
            </div>

        </div>
    </div>;
};
