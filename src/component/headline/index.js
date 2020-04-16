import React, { Component } from "react";
import PropTypes from "prop-types";

class Headline extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    const { header, desc } = this.props;
    if (!header) {
      return null;
    }
    return (
      <div className="container" data-test="headlineComponent">
        <div className="panel panel-primary">
          <div className="panel-heading" data-test="header">
            {header}
          </div>
          <div className="panel-body" data-test="desc">
            {desc}
          </div>
        </div>
      </div>
    );
  }
}

Headline.propTypes = {
  header: PropTypes.string,
  desc: PropTypes.string,
  tempArr: PropTypes.arrayOf(
    PropTypes.shape({
      fName: PropTypes.string,
      lName: PropTypes.string,
      email: PropTypes.string,
      age: PropTypes.number,
      status: PropTypes.bool
    })
  )
};

export default Headline;
