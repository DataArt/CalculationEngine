var nodes = new vis.DataSet([
                             /* {id: a, label: b, ...}, */
{id: '40955f8c-50ee-48a8-ae51-df937b2b5b8b', label: 'VALUE\n3.0', color: '#31b0d5', title: 'Name: VALUE<br>Alias: null<br>Value: 3.0<br>Type: CONSTANT_VALUE<br>Id: 40955f8c-50ee-48a8-ae51-df937b2b5b8b<br>Formula Expression: Formula String: VALUE; Formula Values: 3.0; Formula Ptg: 3.0; Ptgs: VALUE Index in Ptgs: 1 <br>Source Object Id: com.dataart.spreadsheetanalytics.engine.PoiProxyWorkbook@31368b99'},
{id: 'a687951f-271f-4011-8353-b7ff36e369ac', label: 'VALUE\n2.0', color: '#31b0d5', title: 'Name: VALUE<br>Alias: null<br>Value: 2.0<br>Type: CONSTANT_VALUE<br>Id: a687951f-271f-4011-8353-b7ff36e369ac<br>Formula Expression: Formula String: VALUE; Formula Values: 2.0; Formula Ptg: 2.0; Ptgs: VALUE Index in Ptgs: 0 <br>Source Object Id: com.dataart.spreadsheetanalytics.engine.PoiProxyWorkbook@31368b99'},
{id: '6857a25b-3306-4cbc-b64a-423cbb5b9ca0', label: 'C6\n5.0', color: '#31b0d5', title: 'Name: C6<br>Alias: null<br>Value: 5.0<br>Type: CELL_WITH_FORMULA<br>Id: 6857a25b-3306-4cbc-b64a-423cbb5b9ca0<br>Formula Expression: Formula String: VALUE + VALUE; Formula Values: 2.0 + 3.0; Formula Ptg: 2.0 3.0 +; Ptgs: VALUE VALUE + Index in Ptgs: 2 <br>Source Object Id: com.dataart.spreadsheetanalytics.engine.PoiProxyWorkbook@31368b99'},
{id: 'a7f2ed21-7f57-473d-82a1-ee06d94585db', label: '+\n5.0', color: '#f0ad4e', title: 'Name: +<br>Alias: null<br>Value: 5.0<br>Type: OPERATOR<br>Id: a7f2ed21-7f57-473d-82a1-ee06d94585db<br>Formula Expression: Formula String: VALUE + VALUE; Formula Values: 2.0 + 3.0; Formula Ptg: ; Ptgs:  Index in Ptgs: 2 <br>Source Object Id: com.dataart.spreadsheetanalytics.engine.PoiProxyWorkbook@31368b99'}
                            ]);


var edges = new vis.DataSet([
                             /* {from: id_a, to: id_b}, */
{from: 'a7f2ed21-7f57-473d-82a1-ee06d94585db', to: '6857a25b-3306-4cbc-b64a-423cbb5b9ca0'},
{from: 'a687951f-271f-4011-8353-b7ff36e369ac', to: 'a7f2ed21-7f57-473d-82a1-ee06d94585db'},
{from: '40955f8c-50ee-48a8-ae51-df937b2b5b8b', to: 'a7f2ed21-7f57-473d-82a1-ee06d94585db'}
                            ]);