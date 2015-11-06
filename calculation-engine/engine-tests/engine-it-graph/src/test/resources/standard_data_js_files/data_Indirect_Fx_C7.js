var nodes = new vis.DataSet([
                             /* {id: a, label: b, ...}, */
{id: '258d49a0-8aab-43c9-8fc0-0abffb2556c3', label: 'VALUE\nBolt', color: '#31b0d5', title: 'Name: VALUE<br>Value: Bolt<br>Type: CONSTANT_VALUE<br>Id: 258d49a0-8aab-43c9-8fc0-0abffb2556c3<br>Formula Expression: Formula String: VALUE; Formula Values: Bolt; Formula Ptg: Bolt; Ptgs: VALUE Index in Ptgs: 0 <br>Source Object Id: org.apache.poi.xssf.usermodel.XSSFEvaluationWorkbook@6bd16207'},
{id: 'b9dbddfe-4dec-490b-979a-a61719abdc92', label: 'C7\n10.0', color: '#31b0d5', title: 'Name: C7<br>Value: 10.0<br>Type: CELL_WITH_FORMULA<br>Id: b9dbddfe-4dec-490b-979a-a61719abdc92<br>Formula Expression: Formula String: INDIRECT(VALUE); Formula Values: INDIRECT(Bolt); Formula Ptg: Bolt INDIRECT ; Ptgs: VALUE INDIRECT  Index in Ptgs: 1 <br>Source Object Id: org.apache.poi.xssf.usermodel.XSSFEvaluationWorkbook@6bd16207'},
{id: 'c453c823-5a31-41b8-b63b-c1ac57b3bfb8', label: 'INDIRECT\n10.0', color: '#f0ad4e', title: 'Name: INDIRECT<br>Value: 10.0<br>Type: FUNCTION<br>Id: c453c823-5a31-41b8-b63b-c1ac57b3bfb8<br>Formula Expression: Formula String: INDIRECT(VALUE); Formula Values: INDIRECT(Bolt); Formula Ptg: ; Ptgs:  Index in Ptgs: 1 <br>Source Object Id: org.apache.poi.xssf.usermodel.XSSFEvaluationWorkbook@6bd16207'}
                            ]);


var edges = new vis.DataSet([
                             /* {from: id_a, to: id_b}, */
{from: 'c453c823-5a31-41b8-b63b-c1ac57b3bfb8', to: 'b9dbddfe-4dec-490b-979a-a61719abdc92'},
{from: '258d49a0-8aab-43c9-8fc0-0abffb2556c3', to: 'c453c823-5a31-41b8-b63b-c1ac57b3bfb8'}
                            ]);