import React, { useState } from 'react';
import { Back } from "./BackButton";
import { MyFooter } from '../components/myFooter';
import PhotoAlbum from "react-photo-album";

import Lightbox from "yet-another-react-lightbox";
import "yet-another-react-lightbox/styles.css";

// import optional lightbox plugins
import Thumbnails from "yet-another-react-lightbox/plugins/thumbnails";
import Zoom from "yet-another-react-lightbox/plugins/zoom";
import "yet-another-react-lightbox/plugins/thumbnails.css";

const photoFolderPath = process.env.PUBLIC_URL + '/project-img/photography/';
const photos = [
    {
        src: photoFolderPath + "1.jpeg",
        width: 2172,
        height: 1448,
      },
      {
        src: photoFolderPath + "2.jpeg",
        width: 1086,
        height: 724,
      },
      {
        src: photoFolderPath + "3.jpeg",
        width: 1086,
        height: 724,
      },
        {
            src: photoFolderPath + "4.jpeg",
            width: 1086,
            height: 724,
        },
        {
            src: photoFolderPath + "5.jpeg",
            width: 1080,
            height: 728,
        },
        {
            src: photoFolderPath + "6.jpeg",
            width: 1109,
            height: 709,
        },
        {
            src: photoFolderPath + "7.jpeg",
            width: 1086,
            height: 724,
        },
        {
            src: photoFolderPath + "8.jpeg",
            width: 1086,
            height: 724,
        },
        {
            src: photoFolderPath + "9.jpeg",
            width: 1086,
            height: 724,
        },
        {
            src: photoFolderPath + "10.jpg",
            width: 5064,
            height: 3376,
        },
        {
            src: photoFolderPath + "11.jpg",
            width: 5708,
            height: 3212,
        },
        {
            src: photoFolderPath + "12.jpg",
            width: 5936,
            height: 3339,
        },
        {
            src: photoFolderPath + "13.jpg",
            width: 5658,
            height: 3772,
        },
        {
            src: photoFolderPath + "14.jpg",
            width: 6000,
            height: 3376,
        },
        {
            src: photoFolderPath + "15.jpg",
            width: 4733,
            height: 3155,
        },
        {
            src: photoFolderPath + "16.JPG",
            width: 2298,
            height: 1870,
        },
        {
            src: photoFolderPath + "17.JPG",
            width: 2330,
            height: 1870,
        },
        {
            src: photoFolderPath + "18.JPG",
            width: 2331,
            height: 1870,
        },
        {
            src: photoFolderPath + "19.JPG",
            width: 2353,
            height: 1870,
        },
        {
            src: photoFolderPath + "20.jpg",
            width: 1705,
            height: 2775,
        },
        {
            src: photoFolderPath + "21.jpg",
            width: 2075,
            height: 3130,
        },
        {
            src: photoFolderPath + "22.jpg",
            width: 3130,
            height: 2075,
        },
        {
            src: photoFolderPath + "23.JPG",
            width: 3130,
            height: 2075,
        },
        {
            src: photoFolderPath + "24.JPG",
            width: 3130,
            height: 2075,
        },
        {
            src: photoFolderPath + "25.JPG",
            width: 3130,
            height: 2075,
        },
        {
            src: photoFolderPath + "26.JPG",
            width: 3130,
            height: 2075,
        },
    ]

export function Photography() {
    const [index, setIndex] = useState(-1);
    
    return (
        <div className="project-page">
        <Back />
        <div className="Section">
        <h3 className="photographyOverview">Photography</h3>
        <div className="SubSection">
        <h3>Where it started...</h3>
        <p>Summer of 2022, I got my first camera. I love traveling, and I always bring my camera with me. I like traveling alone too, so I have all the time in the world to wander around in a foreign city and take photos along the way.</p>

        <p>Fall of 2023, I got a vintage film camera. The mechanical shutter sound is super satisfying, and I can finally say with some confidence that I know how to take photos on manual setting.</p>

        <p>Here are some of my favorite photos I have taken! (click on the photo to zoom in)</p>

        <p>I've also made a photography account on Instagram! Check out my other photos here: <a href='https://instagram.com/hyh_0324' target="_blank" without rel="noreferrer">@hyh_0324</a></p>

        <PhotoAlbum layout="rows" photos={photos} spacing={3}
        onClick={({ index }) => setIndex(index)}/>

        <Lightbox
                slides={photos}
                open={index >= 0}
                index={index}
                close={() => setIndex(-1)}
                // enable optional lightbox plugins
                plugins={[Thumbnails, Zoom]}
            />
        </div>
        
        </div>
        <MyFooter />
        </div>
    )
}