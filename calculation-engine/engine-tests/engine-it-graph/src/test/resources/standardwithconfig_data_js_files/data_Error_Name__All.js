var nodes = new vis.DataSet([
                             /* {id: a, label: b, ...}, */
{id: '392fe7fc-0f63-4f9f-b1dd-0d2288c9b10d', label: 'B2\n#NAME?', color: '#31b0d5', title: 'Name: B2<br>Alias: null<br>Value: #NAME?<br>Type: CELL_WITH_FORMULA<br>Id: 392fe7fc-0f63-4f9f-b1dd-0d2288c9b10d<br>Formula Expression: Formula String: VALUE; Formula Values: #NAME?; Formula Ptg: #NAME?; Ptgs: VALUE Index in Ptgs: 0 <br>Source Object Id: com.dataart.spreadsheetanalytics.engine.PoiProxyWorkbook@50b472aa'},
{id: '82ebd3e9-27ca-41d0-a15e-c53a212b3301', label: 'VALUE\n#NAME?', color: '#31b0d5', title: 'Name: VALUE<br>Alias: null<br>Value: #NAME?<br>Type: CONSTANT_VALUE<br>Id: 82ebd3e9-27ca-41d0-a15e-c53a212b3301<br>Formula Expression: Formula String: VALUE; Formula Values: #NAME?; Formula Ptg: #NAME?; Ptgs: VALUE Index in Ptgs: 0 <br>Source Object Id: com.dataart.spreadsheetanalytics.engine.PoiProxyWorkbook@50b472aa'}
                            ]);


var edges = new vis.DataSet([
                             /* {from: id_a, to: id_b}, */
{from: '82ebd3e9-27ca-41d0-a15e-c53a212b3301', to: '392fe7fc-0f63-4f9f-b1dd-0d2288c9b10d'}
                            ]);