var nodes = new vis.DataSet([
                             /* {id: a, label: b, ...}, */
{id: '5e8f3d21-70fc-46fa-8705-6e74d7fd7bf5', label: 'VALUE\nTRUE', color: '#31b0d5', title: 'Name: VALUE<br>Value: TRUE<br>Type: CONSTANT_VALUE<br>Id: 5e8f3d21-70fc-46fa-8705-6e74d7fd7bf5<br>Formula Expression: Formula String: VALUE; Formula Values: TRUE; Formula Ptg: TRUE; Ptgs: VALUE Index in Ptgs: 0 <br>Source Object Id: org.apache.poi.xssf.usermodel.XSSFEvaluationWorkbook@48a21ea6'},
{id: 'd2edaed8-b678-45d5-b769-517887815a0a', label: 'C3\nTRUE', color: '#31b0d5', title: 'Name: C3<br>Value: TRUE<br>Type: CELL_WITH_FORMULA<br>Id: d2edaed8-b678-45d5-b769-517887815a0a<br>Formula Expression: Formula String: VALUE; Formula Values: TRUE; Formula Ptg: TRUE; Ptgs: VALUE Index in Ptgs: 0 <br>Source Object Id: org.apache.poi.xssf.usermodel.XSSFEvaluationWorkbook@48a21ea6'}
                            ]);


var edges = new vis.DataSet([
                             /* {from: id_a, to: id_b}, */
{from: '5e8f3d21-70fc-46fa-8705-6e74d7fd7bf5', to: 'd2edaed8-b678-45d5-b769-517887815a0a'}
                            ]);