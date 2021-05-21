import './App.css';
import { Switch, Route, Redirect } from 'react-router-dom'
import Home from './views/home/home'
import Shop from './views/shop/shop'
import Sign from './views/sign/sign'
import { auth, createUserProfileDocument } from './firebase/firebase.utils'
import Header from "./components/header/header"
import React from 'react';
import { connect } from 'react-redux'
import { setCurrentUser } from './redux/user/user.actions'
class App extends React.Component {


  unsubscribeFromAuth = null


  componentDidMount() {
    const {setCurrentUser}=this.props
    this.unsubscribeFromAuth = auth.onAuthStateChanged(async userAuth => {
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
      } else {
        this.setState(userAuth)
      }
    })
  }
  componentWillUnmount() {
    this.unsubscribeFromAuth();
  }

  render() {
    return (
      <div>
        <Header />
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/shop" component={Shop} />
          <Route exact path="/sign" render={()=>
            this.props.currentUser ? (
              <Redirect to=""></Redirect>
            )
            :
            (
              <Sign/>
            )
          }/>
        </Switch>
      </div>
    );
  }
}
const mapStateToProps = ({user}) =>({
  currentUser: user.currentUser
}) 
const mapDispatchToProps = dispatch => ({
  setCurrentUser: user => dispatch(setCurrentUser(user))
})
export default connect(mapStateToProps,mapDispatchToProps)(App);
