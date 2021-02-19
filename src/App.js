import React from 'react';
import { MyHeader } from './utility-components/Header/MyHeader';
import { Search } from './main-components/Search/Search';
import { Profiles } from './main-components/Profiles/Profiles'
import './App.scss';


const GITHUB_BASE_URL = 'https://api.github.com/search/repositories';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      searchText: 'real',
      data: '',
      isActive: false
    }
  }
  handleToggle = () => {
    this.setState({ isActive: !this.state.isActive });
  };

  fetchSearch = reponame => {
    let url = `${GITHUB_BASE_URL}?q=${reponame}&order=desc`;
    fetch(url)
      .then((res) => res.json())
      .then((data) => {
        this.setState({
          data: data
        });
      })
      .catch((error) => console.log('Oops! . There Is A Problem' + error))
  }

  componentDidMount() {
    this.fetchSearch(this.state.searchText);
  }



  render() {
    const isActive = this.state.isActive;
    return (
      <section className="main-search" theme={isActive ? "dark" : ""}>
        <div className="container">
          <div className="theme-section">
            Theme:
            <span onClick={this.handleToggle} className={isActive ? "theme-btn fa fa-toggle-off" : "theme-btn fa fa-toggle-on"}></span>
          </div>
          <MyHeader />
          <Search
            fetchSearch={this.fetchSearch}
          />
          <Profiles
            data={this.state.data}
          />
        </div>
      </section>
    );
  }
}

export default App;
