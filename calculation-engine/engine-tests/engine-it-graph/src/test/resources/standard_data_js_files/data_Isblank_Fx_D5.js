var nodes = new vis.DataSet([
                             /* {id: a, label: b, ...}, */
{id: '6a6e9319-ca89-46aa-a9b0-45536eff4cca', label: 'D5\nFALSE', color: '#31b0d5', title: 'Name: D5<br>Alias: null<br>Value: FALSE<br>Type: CELL_WITH_FORMULA<br>Id: 6a6e9319-ca89-46aa-a9b0-45536eff4cca<br>Formula Expression: Formula String: ISBLANK(ISBLANK(A6)); Formula Values: ISBLANK(ISBLANK(4.0)); Formula Ptg: 4.0 ISBLANK  ISBLANK ; Ptgs: A6 ISBLANK  ISBLANK  Index in Ptgs: 1 <br>Source Object Id: org.apache.poi.xssf.usermodel.XSSFEvaluationWorkbook@6e0cff20'},
{id: '134bf05a-8e19-414e-8c0d-db986d9441a9', label: 'D2\nFALSE', color: '#31b0d5', title: 'Name: D2<br>Alias: null<br>Value: FALSE<br>Type: CELL_WITH_FORMULA<br>Id: 134bf05a-8e19-414e-8c0d-db986d9441a9<br>Formula Expression: Formula String: ISBLANK(A6); Formula Values: ISBLANK(4.0); Formula Ptg: 4.0 ISBLANK ; Ptgs: A6 ISBLANK  Index in Ptgs: 1 <br>Source Object Id: org.apache.poi.xssf.usermodel.XSSFEvaluationWorkbook@6e0cff20'},
{id: 'f1d88c79-fe98-45eb-946d-866e83dbf007', label: 'ISBLANK\nFALSE', color: '#f0ad4e', title: 'Name: ISBLANK<br>Alias: null<br>Value: FALSE<br>Type: FUNCTION<br>Id: f1d88c79-fe98-45eb-946d-866e83dbf007<br>Formula Expression: Formula String: ISBLANK(ISBLANK(A6)); Formula Values: ISBLANK(ISBLANK(4.0)); Formula Ptg: ; Ptgs:  Index in Ptgs: 1 <br>Source Object Id: org.apache.poi.xssf.usermodel.XSSFEvaluationWorkbook@6e0cff20'},
{id: '0c9a0dd5-1fe3-49f3-9d41-cc98bc2ba0ab', label: 'A6\n4.0', color: '#31b0d5', title: 'Name: A6<br>Alias: null<br>Value: 4.0<br>Type: CELL_WITH_VALUE<br>Id: 0c9a0dd5-1fe3-49f3-9d41-cc98bc2ba0ab<br>Formula Expression: Formula String: A6; Formula Values: 4.0; Formula Ptg: 4.0; Ptgs: A6 Index in Ptgs: 0 <br>Source Object Id: org.apache.poi.xssf.usermodel.XSSFEvaluationWorkbook@6e0cff20'},
{id: '938f06f6-aa89-49a6-9b64-4f3dd1e070d1', label: 'ISBLANK\nFALSE', color: '#f0ad4e', title: 'Name: ISBLANK<br>Alias: null<br>Value: FALSE<br>Type: FUNCTION<br>Id: 938f06f6-aa89-49a6-9b64-4f3dd1e070d1<br>Formula Expression: Formula String: ISBLANK(A6); Formula Values: ISBLANK(4.0); Formula Ptg: ; Ptgs:  Index in Ptgs: 1 <br>Source Object Id: org.apache.poi.xssf.usermodel.XSSFEvaluationWorkbook@6e0cff20'}
                            ]);


var edges = new vis.DataSet([
                             /* {from: id_a, to: id_b}, */
{from: '938f06f6-aa89-49a6-9b64-4f3dd1e070d1', to: '134bf05a-8e19-414e-8c0d-db986d9441a9'},
{from: '134bf05a-8e19-414e-8c0d-db986d9441a9', to: 'f1d88c79-fe98-45eb-946d-866e83dbf007'},
{from: '0c9a0dd5-1fe3-49f3-9d41-cc98bc2ba0ab', to: '938f06f6-aa89-49a6-9b64-4f3dd1e070d1'},
{from: 'f1d88c79-fe98-45eb-946d-866e83dbf007', to: '6a6e9319-ca89-46aa-a9b0-45536eff4cca'}
                            ]);