import { connect } from "react-redux"
import * as userActions from "../actions/users"

// Any time it updates, mapStateToProps is called.
const mapStateToProps = (state) => {
	return {
		user: state.user
	}

}

// Instead, it returns a new, connected component class, for you to use.
export default connect(
	mapStateToProps,
	userActions
)(Navigation)