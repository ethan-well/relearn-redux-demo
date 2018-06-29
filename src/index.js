import React from 'react';
import ReactDOM from 'react-dom';

export default class HelloWorld extends React.Component{
  constructor(props) {
    super(props);
  }

  render(){
    return( <div>Hello world</div>);
  }
}

ReactDOM.render(<HelloWorld />, document.getElementById('root'));