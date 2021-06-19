import ShopActionsTypes  from "./shop.types"

export const updateCollections = collectionData =>({
    type: ShopActionsTypes.UPDATE_COLLECTIONS,
    payload: collectionData
})