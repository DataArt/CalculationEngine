var nodes = new vis.DataSet([
                             /* {id: a, label: b, ...}, */
{id: '987f95ce-e598-48cb-860d-5f8e07081663', label: 'D8\nFALSE', color: '#31b0d5', title: 'Name: D8<br>Alias: null<br>Value: FALSE<br>Type: CELL_WITH_FORMULA<br>Id: 987f95ce-e598-48cb-860d-5f8e07081663<br>Formula Expression: Formula String: ISERROR(SUM(VALUE, A1)); Formula Values: ISERROR(SUM(76.0, 5.0)); Formula Ptg: 76.0, 5.0 SUM  ISERROR ; Ptgs: VALUE, A1 SUM  ISERROR  Index in Ptgs: 1 <br>Source Object Id: com.dataart.spreadsheetanalytics.engine.PoiProxyWorkbook@5a63f509'},
{id: '2e5f1f3c-5506-486a-a5f2-f93dac3d44c7', label: 'A1\n5.0', color: '#31b0d5', title: 'Name: A1<br>Alias: null<br>Value: 5.0<br>Type: CELL_WITH_VALUE<br>Id: 2e5f1f3c-5506-486a-a5f2-f93dac3d44c7<br>Formula Expression: Formula String: A1; Formula Values: 5.0; Formula Ptg: 5.0; Ptgs: A1 Index in Ptgs: 0 <br>Source Object Id: com.dataart.spreadsheetanalytics.engine.PoiProxyWorkbook@5a63f509'},
{id: '4b9d4a92-a462-4854-9793-194066bcdae9', label: 'VALUE\n76.0', color: '#31b0d5', title: 'Name: VALUE<br>Alias: null<br>Value: 76.0<br>Type: CONSTANT_VALUE<br>Id: 4b9d4a92-a462-4854-9793-194066bcdae9<br>Formula Expression: Formula String: VALUE; Formula Values: 76.0; Formula Ptg: 76.0; Ptgs: VALUE Index in Ptgs: 1 <br>Source Object Id: com.dataart.spreadsheetanalytics.engine.PoiProxyWorkbook@5a63f509'},
{id: '618eccb0-e79e-41b6-bb48-0d6f0f692016', label: 'D3\n81.0', color: '#31b0d5', title: 'Name: D3<br>Alias: null<br>Value: 81.0<br>Type: CELL_WITH_FORMULA<br>Id: 618eccb0-e79e-41b6-bb48-0d6f0f692016<br>Formula Expression: Formula String: SUM(VALUE, A1); Formula Values: SUM(76.0, 5.0); Formula Ptg: 76.0, 5.0 SUM ; Ptgs: VALUE, A1 SUM  Index in Ptgs: 2 <br>Source Object Id: com.dataart.spreadsheetanalytics.engine.PoiProxyWorkbook@5a63f509'},
{id: '8ad5cfa8-0127-4245-8ee0-59b654be85eb', label: 'ISERROR\nFALSE', color: '#f0ad4e', title: 'Name: ISERROR<br>Alias: null<br>Value: FALSE<br>Type: FUNCTION<br>Id: 8ad5cfa8-0127-4245-8ee0-59b654be85eb<br>Formula Expression: Formula String: ISERROR(SUM(VALUE, A1)); Formula Values: ISERROR(SUM(76.0, 5.0)); Formula Ptg: ; Ptgs:  Index in Ptgs: 1 <br>Source Object Id: com.dataart.spreadsheetanalytics.engine.PoiProxyWorkbook@5a63f509'},
{id: '247227d8-2973-41b7-ae67-6ba6359534f0', label: 'SUM\n81.0', color: '#f0ad4e', title: 'Name: SUM<br>Alias: null<br>Value: 81.0<br>Type: FUNCTION<br>Id: 247227d8-2973-41b7-ae67-6ba6359534f0<br>Formula Expression: Formula String: SUM(VALUE, A1); Formula Values: SUM(76.0, 5.0); Formula Ptg: ; Ptgs:  Index in Ptgs: 2 <br>Source Object Id: com.dataart.spreadsheetanalytics.engine.PoiProxyWorkbook@5a63f509'}
                            ]);


var edges = new vis.DataSet([
                             /* {from: id_a, to: id_b}, */
{from: '247227d8-2973-41b7-ae67-6ba6359534f0', to: '618eccb0-e79e-41b6-bb48-0d6f0f692016'},
{from: '2e5f1f3c-5506-486a-a5f2-f93dac3d44c7', to: '247227d8-2973-41b7-ae67-6ba6359534f0'},
{from: '4b9d4a92-a462-4854-9793-194066bcdae9', to: '247227d8-2973-41b7-ae67-6ba6359534f0'},
{from: '618eccb0-e79e-41b6-bb48-0d6f0f692016', to: '8ad5cfa8-0127-4245-8ee0-59b654be85eb'},
{from: '8ad5cfa8-0127-4245-8ee0-59b654be85eb', to: '987f95ce-e598-48cb-860d-5f8e07081663'}
                            ]);