var nodes = new vis.DataSet([
                             /* {id: a, label: b, ...}, */
{id: '14512cfe-2004-480b-b99a-4b6b9b5343e7', label: 'ISERROR\nTRUE', color: '#f0ad4e', title: 'Name: ISERROR<br>Alias: null<br>Value: TRUE<br>Type: FUNCTION<br>Id: 14512cfe-2004-480b-b99a-4b6b9b5343e7<br>Formula Expression: Formula String: ISERROR(VALUE); Formula Values: ISERROR(#NAME?); Formula Ptg: ; Ptgs:  Index in Ptgs: 1 <br>Source Object Id: com.dataart.spreadsheetanalytics.engine.PoiProxyWorkbook@6a28ffa4'},
{id: '41b4e415-e519-4e68-92af-a74d0814cfbd', label: 'D8\nTRUE', color: '#31b0d5', title: 'Name: D8<br>Alias: null<br>Value: TRUE<br>Type: CELL_WITH_FORMULA<br>Id: 41b4e415-e519-4e68-92af-a74d0814cfbd<br>Formula Expression: Formula String: ISERROR(VALUE); Formula Values: ISERROR(#NAME?); Formula Ptg: #NAME? ISERROR ; Ptgs: VALUE ISERROR  Index in Ptgs: 1 <br>Source Object Id: com.dataart.spreadsheetanalytics.engine.PoiProxyWorkbook@6a28ffa4'},
{id: '584b287e-5152-4c54-8450-927fc6ce6a67', label: 'VALUE\n#NAME?', color: '#31b0d5', title: 'Name: VALUE<br>Alias: null<br>Value: #NAME?<br>Type: CONSTANT_VALUE<br>Id: 584b287e-5152-4c54-8450-927fc6ce6a67<br>Formula Expression: Formula String: VALUE; Formula Values: #NAME?; Formula Ptg: #NAME?; Ptgs: VALUE Index in Ptgs: 0 <br>Source Object Id: com.dataart.spreadsheetanalytics.engine.PoiProxyWorkbook@6a28ffa4'},
{id: 'd9e11899-6c38-4a2f-960b-a48c50a226eb', label: 'D3\n#NAME?', color: '#31b0d5', title: 'Name: D3<br>Alias: null<br>Value: #NAME?<br>Type: CELL_WITH_REFERENCE<br>Id: d9e11899-6c38-4a2f-960b-a48c50a226eb<br>Formula Expression: Formula String: VALUE; Formula Values: #NAME?; Formula Ptg: #NAME?; Ptgs: VALUE Index in Ptgs: 0 <br>Source Object Id: com.dataart.spreadsheetanalytics.engine.PoiProxyWorkbook@6a28ffa4'}
                            ]);


var edges = new vis.DataSet([
                             /* {from: id_a, to: id_b}, */
{from: '584b287e-5152-4c54-8450-927fc6ce6a67', to: 'd9e11899-6c38-4a2f-960b-a48c50a226eb'},
{from: '14512cfe-2004-480b-b99a-4b6b9b5343e7', to: '41b4e415-e519-4e68-92af-a74d0814cfbd'},
{from: 'd9e11899-6c38-4a2f-960b-a48c50a226eb', to: '14512cfe-2004-480b-b99a-4b6b9b5343e7'}
                            ]);