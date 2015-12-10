var nodes = new vis.DataSet([
                             /* {id: a, label: b, ...}, */
{id: '238d5cde-82fd-47b4-8309-d56354a0de01', label: 'A1\n', color: '#31b0d5', title: 'Name: A1<br>Alias: null<br>Value: <br>Type: EMPTY_CELL<br>Id: 238d5cde-82fd-47b4-8309-d56354a0de01<br>Formula Expression: Formula String: A1; Formula Values: ; Formula Ptg: ; Ptgs: A1 Index in Ptgs: 0 <br>Source Object Id: com.dataart.spreadsheetanalytics.engine.PoiProxyWorkbook@3c130745'},
{id: '26f8ad3f-6b9b-4fa8-8964-093fb6a66b27', label: 'CONCATENATE\n', color: '#f0ad4e', title: 'Name: CONCATENATE<br>Alias: null<br>Value: <br>Type: FUNCTION<br>Id: 26f8ad3f-6b9b-4fa8-8964-093fb6a66b27<br>Formula Expression: Formula String: CONCATENATE(A2, A1); Formula Values: CONCATENATE(, ); Formula Ptg: ; Ptgs:  Index in Ptgs: 2 <br>Source Object Id: com.dataart.spreadsheetanalytics.engine.PoiProxyWorkbook@3c130745'},
{id: '58d805cb-e175-42a4-8240-6b5f820f7a85', label: 'B2\n', color: '#31b0d5', title: 'Name: B2<br>Alias: null<br>Value: <br>Type: CELL_WITH_FORMULA<br>Id: 58d805cb-e175-42a4-8240-6b5f820f7a85<br>Formula Expression: Formula String: CONCATENATE(A2, A1); Formula Values: CONCATENATE(, ); Formula Ptg: ,  CONCATENATE ; Ptgs: A2, A1 CONCATENATE  Index in Ptgs: 2 <br>Source Object Id: com.dataart.spreadsheetanalytics.engine.PoiProxyWorkbook@3c130745'},
{id: 'd8e58ed1-98c7-4453-a753-52f42b32f635', label: 'A2\n', color: '#31b0d5', title: 'Name: A2<br>Alias: null<br>Value: <br>Type: EMPTY_CELL<br>Id: d8e58ed1-98c7-4453-a753-52f42b32f635<br>Formula Expression: Formula String: A2; Formula Values: ; Formula Ptg: ; Ptgs: A2 Index in Ptgs: 1 <br>Source Object Id: com.dataart.spreadsheetanalytics.engine.PoiProxyWorkbook@3c130745'}
                            ]);


var edges = new vis.DataSet([
                             /* {from: id_a, to: id_b}, */
{from: '26f8ad3f-6b9b-4fa8-8964-093fb6a66b27', to: '58d805cb-e175-42a4-8240-6b5f820f7a85'},
{from: 'd8e58ed1-98c7-4453-a753-52f42b32f635', to: '26f8ad3f-6b9b-4fa8-8964-093fb6a66b27'},
{from: '238d5cde-82fd-47b4-8309-d56354a0de01', to: '26f8ad3f-6b9b-4fa8-8964-093fb6a66b27'}
                            ]);