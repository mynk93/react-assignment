import React from 'react';
import Header from 'containers/header';
import injectTapEventPlugin from 'react-tap-event-plugin';

injectTapEventPlugin();

export default class CoreLayout extends React.Component {

  static propTypes = {
    children : React.PropTypes.element
  }
  
  constructor (props) {
    super(props);
  } 

  render () {
    return (
      <div className='page-container'>
        <Header />
        <div className='view-container'>
          <div >
            {this.props.children}
          </div>
        </div>
      </div>
    );
  }
}


export default CoreLayout;
