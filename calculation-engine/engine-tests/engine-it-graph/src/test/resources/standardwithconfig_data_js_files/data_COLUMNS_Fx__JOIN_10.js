var nodes = new vis.DataSet([
                             /* {id: a, label: b, ...}, */
{id: '7d172f28-b2ac-471c-acd4-ec6b3ea5569a', label: 'E5\n7.0', color: '#31b0d5', title: 'Name: E5<br>Value: 7.0<br>Type: CELL_WITH_FORMULA<br>Id: 7d172f28-b2ac-471c-acd4-ec6b3ea5569a<br>Formula Expression: Formula String: COLUMNS(C2:I3); Formula Values: COLUMNS(7.0, 65.0, 7.0, 6.0, 4.0, 7.0, 65.0, 8.0, 367.0, 57.0, 4.0, 6.0, 8.0, 367.0); Formula Ptg: 7.0, 65.0, 7.0, 6.0, 4.0, 7.0, 65.0, 8.0, 367.0, 57.0, 4.0, 6.0, 8.0, 367.0 COLUMNS ; Ptgs: C2:I3 COLUMNS  Index in Ptgs: 1 <br>Source Object Id: org.apache.poi.xssf.usermodel.XSSFEvaluationWorkbook@363fe35a'},
{id: 'edc4c766-ffc1-4744-b20f-6ae41b3f9bf1', label: 'COLUMNS\n7.0', color: '#f0ad4e', title: 'Name: COLUMNS<br>Value: 7.0<br>Type: FUNCTION<br>Id: edc4c766-ffc1-4744-b20f-6ae41b3f9bf1<br>Formula Expression: Formula String: COLUMNS(C2:I3); Formula Values: COLUMNS(7.0, 65.0, 7.0, 6.0, 4.0, 7.0, 65.0, 8.0, 367.0, 57.0, 4.0, 6.0, 8.0, 367.0); Formula Ptg: ; Ptgs:  Index in Ptgs: 1 <br>Source Object Id: org.apache.poi.xssf.usermodel.XSSFEvaluationWorkbook@363fe35a'},
{id: '0958b211-5bb9-41f5-a5ee-fbad098d433e', label: 'C2:I3\n...', color: '#31b0d5', title: 'Name: C2:I3<br>Value: [[7.0, 65.0, 7.0, 6.0, 4.0, 7.0, 65.0], [8.0, 367.0, 57.0, 4.0, 6.0, 8.0, 367.0]]<br>Type: RANGE<br>Id: 0958b211-5bb9-41f5-a5ee-fbad098d433e<br>Formula Expression: Formula String: C2:I3; Formula Values: [[7.0, 65.0, 7.0, 6.0, 4.0, 7.0, 65.0], [8.0, 367.0, 57.0, 4.0, 6.0, 8.0, 367.0]]; Formula Ptg: [[7.0, 65.0, 7.0, 6.0, 4.0, 7.0, 65.0], [8.0, 367.0, 57.0, 4.0, 6.0, 8.0, 367.0]]; Ptgs: C2:I3 Index in Ptgs: 0 <br>Source Object Id: org.apache.poi.xssf.usermodel.XSSFEvaluationWorkbook@363fe35a'}
                            ]);


var edges = new vis.DataSet([
                             /* {from: id_a, to: id_b}, */
{from: 'edc4c766-ffc1-4744-b20f-6ae41b3f9bf1', to: '7d172f28-b2ac-471c-acd4-ec6b3ea5569a'},
{from: '0958b211-5bb9-41f5-a5ee-fbad098d433e', to: 'edc4c766-ffc1-4744-b20f-6ae41b3f9bf1'}
                            ]);