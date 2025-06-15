import {Link} from "react-router-dom";
import {Suspense} from "react";
import {classNames} from "shared/lib";
import {useTheme} from "./providers/ThemeProvider";
import {AppRouter} from "./providers/router";

const App = () => {
    const {theme, changeTheme} = useTheme();

    return (
        <div className={classNames("app", {}, [theme])}>
            <Suspense fallback='Loading...'>
                <Link to='/'>Main</Link>
                <Link to='/about'>About</Link>
                <button onClick={changeTheme}>theme</button>
                <AppRouter/>
            </Suspense>
        </div>
    )

}

export default App;