import profileReducer from "./profileReducer";

export const store = {
    _state: {
        profilePage: {
            posts: [
                {text: 'hello'},
                {text: 'hello2'},
                {text: 'hello3'},
            ],
            newPostText: '',
        },
        dialogPage: {
            users: [
                {name: 'Andrew', id: 1},
                {name: 'Vasya', id: 2},
                {name: 'Katya', id: 3},
                {name: 'Olya', id: 3},
            ],
            messages: [
                {message: 'hello'}
            ]
        }
    },
    _rerender() {
        console.log('change state');
    },
    getState() {
        return this._state;
    },
    subscribe(observer) {
        this._rerender = observer;
    },
    dispatch(action) {
        this._state.profilePage = profileReducer(this._state.profilePage, action);
        this._rerender();
    }
}
