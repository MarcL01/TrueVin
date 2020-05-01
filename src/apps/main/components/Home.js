/* @flow */

import React, { Component } from "react";
import "./Fonts.css";
import "./Home.css";
import "./bootstrap.min.css";
import axios from "compiled/gluestick/node_modules/axios";
import VinInfo from './VinInfo';
import VinLoader from './VinLoader';

type Ref = { current: any };

export default class Home extends Component<any> {
  vinInputRef: Ref;
  loadingInterval: typeof undefined | IntervalID;
  vinRegex: RegExp = /^(?<wmi>[A-HJ-NPR-Z\d]{3})(?<vds>[A-HJ-NPR-Z\d]{5})(?<check>[\dX])(?<vis>(?<year>[A-HJ-NPR-Z\d])(?<plant>[A-HJ-NPR-Z\d])(?<seq>[A-HJ-NPR-Z\d]{6}))$/;
  ignoreVariables = [
    "Suggested VIN",
    "Error Code",
    "Possible Values",
    "Additional Error Text",
    "Error Text",
  ];

  constructor(props: any) {
    super(props);

    this.vinInputRef = React.createRef();

    this.searchNewVin = this.searchNewVin.bind(this);
    this.startLoadingBar = this.startLoadingBar.bind(this);
    this.updateInput = this.updateInput.bind(this);
    this.keypressInput = this.keypressInput.bind(this);
    this.getVINInfo = this.getVINInfo.bind(this);
  }

  startLoadingBar: Function;
  startLoadingBar() {
    if (this.loadingInterval !== undefined) {
      clearInterval(this.loadingInterval);
      this.props.updateProgress(1);
    }else {
      this.props.updateProgress(1);
    }
    this.loadingInterval = setInterval(() => {
      if (this.props.progress >= 100) {
        clearInterval(this.loadingInterval);
        this.loadingInterval = undefined;
        this.props.updateProgress(100);
      } else {
        this.props.updateProgress(this.props.progress + 3);
      }
    }, 1000);
  }

  searchNewVin: Function;
  searchNewVin() {
    let vin: string = this.vinInputRef.current.value;
    if (vin.length !== 17 || !this.vinRegex.test(vin)) {
      if (this.loadingInterval !== undefined) {
        clearInterval(this.loadingInterval);
        this.props.updateProgress(1);
      }
      this.props.changeError("Invalid VIN Length");
      return;
    }
    this.props.reset();
    this.startLoadingBar();
    this.getVINInfo(vin);
  }

  keypressInput: Function;
  keypressInput(e: KeyboardEvent) {
    if (e.charCode === 13) {
      this.searchNewVin();
      return;
    }
  }
  updateInput: Function;
  updateInput() {
    this.vinInputRef.current.value = this.vinInputRef.current.value.toUpperCase();
  }

  getVINInfo: Function;
  getVINInfo(vin: string) {

    $.ajax({
      url: "https://vpic.nhtsa.dot.gov/api/vehicles/GetModelsForMakeId/440?format=json",
      type: "GET",
      dataType: "json",
      success: function(result)
      {
        console.log("test results: ", result);
      },
      error: function(xhr, ajaxOptions, thrownError)
      {
        console.log(xhr.status);
        console.log(thrownError);
      }
    });

    axios({
          method: 'get',
          url: `https://cors-anywhere.herokuapp.com/https://vpic.nhtsa.dot.gov/api/vehicles/DecodeVin/${vin}?format=json`,
          headers: {
            'x-requested-with': 'null',
            'origin': 'null',
          }
        })
      .then((resp) => {
        console.log("our resp is: ", resp);
        if (this.loadingInterval !== undefined) {
          clearInterval(this.loadingInterval);
        }
        if (resp.status !== 200) {
          this.props.changeError("Error Connecting to Server");
          return;
        }
        let results = resp.data.Results;
        let improvedResults = {};
        for (let res of results) {
          if (this.ignoreVariables.includes(res["Variable"])) {
            continue;
          }
          improvedResults[res["Variable"].split(" ").join("")] = res.Value;
        }
        this.props.updateData(improvedResults);
      })
      .catch((e) => {
        console.log("error: ", e);
        console.log("whats this?", this);
        this.props.changeError("Error Connecting to Server");
      });
  }

  render() {
    return (
      <div>
        <div className="bg-light">
          <nav className="navbar navbar-expand-lg navbar-light container">
            <a className="navbar-brand" href="#">
              TrueVin
            </a>
            <button
              className="navbar-toggler"
              type="button"
              data-toggle="collapse"
              data-target="#navbarSupportedContent"
              aria-controls="navbarSupportedContent"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span className="navbar-toggler-icon"></span>
            </button>

            <div
              className="collapse navbar-collapse"
              id="navbarSupportedContent"
            >
              <ul className="navbar-nav ml-auto">
                <li className="nav-item active">
                  <a className="nav-link" href="#">
                    Home <span className="sr-only">(current)</span>
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="https://github.com/BigMarco254/TrueVin" target="_blank">
                    GitHub
                  </a>
                </li>
              </ul>
            </div>
          </nav>
        </div>
        <div className="jumbotron Home-jumbo">
          <div className="py-5 text-center container">
            <h1 className="mb-3 Home-jumbo-text">
              <span>
                <div>All the info in one place.</div>
                <div>The cleanest VIN decoder.</div>
              </span>
            </h1>
            <div className="input-group input-group-lg Home-jumbo-input">
              <input
                type="text"
                className="form-control input-btn-more-round"
                placeholder="Enter Your VIN"
                aria-label="Enter Your VIN"
                aria-describedby="vin-search-button"
                ref={this.vinInputRef}
                onChange={this.updateInput}
                onKeyPress={this.keypressInput}
              />
              <div className="input-group-append">
                <button
                  className="btn btn-lg btn-true btn-input-more-round"
                  type="button"
                  id="vin-search-button"
                  onClick={this.searchNewVin}
                >
                  Look up VIN
                </button>
              </div>
            </div>
            <p className="text-danger">{this.props.errorMessage.length > 0 ? (<small>Error: {this.props.errorMessage}</small>) : " "}</p>
          </div>
        </div>
        {this.props.progress > 0 ? (<VinLoader progress={this.props.progress}/>) : null}

        {this.props.hasInformation ? (
          <VinInfo decodedInformation={this.props.decodedInformation}/>
        ) : null}
      </div>
    );
  }
}
