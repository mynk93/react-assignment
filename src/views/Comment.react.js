import React from 'react';
import {Card, CardActions, CardHeader, CardMedia, CardTitle, CardText} from 'material-ui/Card';
import ActionFavorite from 'material-ui/svg-icons/action/favorite';
import ActionFavoriteBorder from 'material-ui/svg-icons/action/favorite-border';

export default class Comment extends React.Component {

  render () {
    return (
      <div className="row" style={{paddingBottom: 24}}>
        <div className="col-md-8 col-md-offset-2">
        	<Card>
            <CardHeader
              title={this.props.comment.name}
              subtitle={this.props.comment.date}
              avatar={"https://randomuser.me/api/portraits/thumb/lego/6.jpg"}
              showExpandableButton={true}
              openIcon={<ActionFavorite/>}
              closeIcon={<ActionFavoriteBorder/>}
            />
            <CardText>
              {this.props.comment.comment}
            </CardText>
          </Card>
        </div>
      </div>
    );
  }
}


export default Comment;
