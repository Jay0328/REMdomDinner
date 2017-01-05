import React from 'react';

class NavbarInstance extends React.Component {
  render() {
    let log = this.props.auth.isLogin ?
      (
        <div>
          <div>吃晚餐囉 {this.props.auth.username}</div>
          <a href="#/" onClick={this.props.logout.bind(this)}>登出</a>
        </div>
      ) :
      (
        <div>
          <a href="#/auth/login">登入</a>
        </div>
      );
    return (
      <div>
        <a href="#/">REMdomDinner</a>
        {log}
      </div>
    );
  }
}

export default NavbarInstance;