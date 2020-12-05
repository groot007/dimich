const ADD_POST = 'ADD_POST';
const HANDLE_CHANGE = 'HANDLE_CHANGE';

const initialState = {
    posts: [
        {text: 'hello'},
        {text: 'hello2'},
        {text: 'hello3'},
    ],
    newPostText: '',
}

const profileReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_POST: 
            const newValue = state.newPostText;
            return {
                ...state,
                posts: [...state.posts, {text: newValue}],
                newPostText: ''
            }
        case HANDLE_CHANGE:
            return {
                ...state,
                newPostText: action.value
            }
        default:
            return state;
    }
}

export const addPostAction = () => (
    {type: ADD_POST}
)

export const handleChangeAction = (value) => (
    {
        type: HANDLE_CHANGE,
        value: value
    }
)

export default profileReducer;