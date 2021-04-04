import logo from './logo.svg';
import './App.css';
import {Home} from "./component/home";
import {BrowserRouter, Route, Switch} from "react-router-dom";

function App() {
return (
            <div className="App">
                <BrowserRouter>
                    {/*<Provider store={store}>*/}
                        <Switch>
                            <Route exact path={"/"} render={() => <Home/>}/>
                        </Switch>
                    {/*</Provider>*/}
                </BrowserRouter>
            </div>
        )
}

export default App;
