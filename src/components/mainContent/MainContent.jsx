import PictureFirst from '../../assets/PictureMainFirst.png';
import PictKonten from '../../assets/PictKonten1.png';
import PictSlide2 from '../../assets/contentpict1.png';
import gradient from '../../assets/gradientwhite.svg';

const MainContent = () => {
  return (
    <>
      <div className="main-content">
        <div className="container mx-auto">
          <div className="box-main flex flex-col items-center gap-y-12">
            <h1 className="text-center w-[90%] lg:w-auto text-3xl md:text-4xl lg:text-5xl my-3 pb-2 mb-12 font-bold border-b-4 border-black">Welcome To Smk Strada Official Website!</h1>
            {/* Slide 1 */}
            <div className="box flex items-center justify-around flex-wrap md:flex-nowrap flex-col md:flex-row w-full px-4 py-2">
              <div className="order-1 md:order-2 w-1/2">
                <img src={PictureFirst} alt="Gambar Pertama Main Content" className="hidden lg:block  md:order-2 w-80 lg:min-w-full ml-auto" />
                <img src={PictKonten} alt="Gambar Pertama Main Content" className="block w-80 lg:hidden ml-auto" />
              </div>
              <div className="box-text order-2 md:order-1 text-center md:text-right w-full md:w-1/2">
                <h1 className="text-2xl md:text-3xl lg:text-4xl font-bold my-2">Transform Your Passion into a Career with SMK STRADA JAKARTA</h1>
                <p className="text-xs sm:text-sm md:text-base lg:text-lg font-medium mx-2">SMK STRADA membuka peluang karier bagi siswa siswi yang memiliki potensi dan kemampuan unggul. Bergabunglah dengan kami dan buktikan kemampuanmu!</p>
                <button type="button" className="text-xs sm:text-sm md:text-base py-2 px-4 rounded-full bg-blue-700 text-white hover:bg-blue-800 font-bold my-2">
                  PENDAFTARAN
                </button>
              </div>
            </div>
            {/* Slide 1 */}

            {/* Slide 2 */}
            <div className="box flex items-center justify-around flex-wrap md:flex-nowrap flex-col md:flex-row w-full px-4 py-2">
              <div className="order-1 md:order-1 lg:w-1/2">
                <img src={gradient} alt="Gambar Pertama Main Content" className="hidden lg:block md:order-2 w-80 lg:min-w-full ml-auto" />
                <img src={PictSlide2} alt="Gambar Pertama Main Content" className="block w-80 lg:hidden ml-auto" />
              </div>
              <div className="box-text order-2 md:order-2 text-center md:text-left w-full md:w-1/2">
                <h1 className="text-2xl md:text-3xl lg:text-4xl font-bold my-2">Experience Innovative Learning at SMK STRADA JAKARTA</h1>
                <p className="text-xs sm:text-sm md:text-base lg:text-lg font-medium mx-2">
                  Siswa SMK STRADA memiliki keunggulan dalam kreativitas, produktivitas, dan kepemimpinan. Jangan lewatkan kesempatanmu untuk bergabung bersama kami!
                </p>
                <button type="button" className="text-xs sm:text-sm md:text-base py-2 px-4 rounded-full bg-blue-700 text-white hover:bg-blue-800 font-bold my-2">
                  PENDAFTARAN
                </button>
              </div>
            </div>
            {/* Slide 2 */}

            {/* SLIDE 3 */}
            <div className="box flex items-center justify-around flex-wrap md:flex-nowrap flex-col md:flex-row w-full px-4 py-2">
              <div className="order-1 md:order-2 w-1/2">
                <img src={PictureFirst} alt="Gambar Pertama Main Content" className="hidden lg:block  md:order-2 w-80 lg:min-w-full ml-auto" />
                <img src={PictKonten} alt="Gambar Pertama Main Content" className="block w-80 lg:hidden ml-auto" />
              </div>
              <div className="box-text order-2 md:order-1 text-center md:text-right w-full md:w-1/2">
                <h1 className="text-2xl md:text-3xl lg:text-4xl font-bold my-2">Transform Your Passion into a Career with SMK STRADA JAKARTA</h1>
                <p className="text-xs sm:text-sm md:text-base lg:text-lg font-medium mx-2">SMK STRADA membuka peluang karier bagi siswa siswi yang memiliki potensi dan kemampuan unggul. Bergabunglah dengan kami dan buktikan kemampuanmu!</p>
                <button type="button" className="text-xs sm:text-sm md:text-base py-2 px-4 rounded-full bg-blue-700 text-white hover:bg-blue-800 font-bold my-2">
                  PENDAFTARAN
                </button>
              </div>
            </div>
            {/* SLIDE 3 */}
          </div>
        </div>
      </div>
    </>
  );
};

export default MainContent;
