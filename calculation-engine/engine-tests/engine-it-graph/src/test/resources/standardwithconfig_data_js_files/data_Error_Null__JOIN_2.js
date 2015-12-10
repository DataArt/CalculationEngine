var nodes = new vis.DataSet([
                             /* {id: a, label: b, ...}, */
{id: '0f85e303-be53-40f0-a0cd-e9c124cd01df', label: 'E10\n20.0', color: '#31b0d5', title: 'Name: E10<br>Alias: null<br>Value: 20.0<br>Type: CELL_WITH_FORMULA<br>Id: 0f85e303-be53-40f0-a0cd-e9c124cd01df<br>Formula Expression: Formula String: SUM(B3:B5); Formula Values: SUM(4.0, 8.0, 8.0); Formula Ptg: 4.0, 8.0, 8.0 SUM ; Ptgs: B3:B5 SUM  Index in Ptgs: 1 <br>Source Object Id: com.dataart.spreadsheetanalytics.engine.PoiProxyWorkbook@55b699ef'},
{id: '8239c184-184b-4866-9674-1860d99525f6', label: 'A2:A5\n[[5.0], [8.0], [1.0], [7.0]]', color: '#31b0d5', title: 'Name: A2:A5<br>Alias: null<br>Value: [[5.0], [8.0], [1.0], [7.0]]<br>Type: RANGE<br>Id: 8239c184-184b-4866-9674-1860d99525f6<br>Formula Expression: Formula String: A2:A5; Formula Values: [[5.0], [8.0], [1.0], [7.0]]; Formula Ptg: [[5.0], [8.0], [1.0], [7.0]]; Ptgs: A2:A5 Index in Ptgs: 0 <br>Source Object Id: com.dataart.spreadsheetanalytics.engine.PoiProxyWorkbook@55b699ef'},
{id: '0cffa91c-920a-4420-810f-2e8dd1959529', label: 'E6\n21.0', color: '#31b0d5', title: 'Name: E6<br>Alias: null<br>Value: 21.0<br>Type: CELL_WITH_FORMULA<br>Id: 0cffa91c-920a-4420-810f-2e8dd1959529<br>Formula Expression: Formula String: SUM(A2:A5); Formula Values: SUM(5.0, 8.0, 1.0, 7.0); Formula Ptg: 5.0, 8.0, 1.0, 7.0 SUM ; Ptgs: A2:A5 SUM  Index in Ptgs: 1 <br>Source Object Id: com.dataart.spreadsheetanalytics.engine.PoiProxyWorkbook@55b699ef'},
{id: '17ed194b-9493-4dd0-b049-f7c8c86ce11d', label: 'SUM\n20.0', color: '#f0ad4e', title: 'Name: SUM<br>Alias: null<br>Value: 20.0<br>Type: FUNCTION<br>Id: 17ed194b-9493-4dd0-b049-f7c8c86ce11d<br>Formula Expression: Formula String: SUM(B3:B5); Formula Values: SUM(4.0, 8.0, 8.0); Formula Ptg: ; Ptgs:  Index in Ptgs: 1 <br>Source Object Id: com.dataart.spreadsheetanalytics.engine.PoiProxyWorkbook@55b699ef'},
{id: '58663f0c-9733-495a-9ff4-24860bf2d10b', label: 'SUM\n21.0', color: '#f0ad4e', title: 'Name: SUM<br>Alias: null<br>Value: 21.0<br>Type: FUNCTION<br>Id: 58663f0c-9733-495a-9ff4-24860bf2d10b<br>Formula Expression: Formula String: SUM(A2:A5); Formula Values: SUM(5.0, 8.0, 1.0, 7.0); Formula Ptg: ; Ptgs:  Index in Ptgs: 1 <br>Source Object Id: com.dataart.spreadsheetanalytics.engine.PoiProxyWorkbook@55b699ef'},
{id: '6a8b15a4-8f96-46f5-a64b-fc580616e7fd', label: 'B3:B5\n[[4.0], [8.0], [8.0]]', color: '#31b0d5', title: 'Name: B3:B5<br>Alias: null<br>Value: [[4.0], [8.0], [8.0]]<br>Type: RANGE<br>Id: 6a8b15a4-8f96-46f5-a64b-fc580616e7fd<br>Formula Expression: Formula String: B3:B5; Formula Values: [[4.0], [8.0], [8.0]]; Formula Ptg: [[4.0], [8.0], [8.0]]; Ptgs: B3:B5 Index in Ptgs: 0 <br>Source Object Id: com.dataart.spreadsheetanalytics.engine.PoiProxyWorkbook@55b699ef'}
                            ]);


var edges = new vis.DataSet([
                             /* {from: id_a, to: id_b}, */
{from: '6a8b15a4-8f96-46f5-a64b-fc580616e7fd', to: '17ed194b-9493-4dd0-b049-f7c8c86ce11d'},
{from: '58663f0c-9733-495a-9ff4-24860bf2d10b', to: '0cffa91c-920a-4420-810f-2e8dd1959529'},
{from: '8239c184-184b-4866-9674-1860d99525f6', to: '58663f0c-9733-495a-9ff4-24860bf2d10b'},
{from: '17ed194b-9493-4dd0-b049-f7c8c86ce11d', to: '0f85e303-be53-40f0-a0cd-e9c124cd01df'}
                            ]);