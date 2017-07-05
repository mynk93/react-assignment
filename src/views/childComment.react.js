import React from 'react';
import Avatar from 'material-ui/Avatar';
import {Card, CardHeader, CardText} from 'material-ui/Card';

export default class ChildComment extends React.Component {

  constructor(props){
    super(props);
    this.style = {
        height: 100,
        width: '100%',
        marginTop: 24,
        display: 'inline-block'
    };
    this.textStyle = {
      fontSize: 18,
      lineHeight: 1.58,
      letterSpacing: '-.004em'
    }
  }

  parseAvatarUrl = () => {
    if(this.props.comment.gender != 'lego')
      return ("https://randomuser.me/api/portraits/thumb/" + this.props.comment.gender + "/" + this.props.comment.avatar + ".jpg");
    else {
      this.props.comment.avatar = Math.ceil((((this.props.comment.avatar - 10) / 10 ) + 1));
      return ("https://randomuser.me/api/portraits/thumb/lego/" + this.props.comment.avatar + ".jpg")
    }
  }

  render () {
    return (
      <div className="row">
        <div className="col-md-10 col-md-offset-1" style={{marginTop: 12}}>
          <Card>
            <CardHeader
              title={this.props.comment.name}
              subtitle={this.props.comment.date}
              avatar={this.parseAvatarUrl()}
            />
            <CardText style={this.textStyle}>
              {this.props.comment.comment}
            </CardText>
          </Card>
        </div>
      </div>
    );
  }
}


export default ChildComment;
