var nodes = new vis.DataSet([
                             /* {id: a, label: b, ...}, */
{id: '80112ea5-f5b8-4d75-b51d-6eb0d447281c', label: 'E10\n20.0', color: '#31b0d5', title: 'Name: E10<br>Alias: null<br>Value: 20.0<br>Type: CELL_WITH_FORMULA<br>Id: 80112ea5-f5b8-4d75-b51d-6eb0d447281c<br>Formula Expression: Formula String: SUM(B3:B5); Formula Values: SUM(4.0, 8.0, 8.0); Formula Ptg: 4.0, 8.0, 8.0 SUM ; Ptgs: B3:B5 SUM  Index in Ptgs: 1 <br>Source Object Id: com.dataart.spreadsheetanalytics.engine.PoiProxyWorkbook@6ae5aa72'},
{id: '1eb23c89-1896-4c0a-b4d8-015d1a049915', label: 'A2:A5\n[[5.0], [8.0], [1.0], [7.0]]', color: '#31b0d5', title: 'Name: A2:A5<br>Alias: null<br>Value: [[5.0], [8.0], [1.0], [7.0]]<br>Type: RANGE<br>Id: 1eb23c89-1896-4c0a-b4d8-015d1a049915<br>Formula Expression: Formula String: A2:A5; Formula Values: [[5.0], [8.0], [1.0], [7.0]]; Formula Ptg: [[5.0], [8.0], [1.0], [7.0]]; Ptgs: A2:A5 Index in Ptgs: 0 <br>Source Object Id: com.dataart.spreadsheetanalytics.engine.PoiProxyWorkbook@6ae5aa72'},
{id: '54a04bf3-7b35-4e59-87c4-d049a3d773bf', label: 'SUM\n21.0', color: '#f0ad4e', title: 'Name: SUM<br>Alias: null<br>Value: 21.0<br>Type: FUNCTION<br>Id: 54a04bf3-7b35-4e59-87c4-d049a3d773bf<br>Formula Expression: Formula String: SUM(A2:A5); Formula Values: SUM(5.0, 8.0, 1.0, 7.0); Formula Ptg: ; Ptgs:  Index in Ptgs: 1 <br>Source Object Id: com.dataart.spreadsheetanalytics.engine.PoiProxyWorkbook@6ae5aa72'},
{id: '69be3aa4-c81e-4d36-8ba3-f99254827365', label: 'B3:B5\n[[4.0], [8.0], [8.0]]', color: '#31b0d5', title: 'Name: B3:B5<br>Alias: null<br>Value: [[4.0], [8.0], [8.0]]<br>Type: RANGE<br>Id: 69be3aa4-c81e-4d36-8ba3-f99254827365<br>Formula Expression: Formula String: B3:B5; Formula Values: [[4.0], [8.0], [8.0]]; Formula Ptg: [[4.0], [8.0], [8.0]]; Ptgs: B3:B5 Index in Ptgs: 0 <br>Source Object Id: com.dataart.spreadsheetanalytics.engine.PoiProxyWorkbook@6ae5aa72'},
{id: 'd576fd30-6bf3-4e96-81bd-490441d64814', label: 'SUM\n20.0', color: '#f0ad4e', title: 'Name: SUM<br>Alias: null<br>Value: 20.0<br>Type: FUNCTION<br>Id: d576fd30-6bf3-4e96-81bd-490441d64814<br>Formula Expression: Formula String: SUM(B3:B5); Formula Values: SUM(4.0, 8.0, 8.0); Formula Ptg: ; Ptgs:  Index in Ptgs: 1 <br>Source Object Id: com.dataart.spreadsheetanalytics.engine.PoiProxyWorkbook@6ae5aa72'},
{id: '981d8ba1-5370-45cc-af07-f3ee12079e0e', label: 'E6\n21.0', color: '#31b0d5', title: 'Name: E6<br>Alias: null<br>Value: 21.0<br>Type: CELL_WITH_FORMULA<br>Id: 981d8ba1-5370-45cc-af07-f3ee12079e0e<br>Formula Expression: Formula String: SUM(A2:A5); Formula Values: SUM(5.0, 8.0, 1.0, 7.0); Formula Ptg: 5.0, 8.0, 1.0, 7.0 SUM ; Ptgs: A2:A5 SUM  Index in Ptgs: 1 <br>Source Object Id: com.dataart.spreadsheetanalytics.engine.PoiProxyWorkbook@6ae5aa72'}
                            ]);


var edges = new vis.DataSet([
                             /* {from: id_a, to: id_b}, */
{from: '69be3aa4-c81e-4d36-8ba3-f99254827365', to: 'd576fd30-6bf3-4e96-81bd-490441d64814'},
{from: 'd576fd30-6bf3-4e96-81bd-490441d64814', to: '80112ea5-f5b8-4d75-b51d-6eb0d447281c'},
{from: '54a04bf3-7b35-4e59-87c4-d049a3d773bf', to: '981d8ba1-5370-45cc-af07-f3ee12079e0e'},
{from: '1eb23c89-1896-4c0a-b4d8-015d1a049915', to: '54a04bf3-7b35-4e59-87c4-d049a3d773bf'}
                            ]);