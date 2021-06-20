import React, { useState, useEffect } from 'react'
import Collections from '../../components/collections/collections'
import { firestore, mapCollection } from '../../firebase/firebase.utils'
import Category from '../category/category'
import { Route } from 'react-router-dom'
import { connect } from 'react-redux'
import { updateCollections } from '../../redux/shop/shop.actions'
import WrappedSpinner from '../../components/spinner/spinner'

const CollectionsSpinner = WrappedSpinner(Collections)
const CategorySpinner = WrappedSpinner(Category)

const Shop = ({ match, updateCollections }) => {

    const [loading, setLoading] = useState(true)
    
    useEffect(() => {
        const colRef = firestore.collection('collections')
        const unsuscribeFromSnapshot = colRef.onSnapshot(async snapshot => {

            const collectionData = mapCollection(snapshot)
            updateCollections(collectionData)
            setLoading(false)
        })
        //clean up function, component unmount
        return()=>{
            unsuscribeFromSnapshot()
        }
    }, [updateCollections])


    return (
        <div className="shop-page">
            <Route
                exact path={`${match.path}`}
                render={(props) => <CollectionsSpinner isLoading={loading} {...props} />}
            />
            <Route
                path={`${match.path}/:categoryId`}
                render={(props) => <CategorySpinner isLoading={loading} {...props} />}
            />
        </div>
    )

}

const mapDispatchToProps = dispatch => ({
    updateCollections: collectionData => dispatch(updateCollections(collectionData))
})

export default connect(null, mapDispatchToProps)(Shop)