var nodes = new vis.DataSet([
                             /* {id: a, label: b, ...}, */
{id: '5abdf007-3f0a-4d96-ab30-dd9b6af4a87e', label: ',\n[9.0, 7.0]', color: '#f0ad4e', title: 'Name: ,<br>Alias: null<br>Value: [9.0, 7.0]<br>Type: FUNCTION<br>Id: 5abdf007-3f0a-4d96-ab30-dd9b6af4a87e<br>Formula Expression: Formula String: A5 , D5; Formula Values: 7.0 , 9.0; Formula Ptg: ; Ptgs:  Index in Ptgs: 3 <br>Source Object Id: null'},
{id: '247860ba-5836-42af-9c4f-16eca47b7967', label: 'D5\n9.0', color: '#31b0d5', title: 'Name: D5<br>Alias: null<br>Value: 9.0<br>Type: CELL_WITH_VALUE<br>Id: 247860ba-5836-42af-9c4f-16eca47b7967<br>Formula Expression: Formula String: D5; Formula Values: 9.0; Formula Ptg: 9.0; Ptgs: D5 Index in Ptgs: 2 <br>Source Object Id: com.dataart.spreadsheetanalytics.engine.PoiProxyWorkbook@41e36e46'},
{id: 'ccef06ba-5bf8-47b9-b61d-c14948026302', label: 'A5\n7.0', color: '#31b0d5', title: 'Name: A5<br>Alias: null<br>Value: 7.0<br>Type: CELL_WITH_VALUE<br>Id: ccef06ba-5bf8-47b9-b61d-c14948026302<br>Formula Expression: Formula String: A5; Formula Values: 7.0; Formula Ptg: 7.0; Ptgs: A5 Index in Ptgs: 1 <br>Source Object Id: com.dataart.spreadsheetanalytics.engine.PoiProxyWorkbook@41e36e46'},
{id: '0434f774-1fbc-4695-a32b-c8d97946edab', label: 'E5\n[9.0, 7.0]', color: '#31b0d5', title: 'Name: E5<br>Alias: null<br>Value: [9.0, 7.0]<br>Type: CELL_WITH_FORMULA<br>Id: 0434f774-1fbc-4695-a32b-c8d97946edab<br>Formula Expression: Formula String: A5 , D5; Formula Values: 7.0 , 9.0; Formula Ptg: 7.0 9.0 ,; Ptgs: A5 D5 , Index in Ptgs: 3 <br>Source Object Id: com.dataart.spreadsheetanalytics.engine.PoiProxyWorkbook@41e36e46'}
                            ]);


var edges = new vis.DataSet([
                             /* {from: id_a, to: id_b}, */
{from: '5abdf007-3f0a-4d96-ab30-dd9b6af4a87e', to: '0434f774-1fbc-4695-a32b-c8d97946edab'},
{from: '247860ba-5836-42af-9c4f-16eca47b7967', to: '5abdf007-3f0a-4d96-ab30-dd9b6af4a87e'},
{from: 'ccef06ba-5bf8-47b9-b61d-c14948026302', to: '5abdf007-3f0a-4d96-ab30-dd9b6af4a87e'}
                            ]);