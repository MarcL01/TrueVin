/* @flow */

import React, { Component } from "react";
import PropTypes from "prop-types";
import Helmet from "react-helmet";
import { BodyAttributes } from "compiled/gluestick";
import "compiled/normalize.css";

/**
 * The index html will be generated from this file. You can customize things as
 * you see fit. 'body' and 'head will be generated by the server and you
 * should not remove those or the application will likely stop working.
 */
export default class Index extends Component<any> {
  static propTypes = {
    head: PropTypes.any.isRequired,
    body: PropTypes.any.isRequired,
  };

  render () {
    const {
      head,
      body
    } = this.props;

    const helmet = Helmet.rewind();
    const bodyAttributes = BodyAttributes.rewind();

    return (
      <html lang="en-US">
        <head>
          {helmet.base.toComponent()}
          {helmet.title.toComponent()}
          {helmet.meta.toComponent()}
          {helmet.link.toComponent()}
          {helmet.script.toComponent()}
          {helmet.style.toComponent()}
          {head /* DO NOT REMOVE */}
        </head>
        <body {...bodyAttributes}>
          {body /* DO NOT REMOVE */}
          <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.4.1/jquery.min.js"></script>
          <script src="https://cdn.jsdelivr.net/npm/popper.js@1.16.0/dist/umd/popper.min.js" integrity="sha384-Q6E9RHvbIyZFJoft+2mJbHaEWldlvI9IOYy5n3zV9zzTtmI3UksdQRVvoxMfooAo" crossOrigin="anonymous"></script>
          <script src="https://stackpath.bootstrapcdn.com/bootstrap/4.4.1/js/bootstrap.min.js" integrity="sha384-wfSDF2E50Y2D1uUdj0O3uMBJnjuUD4Ih7YwaYd1iqfktj0Uod8GCExl3Og8ifwB6" crossOrigin="anonymous"></script>
        </body>
      </html>
    );
  }
}
