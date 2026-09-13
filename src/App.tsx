import { Suspense } from 'react';
import './App.css'
import Banner from './components/Banner'
import Nav from './components/Nav'
import Technologies from './components/technologies/Technologies';

const technologyDataFetch=async()=>{
  const res =await fetch('/data.json');
  const data = await res.json();
  return data;
} 

function App() {
  const technologiesPromise= technologyDataFetch();

  return (
    <>
      <Nav/>
      <Banner/>
      <Suspense fallback={<p>Loading....</p>}>
        <Technologies technologiesPromise={technologiesPromise} /> 
      </Suspense>
    </>
  )
}

export default App
