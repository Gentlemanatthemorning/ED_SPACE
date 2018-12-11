import React from "react";
import Game from "./Game";

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
          <button onClick={this.handleClick} className="button__click">
            ?
          </button>
        )}
      </div>
    );
  }
}

const ShowGame = () => (
  <ShowMore>
    <Game />
  </ShowMore>
);

export default ShowGame;
