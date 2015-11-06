var nodes = new vis.DataSet([
                             /* {id: a, label: b, ...}, */
{id: '447258f7-125e-4019-9dc9-41d424d0d901', label: 'A1\n1.0', color: '#31b0d5', title: 'Name: A1<br>Value: 1.0<br>Type: CELL_WITH_VALUE<br>Id: 447258f7-125e-4019-9dc9-41d424d0d901<br>Formula Expression: Formula String: A1; Formula Values: 1.0; Formula Ptg: 1.0; Ptgs: A1 Index in Ptgs: 0 <br>Source Object Id: org.apache.poi.xssf.usermodel.XSSFEvaluationWorkbook@17690e14'},
{id: 'ed316f68-ea99-4270-8bf6-483652a7535e', label: 'C5\nTRUE', color: '#31b0d5', title: 'Name: C5<br>Value: TRUE<br>Type: CELL_WITH_FORMULA<br>Id: ed316f68-ea99-4270-8bf6-483652a7535e<br>Formula Expression: Formula String: ISNONTEXT(A1); Formula Values: ISNONTEXT(1.0); Formula Ptg: 1.0 ISNONTEXT ; Ptgs: A1 ISNONTEXT  Index in Ptgs: 1 <br>Source Object Id: org.apache.poi.xssf.usermodel.XSSFEvaluationWorkbook@17690e14'},
{id: '4b05fa61-358b-4ff2-96a8-7869a9a257a9', label: 'ISNONTEXT\nTRUE', color: '#f0ad4e', title: 'Name: ISNONTEXT<br>Value: TRUE<br>Type: FUNCTION<br>Id: 4b05fa61-358b-4ff2-96a8-7869a9a257a9<br>Formula Expression: Formula String: ISNONTEXT(A1); Formula Values: ISNONTEXT(1.0); Formula Ptg: ; Ptgs:  Index in Ptgs: 1 <br>Source Object Id: org.apache.poi.xssf.usermodel.XSSFEvaluationWorkbook@17690e14'}
                            ]);


var edges = new vis.DataSet([
                             /* {from: id_a, to: id_b}, */
{from: '447258f7-125e-4019-9dc9-41d424d0d901', to: '4b05fa61-358b-4ff2-96a8-7869a9a257a9'},
{from: '4b05fa61-358b-4ff2-96a8-7869a9a257a9', to: 'ed316f68-ea99-4270-8bf6-483652a7535e'}
                            ]);