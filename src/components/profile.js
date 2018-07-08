import React, { Component } from "react";

class Profile extends Component {
  constructor(props) {
    super(props);

    this.state = {
      avatars: [
        "a-01",
        "a-02",
        "a-03",
        "a-04",
        "a-05",
        "a-06",
        "a-07",
        "a-08",
        "a-08",
        "a-10",
        "a-11",
        "a-12",
        "a-13",
        "a-14",
        "a-15",
        "a-16",
      ],
      selectedAvatar: "a-01",
    };
  }

  selectAvatar = e => {
    const selectedAvatar = e.target.value;

    this.setState({
      selectedAvatar,
    });
  };

  render() {
    return (
      <div className="container">
        <h3 className="container-title">Profile</h3>
        <div className="content">
          <select
            value={this.state.selectedAvatar}
            onChange={this.selectAvatar}
          >
            {this.state.avatars.map((avatar, index) => {
              return (
                <option key={index} value={avatar}>
                  {avatar}
                </option>
              );
            })}
          </select>
          <div className={`avatar ${this.state.selectedAvatar}`} />
        </div>
      </div>
    );
  }
}

export default Profile;
