import Lightbox from 'yet-another-react-lightbox';
import Slideshow from 'yet-another-react-lightbox/plugins/slideshow';
import Thumbnails from 'yet-another-react-lightbox/plugins/thumbnails';
import Zoom from 'yet-another-react-lightbox/plugins/zoom';
import { Image } from 'react-bootstrap';
import { useState } from 'react';
import './Gallery.scss';

export default function Gallery({ images }: { images: Record<string, string>[] }) {
  const [imgIndex, setImgIndex] = useState(-1);
  const imageList = images.map((image, index) => (
    <Image src={image.screenshot} rounded className="image" onClick={() => setImgIndex(index)} />
  ));
  return (
    <>
      <div className="d-inline-flex flex-wrap w-100">{imageList}</div>
      <Lightbox
        index={imgIndex}
        slides={images.map((img) => ({ src: img.screenshot }))}
        open={imgIndex >= 0}
        close={() => setImgIndex(-1)}
        plugins={[Slideshow, Thumbnails, Zoom]}
        styles={{ container: { backgroundColor: 'rgba(0, 0, 0, .8)' } }}
      />
    </>
  );
}
