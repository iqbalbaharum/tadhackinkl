import { Template } from 'meteor/templating';
import { Session } from 'meteor/session';
import { ReactiveVar } from 'meteor/reactive-var';

import "./map.html";
import "./map.css";

Template.mapPostsList.onCreated(function mapPostsListOnCreated() {
  
});

Template.mapPostsList.helpers({
  
});

Template.mapPostsList.events({
  '.sidebar-toggle': function () {
    console.log('-----');
    var toggle_el = $(this).data("toggle");
    $(toggle_el).toggleClass("open-sidebar");
  }
});



Template.mapPostsList.rendered = function() {  
  var mapOptions = {
    zoom: 4,
    mapTypeId: google.maps.MapTypeId.ROADMAP
  };

  map = new google.maps.Map(document.getElementById("map-canvas"),mapOptions); 

  // var p2 = Session.get('location');

  map.setCenter(new google.maps.LatLng("30.0000", "30.0000"));
  var marker = new google.maps.Marker({
    position: new google.maps.LatLng("30.0000", "30.0000"),
    title:'Meine Position',
    icon:'http://maps.google.com/mapfiles/ms/icons/blue-dot.png'
  });
  marker.setMap(map);   

  // Session.set('map', true);
};