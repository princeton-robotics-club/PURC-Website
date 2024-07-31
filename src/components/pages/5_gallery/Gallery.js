import React from 'react';
import { Gallery } from 'react-grid-gallery';
import '../Generic.css';
import './gallery.css';
import { images } from './images';

function GalleryPage(props) {
  const { darkMode } = props;

  return (
    <>
      <div className="body-bg">
        <div className={'about-bg-img' + (darkMode ? ' about-bg-img-dark' : ' about-bg-img-light')} />
        <section className="article-centered gallery-page">
          <div className={'title-blob' + (darkMode ? ' title-blob-dark' : ' title-blob-light')}> PURC in Pixels</div>
          <Gallery
            className={'gallery'}
            images={images}
            enableImageSelection={false}
            thumbnailImageComponent={ImageComponent}
          />
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
