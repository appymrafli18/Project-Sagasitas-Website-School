import PictNoSh from '../../assets/pictNoSh.svg';
import GelombangBersama from '../../assets/GelombangBersama.svg';
// import GelombangHero from './images/GelombangHero.svg';

const Header = () => {
  return (
    <>
      <div className="header min-h-screen flex items-center bg-primary-header flex-col">
        <div className="container mx-auto px-4">
          <div className="header-box px-4 flex flex-col lg:flex-row items-center justify-around mt-[4.5rem] sm:mt-16 md:mt-[6rem]">
            <div className="box w-auto order-2 mt-4 text-center lg:text-left lg:order-1 lg:w-1/2">
              <h1 className="text-xl font-bold mb-4 sm:text-3xl md:text-4xl">Membangun Karir Berkelas Internasional Melalui Program Sekolah Kejuruan</h1>
              <p className="text-xs sm:text-sm md:text-base font-medium">Mengembangkan Kompetensi, Keterampilan dan Pengalaman Internasional untuk Meningkatkan Peluang Karir dan Daya Saing di Dunia Kerja.</p>
              <button className="py-2 px-12 bg-[#3C3E92] rounded-lg mt-4 text-white font-bold text-xs sm:text-sm md:text-md lg:text-lg ">More</button>
            </div>
            <div className="box order-1 w-auto lg:order-2 lg:w-1/2 mt-4 md:mt-0">
              <img src={PictNoSh} style={{ filter: 'drop-shadow(0px 4px 100px rgba(0, 0, 0, 0.25))' }} alt="Header Strada" className="lg:ml-auto block w-[300px] sm:w-[350px] md:w-[400px] lg:w-[450px] 2xl:w-[500px]" />
            </div>
          </div>
        </div>
        <div className="box mt-2">
          <img src={GelombangBersama} alt="gelombang" className="block w-screen" />
        </div>
      </div>
    </>
  );
};

export default Header;
