var nodes = new vis.DataSet([
                             /* {id: a, label: b, ...}, */
{id: '327', label: 'E6\n#REF!', color: '#31b0d5', title: 'Name: E6<br>Alias: null<br>Value: #REF!<br>Type: CELL_WITH_REFERENCE<br>Id: 327<br>Formula Expression: Formula String: [1]Sheet2!B4; Formula Values: #REF!; Formula Ptg: ; Ptgs:  Index in Ptgs: 0 <br>Source Object Id: com.dataart.spreadsheetanalytics.engine.PoiProxyWorkbook@7b64240d'},
{id: '328', label: '[1]Sheet2!B4\n#REF!', color: '#31b0d5', title: 'Name: [1]Sheet2!B4<br>Alias: null<br>Value: #REF!<br>Type: CELL_WITH_VALUE<br>Id: 328<br>Formula Expression: Formula String: [1]Sheet2!B4; Formula Values: #REF!; Formula Ptg: #REF!; Ptgs: [1]Sheet2!B4 Index in Ptgs: 0 <br>Source Object Id: com.dataart.spreadsheetanalytics.engine.PoiProxyWorkbook@7b64240d'}
                            ]);


var edges = new vis.DataSet([
                             /* {from: id_a, to: id_b}, */
{from: '328', to: '327'}
                            ]);