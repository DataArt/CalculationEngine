var nodes = new vis.DataSet([
                             /* {id: a, label: b, ...}, */
{id: 'b4a7d913-506d-4ab5-9f4b-b7353b3b0383', label: 'A1\n', color: '#31b0d5', title: 'Name: A1<br>Alias: null<br>Value: <br>Type: EMPTY_CELL<br>Id: b4a7d913-506d-4ab5-9f4b-b7353b3b0383<br>Formula Expression: Formula String: A1; Formula Values: ; Formula Ptg: ; Ptgs: A1 Index in Ptgs: 0 <br>Source Object Id: com.dataart.spreadsheetanalytics.engine.PoiProxyWorkbook@130d63be'},
{id: '3e3ad7c9-8013-4283-82fc-46f6464baade', label: 'A2\n', color: '#31b0d5', title: 'Name: A2<br>Alias: null<br>Value: <br>Type: EMPTY_CELL<br>Id: 3e3ad7c9-8013-4283-82fc-46f6464baade<br>Formula Expression: Formula String: A2; Formula Values: ; Formula Ptg: ; Ptgs: A2 Index in Ptgs: 1 <br>Source Object Id: com.dataart.spreadsheetanalytics.engine.PoiProxyWorkbook@130d63be'},
{id: '76b1805b-09b0-4193-9483-3d648b9e8c0e', label: 'CONCATENATE\n', color: '#f0ad4e', title: 'Name: CONCATENATE<br>Alias: null<br>Value: <br>Type: FUNCTION<br>Id: 76b1805b-09b0-4193-9483-3d648b9e8c0e<br>Formula Expression: Formula String: CONCATENATE(A2, A1); Formula Values: CONCATENATE(, ); Formula Ptg: ; Ptgs:  Index in Ptgs: 2 <br>Source Object Id: com.dataart.spreadsheetanalytics.engine.PoiProxyWorkbook@130d63be'},
{id: '117139cc-3021-463c-84c6-955067f00f96', label: 'B2\n', color: '#31b0d5', title: 'Name: B2<br>Alias: null<br>Value: <br>Type: CELL_WITH_FORMULA<br>Id: 117139cc-3021-463c-84c6-955067f00f96<br>Formula Expression: Formula String: CONCATENATE(A2, A1); Formula Values: CONCATENATE(, ); Formula Ptg: ,  CONCATENATE ; Ptgs: A2, A1 CONCATENATE  Index in Ptgs: 2 <br>Source Object Id: com.dataart.spreadsheetanalytics.engine.PoiProxyWorkbook@130d63be'}
                            ]);


var edges = new vis.DataSet([
                             /* {from: id_a, to: id_b}, */
{from: '3e3ad7c9-8013-4283-82fc-46f6464baade', to: '76b1805b-09b0-4193-9483-3d648b9e8c0e'},
{from: '76b1805b-09b0-4193-9483-3d648b9e8c0e', to: '117139cc-3021-463c-84c6-955067f00f96'},
{from: 'b4a7d913-506d-4ab5-9f4b-b7353b3b0383', to: '76b1805b-09b0-4193-9483-3d648b9e8c0e'}
                            ]);