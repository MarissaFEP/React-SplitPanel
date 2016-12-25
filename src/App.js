import React, { Component } from 'react';
import SplitPanel from './SplitPanel';
import TopPanel from './TopPanel';
import ArticlePanel from './ArticlePanel';
import QuestionPanel from './QuestionPanel';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <SplitPanel top={<TopPanel />} left={<ArticlePanel />} right={<QuestionPanel />} />
      </div>
    );
  }
}

export default App;
