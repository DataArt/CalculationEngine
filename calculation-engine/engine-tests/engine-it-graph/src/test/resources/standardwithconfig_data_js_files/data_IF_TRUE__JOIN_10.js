var nodes = new vis.DataSet([
                             /* {id: a, label: b, ...}, */
{id: '1717', label: 'E6\n65.0', color: '#31b0d5', title: 'Name: E6<br>Alias: null<br>Value: 65.0<br>Type: CELL_WITH_FORMULA<br>Id: 1717<br>Formula Expression: Formula String: IF(D1<5,D2,C3); Formula Values: IF(4.0 < 5.0, 65.0); Formula Ptg: ; Ptgs:  Index in Ptgs: 0 <br>Source Object Id: com.dataart.spreadsheetanalytics.engine.PoiProxyWorkbook@3e8b3b79'},
{id: '1718', label: 'D1\n4.0', color: '#31b0d5', title: 'Name: D1<br>Alias: null<br>Value: 4.0<br>Type: CELL_WITH_VALUE<br>Id: 1718<br>Formula Expression: Formula String: D1; Formula Values: 4.0; Formula Ptg: 4.0; Ptgs: D1 Index in Ptgs: 0 <br>Source Object Id: com.dataart.spreadsheetanalytics.engine.PoiProxyWorkbook@3e8b3b79'},
{id: '1719', label: 'VALUE\n5.0', color: '#31b0d5', title: 'Name: VALUE<br>Alias: null<br>Value: 5.0<br>Type: CONSTANT_VALUE<br>Id: 1719<br>Formula Expression: Formula String: VALUE; Formula Values: 5.0; Formula Ptg: 5.0; Ptgs: VALUE Index in Ptgs: 1 <br>Source Object Id: com.dataart.spreadsheetanalytics.engine.PoiProxyWorkbook@3e8b3b79'},
{id: '1720', label: '<\nTRUE', color: '#f0ad4e', title: 'Name: <<br>Alias: null<br>Value: TRUE<br>Type: OPERATOR<br>Id: 1720<br>Formula Expression: Formula String: D1 < VALUE; Formula Values: 4.0 < 5.0; Formula Ptg: ; Ptgs:  Index in Ptgs: 2 <br>Source Object Id: com.dataart.spreadsheetanalytics.engine.PoiProxyWorkbook@3e8b3b79'},
{id: '1721', label: 'IF\n65.0', color: '#f0ad4e', title: 'Name: IF<br>Alias: null<br>Value: 65.0<br>Type: IF<br>Id: 1721<br>Formula Expression: Formula String: IF(D1<5,D2,C3); Formula Values: IF(4.0 < 5.0, 65.0); Formula Ptg: ; Ptgs:  Index in Ptgs: 3 <br>Source Object Id: 46003fa8-ddcd-71d5-e769-e02add5260b3'},
{id: '1722', label: 'D2\n65.0', color: '#31b0d5', title: 'Name: D2<br>Alias: null<br>Value: 65.0<br>Type: CELL_WITH_VALUE<br>Id: 1722<br>Formula Expression: Formula String: D2; Formula Values: 65.0; Formula Ptg: 65.0; Ptgs: D2 Index in Ptgs: 4 <br>Source Object Id: com.dataart.spreadsheetanalytics.engine.PoiProxyWorkbook@3e8b3b79'}
                            ]);


var edges = new vis.DataSet([
                             /* {from: id_a, to: id_b}, */
{from: '1722', to: '1721'},
{from: '1719', to: '1720'},
{from: '1720', to: '1721'},
{from: '1718', to: '1720'},
{from: '1721', to: '1717'}
                            ]);