var nodes = new vis.DataSet([
                             /* {id: a, label: b, ...}, */
{id: '4ddcf5e3-9a18-4776-bc27-90759abf4093', label: ',\n[9.0, 7.0]', color: '#f0ad4e', title: 'Name: ,<br>Alias: null<br>Value: [9.0, 7.0]<br>Type: FUNCTION<br>Id: 4ddcf5e3-9a18-4776-bc27-90759abf4093<br>Formula Expression: Formula String: A5 , D5; Formula Values: 7.0 , 9.0; Formula Ptg: ; Ptgs:  Index in Ptgs: 3 <br>Source Object Id: null'},
{id: 'dc61710e-7646-49fb-a2cf-c280ed937556', label: 'D5\n9.0', color: '#31b0d5', title: 'Name: D5<br>Alias: null<br>Value: 9.0<br>Type: CELL_WITH_VALUE<br>Id: dc61710e-7646-49fb-a2cf-c280ed937556<br>Formula Expression: Formula String: D5; Formula Values: 9.0; Formula Ptg: 9.0; Ptgs: D5 Index in Ptgs: 2 <br>Source Object Id: com.dataart.spreadsheetanalytics.engine.PoiProxyWorkbook@41e36e46'},
{id: '66880472-2b7b-4e01-803e-5485fb7e9878', label: 'A5\n7.0', color: '#31b0d5', title: 'Name: A5<br>Alias: null<br>Value: 7.0<br>Type: CELL_WITH_VALUE<br>Id: 66880472-2b7b-4e01-803e-5485fb7e9878<br>Formula Expression: Formula String: A5; Formula Values: 7.0; Formula Ptg: 7.0; Ptgs: A5 Index in Ptgs: 1 <br>Source Object Id: com.dataart.spreadsheetanalytics.engine.PoiProxyWorkbook@41e36e46'},
{id: 'e3c95201-2fbe-4a09-8ef1-7f27479827c4', label: 'E5\n[9.0, 7.0]', color: '#31b0d5', title: 'Name: E5<br>Alias: null<br>Value: [9.0, 7.0]<br>Type: CELL_WITH_FORMULA<br>Id: e3c95201-2fbe-4a09-8ef1-7f27479827c4<br>Formula Expression: Formula String: A5 , D5; Formula Values: 7.0 , 9.0; Formula Ptg: 7.0 9.0 ,; Ptgs: A5 D5 , Index in Ptgs: 3 <br>Source Object Id: com.dataart.spreadsheetanalytics.engine.PoiProxyWorkbook@41e36e46'}
                            ]);


var edges = new vis.DataSet([
                             /* {from: id_a, to: id_b}, */
{from: '4ddcf5e3-9a18-4776-bc27-90759abf4093', to: 'e3c95201-2fbe-4a09-8ef1-7f27479827c4'},
{from: 'dc61710e-7646-49fb-a2cf-c280ed937556', to: '4ddcf5e3-9a18-4776-bc27-90759abf4093'},
{from: '66880472-2b7b-4e01-803e-5485fb7e9878', to: '4ddcf5e3-9a18-4776-bc27-90759abf4093'}
                            ]);