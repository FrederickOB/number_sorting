import React from "react";

class App extends React.Component {
  state = { number: "", arr: [], newArr: [] };

  onChangeValue = (event) => {
    event.preventDefault();
    this.setState({ number: event.target.value });
  };

  addToArray = (event) => {
    event.preventDefault();
    this.setState({
      arr: this.state.arr.concat(this.state.number),
      number: "",
    });
  };

  clickAscending = () => {
    this.setState({
      newArr: this.state.arr.sort(this.ascending),
    });

    this.state.arr.map((element) => {
      return <p>{element},</p>;
    });
  };

  clickDescending = () => {
    this.setState({
      newArr: this.state.arr.sort(this.decending),
    });
  };

  render() {
    const { newArr } = this.state;

    const arrRender = newArr.map((array) => {
      return <p>{array}</p>;
    });

    return (
      <div className="App">
        <div>
          <form onSubmit={this.addToArray}>
            <label>
              Enter:
              <input
                type="number"
                value={this.state.number}
                onChange={this.onChangeValue}
              />
            </label>
          </form>
          <button onClick={this.clickAscending}>Ascending</button>
          <button onClick={this.clickDescending}>Descending</button>
          <div>{arrRender}</div>
        </div>
      </div>
    );
  }

  decending(previousNum, currentNum) {
    if (previousNum > currentNum) {
      return -1;
    } else if (previousNum < currentNum) {
      return 1;
    } else {
      return 0;
    }
  }

  ascending(previousNum, currentNum) {
    if (previousNum > currentNum) {
      return 1;
    } else if (previousNum < currentNum) {
      return -1;
    } else {
      return 0;
    }
  }
}

export default App;
