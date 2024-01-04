import './shadowcard.css';

const Tiprogram = () => {
  return (
    <>
      <div className="tip min-h-screen pt-20">
        <div className="w-[50%] h-[50px] hidden md:h-[100px] bg-[#103B99] my-8 rounded-r-lg rounder-r-b-lg md:flex items-center justify-center text-white px-8 py-2">
          <h1 className="text-sm md:text-3xl font-bold">Teknik Informatika Pemrograman</h1>
        </div>
        <div className="bg-[#103B99]">
          <div className="container mx-auto">
            <div className="box-tip py-4 flex flex-col justify-between lg:flex-row items-center">
              <div className="box w-full lg:w-1/2 px-4">
                <img src="./vector/pictTip1.png" alt="Header TIP" className="rounded-xl mx-auto" />
              </div>
              <div className="box mt-4 md:mt-0 px-4 flex flex-col gap-x-2 gap-y-4 text-white text-center items-center lg:w-1/2 w-full">
                <h1 className="font-bold text-2xl md:text-3xl">Kompetensi</h1>
                <p className="text-xs sm:text-sm md:text-base lg:text-lg">Mempunyai sikap dan etika professional yang tinggi berdasarkan ketaqwaan terhadap Tuhan Yang Maha Esa dan kecintaan terhadap tanah air</p>
                <p className="text-xs sm:text-sm md:text-base lg:text-lg">Memiliki kemampuan analisis dari aspek hardware dan software dari sistem komputer modern.</p>
                <p className="text-xs sm:text-sm md:text-base lg:text-lg">Memiliki pengetahuan dasar Teknik Informatika yang kuat, termasuk diantaranya pengetahuan tentang teknologi informasi dan pengembangan perangkat lunak.</p>
                <p className="text-xs sm:text-sm md:text-base lg:text-lg">Mengembangkan perangkat lunak sebagai salah satu cara penyelesaian masalah informatika dengan mengedepankan kaidah pemrograman yang baik.</p>
                <p className="text-xs sm:text-sm md:text-base lg:text-lg">
                  Menganalisis, merancang dan mengimplementasikan solusi sistem perangkat lunak mulai dari level sederhana sampai level enterprise dengan menggunakan metodologi yang benar dan tepat.
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="cards-tip">
          <div className="container mx-auto px-4">
            {/* Card */}
            <div className="box-content flex flex-col md:flex-row justify-center pt-24 gap-y-10 gap-x-8 w-[80%] md:w-full mx-auto">
              <div className="box bg-white shadow-lg rounded-xl flex flex-col">
                <img src="./vector/cardtip1.png" alt="cards" className="rounded-t-xl" />
                <h1 className="p-4 text-center text-xl md:text-2xl font-bold">Pratikum Tentang Sistem Komputer Dan Jaringan</h1>
              </div>
              <div className="box bg-white shadow-lg rounded-xl flex flex-col">
                <img src="./vector/cardtip2.png" alt="cards" className="rounded-t-xl" />
                <h1 className="p-4 text-center text-xl md:text-2xl font-bold">Praktek Pembuatan Software Dan Design Grafis</h1>
              </div>
            </div>
            {/* Card */}

            {/* Sponsor */}
            <h1 className="text-center my-12 p-4 text-2xl md:text-3xl font-bold">Partnership Teknik Informatika Pemrograman</h1>
            <div className="box-sponsor flex flex-wrap justify-center w-full gap-2">
              <div className="">
                <img src="./vector/jaskapital.png" alt="Jas Kapital" />
              </div>
              <div className="">
                <img src="./vector/kollaedu.png" alt="Kolla Education" />
              </div>
              <div className="">
                <img src="./vector/digitalmedia.png" alt="Digital Media" />
              </div>
              <div className="">
                <img src="./vector/pawoon.png" alt="Pawoon" />
              </div>
              <div className="">
                <img src="./vector/ubm.png" alt="Universitas Bunda Mulia" />
              </div>
            </div>
            {/* Sponsor */}
          </div>
        </div>
        <div className="hasil-cards py-4">
          {/* Hasil */}
          <h1 className="text-2xl md:text-3xl font-bold text-center">Hasil Kegiatan Teknik Informatika Pemrograman</h1>
          <div className="hasil flex flex-wrap justify-center gap-5 my-12">
            <img src="./vector/hasilcard1.png" alt="card" className="w-[300px] rounded-xl block" />
            <img src="./vector/hasilcard2.png" alt="card" className="w-[300px] rounded-xl block" />
            <img src="./vector/hasilcard3.png" alt="card" className="w-[300px] rounded-xl block" />
            <img src="./vector/hasilcard4.png" alt="card" className="w-[300px] rounded-xl block" />
          </div>
          {/* Hasil */}
        </div>
      </div>
    </>
  );
};

export default Tiprogram;
