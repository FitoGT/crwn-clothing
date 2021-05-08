import './App.css';
import { Switch, Route } from 'react-router-dom'
import Home from './views/home/home'
import Shop from './views/shop/shop'

function App() {
  return (
    <div>
      <Switch>
        <Route exact path="/shop" component={Shop} />
        <Route exact path="/" component={Home} />
      </Switch>
    </div>
  );
}

export default App;
