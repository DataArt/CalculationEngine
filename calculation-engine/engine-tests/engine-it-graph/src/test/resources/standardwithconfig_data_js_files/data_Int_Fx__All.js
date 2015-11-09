var nodes = new vis.DataSet([
                             /* {id: a, label: b, ...}, */
{id: '9000c72e-293b-4e10-9682-4f53d2ed0699', label: 'INT\n7.0', color: '#f0ad4e', title: 'Name: INT<br>Value: 7.0<br>Type: FUNCTION<br>Id: 9000c72e-293b-4e10-9682-4f53d2ed0699<br>Formula Expression: Formula String: INT(VALUE); Formula Values: INT(7.5); Formula Ptg: ; Ptgs:  Index in Ptgs: 1 <br>Source Object Id: org.apache.poi.xssf.usermodel.XSSFEvaluationWorkbook@7220ff10'},
{id: '67d56392-b335-423c-bdf0-dcf2e41e7d51', label: 'B3\n19.0', color: '#31b0d5', title: 'Name: B3<br>Value: 19.0<br>Type: CELL_WITH_FORMULA<br>Id: 67d56392-b335-423c-bdf0-dcf2e41e7d51<br>Formula Expression: Formula String: INT(A1); Formula Values: INT(19.5); Formula Ptg: 19.5 INT ; Ptgs: A1 INT  Index in Ptgs: 1 <br>Source Object Id: org.apache.poi.xssf.usermodel.XSSFEvaluationWorkbook@7220ff10'},
{id: '357f734a-60ba-48e8-a8b4-253d63128990', label: 'A1\n19.5', color: '#31b0d5', title: 'Name: A1<br>Value: 19.5<br>Type: CELL_WITH_VALUE<br>Id: 357f734a-60ba-48e8-a8b4-253d63128990<br>Formula Expression: Formula String: A1; Formula Values: 19.5; Formula Ptg: 19.5; Ptgs: A1 Index in Ptgs: 0 <br>Source Object Id: org.apache.poi.xssf.usermodel.XSSFEvaluationWorkbook@7220ff10'},
{id: '8dd3216c-750c-4c74-9c6c-6c2ed9d02216', label: 'VALUE\n7.5', color: '#31b0d5', title: 'Name: VALUE<br>Value: 7.5<br>Type: CONSTANT_VALUE<br>Id: 8dd3216c-750c-4c74-9c6c-6c2ed9d02216<br>Formula Expression: Formula String: VALUE; Formula Values: 7.5; Formula Ptg: 7.5; Ptgs: VALUE Index in Ptgs: 0 <br>Source Object Id: org.apache.poi.xssf.usermodel.XSSFEvaluationWorkbook@7220ff10'},
{id: '5b98379a-c6e7-4f7a-b2a8-04093fd1d089', label: 'INT\n19.0', color: '#f0ad4e', title: 'Name: INT<br>Value: 19.0<br>Type: FUNCTION<br>Id: 5b98379a-c6e7-4f7a-b2a8-04093fd1d089<br>Formula Expression: Formula String: INT(A1); Formula Values: INT(19.5); Formula Ptg: ; Ptgs:  Index in Ptgs: 1 <br>Source Object Id: org.apache.poi.xssf.usermodel.XSSFEvaluationWorkbook@7220ff10'},
{id: '429ad268-8efb-4621-80af-2c959afa6dfc', label: 'B2\n7.0', color: '#31b0d5', title: 'Name: B2<br>Value: 7.0<br>Type: CELL_WITH_FORMULA<br>Id: 429ad268-8efb-4621-80af-2c959afa6dfc<br>Formula Expression: Formula String: INT(VALUE); Formula Values: INT(7.5); Formula Ptg: 7.5 INT ; Ptgs: VALUE INT  Index in Ptgs: 1 <br>Source Object Id: org.apache.poi.xssf.usermodel.XSSFEvaluationWorkbook@7220ff10'}
                            ]);


var edges = new vis.DataSet([
                             /* {from: id_a, to: id_b}, */
{from: '8dd3216c-750c-4c74-9c6c-6c2ed9d02216', to: '9000c72e-293b-4e10-9682-4f53d2ed0699'},
{from: '357f734a-60ba-48e8-a8b4-253d63128990', to: '5b98379a-c6e7-4f7a-b2a8-04093fd1d089'},
{from: '5b98379a-c6e7-4f7a-b2a8-04093fd1d089', to: '67d56392-b335-423c-bdf0-dcf2e41e7d51'},
{from: '9000c72e-293b-4e10-9682-4f53d2ed0699', to: '429ad268-8efb-4621-80af-2c959afa6dfc'}
                            ]);