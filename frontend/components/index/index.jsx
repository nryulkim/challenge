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

  handleDelete(id){
    const process = this.props.unsaveLocation;
    const user_id = this.props.currentUser.id;
    return (e) => {
      e.preventDefault();
      process(user_id, id);
    };
  }

  getLinks(){
    const { locations } = this.props;
    if(locations){
      const list = [];
      for (let i = 0; i < locations.length; i++) {
        const obj = locations[i];
        list.push(
          <div key={obj.id} className="location-links">
            <a onClick={this.handleClick(obj.name, obj.lat, obj.lng)}>{obj.name}</a>
            <a className="delete" onClick={this.handleDelete(obj.id)}>X</a>
          </div>
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
