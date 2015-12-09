var nodes = new vis.DataSet([
                             /* {id: a, label: b, ...}, */
{id: '0b0f0824-49bf-4e29-824f-9ce09f80e81c', label: 'VALUE\n8.0', color: '#31b0d5', title: 'Name: VALUE<br>Alias: null<br>Value: 8.0<br>Type: CONSTANT_VALUE<br>Id: 0b0f0824-49bf-4e29-824f-9ce09f80e81c<br>Formula Expression: Formula String: VALUE; Formula Values: 8.0; Formula Ptg: 8.0; Ptgs: VALUE Index in Ptgs: 1 <br>Source Object Id: com.dataart.spreadsheetanalytics.engine.PoiProxyWorkbook@31368b99'},
{id: '5bdaa8cf-6455-4902-8d1d-ac7046550644', label: 'VALUE\n1.0', color: '#31b0d5', title: 'Name: VALUE<br>Alias: null<br>Value: 1.0<br>Type: CONSTANT_VALUE<br>Id: 5bdaa8cf-6455-4902-8d1d-ac7046550644<br>Formula Expression: Formula String: VALUE; Formula Values: 1.0; Formula Ptg: 1.0; Ptgs: VALUE Index in Ptgs: 0 <br>Source Object Id: com.dataart.spreadsheetanalytics.engine.PoiProxyWorkbook@31368b99'},
{id: '1cdd3798-995a-47b5-8c10-31efb7167f8c', label: 'C8\nFALSE', color: '#31b0d5', title: 'Name: C8<br>Alias: null<br>Value: FALSE<br>Type: CELL_WITH_FORMULA<br>Id: 1cdd3798-995a-47b5-8c10-31efb7167f8c<br>Formula Expression: Formula String: VALUE = VALUE; Formula Values: 1.0 = 8.0; Formula Ptg: 1.0 8.0 =; Ptgs: VALUE VALUE = Index in Ptgs: 2 <br>Source Object Id: com.dataart.spreadsheetanalytics.engine.PoiProxyWorkbook@31368b99'},
{id: '07329330-6901-40f6-a85c-b83664b9b108', label: '=\nFALSE', color: '#f0ad4e', title: 'Name: =<br>Alias: null<br>Value: FALSE<br>Type: OPERATOR<br>Id: 07329330-6901-40f6-a85c-b83664b9b108<br>Formula Expression: Formula String: VALUE = VALUE; Formula Values: 1.0 = 8.0; Formula Ptg: ; Ptgs:  Index in Ptgs: 2 <br>Source Object Id: com.dataart.spreadsheetanalytics.engine.PoiProxyWorkbook@31368b99'}
                            ]);


var edges = new vis.DataSet([
                             /* {from: id_a, to: id_b}, */
{from: '07329330-6901-40f6-a85c-b83664b9b108', to: '1cdd3798-995a-47b5-8c10-31efb7167f8c'},
{from: '5bdaa8cf-6455-4902-8d1d-ac7046550644', to: '07329330-6901-40f6-a85c-b83664b9b108'},
{from: '0b0f0824-49bf-4e29-824f-9ce09f80e81c', to: '07329330-6901-40f6-a85c-b83664b9b108'}
                            ]);