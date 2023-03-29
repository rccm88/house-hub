import React from "react";
import { Slide } from "react-slideshow-image";
import "react-slideshow-image/dist/styles.css";
import Image from 'next/image';

export default function ImageScrollbar2({ data }) {
  return (
    <div className="slide-container">
      <Slide transitionDuration={370}>
        {
          data.map((item) => (
            <div className="each-fade" key={item.id}>
              {/*<img src={item.url} />*/}
              <Image alt="property" placeholder="blur" blurDataURL={item.url} src={item.url} width={700} height={500} sizes="(max-width: 500px) 100px, (max-width: 1023px) 400px, 700px" />
            </div>
          ))
        }
      </Slide>
    </div>
  );
};
