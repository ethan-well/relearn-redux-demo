import React from 'react';
import ReactDOM from 'react-dom';

ReactDOM.render(
  <div>init project</div>,
  document.getElementById('root')
)

if (module.hot) {
  module.hot.accept('./print.js', function(){
      console.log("Accepting the updated printMe module!");
      printMe();
  })
}