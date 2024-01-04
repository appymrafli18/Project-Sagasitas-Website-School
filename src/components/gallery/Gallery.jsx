import gallerycard1 from '../../assets/gallerycard1.png';
import gallerycard2 from '../../assets/gallerycard2.png';
import gallerycard3 from '../../assets/gallerycard3.png';
import gallerycard4 from '../../assets/gallerycard4.png';
import gallerycard5 from '../../assets/gallerycard5.png';
import gallerycard6 from '../../assets/gallerycard6.png';
import gallerycard7 from '../../assets/gallerycard7.png';
import gallerycard8 from '../../assets/gallerycard8.png';
import gallerycard9 from '../../assets/gallerycard9.png';
import gallerycard10 from '../../assets/gallerycard10.png';
import gallerycard11 from '../../assets/gallerycard11.png';
import gallerycard12 from '../../assets/gallerycard12.png';

const Gallery = () => {
  return (
    <>
      <div className="gallery">
        <div className="container mx-auto px-4 mb-10">
          <div className="gallery-box flex mt-24 gap-14 flex-wrap justify-center rounded-xl">
            <img src={gallerycard1} alt="Gallery" />
            <img src={gallerycard2} alt="Gallery" />
            <img src={gallerycard3} alt="Gallery" />
            <img src={gallerycard4} alt="Gallery" />
            <img src={gallerycard5} alt="Gallery" />
            <img src={gallerycard6} alt="Gallery" />
            <img src={gallerycard7} alt="Gallery" />
            <img src={gallerycard8} alt="Gallery" />
            <img src={gallerycard9} alt="Gallery" />
            <img src={gallerycard10} alt="Gallery" />
            <img src={gallerycard11} alt="Gallery" />
            <img src={gallerycard12} alt="Gallery" />
          </div>
        </div>
      </div>
    </>
  );
};

export default Gallery;
