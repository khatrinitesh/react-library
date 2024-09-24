import { useState } from 'react'
import EmblaCarousel from './EmblaCarousel';
import './css/base.css';
import './css/sandbox.css';
import './css/embla.css';



const OPTIONS = { loop: true }
const SLIDE_COUNT = 5
const SLIDES = Array.from(Array(SLIDE_COUNT).keys())

function App() {

  return (
    <>
      <EmblaCarousel slides={SLIDES} options={OPTIONS} />
    </>
  )
}

export default App
