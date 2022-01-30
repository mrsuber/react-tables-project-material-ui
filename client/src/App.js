import {BrowserRouter as Router,Switch,Route } from 'react-router-dom'
import {Home,MaterialUi} from './pages'

function App() {




  return (
    <Router>

        <Switch>
            <Route exact path="/"><Home/></Route>
            <Route exact path="/material_ui_table"><MaterialUi/></Route>
            

        </Switch>

    </Router>
  );
}

export default App;
