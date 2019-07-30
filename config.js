var config = {
	address: "::", // Address to listen on, can be: (needs to be :: for docker container)
	                      // - "localhost", "127.0.0.1", "::1" to listen on loopback interface
	                      // - another specific IPv4/6 to listen on a specific interface
	                      // - "", "0.0.0.0", "::" to listen on any interface
	                      // Default, when address config is left out, is "localhost"
	port: 9090,
	ipWhitelist: [], // Set [] to allow all IP addresses
	                                                       // or add a specific IPv4 of 192.168.1.5 :
	                                                       // ["127.0.0.1", "::ffff:127.0.0.1", "::1", "::ffff:192.168.1.5"],
	                                                       // or IPv4 range of 192.168.3.0 --> 192.168.3.15 use CIDR format :
	                                                       // ["127.0.0.1", "::ffff:127.0.0.1", "::1", "::ffff:192.168.3.0/28"],

	language: "en",
	timeFormat: 24,
	units: "metric",

	modules: [
		{
			module: "alert",
		},
///		{
///			module: "updatenotification",
///			position: "top_bar"
///		},

		{
			module: "clock",
			position: "top_left"
		},
		{
		module: 'MMM-UKNationalRail',
		position: 'top_left',
		header:	'Trains to Colchester',		//Optional - delete this line to turn OFF the header completely
		config: {
			stationCode: 	'CHM', 		// CRS code for station
			calling_at: 'COL',
			destination: 'CLT',
			app_id: 	'a500f5fc', 		// TransportAPI App ID
			app_key: 	'4609b7523fb8aabc572c3cd3c5b88f85', 		// TransportAPI App Key
			maxResults: 4,  		//Optional - Maximum results to display.
			showOrigin: false   	//Optional - Show the origin of the train in the table
			}
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
					},
					{
						symbol: "calendar-alt",
						url: "https://calendar.google.com/calendar?cid=dC5zaGVtLmF3c0BnbWFpbC5jb20"
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
		  module: "MMM-NowPlayingOnSpotify",
		  position: "top_left",

		  config: {
		    showCoverArt: true,
		    clientID: "c9ef778706f1411092dcbb6b87ede265",
		    clientSecret: "7d364d4a91a045afa99dd6a3ce04a244",
		    accessToken: "BQAnMtR7TjLJn0C53clDkMdiTfs6VhSpBAeD37mLX4K-kaFvVDollhlulgfwLSsxCKha30AVmjiiq-TvQJEwb1jAKKizCmRgD3R4i8wzG3MuSKcQ9D8nX7_6mws6v-YSQGY61OuKVWyWYoTeH0UbxqCt3g",
		    refreshToken: "AQAy7NOzDvuXgMeHPZ26zsmRT8x7dXQOXrsB-MOpmLu0rmsi0ZKhzDwCmbxyQdmVwc4Tt9XtDcpF6naaaMMtLwyycImm_ZWOMmL0U0FDQY7nOW_L-YxX7sCa2T-GSZYjeD1fPg"
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
		    module: 'MMM-Remote-Control'
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
					{
					title: "Sky News",
					url: "http://feeds.skynews.com/feeds/rss/uk.xml",
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
