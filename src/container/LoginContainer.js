import { connect } from "react-redux"
import * as userActions from "../actions/users"
import Login from "../components/Login/login"


// Function passed in to `connect` to subscribe to Redux store updates.

const mapStateToProps = (state, ownProps) => {	

	let nextPathname = "/"

	try {nextPathname = ownProps.location.state.nextPathname}
	catch(err) {}

	return {
		user: state.user,
		nextPathname // this prop passed in by React Router
	}

}

// Connects React component to the redux store

export default connect(
	mapStateToProps,
	userActions
)(Login)