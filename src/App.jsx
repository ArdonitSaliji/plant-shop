import { useState } from 'react';
import Navbar from './components/Navbar/Navbar';
import './App.css';
<style>@import url('https://fonts.googleapis.com/css2?family=Work+Sans&display=swap');</style>;

function App() {
    const [count, setCount] = useState(0);

    return (
        <div className='App'>
            <Navbar />
        </div>
    );
}

export default App;
