import React, { Component, PropTypes } from 'react';
import { Meteor } from 'meteor/meteor';
import Threat from './Threat.jsx';

var lat, lng;

Tracker.autorun(function(computation) {
	//ReactiveVar is necessary because Geolocation is asyncronous
	var latLng = new ReactiveVar();
    latLng.set(Geolocation.latLng());
    if (latLng.get()) {
        computation.stop();
        // ReactiveVar object is weird so lat and lng are contained in curValue
        lat = latLng.curValue.lat;
        lng = latLng.curValue.lng;
	}
});

function getDistanceFromLatLonInKm(lat1,lon1,lat2,lon2) {
  var R = 3959; // Radius of the earth in miles
  var dLat = deg2rad(lat2-lat1);  // deg2rad below
  var dLon = deg2rad(lon2-lon1); 
  var a = 
    Math.sin(dLat/2) * Math.sin(dLat/2) +
    Math.cos(deg2rad(lat1)) * Math.cos(deg2rad(lat2)) * 
    Math.sin(dLon/2) * Math.sin(dLon/2)
    ; 
  var c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1-a)); 
  var d = R * c; // Distance in miles
  return d;
}

function deg2rad(deg) {
  return deg * (Math.PI/180)
}


// CheckInModal component
export default class CheckInModal extends Component {
  constructor(props) {
    super(props);
  }
  
  checkIn(){
    //use latLng global above to check if user is within 0.5 mile from location
    var distance = getDistanceFromLatLonInKm(lat, lng, this.props.threat.latitude, this.props.threat.longitude);
    //user must be within half a mile of their threat location to successfully check-in
    if (distance <= .5) {
		Meteor.call(
		'threats.setStatus', this.props.threat._id, "success", (err, res) => {
		  if (err)
		  {
			alert(err);
		  }else {
			$('#checkIn' + this.props.threat._id).closeModal();
		  }
		});
	} else {
		Bert.alert('Must be within half a mile from threat location', 'danger', 'growl-top-right');
	}

  }
  
  closeModal(){
	  $("#checkIn" + this.props.threat._id).closeModal();
  }

  render() {
    return (
		<div id={"checkIn" + this.props.threat._id} className="modal">
			<div className="modal-content">
				<h4>Are you sure you want to check in?</h4>
			</div>
			<div className="modal-footer">
				<a href="#!" className=" modal-action modal-close waves-effect waves-green btn-flat" onClick={this.checkIn.bind(this)}>Yes</a>
				<a href="#!" className=" modal-action modal-close waves-effect waves-green btn-flat" onClick={this.closeModal.bind(this)}>No</a>
			</div>
		</div>
    );

  }
}

CheckInModal.propTypes = {
  threat: PropTypes.object.isRequired,
};
