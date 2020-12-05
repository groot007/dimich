import { connect } from "react-redux";
import Users from './Users';

const mapStateToProps = (state) => {
    return {
        users: state.usersPage.users
    }
}

const UsersContainer = connect(mapStateToProps, null)(Users);

export default UsersContainer;