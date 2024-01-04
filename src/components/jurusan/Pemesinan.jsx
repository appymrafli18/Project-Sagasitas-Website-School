import './shadowcard.css';

const Pemesinan = () => {
  return (
    <>
      <div className="pemesinan min-h-screen pt-20">
        <div className="w-[50%] h-[50px] hidden md:h-[100px] bg-[#D07141] my-8 rounded-r-lg rounder-r-b-lg md:flex items-center justify-center text-white px-8 py-2">
          <h1 className="text-sm md:text-3xl font-bold">Teknik Pemesinan</h1>
        </div>
        <div className="bg-[#D07141]">
          <div className="container mx-auto">
            <div className="box-mesin py-4 flex flex-col justify-between lg:flex-row items-center">
              <div className="box w-full lg:w-1/2 px-4">
                <img src="./vector/pictMesin1.png" alt="Header mesin" className="rounded-xl mx-auto" />
              </div>
              <div className="box mt-4 md:mt-0 px-4 flex flex-col gap-x-2 gap-y-4 text-white text-center items-center lg:w-1/2 w-full">
                <h1 className="font-bold text-2xl md:text-3xl">Kompetensi Keahlian</h1>
                <p className="text-xs sm:text-sm md:text-base lg:text-lg">Mengoperasikan mesin – mesin perkakas Konvensional</p>
                <p className="text-xs sm:text-sm md:text-base lg:text-lg">CNC ( Computer Numerical Control ). Mesin dengan kontrol numerik</p>
                <p className="text-xs sm:text-sm md:text-base lg:text-lg">Pengelasan, Fabrikasi logam</p>
                <p className="text-xs sm:text-sm md:text-base lg:text-lg">
                  CAM (Computer Aided Manufacturing) Penggunaan perangkat lunak komputer untuk mengontrol peralatan mesin atau bagian mesin lain yang terkait dengan proses pemesinan.
                </p>
                <p className="text-xs sm:text-sm md:text-base lg:text-lg">
                  CAD (Computer Aided Design) CAD adalah perangkat lunak komputer untuk merancang/menggambar suatu objek atau bagian dari suatu objek dalam bentuk dua atau tiga dimensi sehingga dapat dipublikasikan/disampaikan/diwakili.
                </p>
                <p className="text-xs sm:text-sm md:text-base lg:text-lg">CADD (Computer Aided Design and Drafting)</p>
              </div>
            </div>
          </div>
        </div>
        <div className="cards-mesin">
          <div className="container mx-auto px-4">
            {/* Card */}
            <div className="box-content flex flex-col md:flex-row justify-center pt-24 gap-y-10 gap-x-8 w-[80%] md:w-full mx-auto">
              <div className="box bg-white shadow-lg rounded-xl flex flex-col">
                <img src="./vector/cardMesin1.png" alt="cards" className="rounded-t-xl" />
                <h1 className="p-4 text-center text-xl md:text-2xl font-bold">Pratikum Pembuatan Alat dengan cara membubut secara manual</h1>
              </div>
              <div className="box bg-white shadow-lg rounded-xl flex flex-col">
                <img src="./vector/cardMesin2.png" alt="cards" className="rounded-t-xl" />
                <h1 className="p-4 text-center text-xl md:text-2xl font-bold">Pratikum Pembuatan Alat dengan cara membubut secara manual</h1>
              </div>
            </div>
            {/* Card */}

            {/* Sponsor */}
            <h1 className="text-center my-12 p-4 text-2xl md:text-3xl font-bold">Partnership Teknik Pemesinan</h1>
            <div className="box-sponsor flex flex-wrap justify-center w-full gap-2">
              <div className="">
                <img src="./vector/denapellacard.png" alt="Dena" />
              </div>
              <div className="">
                <img src="./vector/gramediacard.png" alt="Gramedia" />
              </div>
              <div className="">
                <img src="./vector/polmanastracard.png" alt="polma" />
              </div>
              <div className="">
                <img src="./vector/akutansicikarangcard.png" alt="akutan" />
              </div>
            </div>
            {/* Sponsor */}
          </div>
        </div>
        <div className="hasil-cards py-4 mt-8">
          {/* Hasil */}
          <h1 className="text-2xl md:text-3xl font-bold text-center">Hasil Kegiatan Teknik Pemesinan</h1>
          <div className="hasil flex flex-wrap justify-center gap-5 my-12">
            <img src="./vector/mesincard1.png" alt="card" className="w-[300px] rounded-xl block" />
            <img src="./vector/mesincard2.png" alt="card" className="w-[300px] rounded-xl block" />
            <img src="./vector/mesincard3.png" alt="card" className="w-[300px] rounded-xl block" />
            <img src="./vector/mesincard4.png" alt="card" className="w-[300px] rounded-xl block" />
          </div>
          {/* Hasil */}
        </div>
      </div>
    </>
  );
};

export default Pemesinan;
