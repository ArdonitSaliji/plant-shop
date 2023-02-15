import { useState } from 'react';
import Hero from './components/Hero/Hero';
import Product from './components/Products/Products';
import Blur from './components/Blur/Blur';
import Care from './components/Care/Care.jsx';
import Reference from './components/Reference/Reference';
import Footer from './components/Footer/Footer';
import './App.css';
<style>@import url('https://fonts.googleapis.com/css2?family=Work+Sans&display=swap');</style>;

function App() {
    const [count, setCount] = useState(0);

    return (
        <div className='App'>
            <Hero />
            <Blur />
            <Product />
            <Reference />
            <Care />
            <Footer />
        </div>
    );
}

export default App;
