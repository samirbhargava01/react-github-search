import React from 'react';
import './Search.scss';

export class Search extends React.Component {
  
  state = {
    repoName: '',
    errors: {
      isRepoNameHasError: false
    }
  }

  render() {
    return (
        <div className="search-section">
          <form

            className="search-box"
            onSubmit={this.handleForm}>
            <input
              type="search"
              placeholder="Type RepoName here"
              className="main-search"
              onChange={(e)=> this.setState({repoName: e.target.value, errors: { isRepoNameHasError: false}})}
              value={this.state.repoName}
              data-testid="input-control"
              aria-label="cost-input"
              />
            <span className="input-group-btn">
              <button type="submit" className="btn" data-testid="trigger-search"><i className="fa fa-search" aria-hidden="true"></i></button>
            </span>

            {this.state.errors.isRepoNameHasError && <div data-testid="validation-error" className="validation-error">
              <span>Field should not be empty</span>
            </div>}
          </form>
        </div>

    )
  }

  handleForm = event => {
    this.setState({errors: {
      isRepoNameHasError: false
    }})

    event.preventDefault();
    const repoName = this.state.repoName;

    if (!repoName) {
      this.setState({errors: {
        isRepoNameHasError: true
      }})
      return;
    }
    this.props.fetchSearch(repoName);
  }
}