import React from "react";
import Form from "./Component/Form";
import Search from "./Component/Search";
import classes from "./App.module.css";
import Data from "./Data";
import Appbar from "./Component/Appbar";
class App extends React.PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      Data: Data,
      title: "",
      price: 0,
      image: "",
      search: "",
      available: false
    };
    this.length = this.state.Data.length;
  }
  handleData = e => {
    this.setState({
      [e.target.name]: e.target.value
    });
  };
  handleImage = e => {
    this.setState({
      image:
        e.target.files.length !== 0
          ? URL.createObjectURL(e.target.files[0])
          : undefined
    });
  };
  handleSubmit = e => {
    e.preventDefault();
    if (
      this.state.title === "" ||
      this.state.price === "" ||
      this.state.image === ""
    )
      return null;
    let NewData = this.state.Data.concat();
    const id = Math.max(...this.state.Data.map(data => data.id)) + 1;
    NewData.push({
      id: id,
      title: this.state.title,
      price: this.state.price,
      image: this.state.image,
      available: this.state.available
    });
    this.setState({
      Data: NewData
    });
    this.setState({
      title: "",
      price: 0,
      image: "",
      available: false
    });
  };
  render() {
    return (
      <div className={classes.App}>
        <Appbar />
        <Form
          available={this.state.available}
          title={this.state.title}
          price={this.state.price}
          image={this.state.image}
          handleData={this.handleData}
          handleImage={this.handleImage}
          handleSubmit={this.handleSubmit}
        />
        <h1 style={{ textAlign: "center" }}>
          {this.length < this.state.Data.length &&
            this.state.title === "" &&
            this.state.price === 0 &&
            this.state.image === "" &&
            "Data Added Successfully"}
        </h1>
        <Search
          search={this.state.search}
          Data={this.state.Data}
          handleData={this.handleData}
        />
      </div>
    );
  }
}
export default App;
