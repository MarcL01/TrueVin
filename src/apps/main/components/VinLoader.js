/* @flow */

import React from "react";

export default function VinLoader ({progress}: any) {
  return (
    <div className="container text-center">
          <h2>We are looking up your VIN</h2>
          <small>(This may take a minute)</small>
          <div className="progress" style={{ height: 25, borderRadius: 18 }}>
            <div
              className="progress-bar progress-bar-striped progress-bar-animated bg-true"
              role="progressbar"
              aria-valuenow="75"
              aria-valuemin="0"
              aria-valuemax="100"
              style={{ width: `${progress}%` }}
            ></div>
          </div>
        </div>
  );
}
