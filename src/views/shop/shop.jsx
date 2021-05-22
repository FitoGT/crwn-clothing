import React from 'react'
import Collections from '../../components/collections/collections'
import Category from '../category/category'
import { Route } from 'react-router-dom'
const Shop = ({match}) => (
    <div className="shop-page">
       <Route exact path={`${match.path}`} component={Collections}/>
       <Route path={`${match.path}/:categoryId`} component={Category}/>
    </div>
)

export default Shop