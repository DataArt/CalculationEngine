var nodes = new vis.DataSet([
                             /* {id: a, label: b, ...}, */
{id: 'd31c636c-bf6a-4399-aedd-10f3b1a06b4e', label: 'D11\n#NAME?', color: '#31b0d5', title: 'Name: D11<br>Value: #NAME?<br>Type: CELL_WITH_FORMULA<br>Id: d31c636c-bf6a-4399-aedd-10f3b1a06b4e<br>Formula Expression: Formula String: ISERROR(E2); Formula Values: ISERROR(#NAME?); Formula Ptg: #NAME? ISERROR ; Ptgs: E2 ISERROR  Index in Ptgs: 1 <br>Source Object Id: org.apache.poi.xssf.usermodel.XSSFEvaluationWorkbook@3b2cf7ab'},
{id: 'bc97f32f-c196-44c1-94b5-50d8d47f18e5', label: 'ISERROR\n#NAME?', color: '#f0ad4e', title: 'Name: ISERROR<br>Value: #NAME?<br>Type: FUNCTION<br>Id: bc97f32f-c196-44c1-94b5-50d8d47f18e5<br>Formula Expression: Formula String: ISERROR(E2); Formula Values: ISERROR(#NAME?); Formula Ptg: ; Ptgs:  Index in Ptgs: 1 <br>Source Object Id: org.apache.poi.xssf.usermodel.XSSFEvaluationWorkbook@3b2cf7ab'},
{id: 'f8402a33-50da-476b-a872-138767996d6c', label: 'E2\n#NAME?', color: '#31b0d5', title: 'Name: E2<br>Value: #NAME?<br>Type: CELL_WITH_VALUE<br>Id: f8402a33-50da-476b-a872-138767996d6c<br>Formula Expression: Formula String: E2; Formula Values: #NAME?; Formula Ptg: #NAME?; Ptgs: E2 Index in Ptgs: 0 <br>Source Object Id: org.apache.poi.xssf.usermodel.XSSFEvaluationWorkbook@3b2cf7ab'}
                            ]);


var edges = new vis.DataSet([
                             /* {from: id_a, to: id_b}, */
{from: 'f8402a33-50da-476b-a872-138767996d6c', to: 'bc97f32f-c196-44c1-94b5-50d8d47f18e5'},
{from: 'bc97f32f-c196-44c1-94b5-50d8d47f18e5', to: 'd31c636c-bf6a-4399-aedd-10f3b1a06b4e'}
                            ]);