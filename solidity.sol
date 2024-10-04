// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

contract DriverFitness {

    struct DriverData {
        string driverId;
        bool isFitToDrive;
    }
    
    mapping(string => DriverData) public driverRecords;

    // Store the result in the smart contract
    function storeDriverData(string memory _driverId, bool _isFitToDrive) public {
        driverRecords[_driverId] = DriverData(_driverId, _isFitToDrive);
    }
    
    // Retrieve driver fitness data
    function getDriverData(string memory _driverId) public view returns (string memory, bool) {
        DriverData memory data = driverRecords[_driverId];
        return (data.driverId, data.isFitToDrive);
    }
}
