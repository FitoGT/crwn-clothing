import './App.css';
import { Switch, Route } from 'react-router-dom'
import Home from './views/home/home'
import Shop from './views/shop/shop'
import Sign from './views/sign/sign'
import { auth, createUserProfileDocument } from './firebase/firebase.utils'

import Header from "./components/header/header"
import React from 'react';
class App extends React.Component {
  constructor(){
    super()
    this.state = {
      currentUser:null
    }
  }

  unsubscribeFromAuth = null


  componentDidMount(){
    this.unsubscribeFromAuth = auth.onAuthStateChanged(async userAuth => {
      if(userAuth){
        const userRef = await createUserProfileDocument(userAuth)
        userRef.onSnapshot(snapShot =>{
          this.setState({
            currentUser:{
              id: snapShot.id,
              ...snapShot.data()
            }
          })
          console.log(this.state)
        })
      }else{
        this.setState({currentUser:userAuth})
      }
    })
  }
  componentWillUnmount(){
    this.unsubscribeFromAuth();
  }

  render() {
    return (
      <div>
        <Header currentUser={this.state.currentUser}/>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/shop" component={Shop} />
          <Route path="/sign" component={Sign} />
        </Switch>
      </div>
    );
  }
}

export default App;
