import React from 'react';
import articleJSON from '../file';
import Comment from './Comment.react.js';
import Author from './Author.react.js';

export default class Blog extends React.Component {

  constructor (props) {
    super(props);
    this.state = {
      articleData : {},
      comments: []
    }
    this.articleId = this.props.location.pathname.substr(this.props.location.pathname.lastIndexOf('/') + 1);
    this.commentGroupCount = 5;
    this.commentIndex = 0;
  }

  componentWillMount() {
    window.scrollTo(0,0);
    this.setState({
      articleData: articleJSON.tiles[this.articleId],
    })
    $(window).bind('scroll', this.handleScroll);
  }

  componentWillUnmount(){
    $(window).unbind('scroll');
  }

  handleScroll = () => {
    if($(window).scrollTop() + $(window).height() > $(document).height() - 150) {
      $(window).unbind('scroll');
      this.loadComments();
    }
  }

  loadComments = () => {
    let comments = this.state.articleData.comments;
    let commentArray = this.state.comments;
    let commentStartCount = this.commentIndex * this.commentGroupCount;
    if(commentStartCount < comments.length){
      comments.slice(this.commentStartCount, commentStartCount + this.commentGroupCount).map((comment) => {
        commentArray.push(<Comment key={comment.id} comment={comment}></Comment>)
      })
      this.setState({
        comments: commentArray
      }, function(){
        $(window).bind('scroll', this.handleScroll);
        this.commentIndex += 1;
      });
    } else {
      console.log("Reached end of comments");
    }
    
  }

  render () {
    return (
    	<div className="fluid-container">

        <div className="row" style={{paddingTop: 48}}>
  				<div className="col-md-6 col-md-offset-2">
            <Author author={this.state.articleData} />
          </div>
        </div>

        <div className="row" id="jumbo" style={{paddingTop: 36,  marginLeft: '-110.5px', paddingBottom: 72}}>
          <div className="col-md-12">
            <img src={"https://unsplash.it/" + $(window).width() + "/800/?image=" + (this.state.articleData.index +  27)} alt="" />
          </div>
        </div>

        <div className="row" >
          <div className="col-md-8 col-md-offset-2">
            <h1>{this.state.articleData.title}</h1>
          </div>
        </div>

        <div className="row" style={{whiteSpace: 'pre-wrap', fontSize: 21, lineHeight: 1.58, letterSpacing: '-.003em'}}>
          <div className="col-md-8 col-md-offset-2">
            {this.state.articleData.body}
          </div>
        </div>

        <div>
          {this.state.comments}
        </div>

			</div>
    );
  }
}

export default Blog;
