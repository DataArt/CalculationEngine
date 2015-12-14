var nodes = new vis.DataSet([
                             /* {id: a, label: b, ...}, */
{id: 'd441d97f-6c7c-4d0e-a585-dd7428a80605', label: 'C5\n0.0', color: '#31b0d5', title: 'Name: C5<br>Alias: null<br>Value: 0.0<br>Type: CELL_WITH_REFERENCE<br>Id: d441d97f-6c7c-4d0e-a585-dd7428a80605<br>Formula Expression: Formula String: VALUE; Formula Values: 0.0; Formula Ptg: 0.0; Ptgs: VALUE Index in Ptgs: 0 <br>Source Object Id: com.dataart.spreadsheetanalytics.engine.PoiProxyWorkbook@70e8f8e'},
{id: 'bce61dc8-4545-4289-b4b9-71754cc79df4', label: 'VALUE\n0.0', color: '#31b0d5', title: 'Name: VALUE<br>Alias: null<br>Value: 0.0<br>Type: CONSTANT_VALUE<br>Id: bce61dc8-4545-4289-b4b9-71754cc79df4<br>Formula Expression: Formula String: VALUE; Formula Values: 0.0; Formula Ptg: 0.0; Ptgs: VALUE Index in Ptgs: 0 <br>Source Object Id: com.dataart.spreadsheetanalytics.engine.PoiProxyWorkbook@70e8f8e'},
{id: 'f2b614fa-d12c-4f3e-8185-1111a914ea48', label: 'ISBLANK\nFALSE', color: '#f0ad4e', title: 'Name: ISBLANK<br>Alias: null<br>Value: FALSE<br>Type: FUNCTION<br>Id: f2b614fa-d12c-4f3e-8185-1111a914ea48<br>Formula Expression: Formula String: ISBLANK(VALUE); Formula Values: ISBLANK(0.0); Formula Ptg: ; Ptgs:  Index in Ptgs: 1 <br>Source Object Id: com.dataart.spreadsheetanalytics.engine.PoiProxyWorkbook@70e8f8e'},
{id: '6cfbd5a3-b884-48a4-9232-6e723ac55225', label: 'D7\nFALSE', color: '#31b0d5', title: 'Name: D7<br>Alias: null<br>Value: FALSE<br>Type: CELL_WITH_FORMULA<br>Id: 6cfbd5a3-b884-48a4-9232-6e723ac55225<br>Formula Expression: Formula String: ISBLANK(VALUE); Formula Values: ISBLANK(0.0); Formula Ptg: 0.0 ISBLANK ; Ptgs: VALUE ISBLANK  Index in Ptgs: 1 <br>Source Object Id: com.dataart.spreadsheetanalytics.engine.PoiProxyWorkbook@70e8f8e'}
                            ]);


var edges = new vis.DataSet([
                             /* {from: id_a, to: id_b}, */
{from: 'bce61dc8-4545-4289-b4b9-71754cc79df4', to: 'd441d97f-6c7c-4d0e-a585-dd7428a80605'},
{from: 'd441d97f-6c7c-4d0e-a585-dd7428a80605', to: 'f2b614fa-d12c-4f3e-8185-1111a914ea48'},
{from: 'f2b614fa-d12c-4f3e-8185-1111a914ea48', to: '6cfbd5a3-b884-48a4-9232-6e723ac55225'}
                            ]);