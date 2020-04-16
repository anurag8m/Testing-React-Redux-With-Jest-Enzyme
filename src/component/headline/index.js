import React, { Component } from "react";

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

export default Headline;
