/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { Fragment } from 'react';
import Link from 'next/link';

const HeaderMenu = (props) => {
  const { menu, link } = props;
  return (
    <Fragment>
      <li>
        <Link href={`${link}`}>
          <a>
            {menu}
          </a>
        </Link>
      </li>
      <style jsx>
        {`
          li{
            display:inline;
            margin-left:50px;
            line-height:100px;
          }
        `}
      </style>
    </Fragment>
  );
};

export default HeaderMenu;
