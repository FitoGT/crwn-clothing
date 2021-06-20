import './App.css';
import Home from './views/home/home'
import Shop from './views/shop/shop'
import Sign from './views/sign/sign'
import Checkout from './components/checkout/checkout';
import Header from "./components/header/header"
import React, { useState, useEffect } from 'react'

import { Switch, Route, Redirect } from 'react-router-dom'

import { auth, createUserProfileDocument } from './firebase/firebase.utils'
import { connect } from 'react-redux'
import { setCurrentUser } from './redux/user/user.actions'

const App = ({ setCurrentUser }) => {

  const [user, setUser] = useState(null)

  useEffect(() => {
    const unsubscribeFromAuth = auth.onAuthStateChanged(async userAuth => {
      if (userAuth) {
        const userRef = await createUserProfileDocument(userAuth)
        userRef.onSnapshot(snapShot => {
          setCurrentUser(
            {
              id: snapShot.id,
              ...snapShot.data()
            }
          )
        })
      } 
      setUser(userAuth)

    })
    //clean up function, component unmount
    return () => {
      unsubscribeFromAuth()
    }
  }, [setCurrentUser])


  return (
    <div>
      <Header />
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/shop" component={Shop} />
        <Route exact path="/checkout" component={Checkout} />
        <Route exact path="/sign" render={() =>
          user ? (
            <Redirect to=""></Redirect>
          )
            :
            (
              <Sign />
            )
        } />
      </Switch>
    </div>
  );

}


const mapStateToProps = ({ user }) => ({
  currentUser: user.currentUser
})
const mapDispatchToProps = dispatch => ({
  setCurrentUser: user => dispatch(setCurrentUser(user))
})
export default connect(mapStateToProps, mapDispatchToProps)(App);
