var nodes = new vis.DataSet([
                             /* {id: a, label: b, ...}, */
{id: '0', label: 'C8\n219.88888888888889', color: '#31b0d5', title: 'Name: C8<br>Alias: null<br>Value: 219.88888888888889<br>Type: CELL_WITH_FORMULA<br>Id: 0<br>Formula Expression: Formula String: AVEDEV(B1:C3); Formula Values: AVEDEV([[67.0, 873.0], [76.0, 52.0], [254.0, 80.0]]); Formula Ptg: ; Ptgs:  Index in Ptgs: 1 <br>Source Object Id: com.dataart.spreadsheetanalytics.engine.PoiProxyWorkbook@491b9b8'},
{id: '1', label: 'B1:C3\n[[67.0, 873.0], [76.0, 52.0], [254.0, 80.0]]', color: '#31b0d5', title: 'Name: B1:C3<br>Alias: null<br>Value: [[67.0, 873.0], [76.0, 52.0], [254.0, 80.0]]<br>Type: RANGE<br>Id: 1<br>Formula Expression: Formula String: B1:C3; Formula Values: [[67.0, 873.0], [76.0, 52.0], [254.0, 80.0]]; Formula Ptg: [[67.0, 873.0], [76.0, 52.0], [254.0, 80.0]]; Ptgs: B1:C3 Index in Ptgs: 0 <br>Source Object Id: com.dataart.spreadsheetanalytics.engine.PoiProxyWorkbook@491b9b8'},
{id: '2', label: 'AVEDEV\n219.88888888888889', color: '#f0ad4e', title: 'Name: AVEDEV<br>Alias: null<br>Value: 219.88888888888889<br>Type: FUNCTION<br>Id: 2<br>Formula Expression: Formula String: AVEDEV(B1:C3); Formula Values: AVEDEV([[67.0, 873.0], [76.0, 52.0], [254.0, 80.0]]); Formula Ptg: ; Ptgs:  Index in Ptgs: 1 <br>Source Object Id: com.dataart.spreadsheetanalytics.engine.PoiProxyWorkbook@491b9b8'}
                            ]);


var edges = new vis.DataSet([
                             /* {from: id_a, to: id_b}, */
{from: '1', to: '2'},
{from: '2', to: '0'}
                            ]);