var nodes = new vis.DataSet([
                             /* {id: a, label: b, ...}, */
{id: '1696', label: 'VALUE\n#REF!', color: '#31b0d5', title: 'Name: VALUE<br>Alias: null<br>Value: #REF!<br>Type: CONSTANT_VALUE<br>Id: 1696<br>Formula Expression: Formula String: VALUE; Formula Values: #REF!; Formula Ptg: #REF!; Ptgs: VALUE Index in Ptgs: 0 <br>Source Object Id: com.dataart.spreadsheetanalytics.engine.PoiProxyWorkbook@5583098b'},
{id: '1697', label: 'E7\nA4', color: '#31b0d5', title: 'Name: E7<br>Alias: null<br>Value: A4<br>Type: CELL_WITH_REFERENCE<br>Id: 1697<br>Formula Expression: Formula String: D1; Formula Values: A4; Formula Ptg: ; Ptgs:  Index in Ptgs: 0 <br>Source Object Id: com.dataart.spreadsheetanalytics.engine.PoiProxyWorkbook@5583098b'},
{id: '1698', label: 'D1\nA4', color: '#31b0d5', title: 'Name: D1<br>Alias: null<br>Value: A4<br>Type: CELL_WITH_VALUE<br>Id: 1698<br>Formula Expression: Formula String: D1; Formula Values: A4; Formula Ptg: A4; Ptgs: D1 Index in Ptgs: 0 <br>Source Object Id: com.dataart.spreadsheetanalytics.engine.PoiProxyWorkbook@5583098b'},
{id: '1695', label: 'E6\n#REF!', color: '#31b0d5', title: 'Name: E6<br>Alias: null<br>Value: #REF!<br>Type: CELL_WITH_REFERENCE<br>Id: 1695<br>Formula Expression: Formula String: VALUE; Formula Values: #REF!; Formula Ptg: ; Ptgs:  Index in Ptgs: 0 <br>Source Object Id: com.dataart.spreadsheetanalytics.engine.PoiProxyWorkbook@5583098b'}
                            ]);


var edges = new vis.DataSet([
                             /* {from: id_a, to: id_b}, */
{from: '1696', to: '1695'},
{from: '1698', to: '1697'}
                            ]);