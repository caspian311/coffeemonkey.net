import React, { Component } from "react";
import onClickOutside from "react-onclickoutside";

import "../css/dropdown.css";

class Dropdown extends Component {
  constructor(props) {
    super(props);
    this.state = {
      listOpen: false,
      headerTitle: this.props.title,
    };
  }

  handleClickOutside() {
    this.setState({
      listOpen: false,
    });
  }

  toggleList() {
    this.setState(prevState => ({
      listOpen: !prevState.listOpen,
    }));
  }

  render() {
    const { list } = this.props;
    const { listOpen, headerTitle } = this.state;

    return (
      <div className="dd-wrapper">
        <div className="dd-header" onClick={() => this.toggleList()}>
          <div className="dd-header-title">{headerTitle}</div>
          {listOpen ? "^" : "v"}
        </div>
        {listOpen && (
          <ul className="dd-list">
            {list.map(item => (
              <li
                className="dd-list-item"
                key={item.title}
                onClick={() => {
                  item.action();
                }}
              >
                {item.title}
              </li>
            ))}
          </ul>
        )}
      </div>
    );
  }
}

export default onClickOutside(Dropdown);
