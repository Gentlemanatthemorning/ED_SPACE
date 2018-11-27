import React from "react";

class ShowMore extends React.Component {
  state = {
    more: false
  };

  handleClick = () => {
    this.setState({
      more: true
    });
  };

  render() {
    return (
      <div>
        {this.state.more ? (
          this.props.children
        ) : (
          // eslint-disable-next-line
          <button onClick={this.handleClick}>?</button>
        )}
      </div>
    );
  }
}

const Episode1 = () => (
  <ShowMore>
    <h2>The best language school for your child</h2>
  </ShowMore>
);

export default Episode1;
