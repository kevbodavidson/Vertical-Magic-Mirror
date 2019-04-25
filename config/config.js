/* Magic Mirror Config Sample
 *
 * By Michael Teeuw http://michaelteeuw.nl
 * MIT Licensed.
 *
 * For more information how you can configurate this file
 * See https://github.com/MichMich/MagicMirror#configuration
 *
 */

var config = {
	address: "localhost", // Address to listen on, can be:
	                      // - "localhost", "127.0.0.1", "::1" to listen on loopback interface
	                      // - another specific IPv4/6 to listen on a specific interface
	                      // - "", "0.0.0.0", "::" to listen on any interface
	                      // Default, when address config is left out, is "localhost"
	port: 8080,
	ipWhitelist: ["127.0.0.1", "::ffff:127.0.0.1", "::1"], // Set [] to allow all IP addresses
	                                                       // or add a specific IPv4 of 192.168.1.5 :
	                                                       // ["127.0.0.1", "::ffff:127.0.0.1", "::1", "::ffff:192.168.1.5"],
	                                                       // or IPv4 range of 192.168.3.0 --> 192.168.3.15 use CIDR format :
	                                                       // ["127.0.0.1", "::ffff:127.0.0.1", "::1", "::ffff:192.168.3.0/28"],

	language: "en",
	timeFormat: 12,
	units: "imperial",

	modules: [
		{
			module: "alert",
		},
		{
			module: "updatenotification",
			position: "top_bar"
		},
		{
			module: "clock",
			position: "top_left"
		},
		{
			module: "calendar",
			header: "US Holidays",
			position: "top_left",
			config: {
				calendars: [
					{
						symbol: "calendar-check",
						url: "webcal://www.calendarlabs.com/templates/ical/US-Holidays.ics"
					}
				]
			}
		},

{
  module: "MMM-NowPlayingOnSpotify",
  position: "top_center",

  config: {
    clientID: "b4ba5f5555555555555555555555",
    clientSecret: "7b44555555555555555555555",
    accessToken: "BQBK0h2gLNiIdsq555555555555555555555",
    refreshToken: "AQC_KwnG9f__Z555555555555555555"
  }
},

{
	module: "MMM-SystemStats",
	position: "bottom_left", // This can be any of the regions.
	classes: "small", // Add your own styling. Optional.
	config: {
		updateInterval: 10*1000, // every 10 seconds
		animationSpeed: 0,
		align: "right", // align labels
		//header: 'System Stats', // This is optional
	},
},
		{
			module: "compliments",
			position: "lower_third"
		},
		{
			module: "currentweather",
			position: "top_right",
			header: "Current Weather in Charleston",

			config: {
				location: "Charleston",
				locationID: "4574324",  //ID from http://bulk.openweathermap.org/sample/; unzip the gz file and find your city
				appid: "a07c727d5555555555555555555555"
			}
		},
		{
			module: "weatherforecast",
			position: "top_right",
			header: "Weather Forecast",
			config: {
				location: "Charleston",
				locationID: "4574324",  //ID from http://bulk.openweathermap.org/sample/; unzip the gz file and find your city
				appid: "a07c727d5e6555555555555555555555"
			}
		},

{
	module: "MMM-MyScoreboard",
	position: "top_right",
	classes: "default everyone",
	header: "Scoreboard",
	config: {
	 	showLeagueSeparators: true,
	 	colored: true,
		rolloverHours: 5,
	 	viewStyle: "mediumLogos",
	 	sports: [
	 	{
	 		league: "NHL"
	 	},
	 	{
	 		league: "MLB"
	 	}
	 	]
	 }
},
		{
			module: "newsfeed",
			position: "bottom_bar",
			config: {
				feeds: [
					{
						title: "New York Times",
						url: "http://www.nytimes.com/services/xml/rss/nyt/HomePage.xml"
					}
				],
				showSourceTitle: true,
				showPublishDate: true
			}
		},
	]

};

/*************** DO NOT EDIT THE LINE BELOW ***************/
if (typeof module !== "undefined") {module.exports = config;}
