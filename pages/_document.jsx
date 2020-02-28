import React from 'react';
import Document, { Head, Main, NextScript } from 'next/document';

export default class RootDocument extends Document {
  render() {
    return (
      <html lang="ko">
        <Head>
          <meta charSet="utf-8" />
          <meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1, user-scalable=no" />
          <meta name="description" content="Dev.Sol" />
          <meta name="keywords" content="blog,react,antd,webpack,css,javascript" />
          <link rel="stylesheet" href="https://fonts.googleapis.com/earlyaccess/notosanskr.css" />
          <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/github-markdown-css/3.0.1/github-markdown.min.css" />
          <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/highlight.js/9.15.6/styles/railscasts.min.css" />
          <link rel="shoutcut icon" href="../static/img/favicon.ico" />
          <style jsx global>
            {`
              *{
                padding: 0;
                margin: 0;
              }
              @charset "utf-8";

              body,div,ul,li,dl,dt,ol,h1,h2,h3,h4,h5,h6,input,fieldset,legend,p,select,table,tr,th,td,textarea,button,font{margin: 0; padding:0}

              /*a 링크 초기화*/
              a{
                  color:#222; text-decoration: none
              }
              a:hover{
                  color:#390;
              }

              body, input, textarea, select, button, table{
                  font-family: 'Nanum Gothic', sans-serif;
                  color:#222; font-size: 13px;line-height: 1.5;
              }
              /*폰트 스타일 초기화*/
              em, address { font-style: normal}

              /*블릿기호 초기화*/
              dl, ul, li, ol, menu {
                  list-style:none;
              }

              /*제목태그 초기화*/
              h1,h2,h3,h4,h5,h6{font-size: 13px;color:#222;font-weight: normal}


              /*테두리 초기화*/
              img,fieldset {
                  border:0;
              }
              /*button 초기화*/
              button{
                  border:0;
              }
              /*IR 효과*/
              /*대체 텍스트를 위한 CSS 기법*/
              /*의미있는 이미지의 대체 텍스트를 제공하는 경우*/
              .ir_pm {display: block; overflow: hidden; font-size: 0;line-height: 0;text-indent: -9999px;}
              /*의미있는 이미지의 대체 텍스트로 이미지가 없어도 대체 텍스트를 보여주고자 할 때*/
              .ir_wa {display: block; overflow: hidden; position: relative; z-index: -1;width: 100%;height: 100%;}
              /*대체 텍스트가 아닌 접근성을 위한 숨김 텍스트를 제공할 때*/
              .ir_su{overflow: hidden; position: absolute; width: 0;height: 0;line-height: 0;text-indent: -9999px}

              /* margin, padding */
              .mt10 {margin-top:10px !important}
              .mt15 {margin-top:15px !important}
              .mt20 {margin-top:20px !important}
              .mt25 {margin-top:25px !important}
              .mt30 {margin-top:30px !important}
              .mt35 {margin-top:35px !important}
              .mt40 {margin-top:40px !important}
              .mt45 {margin-top:45px !important}
              .mt50 {margin-top:50px !important}
            `}
          </style>
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </html>
    );
  }
}
