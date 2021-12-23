import "./App.css";
import { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

function App() {
  const accessKey = "QQbGFfWPjW9cerI5hlDvAErNitxTl7q1syqim_K7WdY";
  const navigate = useNavigate();
  const [query, setQuery] = useState("");
  const [data, setData] = useState([]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    axios
      .get(
        `https://api.unsplash.com/search/photos?page=1&per_page=50&query=${query}&client_id=${accessKey}`
      )
      .then((resp) => {
        setData(resp.data.results);
      });
  };
  const handleClick = (url) => {
    navigate(`${url}`);
  };
  return (
    <div className="container">
      <header>
        <h1 className="title">React Image Search</h1>
      </header>
      <form onSubmit={handleSubmit} className="form" action="">
        <label htmlFor="text"></label>
        <input
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          placeholder="Search Image ..."
          id="text"
          type="text"
        />
        <button className="button" type="submit">
          Search
        </button>
      </form>
      <div className="image-section">
        <h3 className="result">Result:</h3>
        <div className="images">
          {data.map((photo) => (
            <div key={photo.id} className="image">
              <img
                onClick={() => {
                  handleClick(photo.urls.full);
                }}
                src={photo.urls.thumb}
                alt=""
              />
              <h3 className="title">
                user:{" "}
                <a href={photo.user.portfolio_url}>{photo.user.first_name}</a>
              </h3>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default App;
