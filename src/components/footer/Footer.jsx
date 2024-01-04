import './Footer.css';
import logoFooter from '../../assets/logofooter.svg';
// import vectorFooter from './images/vectorFooter.svg';

const Footer = () => {
  return (
    <>
      <footer id="contact" className="bg-[#9FB0FE] overflow-x-hidden">
        <div className="container mx-auto">
          <div className="footer-box gap-2 py-8 justify-between relative">
            <div className="box hidden lg:flex items-center pt-44">
              <img src="./vector/botakvector.svg" alt="vector" width="140px" className="" />
              <img src="./vector/wanitavector.svg" alt="vector" width="140px" className="" />
              <img src="./vector/pincangvector.svg" alt="vector" width="140px" className="" />
            </div>
            <div className="box gap-y-2 flex flex-col text-center md:text-left">
              <h1 className="text-2xl font-bold">Sosial Media</h1>
              <p>@smkstradajkt</p>
              <p>SMK STRADA JAKARTA</p>
              <p>SMK STRADA JAKARTA</p>
            </div>
            <div className="box gap-y-2 flex flex-col text-center md:text-left">
              <h1 className="text-2xl font-bold">Tentang Kami</h1>
              <p>Identitas Sekolah</p>
              <p>Visi Misi</p>
              <p>Sejarah</p>
              <p>Fasilitas</p>
              <p>Program Kerja</p>
            </div>
            <div className="box flex flex-wrap items-center gap-3 p-1 mx-auto min-w-full md:w-auto">
              <img src={logoFooter} alt="Logo Sekola" className="mx-auto" />
              <p className="text-xs">Jl. Rajawali Selatan 2 No.1, RT.4/RW.6, Gn. Sahari Utara, Kecamatan Sawah Besar, Kota Jakarta Pusat, Daerah Khusus Ibukota Jakarta 10720</p>
              <p>https://www.stmstrada.sch.id/</p>
              <p>info@stmstrada.sch.id</p>
              <p>+62 812-1007-6265</p>
            </div>
          </div>
        </div>
        <div className="footer-down text-center justify-center bg-[#4559D8] text-white flex flex-col sm:flex-row items-center gap-x-4 py-2 px-2">
          <p className="text-xs sm:text-sm md:text-base lg:text-lg">&#169; All Right Reserved</p>
          <p className="text-xs sm:text-sm md:text-base lg:text-lg">2023 Smk Strada Jakarta</p>
          <p className="text-xs sm:text-sm md:text-base lg:text-lg">Creative by BBLock Hole Spirit Team.</p>
        </div>
      </footer>
    </>
  );
};

export default Footer;
