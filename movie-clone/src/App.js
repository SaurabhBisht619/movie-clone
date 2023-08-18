import React from 'react'
import Header from './Component/Header'
import Footer from './Component/Footer'
import Moive from './Component/Moive';
import data from './Component/data.json';
import './App.css'

function App() {
  return (
    <div>
      <Header/>
        <div className="main">
            {
                data.map((val)=>{
                    return (
                        <Moive
                        key={val.imdbID}
                        Title={val.Title}
                        Year={val.Year}
                        Poster={val.Poster}
                        />
                    )
                })
            }
        </div>
      <Footer/>
    </div>
  )
}

export default App
