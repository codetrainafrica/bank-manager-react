export const addAccount = (account) => {
    return {
        type: 'ADD_ACCOUNT',
        account
    }
}

export const deleteAccount = (id) => {
    return {
        type: 'DELETE_ACCOUNT',
        id
    }
}