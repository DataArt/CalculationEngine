var nodes = new vis.DataSet([
                             /* {id: a, label: b, ...}, */
{id: 'c0d6bc9a-1f4f-4b37-a814-75ddfa590673', label: 'CONCATENATE\n', color: '#f0ad4e', title: 'Name: CONCATENATE<br>Alias: null<br>Value: <br>Type: FUNCTION<br>Id: c0d6bc9a-1f4f-4b37-a814-75ddfa590673<br>Formula Expression: Formula String: CONCATENATE(A2, A1); Formula Values: CONCATENATE(, ); Formula Ptg: ; Ptgs:  Index in Ptgs: 2 <br>Source Object Id: com.dataart.spreadsheetanalytics.engine.PoiProxyWorkbook@2145b572'},
{id: '79ba11e2-a01d-4449-92f0-030a86e08f02', label: 'A1\n', color: '#31b0d5', title: 'Name: A1<br>Alias: null<br>Value: <br>Type: EMPTY_CELL<br>Id: 79ba11e2-a01d-4449-92f0-030a86e08f02<br>Formula Expression: Formula String: A1; Formula Values: ; Formula Ptg: ; Ptgs: A1 Index in Ptgs: 0 <br>Source Object Id: com.dataart.spreadsheetanalytics.engine.PoiProxyWorkbook@2145b572'},
{id: 'e608232f-022f-435b-90de-05caa3ce5859', label: 'A2\n', color: '#31b0d5', title: 'Name: A2<br>Alias: null<br>Value: <br>Type: EMPTY_CELL<br>Id: e608232f-022f-435b-90de-05caa3ce5859<br>Formula Expression: Formula String: A2; Formula Values: ; Formula Ptg: ; Ptgs: A2 Index in Ptgs: 1 <br>Source Object Id: com.dataart.spreadsheetanalytics.engine.PoiProxyWorkbook@2145b572'},
{id: 'a152eb72-6777-48e5-b4ae-2edd81d4cf52', label: 'B2\n', color: '#31b0d5', title: 'Name: B2<br>Alias: null<br>Value: <br>Type: CELL_WITH_FORMULA<br>Id: a152eb72-6777-48e5-b4ae-2edd81d4cf52<br>Formula Expression: Formula String: CONCATENATE(A2, A1); Formula Values: CONCATENATE(, ); Formula Ptg: ,  CONCATENATE ; Ptgs: A2, A1 CONCATENATE  Index in Ptgs: 2 <br>Source Object Id: com.dataart.spreadsheetanalytics.engine.PoiProxyWorkbook@2145b572'}
                            ]);


var edges = new vis.DataSet([
                             /* {from: id_a, to: id_b}, */
{from: 'e608232f-022f-435b-90de-05caa3ce5859', to: 'c0d6bc9a-1f4f-4b37-a814-75ddfa590673'},
{from: '79ba11e2-a01d-4449-92f0-030a86e08f02', to: 'c0d6bc9a-1f4f-4b37-a814-75ddfa590673'},
{from: 'c0d6bc9a-1f4f-4b37-a814-75ddfa590673', to: 'a152eb72-6777-48e5-b4ae-2edd81d4cf52'}
                            ]);