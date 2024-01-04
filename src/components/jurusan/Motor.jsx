const Motor = () => {
  return (
    <>
      <div className="tbsm min-h-screen pt-20">
        <div className="w-[50%] h-[50px] hidden md:h-[100px] bg-[#DD1B1B] my-8 rounded-r-lg rounder-r-b-lg md:flex items-center justify-center text-white px-8 py-2">
          <h1 className="text-sm md:text-3xl font-bold">TEKNIK SEPEDA MOTOR</h1>
        </div>
        <div className="bg-[#DD1B1B]">
          <div className="container mx-auto">
            <div className="box-tbsm py-4 flex flex-col justify-between lg:flex-row items-center">
              <div className="box w-full lg:w-1/2 px-4">
                <img src="./vector/pictTbsm1.png" alt="Header Tbsm" className="rounded-xl mx-auto" />
              </div>
              <div className="box mt-4 md:mt-0 px-4 flex flex-col gap-x-2 gap-y-4 text-white text-center items-center lg:w-1/2 w-full">
                <h1 className="font-bold text-2xl md:text-3xl">Kompetensi</h1>
                <p className="text-xs sm:text-sm md:text-base lg:text-lg">Mengidentifikasi komponen sepeda motor dengan ilmu pengetahuan produk komponen sepeda motor yang kuat.</p>
                <p className="text-xs sm:text-sm md:text-base lg:text-lg">Mampu mengidentifikasi keaslian suku cadang sepeda motor Honda.</p>
                <p className="text-xs sm:text-sm md:text-base lg:text-lg">Menganalisa kerusakan dan melakukan perbaikan ( bongkar pasang ) sepeda motor Honda sesuai prosedur yang sudah ditetapkan.</p>
                <p className="text-xs sm:text-sm md:text-base lg:text-lg">Mengengelola Bengkel Secara Profesional</p>
              </div>
            </div>
          </div>
        </div>
        <div className="cards-tbsm">
          <div className="container mx-auto px-4">
            {/* Card */}
            <div className="box-content flex flex-col md:flex-row justify-center pt-24 gap-y-10 gap-x-8 w-[80%] md:w-full mx-auto">
              <div className="box bg-white shadow-lg rounded-xl flex flex-col">
                <img src="./vector/cardTbsm1.png" alt="cards" className="rounded-t-xl" />
                <h1 className="p-4 text-center text-xl md:text-2xl font-bold">Pratikum Tentang Kelistrikan</h1>
              </div>
              <div className="box bg-white shadow-lg rounded-xl flex flex-col">
                <img src="./vector/cardTbsm2.png" alt="cards" className="rounded-t-xl" />
                <h1 className="p-4 text-center text-xl md:text-2xl font-bold">Praktek Tentang Kerusakan pada Bagian Mesin</h1>
              </div>
            </div>
            {/* Card */}

            {/* Sponsor */}
            <h1 className="text-center my-12 p-4 text-2xl md:text-3xl font-bold">Partnership Teknik Sepeda Motor</h1>
            <div className="box-sponsor flex flex-wrap justify-center w-full gap-2">
              <div className="">
                <img src="./vector/wahanaarthacard.png" alt="Artha Card" />
              </div>
              <div className="">
                <img src="./vector/astrahondacard.png" alt="Astra Honda" />
              </div>
              <div className="">
                <img src="./vector/polmanastratsmcard.png" alt="Polma" />
              </div>
            </div>
            {/* Sponsor */}
          </div>
        </div>
        <div className="hasil-cards py-4">
          {/* Hasil */}
          <h1 className="text-2xl md:text-3xl font-bold text-center">Hasil Kegiatan Praktek</h1>
          <div className="hasil flex flex-wrap justify-center gap-5 my-12">
            <img src="./vector/tbsmcard1.png" alt="card" className="w-[300px] rounded-xl block" />
            <img src="./vector/tbsmcard2.png" alt="card" className="w-[300px] rounded-xl block" />
            <img src="./vector/tbsmcard3.png" alt="card" className="w-[300px] rounded-xl block" />
            <img src="./vector/tbsmcard4.png" alt="card" className="w-[300px] rounded-xl block" />
          </div>
          {/* Hasil */}
        </div>
      </div>
    </>
  );
};

export default Motor;
