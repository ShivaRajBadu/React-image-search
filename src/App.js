import "./App.css";

function App() {
  return (
    <div className="container">
      <header>
        <h1 className="title">React Image Search</h1>
      </header>
      <form className="form" action="">
        <label htmlFor="text"></label>
        <input placeholder="Search Image ..." id="text" type="text" />
        <button className="button" type="submit">
          Search
        </button>
      </form>
      <div className="image-section">
        <h3 className="result">Result:</h3>
        <div className="images">
          <div className="image">
            <img src="https://picsum.photos/200" alt="" />
            <h3 className="title">Alone walker</h3>
          </div>
          <div className="image">
            <img src="https://picsum.photos/200" alt="" />
            <h3 className="title">Alone walker</h3>
          </div>
          <div className="image">
            <img src="https://picsum.photos/200" alt="" />
            <h3 className="title">Alone walker</h3>
          </div>
          <div className="image">
            <img src="https://picsum.photos/200" alt="" />
            <h3 className="title">Alone walker</h3>
          </div>
          <div className="image">
            <img src="https://picsum.photos/200" alt="" />
            <h3 className="title">Alone walker</h3>
          </div>
          <div className="image">
            <img src="https://picsum.photos/200" alt="" />
            <h3 className="title">Alone walker</h3>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
