import React from 'react';
import {Card, CardHeader, CardMedia, CardTitle, CardText} from 'material-ui/Card';

export default class ArticleTile extends React.Component {

  render () {
    return (
    	<Card style={{cursor: 'pointer'}} onClick={this.props.articleSelect.bind(this, this.props.tile.index)}>
        <CardHeader
          title={this.props.tile.name}
          subtitle={<span> <span>{this.props.tile.date}</span> . <span></span>{this.props.tile.readLen} min read</span>}
          avatar={(this.props.tile.avatar && this.props.tile.gender)? "https://randomuser.me/api/portraits/thumb/" + this.props.tile.gender + '/' + this.props.tile.avatar + ".jpg" : "https://randomuser.me/api/portraits/thumb/lego/6.jpg"}
        />
        <CardMedia>
            <img src={"https://unsplash.it/500/300/?image=" + (this.props.tile.index +  27)} alt="" />
        </CardMedia>
        <CardTitle title={this.props.tile.title} />
        <CardText style={{height: '100px', overflow:'hidden'}}>
          {this.props.tile.body}
        </CardText>
      </Card>
    );
  }
}


export default ArticleTile;
