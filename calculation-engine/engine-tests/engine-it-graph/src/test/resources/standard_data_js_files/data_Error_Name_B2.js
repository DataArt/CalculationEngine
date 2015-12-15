var nodes = new vis.DataSet([
                             /* {id: a, label: b, ...}, */
{id: '456c8749-c9c0-4a39-b258-a56f6b709ebc', label: 'VALUE\n#NAME?', color: '#31b0d5', title: 'Name: VALUE<br>Alias: null<br>Value: #NAME?<br>Type: CONSTANT_VALUE<br>Id: 456c8749-c9c0-4a39-b258-a56f6b709ebc<br>Formula Expression: Formula String: VALUE; Formula Values: #NAME?; Formula Ptg: #NAME?; Ptgs: VALUE Index in Ptgs: 0 <br>Source Object Id: com.dataart.spreadsheetanalytics.engine.PoiProxyWorkbook@4a22f9e2'},
{id: '860f4247-a650-45f6-8747-516c4d0645b1', label: 'B2\n#NAME?', color: '#31b0d5', title: 'Name: B2<br>Alias: null<br>Value: #NAME?<br>Type: CELL_WITH_FORMULA<br>Id: 860f4247-a650-45f6-8747-516c4d0645b1<br>Formula Expression: Formula String: VALUE; Formula Values: #NAME?; Formula Ptg: #NAME?; Ptgs: VALUE Index in Ptgs: 0 <br>Source Object Id: com.dataart.spreadsheetanalytics.engine.PoiProxyWorkbook@4a22f9e2'}
                            ]);


var edges = new vis.DataSet([
                             /* {from: id_a, to: id_b}, */
{from: '456c8749-c9c0-4a39-b258-a56f6b709ebc', to: '860f4247-a650-45f6-8747-516c4d0645b1'}
                            ]);