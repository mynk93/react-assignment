import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as Actions from '../actions/Actions';
import {GridList} from 'material-ui/GridList';
import {Card, CardActions, CardHeader, CardMedia, CardTitle, CardText} from 'material-ui/Card';
import ArticleTile from './ArticleTile.react'
import articleJSON from '../file';

export default class Home extends React.Component {

  constructor (props) {
    super(props);
    const { dispatch } = this.props;
    this.actions = bindActionCreators(Actions, dispatch);
    this.styles = {
      root: {
        display: 'flex',
        flexWrap: 'wrap',
        paddingTop: '48px',
        paddingBottom: '48px',
        marginBottom: '48px',
        justifyContent: 'space-around',
      },
      gridList: {
        width: '80%',
        overflowY: 'hidden',
      }
    }
    this.state = {
      tilesData : []
    }
    this.pageNumber = 8;
    this.pageIndex = 0;
  }

  componentWillMount() {
    let test = articleJSON;
    this.setState({
      tilesData: test.tiles.slice(this.pageIndex * this.pageNumber, this.pageNumber)
    })
  }

  componentDidMount() {
    $(window).bind('scroll', this.handleScroll);
  }

  componentWillUnmount(){
    $(window).unbind('scroll');
  }

  handleScroll = () => {
    if($(window).scrollTop() + $(window).height() > $(document).height() - 300) {
      $(window).unbind('scroll');
      this.loadTiles();
    }
  }

  shouldComponentUpdate(nextProps, nextState){
    if(nextState.tilesData.length > this.state.tilesData.length)
      return true;
    return false;
  }

  loadTiles = () => {
    let tilesData = this.state.tilesData;
    this.pageIndex += 1;
    let startCount = this.pageIndex * this.pageNumber;
    if(startCount < articleJSON.tiles.length){
      let newArray = tilesData.concat(articleJSON.tiles.slice(startCount, startCount + this.pageNumber))
      this.setState({
        tilesData: newArray
      }, function(){
        $(window).bind('scroll', this.handleScroll);
      });
    }
  }

  onArticleSelect = (articleId) => {
    this.actions.changeView('/article/' + articleId);
  }

  render () {
    return (
    	<div className="fluid-container">
				<div style={this.styles.root}>
          <GridList
            cols={2}
            cellHeight={600}
            padding={48}
            style={this.styles.gridList}>
            {this.state.tilesData.map((tile) => (
              <ArticleTile key= {tile.index} tile={tile} articleSelect={this.onArticleSelect}/>
            ))}
          </GridList>
        </div>
			</div>
    );
  }
}

function mapStateToProps(state) {
  const { example } = state;
  return {
    example
  };
}

Home.propTypes = {
  dispatch: React.PropTypes.func.isRequired
};

export default connect(mapStateToProps)(Home);
