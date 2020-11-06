import './App.css';
import { Menu } from '../Components/Menu/index';
import { Header } from '../Components/Header/index';
import { FastWay } from '../Components/FastWay';
import { Catalog } from '../Components/Catalog';
import { Footer } from '../Components/Footer';

function App() {
    return (
        <div>
            <Menu />
            <Header />
            <FastWay />
            <Catalog />
            <Footer />
        </div>
    );
}

export default App;
