var nodes = new vis.DataSet([
                             /* {id: a, label: b, ...}, */
{id: '6067eb5f-9519-4106-b5a6-b644a424bcbd', label: 'C2\n#DIV/0!', color: '#31b0d5', title: 'Name: C2<br>Alias: null<br>Value: #DIV/0!<br>Type: CELL_WITH_FORMULA<br>Id: 6067eb5f-9519-4106-b5a6-b644a424bcbd<br>Formula Expression: Formula String: A3 / D2; Formula Values: 1.0 / ; Formula Ptg: 1.0  /; Ptgs: A3 D2 / Index in Ptgs: 2 <br>Source Object Id: com.dataart.spreadsheetanalytics.engine.PoiProxyWorkbook@4facf68f'},
{id: '3d71f2c8-0b4f-43af-9456-3d4a899215b6', label: 'D2\n', color: '#31b0d5', title: 'Name: D2<br>Alias: null<br>Value: <br>Type: EMPTY_CELL<br>Id: 3d71f2c8-0b4f-43af-9456-3d4a899215b6<br>Formula Expression: Formula String: D2; Formula Values: ; Formula Ptg: ; Ptgs: D2 Index in Ptgs: 1 <br>Source Object Id: com.dataart.spreadsheetanalytics.engine.PoiProxyWorkbook@4facf68f'},
{id: '043ca0a4-adfd-4b6d-b0c9-8601c66850dd', label: 'C9\nFALSE', color: '#31b0d5', title: 'Name: C9<br>Alias: null<br>Value: FALSE<br>Type: CELL_WITH_FORMULA<br>Id: 043ca0a4-adfd-4b6d-b0c9-8601c66850dd<br>Formula Expression: Formula String: ISLOGICAL(A3 / D2); Formula Values: ISLOGICAL(1.0 / ); Formula Ptg: 1.0  / ISLOGICAL ; Ptgs: A3 D2 / ISLOGICAL  Index in Ptgs: 1 <br>Source Object Id: com.dataart.spreadsheetanalytics.engine.PoiProxyWorkbook@4facf68f'},
{id: '76fdbacb-82f8-4821-beba-7849b67260f7', label: '/\n#DIV/0!', color: '#f0ad4e', title: 'Name: /<br>Alias: null<br>Value: #DIV/0!<br>Type: OPERATOR<br>Id: 76fdbacb-82f8-4821-beba-7849b67260f7<br>Formula Expression: Formula String: A3 / D2; Formula Values: 1.0 / ; Formula Ptg: ; Ptgs:  Index in Ptgs: 2 <br>Source Object Id: com.dataart.spreadsheetanalytics.engine.PoiProxyWorkbook@4facf68f'},
{id: '9ec45e97-ead8-4eff-a179-dd569d367145', label: 'A3\n1.0', color: '#31b0d5', title: 'Name: A3<br>Alias: null<br>Value: 1.0<br>Type: CELL_WITH_VALUE<br>Id: 9ec45e97-ead8-4eff-a179-dd569d367145<br>Formula Expression: Formula String: A3; Formula Values: 1.0; Formula Ptg: 1.0; Ptgs: A3 Index in Ptgs: 0 <br>Source Object Id: com.dataart.spreadsheetanalytics.engine.PoiProxyWorkbook@4facf68f'},
{id: 'ebeea3ca-b3bf-4205-b706-6a270c048dc9', label: 'ISLOGICAL\nFALSE', color: '#f0ad4e', title: 'Name: ISLOGICAL<br>Alias: null<br>Value: FALSE<br>Type: FUNCTION<br>Id: ebeea3ca-b3bf-4205-b706-6a270c048dc9<br>Formula Expression: Formula String: ISLOGICAL(A3 / D2); Formula Values: ISLOGICAL(1.0 / ); Formula Ptg: ; Ptgs:  Index in Ptgs: 1 <br>Source Object Id: com.dataart.spreadsheetanalytics.engine.PoiProxyWorkbook@4facf68f'}
                            ]);


var edges = new vis.DataSet([
                             /* {from: id_a, to: id_b}, */
{from: '9ec45e97-ead8-4eff-a179-dd569d367145', to: '76fdbacb-82f8-4821-beba-7849b67260f7'},
{from: 'ebeea3ca-b3bf-4205-b706-6a270c048dc9', to: '043ca0a4-adfd-4b6d-b0c9-8601c66850dd'},
{from: '6067eb5f-9519-4106-b5a6-b644a424bcbd', to: 'ebeea3ca-b3bf-4205-b706-6a270c048dc9'},
{from: '76fdbacb-82f8-4821-beba-7849b67260f7', to: '6067eb5f-9519-4106-b5a6-b644a424bcbd'},
{from: '3d71f2c8-0b4f-43af-9456-3d4a899215b6', to: '76fdbacb-82f8-4821-beba-7849b67260f7'}
                            ]);