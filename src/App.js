import React from "react";
import { HashRouter, Route } from "react-router-dom";
import About from "./routes/About";
import Home from "./routes/Home";
import Detail from "./routes/Detail";
import Navigation from "./components/Navigation";


function App(){
  return (
    <HashRouter>
      <Navigation />
      <Route path="/" exact={true} component={Home} />
      <Route path="/about" component={About}/>
      <Route path="/movie/:id" component={Detail}/>
    </HashRouter>
  );
}
//먼저 라우터를 만들고, 그 다음 라우터 안에는
//스크린을 넣는다. 그래서 원하는 만큼 Path를 만들 수 있다.
//path 이름은 /about이랑 이름이 같을 필요가 없다,
//약간 스프링의 컨트롤러와 비슷한 재질임... 라우터 개념이?(내 생각)
//리액트는 하나의 키워드를 발견하면 그 키워드가 포함된 모든 컴포넌트를 랜드링 하기
//하기 때문에 첫번째 컴포넌트에 반드시 exact true를 적어야함.
export default App;
