const initialState = {
    users: [
        {
            img: '/',
            name: 'Katya',
            info: 'Hello Im Katya'
        },
        {
            img: '/',
            name: 'Katya 2',
            info: 'Hello Im Katya'
        }
    ]
}

const usersReducer = (state = initialState, action) => {
    switch (action.type) {
        default:
            return state;
    }
}

export default usersReducer;