var nodes = new vis.DataSet([
                             /* {id: a, label: b, ...}, */
{id: '592', label: 'E6\n#REF!', color: '#31b0d5', title: 'Name: E6<br>Alias: null<br>Value: #REF!<br>Type: CELL_WITH_REFERENCE<br>Id: 592<br>Formula Expression: Formula String: VALUE; Formula Values: #REF!; Formula Ptg: ; Ptgs:  Index in Ptgs: 0 <br>Source Object Id: com.dataart.spreadsheetanalytics.engine.PoiProxyWorkbook@a8c1f44'},
{id: '593', label: 'VALUE\n#REF!', color: '#31b0d5', title: 'Name: VALUE<br>Alias: null<br>Value: #REF!<br>Type: CONSTANT_VALUE<br>Id: 593<br>Formula Expression: Formula String: VALUE; Formula Values: #REF!; Formula Ptg: #REF!; Ptgs: VALUE Index in Ptgs: 0 <br>Source Object Id: com.dataart.spreadsheetanalytics.engine.PoiProxyWorkbook@a8c1f44'},
{id: '594', label: 'E7\nA4', color: '#31b0d5', title: 'Name: E7<br>Alias: null<br>Value: A4<br>Type: CELL_WITH_REFERENCE<br>Id: 594<br>Formula Expression: Formula String: D1; Formula Values: A4; Formula Ptg: ; Ptgs:  Index in Ptgs: 0 <br>Source Object Id: com.dataart.spreadsheetanalytics.engine.PoiProxyWorkbook@a8c1f44'},
{id: '595', label: 'D1\nA4', color: '#31b0d5', title: 'Name: D1<br>Alias: null<br>Value: A4<br>Type: CELL_WITH_VALUE<br>Id: 595<br>Formula Expression: Formula String: D1; Formula Values: A4; Formula Ptg: A4; Ptgs: D1 Index in Ptgs: 0 <br>Source Object Id: com.dataart.spreadsheetanalytics.engine.PoiProxyWorkbook@a8c1f44'}
                            ]);


var edges = new vis.DataSet([
                             /* {from: id_a, to: id_b}, */
{from: '593', to: '592'},
{from: '595', to: '594'}
                            ]);