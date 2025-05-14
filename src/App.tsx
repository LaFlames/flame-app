import {Link, Route, Routes} from "react-router-dom";
import {AboutPage, MainPage} from "./pages";
import {Suspense} from "react";

const App = () => {
    return (
        <div>
            <Suspense fallback='Loading...'>
                <Link to='/'>Main</Link>
                <Link to='/about'>About</Link>
                <Routes>
                    <Route path='/' element={<MainPage />}/>
                    <Route path='/about' element={<AboutPage />}/>
                </Routes>
            </Suspense>
        </div>
    )

}

export default App;