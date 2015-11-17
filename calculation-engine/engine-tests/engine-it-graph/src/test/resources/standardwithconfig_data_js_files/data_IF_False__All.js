var nodes = new vis.DataSet([
                             /* {id: a, label: b, ...}, */
{id: '9e45c516-273e-4110-bd4f-4bd75de6ff77', label: 'E6\n8.0', color: '#31b0d5', title: 'Name: E6<br>Value: 8.0<br>Type: CELL_WITH_FORMULA<br>Id: 9e45c516-273e-4110-bd4f-4bd75de6ff77<br>Formula Expression: Formula String: IF(D1>5,D2,C3); Formula Values: IF(4.0 > 5.0, 8.0); Formula Ptg: 8.0, 4.0 5.0 > IF ; Ptgs: C3, D1 VALUE > IF  Index in Ptgs: 3 <br>Source Object Id: org.apache.poi.xssf.usermodel.XSSFEvaluationWorkbook@71cdde0c'},
{id: '732c6f17-3526-4f26-b70e-2e7d371ca194', label: 'IF\n8.0', color: '#f0ad4e', title: 'Name: IF<br>Value: 8.0<br>Type: IF<br>Id: 732c6f17-3526-4f26-b70e-2e7d371ca194<br>Formula Expression: Formula String: IF(D1>5,D2,C3); Formula Values: IF(4.0 > 5.0, 8.0); Formula Ptg: ; Ptgs:  Index in Ptgs: 3 <br>Source Object Id: org.apache.poi.xssf.usermodel.XSSFEvaluationWorkbook@71cdde0c'},
{id: '22186b2a-2115-4491-a975-77480f3b2484', label: '>\nFALSE', color: '#f0ad4e', title: 'Name: ><br>Value: FALSE<br>Type: OPERATOR<br>Id: 22186b2a-2115-4491-a975-77480f3b2484<br>Formula Expression: Formula String: D1 > VALUE; Formula Values: 4.0 > 5.0; Formula Ptg: ; Ptgs:  Index in Ptgs: 2 <br>Source Object Id: org.apache.poi.xssf.usermodel.XSSFEvaluationWorkbook@71cdde0c'},
{id: '770a1d2b-3dc2-41d4-ae79-d47f822a8a7d', label: 'VALUE\n5.0', color: '#31b0d5', title: 'Name: VALUE<br>Value: 5.0<br>Type: CONSTANT_VALUE<br>Id: 770a1d2b-3dc2-41d4-ae79-d47f822a8a7d<br>Formula Expression: Formula String: VALUE; Formula Values: 5.0; Formula Ptg: 5.0; Ptgs: VALUE Index in Ptgs: 1 <br>Source Object Id: org.apache.poi.xssf.usermodel.XSSFEvaluationWorkbook@71cdde0c'},
{id: 'a16decbd-1b66-4db1-acda-6f42d382b432', label: 'C3\n8.0', color: '#31b0d5', title: 'Name: C3<br>Value: 8.0<br>Type: CELL_WITH_VALUE<br>Id: a16decbd-1b66-4db1-acda-6f42d382b432<br>Formula Expression: Formula String: C3; Formula Values: 8.0; Formula Ptg: 8.0; Ptgs: C3 Index in Ptgs: 6 <br>Source Object Id: org.apache.poi.xssf.usermodel.XSSFEvaluationWorkbook@71cdde0c'},
{id: 'b99edcf3-0569-4df1-a37b-6573724b0737', label: 'D1\n4.0', color: '#31b0d5', title: 'Name: D1<br>Value: 4.0<br>Type: CELL_WITH_VALUE<br>Id: b99edcf3-0569-4df1-a37b-6573724b0737<br>Formula Expression: Formula String: D1; Formula Values: 4.0; Formula Ptg: 4.0; Ptgs: D1 Index in Ptgs: 0 <br>Source Object Id: org.apache.poi.xssf.usermodel.XSSFEvaluationWorkbook@71cdde0c'}
                            ]);


var edges = new vis.DataSet([
                             /* {from: id_a, to: id_b}, */
{from: '22186b2a-2115-4491-a975-77480f3b2484', to: '732c6f17-3526-4f26-b70e-2e7d371ca194'},
{from: 'b99edcf3-0569-4df1-a37b-6573724b0737', to: '22186b2a-2115-4491-a975-77480f3b2484'},
{from: '770a1d2b-3dc2-41d4-ae79-d47f822a8a7d', to: '22186b2a-2115-4491-a975-77480f3b2484'},
{from: 'a16decbd-1b66-4db1-acda-6f42d382b432', to: '732c6f17-3526-4f26-b70e-2e7d371ca194'},
{from: '732c6f17-3526-4f26-b70e-2e7d371ca194', to: '9e45c516-273e-4110-bd4f-4bd75de6ff77'}
                            ]);