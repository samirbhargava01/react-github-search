import React from 'react';
import ReactDOM from 'react-dom';
import { MyHeader } from './utility-components/Header/MyHeader';
import { Search } from './main-components/Search/Search';
import { Profiles } from './main-components/Profiles/Profiles'
import './App.scss';

const GITHUB_BASE_URL = 'https://api.github.com/search/repositories';

class App extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      searchText: 'real',
      data: '',
    }
  }
  
  fetchSearch = reponame => {
    let url = `${GITHUB_BASE_URL}?q=${reponame}&order=desc`;
    fetch(url)
    .then((res) => res.json() )
    .then((data) => {
      this.setState({
        data: data
      });
    })
    .catch((error) => console.log('Oops! . There Is A Problem' + error) )
  }

  componentDidMount() {
    this.fetchSearch(this.state.searchText);
  }

  

  render() {
    return (
      <div className="container">
        <MyHeader />
        <Search 
          fetchSearch={this.fetchSearch}
        />
        <Profiles 
          data={this.state.data}
        />
      </div>
    );
  }
}

export default App;
