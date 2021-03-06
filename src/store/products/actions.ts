export const createProductAction = (product: any) => {
    return {
        type: 'PRODUCT_CREATE',
        payload: product,
    }
}
export const deleteProductAction = (id: any) => {
    return {
        type: 'PRODUCT_DELETE',
        payload: id,
    }
}

export const updateProductAction = (user: any) => {
    return {
        type: 'PRODUCT_UPDATE',
        payload: user,
    }
}