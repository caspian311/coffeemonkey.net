import "../css/dropdown.css";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { Component } from "react";
import onClickOutside from "react-onclickoutside";

import { faAngleUp, faAngleDown } from "@fortawesome/fontawesome-free-solid";

class Dropdown extends Component {
  constructor(props) {
    super(props);
    this.state = {
      listOpen: false,
    };
  }

  handleClickOutside() {
    this.setState({ listOpen: false });
  }

  toggleList() {
    this.setState(prevState => ({
      listOpen: !prevState.listOpen,
    }));
  }

  clickListener(item) {
    this.setState({ listOpen: false });
    item.action();
  }

  render() {
    const { list, title } = this.props;
    const { listOpen } = this.state;
    const wrapperClassName = listOpen ? "dd-wrapper open" : "dd-wrapper";
    const ddIcon = listOpen ? faAngleUp : faAngleDown;

    return (
      <div className={wrapperClassName}>
        <div className="dd-header" onClick={() => this.toggleList()}>
          <div className="dd-header-title">{title}</div>
          <FontAwesomeIcon icon={ddIcon} />
        </div>
        {listOpen && (
          <ul className="dd-list">
            {list.map(item => (
              <li
                className="dd-list-item"
                key={item.title}
                onClick={() => {
                  this.clickListener(item);
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
