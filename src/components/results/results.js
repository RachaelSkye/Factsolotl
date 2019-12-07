import React from "react";
import {connect} from 'react-redux';

class Results extends React.Component {
  render() {
    return (
      <div>
        <div className="Pb">{this.props.Pb}
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
      Pb: state.resultPb,
  }
}

export default connect(mapStateToProps)(Results);