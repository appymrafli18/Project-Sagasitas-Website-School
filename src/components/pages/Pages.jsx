import { Route, BrowserRouter as Router, Routes } from 'react-router-dom';
import Navbar from '../nav/Navbar';
import Footer from '../footer/Footer';
import Homepage from './Homepage';
import Tiprogram from '../jurusan/Tiprogram';
import Mekatronika from '../jurusan/Mekatronika';
import Pemensinan from '../jurusan/Pemesinan';
import Motor from '../jurusan/Motor';
import Gallery from '../gallery/Gallery';
import Information from '../information/Information';

const Pages = () => {
  return (
    <>
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" Component={Homepage} />
          <Route path="/informatika" Component={Tiprogram} />
          <Route path="/mekatronika" Component={Mekatronika} />
          <Route path="/pemesinan" Component={Pemensinan} />
          <Route path="/sepedamotor" Component={Motor} />
          <Route path="/gallery" Component={Gallery} />
          <Route path="/information" Component={Information} />
        </Routes>
        <Footer />
      </Router>
    </>
  );
};

export default Pages;
