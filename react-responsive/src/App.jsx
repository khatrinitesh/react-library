
import './App.css';
import { useMediaQuery } from 'react-responsive'

function App() {
  const isDesktopOrLaptop = useMediaQuery({ query: '(min-width: 1224px)' });
  const isMobile = useMediaQuery({ query: '(max-height:575px)' }); // Adjusted for mobile width
  const isTablet = useMediaQuery({ query: '(min-width: 768px)' });
  const isPortrait = useMediaQuery({ query: '(orientation: portrait)' });
  const isLandscape = useMediaQuery({ query: '(orientation: landscape)' });

  return (
    <>
      {/* Register shows only on mobile in portrait */}
      {isMobile && isPortrait && (
        <div className='register'>Register</div>
      )}

      {/* Best portrait shows only on mobile in landscape */}
      {isMobile && isLandscape && (
        <div className='bestportrait'>Best portrait in view mode</div>
      )}

      {/* Oops shows on tablet and desktop in both portrait and landscape */}
      {(isDesktopOrLaptop || isTablet) && (
        <div className="oops">Oops</div>
      )}
    </>
  );
}

export default App
