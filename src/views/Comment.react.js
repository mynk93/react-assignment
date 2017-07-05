import React from 'react';
import {Card, CardHeader, CardText} from 'material-ui/Card';
import ChildComment from './childComment.react'
import ActionFavorite from 'material-ui/svg-icons/action/favorite';
import ActionFavoriteBorder from 'material-ui/svg-icons/action/favorite-border';

export default class Comment extends React.Component {
  constructor(props){
    super(props);
    this.textStyle = {
      fontSize: 18,
      lineHeight: 1.58,
      letterSpacing: '-.004em'
    }
    this.state = {
      childComments : []
    }
  }

  componentWillMount(){
    if(this.props.comment.childComment && this.props.comment.childComment.length > 0)
      this.parseChildComments(this.props.comment.childComment);
  }

  parseChildComments = (childComments) => {
    let childCommentArray = [];
    childComments.map((comment) => {
      childCommentArray.push(<ChildComment key={comment.id} comment={comment}/>)
    }) 
    this.setState({
      childComments: childCommentArray
    });
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
      <div className="row" style={{paddingBottom: 24}}>
        <div className="col-md-8 col-md-offset-2">
        	<Card>
            <CardHeader
              title={this.props.comment.name}
              subtitle={this.props.comment.date}
              avatar={this.parseAvatarUrl()}
              showExpandableButton={true}
              openIcon={<ActionFavorite/>}
              closeIcon={<ActionFavoriteBorder/>}
            />
            <CardText style={this.textStyle}>
              {this.props.comment.comment}
              {this.state.childComments}
            </CardText>
          </Card>
        </div>
      </div>
    );
  }
}


export default Comment;
