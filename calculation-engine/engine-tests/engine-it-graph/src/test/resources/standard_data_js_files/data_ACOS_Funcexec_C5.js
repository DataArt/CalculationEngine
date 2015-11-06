var nodes = new vis.DataSet([
                             /* {id: a, label: b, ...}, */
{id: 'd87d5242-a34f-4899-95bd-aed0e582e2a7', label: 'C5\n1.5707963267948966', color: '#31b0d5', title: 'Name: C5<br>Value: 1.5707963267948966<br>Type: CELL_WITH_FORMULA<br>Id: d87d5242-a34f-4899-95bd-aed0e582e2a7<br>Formula Expression: Formula String: FUNCEXEC(A2, VALUE); Formula Values: FUNCEXEC(0.0, DEVDEF); Formula Ptg: 0.0, DEVDEF FUNCEXEC ; Ptgs: A2, VALUE FUNCEXEC  Index in Ptgs: 3 <br>Source Object Id: org.apache.poi.xssf.usermodel.XSSFEvaluationWorkbook@49d904ec'},
{id: 'cdfb24d1-9068-4c88-90fb-57138355a9b2', label: 'A2\n0.0', color: '#31b0d5', title: 'Name: A2<br>Value: 0.0<br>Type: CELL_WITH_VALUE<br>Id: cdfb24d1-9068-4c88-90fb-57138355a9b2<br>Formula Expression: Formula String: A2; Formula Values: 0.0; Formula Ptg: 0.0; Ptgs: A2 Index in Ptgs: 2 <br>Source Object Id: org.apache.poi.xssf.usermodel.XSSFEvaluationWorkbook@49d904ec'},
{id: '9c3607be-74a1-47aa-8975-44e07e3483cb', label: 'FUNCEXEC\n1.5707963267948966', color: '#f0ad4e', title: 'Name: FUNCEXEC<br>Value: 1.5707963267948966<br>Type: FUNCTION<br>Id: 9c3607be-74a1-47aa-8975-44e07e3483cb<br>Formula Expression: Formula String: FUNCEXEC(A2, VALUE); Formula Values: FUNCEXEC(0.0, DEVDEF); Formula Ptg: ; Ptgs:  Index in Ptgs: 3 <br>Source Object Id: org.apache.poi.xssf.usermodel.XSSFEvaluationWorkbook@49d904ec'},
{id: 'fda1ba44-f8d3-45e5-8894-ef34f6aa0c96', label: 'VALUE\nDEVDEF', color: '#31b0d5', title: 'Name: VALUE<br>Value: DEVDEF<br>Type: CONSTANT_VALUE<br>Id: fda1ba44-f8d3-45e5-8894-ef34f6aa0c96<br>Formula Expression: Formula String: VALUE; Formula Values: DEVDEF; Formula Ptg: DEVDEF; Ptgs: VALUE Index in Ptgs: 1 <br>Source Object Id: org.apache.poi.xssf.usermodel.XSSFEvaluationWorkbook@49d904ec'}
                            ]);


var edges = new vis.DataSet([
                             /* {from: id_a, to: id_b}, */
{from: 'fda1ba44-f8d3-45e5-8894-ef34f6aa0c96', to: '9c3607be-74a1-47aa-8975-44e07e3483cb'},
{from: 'cdfb24d1-9068-4c88-90fb-57138355a9b2', to: '9c3607be-74a1-47aa-8975-44e07e3483cb'},
{from: '9c3607be-74a1-47aa-8975-44e07e3483cb', to: 'd87d5242-a34f-4899-95bd-aed0e582e2a7'}
                            ]);