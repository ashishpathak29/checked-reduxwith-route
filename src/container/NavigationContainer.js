import { connect } from "react-redux"
import * as userActions from "../actions/users"
import Navigation from "../components/Navigation/Navigation"


// Function passed in to `connect` to subscribe to Redux store updates.

const mapStateToProps = (state) => {
	return {
		user: state.user
	}

}

// Connects React component to the redux store

export default connect(
	mapStateToProps,
	userActions
)(Navigation)