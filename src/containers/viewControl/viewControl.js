
import React from 'react';
import Details from '../details/details';
import Preview from '../preview/preview';
import { connect } from "react-redux";



class control extends React.Component {
  render() {
    if(!this.props.details){
      return (
        <div>
          <Preview />
        </div>
      );
    } else if (this.props.details) {
      return (
        <div>
          <Preview />
          <Details />
        </div>
      );
    } 
  }
}
  


const mapStateToProps = state => {
  return {
    details: state.details
  };
};

export default connect(mapStateToProps)(control);

