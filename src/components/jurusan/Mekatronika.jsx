import './shadowcard.css';

const Mekatronika = () => {
  return (
    <>
      <div className="mekatronika min-h-screen pt-20">
        <div className="w-[50%] h-[50px] hidden md:h-[100px] bg-[#273961] my-8 rounded-r-lg rounder-r-b-lg md:flex items-center justify-center text-white px-8 py-2">
          <h1 className="text-sm md:text-3xl font-bold">Teknik Mekatronika</h1>
        </div>
        <div className="bg-[#273961]">
          <div className="container mx-auto">
            <div className="box-meka py-4 flex flex-col justify-between lg:flex-row items-center">
              <div className="box w-full lg:w-1/2 px-4">
                <img src="./vector/pictMeka1.png" alt="Header Meka" className="rounded-xl mx-auto" />
              </div>
              <div className="box mt-4 md:mt-0 px-4 flex flex-col gap-x-2 gap-y-4 text-white text-center items-center lg:w-1/2 w-full">
                <h1 className="font-bold text-2xl md:text-3xl">Kompetensi Keahlian</h1>
                <p className="text-xs sm:text-sm md:text-base lg:text-lg">Kompetensi 8 sikap karakter (Proaktif, Peduli, Bekerjasama, Tangguh, Disiplin, Pembelajar, Dinamis, dan Kemandirian)</p>
                <p className="text-xs sm:text-sm md:text-base lg:text-lg">
                  Lompetensi Merancang, mengoperasikan dan memelihara system mesin yang dikendalikan secara elektronik berbasis sentra elektronik yang deprogram menggunakan bantuan PLC dan program computer.
                </p>
                <p className="text-xs sm:text-sm md:text-base lg:text-lg">Kompetensi Mengoperasikan dan merawat mesin industry berbasis elektro pneumatic, hydrolic dan robotic.</p>
                <p className="text-xs sm:text-sm md:text-base lg:text-lg">
                  Menjadi training designer (konsultan) di bidang keahlian sistem mekatronika, yaitu. H. Sinergi antara sensor, aktuator, kontrol, dan antarmuka mekanis, yang mencakup kemampuan untuk merakit, menguji, mengembangkan,
                  memelihara, dan merancang.
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="cards-Meka">
          <div className="container mx-auto px-4">
            {/* Card */}
            <div className="box-content flex flex-col md:flex-row justify-center pt-24 gap-y-10 gap-x-8 w-[80%] md:w-full mx-auto">
              <div className="box bg-white shadow-lg rounded-xl flex flex-col">
                <img src="./vector/cardMeka1.png" alt="cards" className="rounded-t-xl" />
                <h1 className="p-4 text-center text-xl md:text-2xl font-bold">Pratikum Tentang PLC</h1>
              </div>
              <div className="box bg-white shadow-lg rounded-xl flex flex-col">
                <img src="./vector/cardMeka2.png" alt="cards" className="rounded-t-xl" />
                <h1 className="p-4 text-center text-xl md:text-2xl font-bold">Praktek Tentang Hidrolik</h1>
              </div>
            </div>
            {/* Card */}

            {/* Sponsor */}
            <h1 className="text-center my-12 p-4 text-2xl md:text-xl font-bold">Partnership Teknik Mekatronika</h1>
            <div className="box-sponsor flex justify-center flex-wrap mb-8 w-full gap-2">
              <div className="">
                <img src="./vector/kasmcard.svg" height="400px" width="300px" alt="kasm" />
              </div>
              <div className="">
                <img src="./vector/technocard.svg" height="400px" width="300px" alt="techno" />
              </div>
              <div className="">
                <img src="./vector/forginngcard.svg" height="400px" width="300px" alt="forging" />
              </div>
              <div className="">
                <img src="./vector/risacorpscrad.svg" height="400px" width="300px" alt="risa" />
              </div>
              <div className="">
                <img src="./vector/hardingecard.svg" height="400px" width="300px" alt="harding" />
              </div>
              <div className="">
                <img src="./vector/sancocard.svg" height="400px" width="300px" alt="sanco" />
              </div>
              <div className="">
                <img src="./vector/propancard.svg" height="400px" width="300px" alt="propan" />
              </div>
            </div>
            {/* Sponsor */}
          </div>
        </div>
        <div className="hasil-cards py-4">
          {/* Hasil */}
          <h1 className="text-2xl md:text-3xl font-bold text-center">Hasil Kegiatan Teknik Mekatronika</h1>
          <div className="hasil flex justify-center flex-wrap gap-5 my-12">
            <img src="./vector/mekacard1.png" alt="card" className="w-[300px] rounded-xl block" />
            <img src="./vector/mekacard2.png" alt="card" className="w-[300px] rounded-xl block" />
            <img src="./vector/mekacard3.png" alt="card" className="w-[300px] rounded-xl block" />
            <img src="./vector/mekacard4.png" alt="card" className="w-[300px] rounded-xl block" />
          </div>
          {/* Hasil */}
        </div>
      </div>
    </>
  );
};

export default Mekatronika;
