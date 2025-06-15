import {Suspense} from "react";
import {classNames} from "shared/lib";
import {useTheme} from "./providers/ThemeProvider";
import {AppRouter} from "./providers/router";
import {Navbar} from "widgets";

const App = () => {
    const {theme} = useTheme();

    return (
        <div className={classNames("app", {}, [theme])}>
            <Suspense fallback='Loading...'>
                <Navbar />
                <AppRouter/>
            </Suspense>
        </div>
    )

}

export default App;