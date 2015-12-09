var nodes = new vis.DataSet([
                             /* {id: a, label: b, ...}, */
{id: '38009905-426b-4531-9a00-015b3d201052', label: 'VALUE\n2.0', color: '#31b0d5', title: 'Name: VALUE<br>Alias: null<br>Value: 2.0<br>Type: CONSTANT_VALUE<br>Id: 38009905-426b-4531-9a00-015b3d201052<br>Formula Expression: Formula String: VALUE; Formula Values: 2.0; Formula Ptg: 2.0; Ptgs: VALUE Index in Ptgs: 1 <br>Source Object Id: com.dataart.spreadsheetanalytics.engine.PoiProxyWorkbook@5c30a9b0'},
{id: '7ec3f99b-20ba-4737-a782-9ad508106cb7', label: 'D8\n5.0', color: '#31b0d5', title: 'Name: D8<br>Alias: null<br>Value: 5.0<br>Type: CELL_WITH_FORMULA<br>Id: 7ec3f99b-20ba-4737-a782-9ad508106cb7<br>Formula Expression: Formula String: VALUE + VALUE; Formula Values: 3.0 + 2.0; Formula Ptg: 3.0 2.0 +; Ptgs: VALUE VALUE + Index in Ptgs: 2 <br>Source Object Id: com.dataart.spreadsheetanalytics.engine.PoiProxyWorkbook@5c30a9b0'},
{id: '630352b6-8b0e-4dc0-8266-820746a22cbb', label: 'VALUE\n3.0', color: '#31b0d5', title: 'Name: VALUE<br>Alias: null<br>Value: 3.0<br>Type: CONSTANT_VALUE<br>Id: 630352b6-8b0e-4dc0-8266-820746a22cbb<br>Formula Expression: Formula String: VALUE; Formula Values: 3.0; Formula Ptg: 3.0; Ptgs: VALUE Index in Ptgs: 0 <br>Source Object Id: com.dataart.spreadsheetanalytics.engine.PoiProxyWorkbook@5c30a9b0'},
{id: 'c31f8fef-936a-4734-a1a4-6e6cbc459c0e', label: '+\n5.0', color: '#f0ad4e', title: 'Name: +<br>Alias: null<br>Value: 5.0<br>Type: OPERATOR<br>Id: c31f8fef-936a-4734-a1a4-6e6cbc459c0e<br>Formula Expression: Formula String: VALUE + VALUE; Formula Values: 3.0 + 2.0; Formula Ptg: ; Ptgs:  Index in Ptgs: 2 <br>Source Object Id: com.dataart.spreadsheetanalytics.engine.PoiProxyWorkbook@5c30a9b0'}
                            ]);


var edges = new vis.DataSet([
                             /* {from: id_a, to: id_b}, */
{from: 'c31f8fef-936a-4734-a1a4-6e6cbc459c0e', to: '7ec3f99b-20ba-4737-a782-9ad508106cb7'},
{from: '38009905-426b-4531-9a00-015b3d201052', to: 'c31f8fef-936a-4734-a1a4-6e6cbc459c0e'},
{from: '630352b6-8b0e-4dc0-8266-820746a22cbb', to: 'c31f8fef-936a-4734-a1a4-6e6cbc459c0e'}
                            ]);