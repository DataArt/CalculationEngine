var nodes = new vis.DataSet([
                             /* {id: a, label: b, ...}, */
{id: '9a4c7864-ab94-4617-9d63-f5b439041949', label: 'VALUE\nTRUE', color: '#31b0d5', title: 'Name: VALUE<br>Value: TRUE<br>Type: CONSTANT_VALUE<br>Id: 9a4c7864-ab94-4617-9d63-f5b439041949<br>Formula Expression: Formula String: VALUE; Formula Values: TRUE; Formula Ptg: TRUE; Ptgs: VALUE Index in Ptgs: 0 <br>Source Object Id: org.apache.poi.xssf.usermodel.XSSFEvaluationWorkbook@48a21ea6'},
{id: '2ae87f80-6d00-41bb-ae97-b3c28d67bef1', label: 'C3\nTRUE', color: '#31b0d5', title: 'Name: C3<br>Value: TRUE<br>Type: CELL_WITH_FORMULA<br>Id: 2ae87f80-6d00-41bb-ae97-b3c28d67bef1<br>Formula Expression: Formula String: VALUE; Formula Values: TRUE; Formula Ptg: TRUE; Ptgs: VALUE Index in Ptgs: 0 <br>Source Object Id: org.apache.poi.xssf.usermodel.XSSFEvaluationWorkbook@48a21ea6'}
                            ]);


var edges = new vis.DataSet([
                             /* {from: id_a, to: id_b}, */
{from: '9a4c7864-ab94-4617-9d63-f5b439041949', to: '2ae87f80-6d00-41bb-ae97-b3c28d67bef1'}
                            ]);