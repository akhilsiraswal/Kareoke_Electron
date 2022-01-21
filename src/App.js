import logo from "./logo.svg";
import "./App.css";
import API from "./API";
import { useState } from "react";
var axios = require("axios").default;

function App() {
  const [values, setValues] = useState({
    data: "",
    isEmpty: true,
  });
  const getData = async () => {
    var options = {
      method: "GET",
      url: "https://kareoke.p.rapidapi.com/v1/song/search",
      params: { q: "Spotlight", limit: "5" },
      headers: {
        "x-rapidapi-host": "kareoke.p.rapidapi.com",
        "x-rapidapi-key": "4fd3e8d85dmsh631550ea07ac574p1f2ecejsn82c825e6128f",
      },
    };

    await axios
      .request(options)
      .then(function (response) {
        setValues({ ...values, data: response.data, isEmpty: false });
        console.log(values);
        // return response;
      })
      .catch(function (error) {
        console.error(error);
      });
  };

  const inputForm = () => {
    const onSubmit = () => {
      getData();
    };
    return (
      <div>
        <h1>hii</h1>
        <input type="text" />
        <button onClick={onSubmit}>Submit</button>
        {/* <div>{values.data}</div> */}
        {!values.isEmpty
          ? values.data.forEach((val) => {
            console.log(val.youtube);
              return (
                <div>
                  <h3>heya</h3>
                </div>
              );
            })
          : ""}
      </div>
    );
  };

  return <div className="App">{inputForm()}</div>;
}

export default App;
