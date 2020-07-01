import React, { useState, useEffect  } from 'react';
import { Button } from "antd";
import './home.scss';

function Home() {
  const [count, setCount] = useState(0);

  useEffect(() => {
    console.log(1);
  });

  return (
    <div className="home">
      <p>You clicked {count} times</p>
      <Button type="primary" onClick={() => setCount(count + 1)}>
        Click me
      </Button>
      {/*<Button onClick={() => { history.push('/login') }}>gotoLogin</Button>*/}
    </div>
  );
}
export default Home;
