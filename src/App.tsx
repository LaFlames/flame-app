import {Link, Route, Routes} from "react-router-dom";
import {AboutPage, MainPage} from "./pages";
import {Suspense} from "react";
import {useTheme} from "./theme/useTheme";
import {classNames} from "./helpers/classNames";

const App = () => {
    const {theme, changeTheme} = useTheme();

    return (
        <div className={classNames("app", {}, [theme])}>
            <Suspense fallback='Loading...'>
                <Link to='/'>Main</Link>
                <Link to='/about'>About</Link>
                <button onClick={changeTheme}>theme</button>
                <Routes>
                    <Route path='/' element={<MainPage />}/>
                    <Route path='/about' element={<AboutPage />}/>
                </Routes>
            </Suspense>
        </div>
    )

}

export default App;