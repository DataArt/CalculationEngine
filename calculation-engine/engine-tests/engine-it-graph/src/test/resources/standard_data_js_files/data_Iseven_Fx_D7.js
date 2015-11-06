var nodes = new vis.DataSet([
                             /* {id: a, label: b, ...}, */
{id: '1ff206b8-8a4c-43c0-b7ad-c00e93dffe36', label: 'A1\n1.0', color: '#31b0d5', title: 'Name: A1<br>Value: 1.0<br>Type: CELL_WITH_VALUE<br>Id: 1ff206b8-8a4c-43c0-b7ad-c00e93dffe36<br>Formula Expression: Formula String: A1; Formula Values: 1.0; Formula Ptg: 1.0; Ptgs: A1 Index in Ptgs: 1 <br>Source Object Id: org.apache.poi.xssf.usermodel.XSSFEvaluationWorkbook@5a82ebf8'},
{id: 'b0c96642-6d19-47bd-990e-aa3aafd0ab65', label: 'D7\nFALSE', color: '#31b0d5', title: 'Name: D7<br>Value: FALSE<br>Type: CELL_WITH_FORMULA<br>Id: b0c96642-6d19-47bd-990e-aa3aafd0ab65<br>Formula Expression: Formula String: ISEVEN(A1); Formula Values: ISEVEN(1.0); Formula Ptg: 1.0 ISEVEN ; Ptgs: A1 ISEVEN  Index in Ptgs: 2 <br>Source Object Id: org.apache.poi.xssf.usermodel.XSSFEvaluationWorkbook@5a82ebf8'},
{id: 'f94e5dde-02bf-4d0a-b448-d6f0c1c6ff04', label: 'ISEVEN\nFALSE', color: '#f0ad4e', title: 'Name: ISEVEN<br>Value: FALSE<br>Type: FUNCTION<br>Id: f94e5dde-02bf-4d0a-b448-d6f0c1c6ff04<br>Formula Expression: Formula String: ISEVEN(A1); Formula Values: ISEVEN(1.0); Formula Ptg: ; Ptgs:  Index in Ptgs: 2 <br>Source Object Id: org.apache.poi.xssf.usermodel.XSSFEvaluationWorkbook@5a82ebf8'}
                            ]);


var edges = new vis.DataSet([
                             /* {from: id_a, to: id_b}, */
{from: '1ff206b8-8a4c-43c0-b7ad-c00e93dffe36', to: 'f94e5dde-02bf-4d0a-b448-d6f0c1c6ff04'},
{from: 'f94e5dde-02bf-4d0a-b448-d6f0c1c6ff04', to: 'b0c96642-6d19-47bd-990e-aa3aafd0ab65'}
                            ]);