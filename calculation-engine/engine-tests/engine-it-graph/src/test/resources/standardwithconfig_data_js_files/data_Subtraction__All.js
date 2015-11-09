var nodes = new vis.DataSet([
                             /* {id: a, label: b, ...}, */
{id: 'ed39d547-de68-4491-beb4-c2606b9ecaf0', label: '-\n60.0', color: '#f0ad4e', title: 'Name: -<br>Value: 60.0<br>Type: OPERATOR<br>Id: ed39d547-de68-4491-beb4-c2606b9ecaf0<br>Formula Expression: Formula String: A1 - A2; Formula Values: 80.0 - 20.0; Formula Ptg: ; Ptgs:  Index in Ptgs: 2 <br>Source Object Id: org.apache.poi.xssf.usermodel.XSSFEvaluationWorkbook@301c0aae'},
{id: '57f36bb1-d54b-4343-8da6-252a3c4a5929', label: 'A2\n20.0', color: '#31b0d5', title: 'Name: A2<br>Value: 20.0<br>Type: CELL_WITH_VALUE<br>Id: 57f36bb1-d54b-4343-8da6-252a3c4a5929<br>Formula Expression: Formula String: A2; Formula Values: 20.0; Formula Ptg: 20.0; Ptgs: A2 Index in Ptgs: 1 <br>Source Object Id: org.apache.poi.xssf.usermodel.XSSFEvaluationWorkbook@301c0aae'},
{id: '42043ff4-208e-46c5-bb0d-cd6218180ed7', label: 'A1\n80.0', color: '#31b0d5', title: 'Name: A1<br>Value: 80.0<br>Type: CELL_WITH_VALUE<br>Id: 42043ff4-208e-46c5-bb0d-cd6218180ed7<br>Formula Expression: Formula String: A1; Formula Values: 80.0; Formula Ptg: 80.0; Ptgs: A1 Index in Ptgs: 0 <br>Source Object Id: org.apache.poi.xssf.usermodel.XSSFEvaluationWorkbook@301c0aae'},
{id: '6a32484d-bf01-4330-b075-292c66c1f24e', label: 'A4\n60.0', color: '#31b0d5', title: 'Name: A4<br>Value: 60.0<br>Type: CELL_WITH_FORMULA<br>Id: 6a32484d-bf01-4330-b075-292c66c1f24e<br>Formula Expression: Formula String: A1 - A2; Formula Values: 80.0 - 20.0; Formula Ptg: 80.0 20.0 -; Ptgs: A1 A2 - Index in Ptgs: 2 <br>Source Object Id: org.apache.poi.xssf.usermodel.XSSFEvaluationWorkbook@301c0aae'}
                            ]);


var edges = new vis.DataSet([
                             /* {from: id_a, to: id_b}, */
{from: '57f36bb1-d54b-4343-8da6-252a3c4a5929', to: 'ed39d547-de68-4491-beb4-c2606b9ecaf0'},
{from: '42043ff4-208e-46c5-bb0d-cd6218180ed7', to: 'ed39d547-de68-4491-beb4-c2606b9ecaf0'},
{from: 'ed39d547-de68-4491-beb4-c2606b9ecaf0', to: '6a32484d-bf01-4330-b075-292c66c1f24e'}
                            ]);