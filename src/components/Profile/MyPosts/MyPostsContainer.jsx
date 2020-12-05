import { handleChangeAction, addPostAction } from '../../../redux/profileReducer';
import MyPosts from './MyPosts';
import { connect } from 'react-redux';

const mapStateToProps = (state) => {
    return {
        newTextValue: state.profilePage.newTextValue,
        posts: state.profilePage.posts
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        handleChange: (e) => {
            dispatch(handleChangeAction(e.target.value));
        },
        addPost: () => {
            dispatch(addPostAction());
        }
}
}

const MyPostsContainer = connect(mapStateToProps, mapDispatchToProps)(MyPosts);
export default MyPostsContainer;