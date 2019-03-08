var config = {
	address: "::", // Address to listen on, can be: (needs to be :: for docker container)
	                      // - "localhost", "127.0.0.1", "::1" to listen on loopback interface
	                      // - another specific IPv4/6 to listen on a specific interface
	                      // - "", "0.0.0.0", "::" to listen on any interface
	                      // Default, when address config is left out, is "localhost"
	port: 80,
	ipWhitelist: [], // Set [] to allow all IP addresses
	                                                       // or add a specific IPv4 of 192.168.1.5 :
	                                                       // ["127.0.0.1", "::ffff:127.0.0.1", "::1", "::ffff:192.168.1.5"],
	                                                       // or IPv4 range of 192.168.3.0 --> 192.168.3.15 use CIDR format :
	                                                       // ["127.0.0.1", "::ffff:127.0.0.1", "::1", "::ffff:192.168.3.0/28"],

	language: "en",
	timeFormat: 24,
	units: "metric",

	modules: [
///		{
///			module: "alert",
///		},
///		{
///			module: "updatenotification",
///			position: "top_bar"
///		},

		{
			module: "clock",
			position: "top_left"
		},
		{
			module: "calendar",
			header: "Upcoming Events",
			position: "top_left",
			config: {
				calendars: [
					{
						symbol: "calendar-check-o",
						url: "webcal://www.calendarlabs.com/templates/ical/UK-Holidays.ics"
					}
				],

			}
		},
		{
		        module: 'compliments',
		        position: 'lower_third',
		        config: {
		                updateInterval: 120000,
		                fadespeed: 5000,
		                morningStartTime: 6,
		                morningEndTime: 12,
		                afternoonStartTime: 12,
		                afternoonEndTime: 19,
				remoteFile: "compliments.json"
		                }
        	},
		{
			module: "currentweather",
			position: "top_right",
			config: {
				location: "Chelmsford",
				locationID: "2653266",  //ID from http://www.openweathermap.org/help/city_list.txt
				appid: "1b1b44674ca860ddbed56f2ad2c91020"
			}
		},
		{
		module: "weatherforecast",
			position: "top_right",
			header: "Weather Forecast",
			config: {
				location: "Chelmsford",
				locationID: "2653266",  //ID from http://www.openweathermap.org/help/city_list.txt
				appid: "1b1b44674ca860ddbed56f2ad2c91020"
			}
		},
		{
			module: "newsfeed",
			position: "bottom_bar",
			config: {
				feeds: [
					{
					title: "BBC",
					url: "http://feeds.bbci.co.uk/news/rss.xml",
					},
				],
				showSourceTitle: true,
				showPublishDate: true,
				showDescription: true,
				updateInterval: 20000
			}
		}


	]

};

/*************** DO NOT EDIT THE LINE BELOW ***************/
if (typeof module !== "undefined") {module.exports = config;}
