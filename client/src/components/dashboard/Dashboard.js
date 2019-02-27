import React, { Component } from "react";
import { connect } from "react-redux";
import { getCurrentProfile } from "../../actions/profileActions";
import PropTypes from "prop-types";

class Dashboard extends Component {
  componentDidMount() {
    this.props.getCurrentProfile();
  }

  render() {
    return <div />;
  }
}

// const mapStateToProps = state => ({
//   profile: state.profile
// });

export default connect(
  null,
  { getCurrentProfile }
)(Dashboard);
