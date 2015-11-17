var nodes = new vis.DataSet([
                             /* {id: a, label: b, ...}, */
{id: '72a5896a-b05c-4b2b-8d43-2227d2d939f7', label: 'D1\n4.0', color: '#31b0d5', title: 'Name: D1<br>Value: 4.0<br>Type: CELL_WITH_VALUE<br>Id: 72a5896a-b05c-4b2b-8d43-2227d2d939f7<br>Formula Expression: Formula String: D1; Formula Values: 4.0; Formula Ptg: 4.0; Ptgs: D1 Index in Ptgs: 0 <br>Source Object Id: org.apache.poi.xssf.usermodel.XSSFEvaluationWorkbook@6b4a4e40'},
{id: 'a07703cf-e2e1-430a-ad8f-c16609abbee0', label: '<\nTRUE', color: '#f0ad4e', title: 'Name: <<br>Value: TRUE<br>Type: OPERATOR<br>Id: a07703cf-e2e1-430a-ad8f-c16609abbee0<br>Formula Expression: Formula String: D1 < VALUE; Formula Values: 4.0 < 5.0; Formula Ptg: ; Ptgs:  Index in Ptgs: 2 <br>Source Object Id: org.apache.poi.xssf.usermodel.XSSFEvaluationWorkbook@6b4a4e40'},
{id: '597b80ed-8e8e-447c-ac0e-e881bfd68551', label: 'VALUE\n5.0', color: '#31b0d5', title: 'Name: VALUE<br>Value: 5.0<br>Type: CONSTANT_VALUE<br>Id: 597b80ed-8e8e-447c-ac0e-e881bfd68551<br>Formula Expression: Formula String: VALUE; Formula Values: 5.0; Formula Ptg: 5.0; Ptgs: VALUE Index in Ptgs: 1 <br>Source Object Id: org.apache.poi.xssf.usermodel.XSSFEvaluationWorkbook@6b4a4e40'},
{id: '55b470f5-842a-43b4-8dec-209e1984f84d', label: 'E6\n65.0', color: '#31b0d5', title: 'Name: E6<br>Value: 65.0<br>Type: CELL_WITH_FORMULA<br>Id: 55b470f5-842a-43b4-8dec-209e1984f84d<br>Formula Expression: Formula String: IF(D1<5,D2,C3); Formula Values: IF(4.0 < 5.0, 65.0); Formula Ptg: 65.0, 4.0 5.0 < IF ; Ptgs: D2, D1 VALUE < IF  Index in Ptgs: 3 <br>Source Object Id: org.apache.poi.xssf.usermodel.XSSFEvaluationWorkbook@6b4a4e40'},
{id: 'b70cc059-0bd5-4e96-b8b1-a667ce1545e3', label: 'D2\n65.0', color: '#31b0d5', title: 'Name: D2<br>Value: 65.0<br>Type: CELL_WITH_VALUE<br>Id: b70cc059-0bd5-4e96-b8b1-a667ce1545e3<br>Formula Expression: Formula String: D2; Formula Values: 65.0; Formula Ptg: 65.0; Ptgs: D2 Index in Ptgs: 4 <br>Source Object Id: org.apache.poi.xssf.usermodel.XSSFEvaluationWorkbook@6b4a4e40'},
{id: '9d7ac64a-1ef6-4147-af7d-c032272f4d49', label: 'IF\n65.0', color: '#f0ad4e', title: 'Name: IF<br>Value: 65.0<br>Type: IF<br>Id: 9d7ac64a-1ef6-4147-af7d-c032272f4d49<br>Formula Expression: Formula String: IF(D1<5,D2,C3); Formula Values: IF(4.0 < 5.0, 65.0); Formula Ptg: ; Ptgs:  Index in Ptgs: 3 <br>Source Object Id: org.apache.poi.xssf.usermodel.XSSFEvaluationWorkbook@6b4a4e40'}
                            ]);


var edges = new vis.DataSet([
                             /* {from: id_a, to: id_b}, */
{from: '9d7ac64a-1ef6-4147-af7d-c032272f4d49', to: '55b470f5-842a-43b4-8dec-209e1984f84d'},
{from: 'b70cc059-0bd5-4e96-b8b1-a667ce1545e3', to: '9d7ac64a-1ef6-4147-af7d-c032272f4d49'},
{from: 'a07703cf-e2e1-430a-ad8f-c16609abbee0', to: '9d7ac64a-1ef6-4147-af7d-c032272f4d49'},
{from: '72a5896a-b05c-4b2b-8d43-2227d2d939f7', to: 'a07703cf-e2e1-430a-ad8f-c16609abbee0'},
{from: '597b80ed-8e8e-447c-ac0e-e881bfd68551', to: 'a07703cf-e2e1-430a-ad8f-c16609abbee0'}
                            ]);