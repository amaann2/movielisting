import React from 'react'
import { Link } from 'react-router-dom'
import { useState } from 'react';
import ImageModal from './ImageModal';

const Card = ({ series }) => {
    var emojis = ['😠', '😦', '😑', '😀', '😍'];
    const [emojiIndex, setEmojiIndex] = useState(0);
    
    return (
        <div id='container'>
            <div className="detail">
                <h1>{series.title}</h1>
                <h6>OTT Platform : {series.ott}</h6>

                <p className="information">{series.desc}</p>

                <div className="rate">
                    <div className="emoji">{emojis[emojiIndex]}</div>
                    <input type="range" min="0" max="4" step="1" onMouseMove={e => setEmojiIndex(e.target.value)} />
                </div>

                <Link to="/character">
                    <button className="btn buton">View Character</button>{" "}
                </Link>

            </div>

            <div className="product-image">
                <ImageModal imageSrc="../../img/sacred.jpg" />
            </div>


        </div>
    )
}

export default Card