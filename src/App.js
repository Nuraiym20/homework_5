import React from "react";
// первый пример
// class Counter extends React.Component {
//   constructor(props) {
//     super(props);
//     this.state = { count: 0 };
//     console.log('constructor');
//   }
//   componentDidMount() {
//     console.log('componentDidMount');
//   }
//   componentDidUpdate() {
//     console.log('componentDidUpdate');
//   }
//   componentWillUnmount() {
//     console.log('componentWillUnmount');
//   }
//   handleIncrement = () => {
//     this.setState({ count: this.state.count + 1 });
//   }
//   render() {
//     console.log('render');
//     return (
//       <div>
//         <h1>Count: {this.state.count}</h1>
//         <button onClick={this.handleIncrement}>Increment</button>
//       </div>
//     );
//   }
// }
// export default Counter


// второй пример
class Clock extends React.Component {
    constructor(props) {
    super(props);
    this.state = { date: new Date() };
    }

    componentDidMount() {
    this.timerId = setInterval(() => this.setState({ date: new Date() }), 1000);
    }

    componentWillUnmount() {
    clearInterval(this.timerId);
    }

    render() {
    const { date } = this.state;
    return (
        <div>{date.toLocaleTimeString()}</div>
    );
    }
}

export default Clock;


