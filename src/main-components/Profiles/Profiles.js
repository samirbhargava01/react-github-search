import './Profiles.scss';
export const Profiles = props => {
  if(props.data){
    let data = props.data;

    if (data.message === 'Not Found')
      return (
         <div className="notfound">
            <h2>Oops !!!</h2>
            <p>The Component Couldn't Find The You Were Looking For . Try Again </p>
         </div>
      );
      else{
        let userList = data.items.map((name) => {
          return (
            <div key={name.id} className="result-box" data-testid="users-list">
              <div className="result-box__data">
                <img className="user" src={name.owner.avatar_url} alt={`${name.name}`}/>
                <h4>Reponame : <a href={name.owner.html_url} target="_blank">{name.owner.login}</a></h4>
                <p> Repo Url : <a href={name.html_url} target="_blank">{name.name}</a></p>
              </div>
            </div>
          );
        })
        return (
          <div>{userList}</div>
        );
      }
  }
  else {
    return <div>Fetching data . . .</div>
  }
}