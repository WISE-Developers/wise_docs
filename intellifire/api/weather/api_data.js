define({ "api": [
  {
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "optional": false,
            "field": "varname1",
            "description": "<p>No type.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "varname2",
            "description": "<p>With type.</p>"
          }
        ]
      }
    },
    "type": "",
    "url": "",
    "version": "0.0.0",
    "filename": "./doc/main.js",
    "group": "E__localcode_gitrepos_intellifire_lrgs_doc_main_js",
    "groupTitle": "E__localcode_gitrepos_intellifire_lrgs_doc_main_js",
    "name": ""
  },
  {
    "type": "post",
    "url": "/schedule/schedule/",
    "title": "",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "params",
            "description": "<p>NESDIS ID to schedule or all for all stations.</p>"
          }
        ]
      }
    },
    "name": "schedule",
    "group": "weather",
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "schedule",
            "description": "<p>the schedule set for the station.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "schedules",
            "description": "<p>the schedules set for each of all the stations</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "./models/schedule_m.js",
    "groupTitle": "weather"
  }
] });
