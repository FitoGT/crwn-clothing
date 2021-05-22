import React from 'react'
import './collection-preview.scss'
import CollectionItem from '../collection-item/collection-item'
import { Link } from 'react-router-dom'
const CollectionPreview = ({ title, items,routeName}) => (
    <div className="collection-preview">
        <Link className="title" to={`/shop/${routeName}`}>{title.toUpperCase()}</Link>
        <div className="preview">
            {
                items
                .filter((item,idx) => idx <4)
                .map(item=>(
                    <CollectionItem key={item.id} item={item} />
                ))
            }
        </div>
    </div>
)

export default CollectionPreview