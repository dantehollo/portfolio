import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import Hero from './components/Hero';
import "./index.css";

class App extends React.Component {
  render() {   
    return (
      <div>
        <Hero/>
      </div>
    )
  }
}

export default App;