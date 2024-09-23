
import './App.css';
import { useMediaQuery } from 'react-responsive'

function App() {

  const isDesktopOrLaptop = useMediaQuery({
    query: '(min-width: 1224px)'
  })
  const isBigScreen = useMediaQuery({ query: '(min-width: 992px)' })
  const isTabletOrMobile = useMediaQuery({ query: '(max-width: 1224px)' })
  const isPortrait = useMediaQuery({ query: '(orientation: portrait)' })
  const isRetina = useMediaQuery({ query: '(min-resolution: 2dppx)' })

  return (
    <>
       {/* Register shows only on mobile in portrait */}
       {isTabletOrMobile && isPortrait && (
        <div className='register'>Register</div>
      )}

      {/* Best portrait shows only on mobile in landscape */}
      {isTabletOrMobile && isLandscape && (
        <div className='bestportrait'>Best portrait in view mode</div>
      )}

      {/* Oops shows on tablet and desktop in both portrait and landscape */}
      {(isDesktopOrLaptop || isTabletOrMobile) && (
        <div className="oops">Oops</div>
      )}
    </>
  )
}

export default App
