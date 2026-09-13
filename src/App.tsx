import { Suspense, useState } from 'react';
import './App.css'
import Banner from './components/Banner'
import Nav from './components/Nav'
import Technologies from './components/technologies/Technologies';
import Footer from './components/Footer';

const technologyDataFetch=async()=>{
  const res =await fetch('/data.json');
  const data = await res.json();
  return data;
} 

function App() {
  
  const [technologiesPromise]=useState(()=>technologyDataFetch())

  return (
    <>
      <Nav/>
      <Banner/>
      <Suspense fallback={<p>Loading....</p>}>
        <Technologies technologiesPromise={technologiesPromise} /> 
      </Suspense>
      <Footer/>
    </>
  )
}

export default App
