/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { Fragment } from 'react';
import Link from 'next/link';
import HeaderMenu from './HeaderMenu';

const Header = (props) => (
  <Fragment>
    <div id="header">
      <div className="container">
        <div className="header_logo">
          <Link href="/">
            <a>
              <img src="../../static/img/logo.png" alt="logo 이미지" />
            </a>
          </Link>
        </div>
        <div className="header_menu">
          <HeaderMenu />
        </div>
      </div>
    </div>
    <style jsx>
      {`
        #header{
          height:100px;
          border-bottom:1px solid black;
        }
        .container {
          height:100px;
          margin: 0 auto;
          width: 1200px;
          overflow:hidden;
        }
        .header_logo{
          float:left;
        }
        .header_logo>a{
          display:inline;
          line-height:150px;
        }
        .header_menu{
          float:right;
        }
      `}
    </style>
  </Fragment>
);

export default Header;
