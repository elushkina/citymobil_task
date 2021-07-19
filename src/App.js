import React from 'react'
import {Header} from './components/Header/Header'
import {Sidebar} from "./components/Sidebar/Sidebar";
import {Footer} from "./components/Footer/Footer";
import {TableContent} from "./components/TableContent/TableContent";
import './App.css'

function App() {
    return (
        <div>
            <Header />
            <div className="wrapper">
                <Sidebar />
                <TableContent />
            </div>
            <Footer />
        </div>
    );
}

export default App;