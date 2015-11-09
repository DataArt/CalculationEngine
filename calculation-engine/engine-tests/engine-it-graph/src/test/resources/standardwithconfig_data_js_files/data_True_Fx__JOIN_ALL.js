var nodes = new vis.DataSet([
                             /* {id: a, label: b, ...}, */
{id: '3bbbcdac-59cf-406f-a993-a710017a38a9', label: 'VALUE\nTRUE', color: '#31b0d5', title: 'Name: VALUE<br>Value: TRUE<br>Type: CONSTANT_VALUE<br>Id: 3bbbcdac-59cf-406f-a993-a710017a38a9<br>Formula Expression: Formula String: VALUE; Formula Values: TRUE; Formula Ptg: TRUE; Ptgs: VALUE Index in Ptgs: 0 <br>Source Object Id: org.apache.poi.xssf.usermodel.XSSFEvaluationWorkbook@26ae880a'},
{id: 'acb8a6bf-41fe-4b97-ad19-f1ae718acd4a', label: 'C3\nTRUE', color: '#31b0d5', title: 'Name: C3<br>Value: TRUE<br>Type: CELL_WITH_FORMULA<br>Id: acb8a6bf-41fe-4b97-ad19-f1ae718acd4a<br>Formula Expression: Formula String: VALUE; Formula Values: TRUE; Formula Ptg: TRUE; Ptgs: VALUE Index in Ptgs: 0 <br>Source Object Id: org.apache.poi.xssf.usermodel.XSSFEvaluationWorkbook@26ae880a'}
                            ]);


var edges = new vis.DataSet([
                             /* {from: id_a, to: id_b}, */
{from: '3bbbcdac-59cf-406f-a993-a710017a38a9', to: 'acb8a6bf-41fe-4b97-ad19-f1ae718acd4a'}
                            ]);