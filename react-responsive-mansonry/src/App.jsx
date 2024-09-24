import Masonry, {ResponsiveMasonry} from "react-responsive-masonry"
import ChildA from "./components/ChildA"
import ChildB from './components/ChildB';
import ChildY from "./components/ChildY";
import ChildZ from "./components/ChildZ";

function App() {

  return (
    <>
     <ResponsiveMasonry
                columnsCountBreakPoints={{350: 1, 750: 2, 900: 3}}
            >
                <Masonry>
                    <ChildA />
                    <ChildB />
                    {/* Children */}
                    <ChildY />
                    <ChildZ />
                </Masonry>
            </ResponsiveMasonry>
    </>
  )
}

export default App
