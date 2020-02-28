/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { Fragment } from 'react';
import Link from 'next/link';

const HeaderMenu = () => (
  <Fragment>
    <ul>
      <li>
        <Link href="/">
          <a>
            home
          </a>
        </Link>
      </li>
      <li>
        <Link href="/">
          <a>
            home
          </a>
        </Link>
      </li>
      <li>
        <Link href="/">
          <a>
            home
          </a>
        </Link>
      </li>
      <li>
        <Link href="/">
          <a>
            home
          </a>
        </Link>
      </li>
    </ul>
    <style jsx>
      {`
        ul{
          
        }
        li{
          display:inline;
          margin-left:50px;
          line-height:100px;
        }
      `}
    </style>
  </Fragment>
);

export default HeaderMenu;
