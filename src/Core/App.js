import './App.css';
import { Banner } from '../Components/Banner';
import { Carousel } from '../Components/Carousel';
import { FastWay } from '../Components/FastWay';
import { Catalog } from '../Components/Catalog';
import { Footer } from '../Components/Footer';
import { HorisontalMenu } from '../Components/HorisontalMenu';

function App() {
    return (
        <div>
            <HorisontalMenu type='header' />
            <Banner />
            <Carousel />
            <FastWay />
            <Catalog />
            <Footer />
            <HorisontalMenu type='footer' />
        </div>
    );
}

export default App;
