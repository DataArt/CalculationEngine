var nodes = new vis.DataSet([
                             /* {id: a, label: b, ...}, */
{id: 'e41f95e6-a26f-417d-b624-cc507cc3cc6b', label: 'VALUE\nTRUE', color: '#31b0d5', title: 'Name: VALUE<br>Value: TRUE<br>Type: CONSTANT_VALUE<br>Id: e41f95e6-a26f-417d-b624-cc507cc3cc6b<br>Formula Expression: Formula String: VALUE; Formula Values: TRUE; Formula Ptg: TRUE; Ptgs: VALUE Index in Ptgs: 0 <br>Source Object Id: org.apache.poi.xssf.usermodel.XSSFEvaluationWorkbook@26ae880a'},
{id: 'f3813a5f-1bf9-4432-93f0-041ed007deb5', label: 'C3\nTRUE', color: '#31b0d5', title: 'Name: C3<br>Value: TRUE<br>Type: CELL_WITH_FORMULA<br>Id: f3813a5f-1bf9-4432-93f0-041ed007deb5<br>Formula Expression: Formula String: VALUE; Formula Values: TRUE; Formula Ptg: TRUE; Ptgs: VALUE Index in Ptgs: 0 <br>Source Object Id: org.apache.poi.xssf.usermodel.XSSFEvaluationWorkbook@26ae880a'}
                            ]);


var edges = new vis.DataSet([
                             /* {from: id_a, to: id_b}, */
{from: 'e41f95e6-a26f-417d-b624-cc507cc3cc6b', to: 'f3813a5f-1bf9-4432-93f0-041ed007deb5'}
                            ]);