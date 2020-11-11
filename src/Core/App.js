import './App.css';
import { Menu } from '../Components/Menu/index';
import { Header } from '../Components/Header/index';
import { FastWay } from '../Components/FastWay';
import { Catalog } from '../Components/Catalog';
import { Footer } from '../Components/Footer';
import { Carousel } from '../Components/Carousel';

function App() {
    return (
        <div>
            <Menu />
            <Header />
            <Carousel />
            <FastWay />
            <Catalog />
            <Footer />
        </div>
    );
}

export default App;
