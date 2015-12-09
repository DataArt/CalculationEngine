var nodes = new vis.DataSet([
                             /* {id: a, label: b, ...}, */
{id: 'fbced3c0-0a0a-425a-8bfd-05d09fe8006a', label: 'VALUE\n6.0', color: '#31b0d5', title: 'Name: VALUE<br>Alias: null<br>Value: 6.0<br>Type: CONSTANT_VALUE<br>Id: fbced3c0-0a0a-425a-8bfd-05d09fe8006a<br>Formula Expression: Formula String: VALUE; Formula Values: 6.0; Formula Ptg: 6.0; Ptgs: VALUE Index in Ptgs: 1 <br>Source Object Id: com.dataart.spreadsheetanalytics.engine.PoiProxyWorkbook@31368b99'},
{id: '62744483-9562-4a73-af91-572391833986', label: 'VALUE\n3.0', color: '#31b0d5', title: 'Name: VALUE<br>Alias: null<br>Value: 3.0<br>Type: CONSTANT_VALUE<br>Id: 62744483-9562-4a73-af91-572391833986<br>Formula Expression: Formula String: VALUE; Formula Values: 3.0; Formula Ptg: 3.0; Ptgs: VALUE Index in Ptgs: 0 <br>Source Object Id: com.dataart.spreadsheetanalytics.engine.PoiProxyWorkbook@31368b99'},
{id: 'f22282a9-e607-4fac-bcb5-8b392edb4dd8', label: 'C7\n9.0', color: '#31b0d5', title: 'Name: C7<br>Alias: null<br>Value: 9.0<br>Type: CELL_WITH_FORMULA<br>Id: f22282a9-e607-4fac-bcb5-8b392edb4dd8<br>Formula Expression: Formula String: VALUE + VALUE; Formula Values: 3.0 + 6.0; Formula Ptg: 3.0 6.0 +; Ptgs: VALUE VALUE + Index in Ptgs: 2 <br>Source Object Id: com.dataart.spreadsheetanalytics.engine.PoiProxyWorkbook@31368b99'},
{id: '27f517d6-c89e-4bb4-bcc9-dd4f0c8df5ec', label: '+\n9.0', color: '#f0ad4e', title: 'Name: +<br>Alias: null<br>Value: 9.0<br>Type: OPERATOR<br>Id: 27f517d6-c89e-4bb4-bcc9-dd4f0c8df5ec<br>Formula Expression: Formula String: VALUE + VALUE; Formula Values: 3.0 + 6.0; Formula Ptg: ; Ptgs:  Index in Ptgs: 2 <br>Source Object Id: com.dataart.spreadsheetanalytics.engine.PoiProxyWorkbook@31368b99'}
                            ]);


var edges = new vis.DataSet([
                             /* {from: id_a, to: id_b}, */
{from: '27f517d6-c89e-4bb4-bcc9-dd4f0c8df5ec', to: 'f22282a9-e607-4fac-bcb5-8b392edb4dd8'},
{from: '62744483-9562-4a73-af91-572391833986', to: '27f517d6-c89e-4bb4-bcc9-dd4f0c8df5ec'},
{from: 'fbced3c0-0a0a-425a-8bfd-05d09fe8006a', to: '27f517d6-c89e-4bb4-bcc9-dd4f0c8df5ec'}
                            ]);