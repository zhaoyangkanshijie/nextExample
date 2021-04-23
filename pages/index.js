import React from 'react'
import Link from 'next/link'

class Index extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      count: 1
    };
    console.log("1. constructor",this.state.count);
  }
  static getDerivedStateFromProps(props, state) {
    console.log("2. getDerivedStateFromProps");
    return {
      count: props.count || 2
    };
  }
  componentDidMount() {
    console.log("3. componentDidMount");
  }
  shouldComponentUpdate() {
    console.log("4. shouldComponentUpdate");
    return true;
  }
  getSnapshotBeforeUpdate(prevProps, prevState) {
    console.log("5. getSnapshotBeforeUpdate");
    return null;
  }
  componentDidUpdate(props, state, snapshot) {
    console.log("6. componentDidUpdate");
    console.log("snapshot:", snapshot);
  }
  componentWillUnmount() {
    console.log("7. componentWillUnmount");
  }
  render() {
    console.log("0. render",this.state);
    return (
      <>
        <ul>
          <li>state: {this.state.count}</li>
          <li>props: {this.state.count}</li>
        </ul>
        <Link href="/page">
          <a>Page</a>
        </Link>
        <Link href="/post">
          <a>Post</a>
        </Link>
        <Link href="/post/1">
          <a>Post1</a>
        </Link>
        <Link href="/store">
          <a>Store</a>
        </Link>
      </>
    );
  }
}

export default Index