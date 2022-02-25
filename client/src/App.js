import './App.css'
import {BrowserRouter as Router,Switch,Route } from 'react-router-dom'
import {Home,MaterialUi,HtmlCssJs2} from './pages'



function App() {
  return (
    <Router>
      <Switch>
            <Route exact path="/" component={Home} />
            <Route exact path="/material_ui_table" component={MaterialUi} />
            <Route exact path="/htmlcssjs" component={HtmlCssJs2} />

        </Switch>

    </Router>
  );

}

export default App;
