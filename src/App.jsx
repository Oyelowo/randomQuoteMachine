import React, {Component} from 'react';
import MainQuoteBox from './container/QuoteBox/MainQuoteBox';


class App extends Component {

  render() {
    
    return (
      <div
        id="quote-box">
        <MainQuoteBox/>
      </div>
    );
  }
}

export default App;
