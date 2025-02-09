import React, { useState } from 'react';
import { Gallery } from 'react-grid-gallery';
import Lightbox from 'yet-another-react-lightbox';
import Captions from 'yet-another-react-lightbox/plugins/captions';
import 'yet-another-react-lightbox/styles.css';

import FullScreen from 'yet-another-react-lightbox/plugins/fullscreen';
// import Slideshow from "yet-another-react-lightbox/plugins/slideshow";
// import Thumbnails from "yet-another-react-lightbox/plugins/thumbnails";
// import Video from "yet-another-react-lightbox/plugins/video";
import 'yet-another-react-lightbox/plugins/thumbnails.css';
import Zoom from 'yet-another-react-lightbox/plugins/zoom';
import 'yet-another-react-lightbox/styles.css';

import '../Generic.css';
import './gallery.css';
import { images } from './images';

function GalleryPage(props) {
  const { darkMode } = props;
  const [index, setIndex] = useState(-1);

  const handleClick = (index, item) => setIndex(index); // index: number, item: CustomImage
  const captionsRef = React.useRef(null);

  return (
    <>
      <div className="body-bg">
        <div className={'about-bg-img' + (darkMode ? ' about-bg-img-dark' : ' about-bg-img-light')} />
        <section className="article-centered gallery-page">
          <div className={'title-blob' + (darkMode ? ' title-blob-dark' : ' title-blob-light')}> PURC in Pixels</div>
          <Gallery
            className={'gallery'}
            onClick={handleClick}
            images={images}
            enableImageSelection={false}
            thumbnailImageComponent={ImageComponent}
          />
          <Lightbox
            plugins={[Captions, Zoom, FullScreen]}
            slides={images}
            open={index >= 0}
            index={index}
            close={() => setIndex(-1)}
            zoom={{
              scrollToZoom: true,
              maxZoomPixelRatio: 5,
            }}
            on={{
              click: () => {
                (captionsRef.current?.visible ? captionsRef.current?.hide : captionsRef.current?.show)?.();
              },
            }}
            // captions={{ showToggle: true, enable: true, position: 'bottom', hidden: false }}
          />
          <div ref={captionsRef} />
        </section>
      </div>
    </>
  );
}

const ImageComponent = (props) => {
  // const [show, setShow] = useState(false);

  return <img className="gallery-image" {...props.imageProps} height={400} />;
};

export default GalleryPage;
