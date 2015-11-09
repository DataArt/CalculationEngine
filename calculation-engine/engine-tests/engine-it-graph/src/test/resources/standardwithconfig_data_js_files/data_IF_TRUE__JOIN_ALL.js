var nodes = new vis.DataSet([
                             /* {id: a, label: b, ...}, */
{id: 'f175e515-4f65-43a4-a26e-5862478894a2', label: 'VALUE\n5.0', color: '#31b0d5', title: 'Name: VALUE<br>Value: 5.0<br>Type: CONSTANT_VALUE<br>Id: f175e515-4f65-43a4-a26e-5862478894a2<br>Formula Expression: Formula String: VALUE; Formula Values: 5.0; Formula Ptg: 5.0; Ptgs: VALUE Index in Ptgs: 1 <br>Source Object Id: org.apache.poi.xssf.usermodel.XSSFEvaluationWorkbook@70ab80e3'},
{id: 'ffb23ef1-943d-4aae-8a21-1a958378c721', label: 'D1\n4.0', color: '#31b0d5', title: 'Name: D1<br>Value: 4.0<br>Type: CELL_WITH_VALUE<br>Id: ffb23ef1-943d-4aae-8a21-1a958378c721<br>Formula Expression: Formula String: D1; Formula Values: 4.0; Formula Ptg: 4.0; Ptgs: D1 Index in Ptgs: 0 <br>Source Object Id: org.apache.poi.xssf.usermodel.XSSFEvaluationWorkbook@70ab80e3'},
{id: '982916a4-cccc-441f-ae49-ca65909b68a7', label: '<\nTRUE', color: '#f0ad4e', title: 'Name: <<br>Value: TRUE<br>Type: OPERATOR<br>Id: 982916a4-cccc-441f-ae49-ca65909b68a7<br>Formula Expression: Formula String: D1 < VALUE; Formula Values: 4.0 < 5.0; Formula Ptg: ; Ptgs:  Index in Ptgs: 2 <br>Source Object Id: org.apache.poi.xssf.usermodel.XSSFEvaluationWorkbook@70ab80e3'},
{id: '3638d405-9d9b-4d5e-90bd-5bbe7a0a800b', label: 'E6\n65.0', color: '#31b0d5', title: 'Name: E6<br>Value: 65.0<br>Type: CELL_WITH_FORMULA<br>Id: 3638d405-9d9b-4d5e-90bd-5bbe7a0a800b<br>Formula Expression: Formula String: IF(D1<5,D2,C3); Formula Values: IF(4.0 < 5.0, 65.0); Formula Ptg: 65.0, 4.0 5.0 < IF ; Ptgs: D2, D1 VALUE < IF  Index in Ptgs: 3 <br>Source Object Id: org.apache.poi.xssf.usermodel.XSSFEvaluationWorkbook@70ab80e3'},
{id: 'ae165c7f-4f9c-4917-9ee8-db030c45e908', label: 'D2\n65.0', color: '#31b0d5', title: 'Name: D2<br>Value: 65.0<br>Type: CELL_WITH_VALUE<br>Id: ae165c7f-4f9c-4917-9ee8-db030c45e908<br>Formula Expression: Formula String: D2; Formula Values: 65.0; Formula Ptg: 65.0; Ptgs: D2 Index in Ptgs: 4 <br>Source Object Id: org.apache.poi.xssf.usermodel.XSSFEvaluationWorkbook@70ab80e3'},
{id: 'f0d3fd4a-2927-4f6d-9329-437e38cb93f4', label: 'IF\n65.0', color: '#f0ad4e', title: 'Name: IF<br>Value: 65.0<br>Type: IF<br>Id: f0d3fd4a-2927-4f6d-9329-437e38cb93f4<br>Formula Expression: Formula String: IF(D1<5,D2,C3); Formula Values: IF(4.0 < 5.0, 65.0); Formula Ptg: ; Ptgs:  Index in Ptgs: 3 <br>Source Object Id: org.apache.poi.xssf.usermodel.XSSFEvaluationWorkbook@70ab80e3'}
                            ]);


var edges = new vis.DataSet([
                             /* {from: id_a, to: id_b}, */
{from: 'f0d3fd4a-2927-4f6d-9329-437e38cb93f4', to: '3638d405-9d9b-4d5e-90bd-5bbe7a0a800b'},
{from: '982916a4-cccc-441f-ae49-ca65909b68a7', to: 'f0d3fd4a-2927-4f6d-9329-437e38cb93f4'},
{from: 'ae165c7f-4f9c-4917-9ee8-db030c45e908', to: 'f0d3fd4a-2927-4f6d-9329-437e38cb93f4'},
{from: 'ffb23ef1-943d-4aae-8a21-1a958378c721', to: '982916a4-cccc-441f-ae49-ca65909b68a7'},
{from: 'f175e515-4f65-43a4-a26e-5862478894a2', to: '982916a4-cccc-441f-ae49-ca65909b68a7'}
                            ]);