var nodes = new vis.DataSet([
                             /* {id: a, label: b, ...}, */
{id: '04056986-1202-a081-7beb-b2fb48e8e2e9', label: 'C1\n5.0', color: '#31b0d5', title: 'Name: C1<br>Alias: null<br>Value: 5.0<br>Type: CELL_WITH_VALUE<br>Id: 04056986-1202-a081-7beb-b2fb48e8e2e9<br>Formula Expression: Formula String: C1; Formula Values: 5.0; Formula Ptg: 5.0; Ptgs: C1 Index in Ptgs: 1 <br>Source Object Id: com.dataart.spreadsheetanalytics.engine.PoiProxyWorkbook@41e36e46'},
{id: 'e3ee0083-147e-62a3-c177-b2a2af356554', label: 'A4\n#REF!', color: '#31b0d5', title: 'Name: A4<br>Alias: null<br>Value: #REF!<br>Type: CELL_WITH_FORMULA<br>Id: e3ee0083-147e-62a3-c177-b2a2af356554<br>Formula Expression: Formula String: A1 + C1 + Sheet2!B1; Formula Values: 20.0 + 5.0 + #REF!; Formula Ptg: ; Ptgs:  Index in Ptgs: 4 <br>Source Object Id: com.dataart.spreadsheetanalytics.engine.PoiProxyWorkbook@41e36e46'},
{id: '42bb71a5-66f1-d689-d30d-c8782980e182', label: '+\n25.0', color: '#f0ad4e', title: 'Name: +<br>Alias: null<br>Value: 25.0<br>Type: OPERATOR<br>Id: 42bb71a5-66f1-d689-d30d-c8782980e182<br>Formula Expression: Formula String: A1 + C1; Formula Values: 20.0 + 5.0; Formula Ptg: ; Ptgs:  Index in Ptgs: 2 <br>Source Object Id: com.dataart.spreadsheetanalytics.engine.PoiProxyWorkbook@41e36e46'},
{id: 'd22383ff-9f75-768a-281b-8285e3c9541b', label: 'Sheet2!$B$1\n#REF!', color: '#31b0d5', title: 'Name: Sheet2!$B$1<br>Alias: null<br>Value: #REF!<br>Type: CELL_WITH_VALUE<br>Id: d22383ff-9f75-768a-281b-8285e3c9541b<br>Formula Expression: Formula String: Sheet2!B1; Formula Values: #REF!; Formula Ptg: #REF!; Ptgs: Sheet2!$B$1 Index in Ptgs: 3 <br>Source Object Id: com.dataart.spreadsheetanalytics.engine.PoiProxyWorkbook@41e36e46'},
{id: '3e8b965c-ae64-fad6-19ca-86fcf0326864', label: 'A1\n20.0', color: '#31b0d5', title: 'Name: A1<br>Alias: null<br>Value: 20.0<br>Type: CELL_WITH_VALUE<br>Id: 3e8b965c-ae64-fad6-19ca-86fcf0326864<br>Formula Expression: Formula String: A1; Formula Values: 20.0; Formula Ptg: 20.0; Ptgs: A1 Index in Ptgs: 0 <br>Source Object Id: com.dataart.spreadsheetanalytics.engine.PoiProxyWorkbook@41e36e46'},
{id: '56b0a543-4e1c-9953-be49-f6da6e06ed7f', label: '+\n#REF!', color: '#f0ad4e', title: 'Name: +<br>Alias: null<br>Value: #REF!<br>Type: OPERATOR<br>Id: 56b0a543-4e1c-9953-be49-f6da6e06ed7f<br>Formula Expression: Formula String: A1 + C1 + Sheet2!B1; Formula Values: 20.0 + 5.0 + #REF!; Formula Ptg: ; Ptgs:  Index in Ptgs: 4 <br>Source Object Id: com.dataart.spreadsheetanalytics.engine.PoiProxyWorkbook@41e36e46'}
                            ]);


var edges = new vis.DataSet([
                             /* {from: id_a, to: id_b}, */
{from: '3e8b965c-ae64-fad6-19ca-86fcf0326864', to: '42bb71a5-66f1-d689-d30d-c8782980e182'},
{from: 'd22383ff-9f75-768a-281b-8285e3c9541b', to: '56b0a543-4e1c-9953-be49-f6da6e06ed7f'},
{from: '42bb71a5-66f1-d689-d30d-c8782980e182', to: '56b0a543-4e1c-9953-be49-f6da6e06ed7f'},
{from: '56b0a543-4e1c-9953-be49-f6da6e06ed7f', to: 'e3ee0083-147e-62a3-c177-b2a2af356554'},
{from: '04056986-1202-a081-7beb-b2fb48e8e2e9', to: '42bb71a5-66f1-d689-d30d-c8782980e182'}
                            ]);