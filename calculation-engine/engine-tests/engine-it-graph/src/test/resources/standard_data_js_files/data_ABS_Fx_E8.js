var nodes = new vis.DataSet([
                             /* {id: a, label: b, ...}, */
{id: 'f200e74d-e32a-4ed0-9a80-dfd0ff28a33f', label: 'ABS\n77.7', color: '#f0ad4e', title: 'Name: ABS<br>Value: 77.7<br>Type: FUNCTION<br>Id: f200e74d-e32a-4ed0-9a80-dfd0ff28a33f<br>Formula Expression: Formula String: ABS(D3); Formula Values: ABS(77.7); Formula Ptg: ; Ptgs:  Index in Ptgs: 1 <br>Source Object Id: org.apache.poi.xssf.usermodel.XSSFEvaluationWorkbook@475e586c'},
{id: '52bbd551-4b96-4a2c-ae1b-d93b761b689d', label: 'D3\n77.7', color: '#31b0d5', title: 'Name: D3<br>Value: 77.7<br>Type: CELL_WITH_VALUE<br>Id: 52bbd551-4b96-4a2c-ae1b-d93b761b689d<br>Formula Expression: Formula String: D3; Formula Values: 77.7; Formula Ptg: 77.7; Ptgs: D3 Index in Ptgs: 0 <br>Source Object Id: org.apache.poi.xssf.usermodel.XSSFEvaluationWorkbook@475e586c'},
{id: 'f676184e-d2be-4bad-8a5e-ccb19b4874b1', label: 'E8\n77.7', color: '#31b0d5', title: 'Name: E8<br>Value: 77.7<br>Type: CELL_WITH_FORMULA<br>Id: f676184e-d2be-4bad-8a5e-ccb19b4874b1<br>Formula Expression: Formula String: ABS(D3); Formula Values: ABS(77.7); Formula Ptg: 77.7 ABS ; Ptgs: D3 ABS  Index in Ptgs: 1 <br>Source Object Id: org.apache.poi.xssf.usermodel.XSSFEvaluationWorkbook@475e586c'}
                            ]);


var edges = new vis.DataSet([
                             /* {from: id_a, to: id_b}, */
{from: 'f200e74d-e32a-4ed0-9a80-dfd0ff28a33f', to: 'f676184e-d2be-4bad-8a5e-ccb19b4874b1'},
{from: '52bbd551-4b96-4a2c-ae1b-d93b761b689d', to: 'f200e74d-e32a-4ed0-9a80-dfd0ff28a33f'}
                            ]);