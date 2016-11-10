import React from 'react';
import { Link, withRouter } from 'react-router';
import merge from 'lodash/merge';

class Index extends React.Component {
  constructor(props){
    super(props);
  }

  handleClick(name, lat, lng){
    const process = this.props.getLocation;
    const router = this.props.router;
    return (e) => {
      e.preventDefault();
      process(name, [lat, lng]);
      router.push("/show");
    };
  }

  getLinks(){
    const { locations } = this.props;
    if(locations){
      const list = [];
      for (let i = 0; i < locations.length; i++) {
        const obj = locations[i];
        list.push(
          <a onClick={this.handleClick(obj.name, obj.lat, obj.lng)} key={obj.id}>{obj.name}</a>
        );
      }
      return list;
    }
    return <div className="loader"/>;
  }

  render(){
    return(
      <div className="index-content">
        <h1>Saved Locations</h1>
        {this.getLinks()}
      </div>
    );
  }
}

export default withRouter(Index);
