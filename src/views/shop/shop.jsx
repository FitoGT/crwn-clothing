import React from 'react'
import CollectionPreview from '../../components/collection-preview/collection-preview'
import { connect } from 'react-redux'
const Shop = ({collections}) => (

    <div className="shop-page">
        {collections.map(({ id, ...collection }) => (
            <CollectionPreview key={id} {...collection} />
        ))}
    </div>


)

const mapStateToProps = ({shop}) =>({
    collections: shop  
})

export default connect(mapStateToProps)(Shop)