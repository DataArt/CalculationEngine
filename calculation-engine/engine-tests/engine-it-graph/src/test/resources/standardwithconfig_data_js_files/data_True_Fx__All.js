var nodes = new vis.DataSet([
                             /* {id: a, label: b, ...}, */
{id: 'db46ec18-e785-4a52-aa06-f2d6315d6361', label: 'C3\nTRUE', color: '#31b0d5', title: 'Name: C3<br>Value: TRUE<br>Type: CELL_WITH_FORMULA<br>Id: db46ec18-e785-4a52-aa06-f2d6315d6361<br>Formula Expression: Formula String: VALUE; Formula Values: TRUE; Formula Ptg: TRUE; Ptgs: VALUE Index in Ptgs: 0 <br>Source Object Id: org.apache.poi.xssf.usermodel.XSSFEvaluationWorkbook@450b99f2'},
{id: 'fec8e540-bff8-4cc4-b0d4-2a46daa1f56f', label: 'VALUE\nTRUE', color: '#31b0d5', title: 'Name: VALUE<br>Value: TRUE<br>Type: CONSTANT_VALUE<br>Id: fec8e540-bff8-4cc4-b0d4-2a46daa1f56f<br>Formula Expression: Formula String: VALUE; Formula Values: TRUE; Formula Ptg: TRUE; Ptgs: VALUE Index in Ptgs: 0 <br>Source Object Id: org.apache.poi.xssf.usermodel.XSSFEvaluationWorkbook@450b99f2'}
                            ]);


var edges = new vis.DataSet([
                             /* {from: id_a, to: id_b}, */
{from: 'fec8e540-bff8-4cc4-b0d4-2a46daa1f56f', to: 'db46ec18-e785-4a52-aa06-f2d6315d6361'}
                            ]);