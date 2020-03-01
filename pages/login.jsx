import React, { Fragment, useState } from 'react';

const Login = () => {
  const [id, setId] = useState('');
  const [pw, setPw] = useState('');
  const onSubmitForm = (e) => {
    e.preventDefault();
    console.log(id);
    console.log(pw);
  };

  return (
    <Fragment>
      <div id="login">
        <div className="container">
          <h1>로그인</h1>
          <form onSubmit={onSubmitForm}>
            <input type="text" onChange={(e) => setId(e.target.value)} value={id} />
            <input type="password" onChange={(e) => setPw(e.target.value)} value={pw} />
            <button type="submit">로그인</button>
          </form>
        </div>
      </div>
      <style jsx>
        {`
        .container {
          height:100px;
          margin: 0 auto;
          width: 1200px;
          overflow:hidden;
        }  
        `}
      </style>
    </Fragment>
  );
};

export default Login;
