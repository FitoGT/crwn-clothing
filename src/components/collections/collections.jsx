import React from 'react'
import { connect } from 'react-redux'
import './collections.scss'
import CollectionPreview from '../../components/collection-preview/collection-preview'

const Collections = ({collections}) =>(
    <div className="collections-overview">
        {collections.map(({ id, ...collection }) => (
            <CollectionPreview key={id} {...collection} />
        ))}
    </div>
)

const mapStateToProps = ({shop:{collections}}) =>({
    collections  
})

export default connect(mapStateToProps)(Collections)