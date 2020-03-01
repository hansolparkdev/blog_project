import React, { Fragment } from 'react';

const Footer = (props) => (
  <Fragment>
    <div id="Footer">
      <div className="container">
        Footer
      </div>
    </div>
    <style jsx>
      {`
        *{
          padding: 0;
          margin: 0;
        }
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

export default Footer;
