import Header from './componets/Header/Header';
import Phone from './componets/Phone/Phone';
import './App.css';
import Banner from './componets/Banner/Banner';
import NavBar from './componets/NavBar/NavBar';

export default function App() {
  return (
    <div className='main'>
      <Header />
      <div className='navStyles'>
      <NavBar />
      </div>
      <div className='container'>
        <Banner />
        <Phone />
      </div>
    </div>
  );
}
