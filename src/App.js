import './App.css';
import React,{ useEffect, useState } from "react";
import'./styles.css';
import Header from './components/Header'
import Footer from './components/Footer'; 
import MoviesGrid from './components/MoviesGrid';
import WatchList from './components/WatchList';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';

function App() {
   
       const [movies,setMovies]=useState([]);
       const [watchlist, setWatchlist]=useState([]);


       const toggleWatchlist=(movieId)=>{
        setWatchlist((prev)=>
          prev.includes(movieId)
        ? prev.filter((id)=>id!==movieId):
        [...prev, movieId]
        );
       };

      useEffect(()=>{
  
          fetch('movies.json')
          .then(Response=>Response.json())
          .then(data=>setMovies(data))
  
      },[]);

  return (
    <div className="App">
     <div className='container'>
        <Header></Header>

        <Router>
          <nav>
         <ul>
          <li>
          <Link to="/">Home</Link>
          </li>
          <li>
          <Link to="/watchlist">WatchList</Link>
          </li>
         </ul>
          </nav>

          <Routes>

            <Route path="/" element={<MoviesGrid 
            movies={movies}
            watchlist={watchlist}
            toggleWatchlist={toggleWatchlist}/>}>
              </Route>

            <Route path="/watchlist" element={<WatchList 
            movies={movies} 
            watchlist={watchlist} 
            toggleWatchlist={toggleWatchlist} />}>
            </Route>

          </Routes>
        </Router>

     </div>
      
      <Footer></Footer>
    </div>
  );
}

export default App;

