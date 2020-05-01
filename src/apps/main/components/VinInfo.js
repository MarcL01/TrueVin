/* @flow */

import React from "react";

export default function VinInfo (props: any) {
  return (
    <div>
        <div className="container">
          <div className="card">
            <h5 className="card-header navbar-light">
              Basic Information
              <button
                className="navbar-toggler float-right"
                type="button"
                data-toggle="collapse"
                data-target="#basicCollapse"
                aria-expanded="false"
                aria-controls="basicCollapse"
              >
                <span className="navbar-toggler-icon"></span>
              </button>
            </h5>
            <div className="collapse" id="basicCollapse">
              <div className="card-body">
                <table className="table">
                  <tbody>
                    <tr>
                      <th scope="row">Destination Market</th>
                      <td>
                        {props.decodedInformation["DestinationMarket"] ||
                          "N/A"}
                      </td>
                    </tr>
                    <tr>
                      <th scope="row">Make</th>
                      <td>{props.decodedInformation["Make"] || "N/A"}</td>
                    </tr>
                    <tr>
                      <th scope="row">Manufacturer Name</th>
                      <td>
                        {props.decodedInformation["ManufacturerName"] ||
                          "N/A"}
                      </td>
                    </tr>
                    <tr>
                      <th scope="row">Model</th>
                      <td>{props.decodedInformation["Model"] || "N/A"}</td>
                    </tr>
                    <tr>
                      <th scope="row">Year</th>
                      <td>
                        {props.decodedInformation["ModelYear"] || "N/A"}
                      </td>
                    </tr>
                    <tr>
                      <th scope="row">Series</th>
                      <td>
                        {props.decodedInformation["Series"] || "N/A"}
                      </td>
                    </tr>
                    <tr>
                      <th scope="row">Trim</th>
                      <td>{props.decodedInformation["Trim"] || "N/A"}</td>
                    </tr>
                    <tr>
                      <th scope="row">Vehicle Type</th>
                      <td>
                        {props.decodedInformation["VehicleType"] || "N/A"}
                      </td>
                    </tr>
                    <tr>
                      <th scope="row">Body Class</th>
                      <td>
                        {props.decodedInformation["BodyClass"] || "N/A"}
                      </td>
                    </tr>
                    <tr>
                      <th scope="row">Base Price (USD)</th>
                      <td>
                        {props.decodedInformation["BasePrice($)"] || "N/A"}
                      </td>
                    </tr>
                    <tr>
                      <th scope="row">Curb Weight (Pounds)</th>
                      <td>
                        {props.decodedInformation["CurbWeight(pounds)"] ||
                          "N/A"}
                      </td>
                    </tr>
                    <tr>
                      <th scope="row">Vehicle Weight Rating</th>
                      <td>
                        {props.decodedInformation[
                          "GrossVehicleWeightRating"
                        ] || "N/A"}
                      </td>
                    </tr>
                    <tr>
                      <th scope="row">Vehicle Weight Rating Max</th>
                      <td>
                        {props.decodedInformation[
                          "GrossVehicleWeightRatingupto"
                        ] || "N/A"}
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>
          <div className="card">
            <h5 className="card-header navbar-light">
              Exterior Information
              <button
                className="navbar-toggler float-right"
                type="button"
                data-toggle="collapse"
                data-target="#exteriorCollapse"
                aria-expanded="false"
                aria-controls="exteriorCollapse"
              >
                <span className="navbar-toggler-icon"></span>
              </button>
            </h5>
            <div className="collapse" id="exteriorCollapse">
              <div className="card-body">
                <table className="table">
                  <tbody>
                    <tr>
                      <th scope="row">Number of Doors</th>
                      <td>{props.decodedInformation["Doors"] || "N/A"}</td>
                    </tr>
                    <tr>
                      <th scope="row">Number of Windows</th>
                      <td>
                        {props.decodedInformation["Windows"] || "N/A"}
                      </td>
                    </tr>
                    <tr>
                      <th scope="row">Cab Type</th>
                      <td>
                        {props.decodedInformation["CabType"] || "N/A"}
                      </td>
                    </tr>
                    <tr>
                      <th scope="row">Bed Type</th>
                      <td>
                        {props.decodedInformation["BedType"] || "N/A"}
                      </td>
                    </tr>
                    <tr>
                      <th scope="row">Bed Length (Inches)</th>
                      <td>
                        {props.decodedInformation["BedLength(inches)"] ||
                          "N/A"}
                      </td>
                    </tr>
                    <tr>
                      <th scope="row">Number of Wheels</th>
                      <td>
                        {props.decodedInformation["NumberofWheels"] ||
                          "N/A"}
                      </td>
                    </tr>
                    <tr>
                      <th scope="row">Wheel Base Type</th>
                      <td>
                        {props.decodedInformation["WheelBaseType"] ||
                          "N/A"}
                      </td>
                    </tr>
                    <tr>
                      <th scope="row">Wheel Base (Inches)</th>
                      <td>
                        {props.decodedInformation["WheelBase(inches)"] ||
                          "N/A"}
                      </td>
                    </tr>
                    <tr>
                      <th scope="row">Wheel Base Max (Inches)</th>
                      <td>
                        {props.decodedInformation[
                          "WheelBase(inches)upto"
                        ] || "N/A"}
                      </td>
                    </tr>
                    <tr>
                      <th scope="row">Front Wheel Size (Inches)</th>
                      <td>
                        {props.decodedInformation[
                          "WheelSizeFront(inches)"
                        ] || "N/A"}
                      </td>
                    </tr>
                    <tr>
                      <th scope="row">Rear Wheel Size (Inches)</th>
                      <td>
                        {props.decodedInformation[
                          "WheelSizeRear(inches)"
                        ] || "N/A"}
                      </td>
                    </tr>
                    <tr>
                      <th scope="row">Track Width</th>
                      <td>
                        {props.decodedInformation["TrackWidth"] || "N/A"}
                      </td>
                    </tr>
                    <tr>
                      <th scope="row">Trailer Connection Type</th>
                      <td>
                        {props.decodedInformation[
                          "TrailerTypeConnection"
                        ] || "N/A"}
                      </td>
                    </tr>
                    <tr>
                      <th scope="row">Trailer Body Type</th>
                      <td>
                        {props.decodedInformation["TrailerBodyType"] ||
                          "N/A"}
                      </td>
                    </tr>
                    <tr>
                      <th scope="row">Trailer Length (Feet)</th>
                      <td>
                        {props.decodedInformation["TrailerLength(feet)"] ||
                          "N/A"}
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>
          <div className="card">
            <h5 className="card-header navbar-light">
              Manufacturer Information
              <button
                className="navbar-toggler float-right"
                type="button"
                data-toggle="collapse"
                data-target="#manufacturerCollapse"
                aria-expanded="false"
                aria-controls="manufacturerCollapse"
              >
                <span className="navbar-toggler-icon"></span>
              </button>
            </h5>
            <div className="collapse" id="manufacturerCollapse">
              <div className="card-body">
                <table className="table">
                  <tbody>
                    <tr>
                      <th scope="row">Plant Country</th>
                      <td>
                        {props.decodedInformation["PlantCountry"] || "N/A"}
                      </td>
                    </tr>
                    <tr>
                      <th scope="row">Plant State</th>
                      <td>
                        {props.decodedInformation["PlantState"] || "N/A"}
                      </td>
                    </tr>
                    <tr>
                      <th scope="row">Plant City</th>
                      <td>
                        {props.decodedInformation["PlantCity"] || "N/A"}
                      </td>
                    </tr>
                    <tr>
                      <th scope="row">Plant Company Name</th>
                      <td>
                        {props.decodedInformation["PlantCompanyName"] ||
                          "N/A"}
                      </td>
                    </tr>
                    <tr>
                      <th scope="row">Manufacturer ID</th>
                      <td>
                        {props.decodedInformation["ManufacturerId"] ||
                          "N/A"}
                      </td>
                    </tr>
                    <tr>
                      <th scope="row">Series</th>
                      <td>Larry</td>
                    </tr>
                    <tr>
                      <th scope="row">Trim</th>
                      <td>Larry</td>
                    </tr>
                    <tr>
                      <th scope="row">Vehicle Type</th>
                      <td>Larry</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>
          <div className="card">
            <h5 className="card-header navbar-light">
              Interior Information
              <button
                className="navbar-toggler float-right"
                type="button"
                data-toggle="collapse"
                data-target="#interiorCollapse"
                aria-expanded="false"
                aria-controls="interiorCollapse"
              >
                <span className="navbar-toggler-icon"></span>
              </button>
            </h5>
            <div className="collapse" id="interiorCollapse">
              <div className="card-body">
                <table className="table">
                  <tbody>
                    <tr>
                      <th scope="row">Steering Wheel Location</th>
                      <td>
                        {props.decodedInformation["SteeringLocation"] ||
                          "N/A"}
                      </td>
                    </tr>
                    <tr>
                      <th scope="row">Entertainment System</th>
                      <td>
                        {props.decodedInformation["EntertainmentSystem"] ||
                          "N/A"}
                      </td>
                    </tr>
                    <tr>
                      <th scope="row">Number of Seats</th>
                      <td>
                        {props.decodedInformation["NumberofSeats"] ||
                          "N/A"}
                      </td>
                    </tr>
                    <tr>
                      <th scope="row">Number of Seat Rows</th>
                      <td>
                        {props.decodedInformation["NumberofSeatRows"] ||
                          "N/A"}
                      </td>
                    </tr>
                    <tr>
                      <th scope="row">Seat Belts Type</th>
                      <td>
                        {props.decodedInformation["SeatBeltsType"] ||
                          "N/A"}
                      </td>
                    </tr>
                    <tr>
                      <th scope="row">Curtain Air Bag Locations</th>
                      <td>
                        {props.decodedInformation[
                          "CurtainAirBagLocations"
                        ] || "N/A"}
                      </td>
                    </tr>
                    <tr>
                      <th scope="row">Seat Cushion Air Bag Locations</th>
                      <td>
                        {props.decodedInformation[
                          "SeatCushionAirBagLocations"
                        ] || "N/A"}
                      </td>
                    </tr>
                    <tr>
                      <th scope="row">Front Air Bag Locations</th>
                      <td>
                        {props.decodedInformation[
                          "FrontAirBagLocations"
                        ] || "N/A"}
                      </td>
                    </tr>
                    <tr>
                      <th scope="row">Knee Air Bag Locations</th>
                      <td>
                        {props.decodedInformation["KneeAirBagLocations"] ||
                          "N/A"}
                      </td>
                    </tr>
                    <tr>
                      <th scope="row">Side Air Bag Locations</th>
                      <td>
                        {props.decodedInformation["SideAirBagLocations"] ||
                          "N/A"}
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>
          <div className="card">
            <h5 className="card-header navbar-light">
              Drivetrain Information
              <button
                className="navbar-toggler float-right"
                type="button"
                data-toggle="collapse"
                data-target="#drivetrainCollapse"
                aria-expanded="false"
                aria-controls="drivetrainCollapse"
              >
                <span className="navbar-toggler-icon"></span>
              </button>
            </h5>
            <div className="collapse" id="drivetrainCollapse">
              <div className="card-body">
                <table className="table">
                  <tbody>
                    <tr>
                      <th scope="row">Engine Manufacturer</th>
                      <td>
                        {props.decodedInformation["EngineManufacturer"] ||
                          "N/A"}
                      </td>
                    </tr>
                    <tr>
                      <th scope="row">Fuel Type</th>
                      <td>
                        {props.decodedInformation["FuelType-Primary"] ||
                          "N/A"}
                      </td>
                    </tr>
                    <tr>
                      <th scope="row">Fuel Type - Secondary</th>
                      <td>
                        {props.decodedInformation["FuelType-Secondary"] ||
                          "N/A"}
                      </td>
                    </tr>
                    <tr>
                      <th scope="row">Fuel Delivery Method</th>
                      <td>
                        {props.decodedInformation[
                          "FuelDelivery/FuelInjectionType"
                        ] || "N/A"}
                      </td>
                    </tr>
                    <tr>
                      <th scope="row">Displacement in Liters</th>
                      <td>
                        {props.decodedInformation["Displacement(L)"] ||
                          "N/A"}
                      </td>
                    </tr>
                    <tr>
                      <th scope="row">Displacement in Cubic Centimeters</th>
                      <td>
                        {props.decodedInformation["Displacement(CC)"] ||
                          "N/A"}
                      </td>
                    </tr>
                    <tr>
                      <th scope="row">Displacement in Cubic Inches</th>
                      <td>
                        {props.decodedInformation["Displacement(CI)"] ||
                          "N/A"}
                      </td>
                    </tr>
                    <tr>
                      <th scope="row">Number of Cylinders</th>
                      <td>
                        {props.decodedInformation[
                          "EngineNumberofCylinders"
                        ] || "N/A"}
                      </td>
                    </tr>
                    <tr>
                      <th scope="row">Engine Stroke Cycles</th>
                      <td>
                        {props.decodedInformation["EngineStrokeCycles"] ||
                          "N/A"}
                      </td>
                    </tr>
                    <tr>
                      <th scope="row">Engine Model</th>
                      <td>
                        {props.decodedInformation["EngineModel"] || "N/A"}
                      </td>
                    </tr>
                    <tr>
                      <th scope="row">Engine Brake Horsepower</th>
                      <td>
                        {props.decodedInformation["EngineBrake(hp)"] ||
                          "N/A"}
                      </td>
                    </tr>
                    <tr>
                      <th scope="row">Engine Configuration</th>
                      <td>
                        {props.decodedInformation["EngineConfiguration"] ||
                          "N/A"}
                      </td>
                    </tr>
                    <tr>
                      <th scope="row">Other Engine Information</th>
                      <td>
                        {props.decodedInformation["OtherEngineInfo"] ||
                          "N/A"}
                      </td>
                    </tr>
                    <tr>
                      <th scope="row">Turbo</th>
                      <td>{props.decodedInformation["Turbo"] || "N/A"}</td>
                    </tr>
                    <tr>
                      <th scope="row">Valve Train Design</th>
                      <td>
                        {props.decodedInformation["ValveTrainDesign"] ||
                          "N/A"}
                      </td>
                    </tr>
                    <tr>
                      <th scope="row">Transmission Style</th>
                      <td>
                        {props.decodedInformation["TransmissionStyle"] ||
                          "N/A"}
                      </td>
                    </tr>
                    <tr>
                      <th scope="row">Transmission Gear Count</th>
                      <td>
                        {props.decodedInformation["TransmissionSpeeds"] ||
                          "N/A"}
                      </td>
                    </tr>
                    <tr>
                      <th scope="row">Drive Type</th>
                      <td>
                        {props.decodedInformation["DriveType"] || "N/A"}
                      </td>
                    </tr>
                    <tr>
                      <th scope="row">Axles</th>
                      <td>{props.decodedInformation["Axles"] || "N/A"}</td>
                    </tr>
                    <tr>
                      <th scope="row">Axle Configuration</th>
                      <td>
                        {props.decodedInformation["AxleConfiguration"] ||
                          "N/A"}
                      </td>
                    </tr>
                    <tr>
                      <th scope="row">Brake System Type</th>
                      <td>
                        {props.decodedInformation["BrakeSystemType"] ||
                          "N/A"}
                      </td>
                    </tr>
                    <tr>
                      <th scope="row">Brake System Description</th>
                      <td>
                        {props.decodedInformation[
                          "BrakeSystemDescription"
                        ] || "N/A"}
                      </td>
                    </tr>
                    <tr>
                      <th scope="row">Top Speed (MPH)</th>
                      <td>
                        {props.decodedInformation["TopSpeed(MPH)"] ||
                          "N/A"}
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>
          <div className="card">
            <h5 className="card-header navbar-light">
              Electric Information
              <button
                className="navbar-toggler float-right"
                type="button"
                data-toggle="collapse"
                data-target="#electricCollapse"
                aria-expanded="false"
                aria-controls="electricCollapse"
              >
                <span className="navbar-toggler-icon"></span>
              </button>
            </h5>
            <div className="collapse" id="electricCollapse">
              <div className="card-body">
                <table className="table">
                  <tbody>
                    <tr>
                      <th scope="row">Battery Information</th>
                      <td>
                        {props.decodedInformation["BatteryInfo"] || "N/A"}
                      </td>
                    </tr>
                    <tr>
                      <th scope="row">Battery Type</th>
                      <td>
                        {props.decodedInformation["BatteryType"] || "N/A"}
                      </td>
                    </tr>
                    <tr>
                      <th scope="row">Battery Cells per Module</th>
                      <td>
                        {props.decodedInformation[
                          "NumberofBatteryCellsperModule"
                        ] || "N/A"}
                      </td>
                    </tr>
                    <tr>
                      <th scope="row">Battery Current (Amps)</th>
                      <td>
                        {props.decodedInformation[
                          "BatteryCurrent(Amps)"
                        ] || "N/A"}
                      </td>
                    </tr>
                    <tr>
                      <th scope="row">Max Battery Current (Amps)</th>
                      <td>
                        {props.decodedInformation[
                          "BatteryCurrent(Amps)upto"
                        ] || "N/A"}
                      </td>
                    </tr>
                    <tr>
                      <th scope="row">Battery Voltage (Volts)</th>
                      <td>
                        {props.decodedInformation[
                          "BatteryVoltage(Volts)"
                        ] || "N/A"}
                      </td>
                    </tr>
                    <tr>
                      <th scope="row">Max Battery Voltage (Volts)</th>
                      <td>
                        {props.decodedInformation[
                          "BatteryVoltage(Volts)upto"
                        ] || "N/A"}
                      </td>
                    </tr>
                    <tr>
                      <th scope="row">Battery Energy Output (KWh)</th>
                      <td>
                        {props.decodedInformation["BatteryEnergy(KWh)"] ||
                          "N/A"}
                      </td>
                    </tr>
                    <tr>
                      <th scope="row">Max Battery Energy Output (KWh)</th>
                      <td>
                        {props.decodedInformation[
                          "BatteryEnergy(KWh)upto"
                        ] || "N/A"}
                      </td>
                    </tr>
                    <tr>
                      <th scope="row">EV Drive Unit</th>
                      <td>
                        {props.decodedInformation["EVDriveUnit"] || "N/A"}
                      </td>
                    </tr>
                    <tr>
                      <th scope="row">Battery Modules per Pack</th>
                      <td>
                        {props.decodedInformation[
                          "NumberofBatteryModulesperPack"
                        ] || "N/A"}
                      </td>
                    </tr>
                    <tr>
                      <th scope="row">Number of Battery Packs</th>
                      <td>
                        {props.decodedInformation[
                          "NumberofBatteryPacksperVehicle"
                        ] || "N/A"}
                      </td>
                    </tr>
                    <tr>
                      <th scope="row">Charger Level</th>
                      <td>
                        {props.decodedInformation["ChargerLevel"] || "N/A"}
                      </td>
                    </tr>
                    <tr>
                      <th scope="row">Charger Power (KW)</th>
                      <td>
                        {props.decodedInformation["ChargerPower(KW)"] ||
                          "N/A"}
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
    </div>
  );
}
