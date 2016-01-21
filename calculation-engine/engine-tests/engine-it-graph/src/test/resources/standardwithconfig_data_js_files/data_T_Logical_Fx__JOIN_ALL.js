var nodes = new vis.DataSet([
                             /* {id: a, label: b, ...}, */
{id: '3003', label: 'D5\nexpected', color: '#31b0d5', title: 'Name: D5<br>Alias: null<br>Value: expected<br>Type: CELL_WITH_FORMULA<br>Id: 3003<br>Formula Expression: Formula String: T(D2); Formula Values: T(expected); Formula Ptg: ; Ptgs:  Index in Ptgs: 0 <br>Source Object Id: com.dataart.spreadsheetanalytics.engine.PoiProxyWorkbook@29519337'},
{id: '3004', label: 'D2\nexpected', color: '#31b0d5', title: 'Name: D2<br>Alias: null<br>Value: expected<br>Type: CELL_WITH_VALUE<br>Id: 3004<br>Formula Expression: Formula String: D2; Formula Values: expected; Formula Ptg: expected; Ptgs: D2 Index in Ptgs: 0 <br>Source Object Id: com.dataart.spreadsheetanalytics.engine.PoiProxyWorkbook@29519337'},
{id: '3005', label: 'T\nexpected', color: '#f0ad4e', title: 'Name: T<br>Alias: null<br>Value: expected<br>Type: FUNCTION<br>Id: 3005<br>Formula Expression: Formula String: T(D2); Formula Values: T(expected); Formula Ptg: ; Ptgs:  Index in Ptgs: 1 <br>Source Object Id: com.dataart.spreadsheetanalytics.engine.PoiProxyWorkbook@29519337'}
                            ]);


var edges = new vis.DataSet([
                             /* {from: id_a, to: id_b}, */
{from: '3004', to: '3005'},
{from: '3005', to: '3003'}
                            ]);