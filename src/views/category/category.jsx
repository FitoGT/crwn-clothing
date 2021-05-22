import React from 'react'
import './category.scss'
import CollectionItem from '../../components/collection-item/collection-item'
import { connect } from 'react-redux'

const Category = ({ match, collections }) => {
    const category = collections.find(c => c.routeName === match.params.categoryId)

    return (
        <div className="category">
            <div className="items">
                {category.items.map(item => (
                    <CollectionItem key={item.id} item={item} />

                ))}
            </div>
        </div>
    )
}


const mapStateToProps = ({ shop: { collections } }) => ({
    collections
})

export default connect(mapStateToProps)(Category)