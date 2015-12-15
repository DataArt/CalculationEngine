var nodes = new vis.DataSet([
                             /* {id: a, label: b, ...}, */
{id: '30913569-9583-43f3-845a-fcda2625bae5', label: 'ISBLANK\nFALSE', color: '#f0ad4e', title: 'Name: ISBLANK<br>Alias: null<br>Value: FALSE<br>Type: FUNCTION<br>Id: 30913569-9583-43f3-845a-fcda2625bae5<br>Formula Expression: Formula String: ISBLANK(VALUE); Formula Values: ISBLANK(#NAME?); Formula Ptg: ; Ptgs:  Index in Ptgs: 1 <br>Source Object Id: com.dataart.spreadsheetanalytics.engine.PoiProxyWorkbook@21de60b4'},
{id: '1602e9de-fd01-4d67-9b1e-3395867b94ab', label: 'D7\nFALSE', color: '#31b0d5', title: 'Name: D7<br>Alias: null<br>Value: FALSE<br>Type: CELL_WITH_FORMULA<br>Id: 1602e9de-fd01-4d67-9b1e-3395867b94ab<br>Formula Expression: Formula String: ISBLANK(VALUE); Formula Values: ISBLANK(#NAME?); Formula Ptg: #NAME? ISBLANK ; Ptgs: VALUE ISBLANK  Index in Ptgs: 1 <br>Source Object Id: com.dataart.spreadsheetanalytics.engine.PoiProxyWorkbook@21de60b4'},
{id: '6c19d0f6-e3a9-4048-b4cf-d7010ae0b032', label: 'C5\n#NAME?', color: '#31b0d5', title: 'Name: C5<br>Alias: null<br>Value: #NAME?<br>Type: CELL_WITH_REFERENCE<br>Id: 6c19d0f6-e3a9-4048-b4cf-d7010ae0b032<br>Formula Expression: Formula String: VALUE; Formula Values: #NAME?; Formula Ptg: #NAME?; Ptgs: VALUE Index in Ptgs: 0 <br>Source Object Id: com.dataart.spreadsheetanalytics.engine.PoiProxyWorkbook@21de60b4'},
{id: '0e50adef-8d49-4bdd-9470-77678f734bd8', label: 'VALUE\n#NAME?', color: '#31b0d5', title: 'Name: VALUE<br>Alias: null<br>Value: #NAME?<br>Type: CONSTANT_VALUE<br>Id: 0e50adef-8d49-4bdd-9470-77678f734bd8<br>Formula Expression: Formula String: VALUE; Formula Values: #NAME?; Formula Ptg: #NAME?; Ptgs: VALUE Index in Ptgs: 0 <br>Source Object Id: com.dataart.spreadsheetanalytics.engine.PoiProxyWorkbook@21de60b4'}
                            ]);


var edges = new vis.DataSet([
                             /* {from: id_a, to: id_b}, */
{from: '6c19d0f6-e3a9-4048-b4cf-d7010ae0b032', to: '30913569-9583-43f3-845a-fcda2625bae5'},
{from: '0e50adef-8d49-4bdd-9470-77678f734bd8', to: '6c19d0f6-e3a9-4048-b4cf-d7010ae0b032'},
{from: '30913569-9583-43f3-845a-fcda2625bae5', to: '1602e9de-fd01-4d67-9b1e-3395867b94ab'}
                            ]);