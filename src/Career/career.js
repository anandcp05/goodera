import './career.css';
import Search from '../search/search'
function Career() {
  return (
    <div>
      <div className="headerContainer">
        <div className="header">
          <span className="logo">Goodera</span>
          <span className="active">Find Job</span>
          <span>Post Job</span>
          <span className="logout">Logout</span>
        </div>
        <div className="mainHeader">
          <h2>Find Your Dream Job</h2>
          <p>Browse through the thousands of full time and part time job for you</p>
        </div>
      </div>
      <div className="mainFilter">
        <Search />
      </div>
    </div>
  );
}

export default Career;
