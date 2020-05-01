/* @flow */

import React, { Component } from "react";
import "./Home.css";

export default class NoPage extends Component<any> {
  render () {
    return (
      <div>
        <div className="Home-header">
          <h1>404 Page Not Found!</h1>
        </div>
        <div className="Home-row">
          <div className="Home-box">
            <h2>Maybe you got lost?</h2>
            <p>
              Edit and save <code>src/apps/main/components/Home.js</code> This page will automatically update.
            </p>
          </div>
        </div>
      </div>
    );
  }
}
