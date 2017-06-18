import React from 'react';
import Avatar from 'material-ui/Avatar';

export default class Author extends React.Component {

  render () {
    return (
      <div className="row">
        <div className="col-md-2 col-md-offset-1">
          <Avatar size={65} src={(this.props.author.avatar && this.props.author.gender)? "https://randomuser.me/api/portraits/thumb/" + this.props.author.gender + '/' + this.props.author.avatar + ".jpg" : "https://randomuser.me/api/portraits/thumb/lego/6.jpg"} />
        </div>
        <div className="col-md-5">
          <div className="row">
            <div className="col-md-12" style={{paddingTop: 6, fontSize: 18}}>
              {this.props.author.name}
            </div>
          </div>
          <div className="row" style={{paddingTop: 6}}>
            <div className="col-md-12">
              <span> <span>{this.props.author.date}</span> . <span></span>{this.props.author.readLen} min read</span>
            </div>
          </div>
        </div>
      </div>
    );
  }
}


export default Author;
