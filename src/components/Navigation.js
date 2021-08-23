import React from "react";
import { Link } from "react-router-dom";
import "./Navigation.css";

function Navigation() {
  return (
    <div className="nav">
      <Link to="/">Home</Link>
      <Link to="/about">About</Link>
    </div>
  );
}

export default Navigation;
//href 를 쓰면 새로고침되어 로딩되기 때문에 link를 사용한다.
//router밖에서 Link를 쓸 수 없. 링크는 라우터 안에 있어야함.
//이 링크를 클릭하면 about으로 데려가고 컴포넌트 About
//또 Props도 보내주고 있음.
