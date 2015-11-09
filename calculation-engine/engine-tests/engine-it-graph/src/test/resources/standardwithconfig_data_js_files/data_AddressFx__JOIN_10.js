var nodes = new vis.DataSet([
                             /* {id: a, label: b, ...}, */
{id: '009e74ea-e7e8-449e-b218-5d1b873eed1e', label: 'VALUE\n3.0', color: '#31b0d5', title: 'Name: VALUE<br>Value: 3.0<br>Type: CONSTANT_VALUE<br>Id: 009e74ea-e7e8-449e-b218-5d1b873eed1e<br>Formula Expression: Formula String: VALUE; Formula Values: 3.0; Formula Ptg: 3.0; Ptgs: VALUE Index in Ptgs: 0 <br>Source Object Id: org.apache.poi.xssf.usermodel.XSSFEvaluationWorkbook@14ad42'},
{id: '379a717d-5615-439a-b485-9c0ab513c744', label: 'VALUE\n4.0', color: '#31b0d5', title: 'Name: VALUE<br>Value: 4.0<br>Type: CONSTANT_VALUE<br>Id: 379a717d-5615-439a-b485-9c0ab513c744<br>Formula Expression: Formula String: VALUE; Formula Values: 4.0; Formula Ptg: 4.0; Ptgs: VALUE Index in Ptgs: 1 <br>Source Object Id: org.apache.poi.xssf.usermodel.XSSFEvaluationWorkbook@14ad42'},
{id: '091f1898-b117-484e-af1e-ae8ab42e4f1d', label: 'D5\n$D$3', color: '#31b0d5', title: 'Name: D5<br>Value: $D$3<br>Type: CELL_WITH_FORMULA<br>Id: 091f1898-b117-484e-af1e-ae8ab42e4f1d<br>Formula Expression: Formula String: ADDRESS(VALUE, VALUE); Formula Values: ADDRESS(4.0, 3.0); Formula Ptg: 4.0, 3.0 ADDRESS ; Ptgs: VALUE, VALUE ADDRESS  Index in Ptgs: 2 <br>Source Object Id: org.apache.poi.xssf.usermodel.XSSFEvaluationWorkbook@14ad42'},
{id: '313098d7-44eb-44fa-a6b8-7436cdfaf168', label: 'ADDRESS\n$D$3', color: '#f0ad4e', title: 'Name: ADDRESS<br>Value: $D$3<br>Type: FUNCTION<br>Id: 313098d7-44eb-44fa-a6b8-7436cdfaf168<br>Formula Expression: Formula String: ADDRESS(VALUE, VALUE); Formula Values: ADDRESS(4.0, 3.0); Formula Ptg: ; Ptgs:  Index in Ptgs: 2 <br>Source Object Id: org.apache.poi.xssf.usermodel.XSSFEvaluationWorkbook@14ad42'}
                            ]);


var edges = new vis.DataSet([
                             /* {from: id_a, to: id_b}, */
{from: '379a717d-5615-439a-b485-9c0ab513c744', to: '313098d7-44eb-44fa-a6b8-7436cdfaf168'},
{from: '313098d7-44eb-44fa-a6b8-7436cdfaf168', to: '091f1898-b117-484e-af1e-ae8ab42e4f1d'},
{from: '009e74ea-e7e8-449e-b218-5d1b873eed1e', to: '313098d7-44eb-44fa-a6b8-7436cdfaf168'}
                            ]);