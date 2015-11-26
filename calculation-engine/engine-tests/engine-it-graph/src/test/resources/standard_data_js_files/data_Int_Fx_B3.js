var nodes = new vis.DataSet([
                             /* {id: a, label: b, ...}, */
{id: '83e6ac4a-ef1a-4f1b-aa4a-91f0f0ef9506', label: 'A1\n19.5', color: '#31b0d5', title: 'Name: A1<br>Alias: null<br>Value: 19.5<br>Type: CELL_WITH_VALUE<br>Id: 83e6ac4a-ef1a-4f1b-aa4a-91f0f0ef9506<br>Formula Expression: Formula String: A1; Formula Values: 19.5; Formula Ptg: 19.5; Ptgs: A1 Index in Ptgs: 0 <br>Source Object Id: org.apache.poi.xssf.usermodel.XSSFEvaluationWorkbook@6892cc6f'},
{id: '22b3d959-a12c-45ce-aee8-6273b0fe905d', label: 'INT\n19.0', color: '#f0ad4e', title: 'Name: INT<br>Alias: null<br>Value: 19.0<br>Type: FUNCTION<br>Id: 22b3d959-a12c-45ce-aee8-6273b0fe905d<br>Formula Expression: Formula String: INT(A1); Formula Values: INT(19.5); Formula Ptg: ; Ptgs:  Index in Ptgs: 1 <br>Source Object Id: org.apache.poi.xssf.usermodel.XSSFEvaluationWorkbook@6892cc6f'},
{id: '16ecadda-b0e5-4dd6-9f0e-88fce4261c08', label: 'B3\n19.0', color: '#31b0d5', title: 'Name: B3<br>Alias: null<br>Value: 19.0<br>Type: CELL_WITH_FORMULA<br>Id: 16ecadda-b0e5-4dd6-9f0e-88fce4261c08<br>Formula Expression: Formula String: INT(A1); Formula Values: INT(19.5); Formula Ptg: 19.5 INT ; Ptgs: A1 INT  Index in Ptgs: 1 <br>Source Object Id: org.apache.poi.xssf.usermodel.XSSFEvaluationWorkbook@6892cc6f'}
                            ]);


var edges = new vis.DataSet([
                             /* {from: id_a, to: id_b}, */
{from: '83e6ac4a-ef1a-4f1b-aa4a-91f0f0ef9506', to: '22b3d959-a12c-45ce-aee8-6273b0fe905d'},
{from: '22b3d959-a12c-45ce-aee8-6273b0fe905d', to: '16ecadda-b0e5-4dd6-9f0e-88fce4261c08'}
                            ]);