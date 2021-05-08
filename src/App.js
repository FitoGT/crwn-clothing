import './App.css';
import { Switch, Route } from 'react-router-dom'
import Home from './views/home/home'
import Shop from './views/shop/shop'
import Sign from './views/sign/sign'

import Header from "./components/header/header"
function App() {
  return (
    <div>
      <Header />
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/shop" component={Shop} />
        <Route path="/sign" component={Sign} />

      </Switch>
    </div>
  );
}

export default App;
