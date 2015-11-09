var nodes = new vis.DataSet([
                             /* {id: a, label: b, ...}, */
{id: 'cf6d4ff8-fb49-4fe1-9d37-22e16df05254', label: '-\n-290.0', color: '#f0ad4e', title: 'Name: -<br>Value: -290.0<br>Type: OPERATOR<br>Id: cf6d4ff8-fb49-4fe1-9d37-22e16df05254<br>Formula Expression: Formula String: A2 - B2 - C2; Formula Values: 250.0 - 240.0 - 300.0; Formula Ptg: ; Ptgs:  Index in Ptgs: 4 <br>Source Object Id: org.apache.poi.xssf.usermodel.XSSFEvaluationWorkbook@24e5389c'},
{id: 'c2ca4a8e-f26e-42ac-822e-22942f3da046', label: 'VALUE\nDEVDEF', color: '#31b0d5', title: 'Name: VALUE<br>Value: DEVDEF<br>Type: CONSTANT_VALUE<br>Id: c2ca4a8e-f26e-42ac-822e-22942f3da046<br>Formula Expression: Formula String: VALUE; Formula Values: DEVDEF; Formula Ptg: DEVDEF; Ptgs: VALUE Index in Ptgs: 1 <br>Source Object Id: org.apache.poi.xssf.usermodel.XSSFEvaluationWorkbook@24e5389c'},
{id: '5a9964e7-82e8-46e3-b65a-4c311234c80f', label: 'B2\n240.0', color: '#31b0d5', title: 'Name: B2<br>Value: 240.0<br>Type: CELL_WITH_VALUE<br>Id: 5a9964e7-82e8-46e3-b65a-4c311234c80f<br>Formula Expression: Formula String: B2; Formula Values: 240.0; Formula Ptg: 240.0; Ptgs: B2 Index in Ptgs: 1 <br>Source Object Id: org.apache.poi.xssf.usermodel.XSSFEvaluationWorkbook@24e5389c'},
{id: 'd4de5b6e-6e3b-4e42-aa46-ec915d601d60', label: 'D2\n-290.0', color: '#31b0d5', title: 'Name: D2<br>Value: -290.0<br>Type: CELL_WITH_FORMULA<br>Id: d4de5b6e-6e3b-4e42-aa46-ec915d601d60<br>Formula Expression: Formula String: A2 - B2 - C2; Formula Values: 250.0 - 240.0 - 300.0; Formula Ptg: 250.0 240.0 - 300.0 -; Ptgs: A2 B2 - C2 - Index in Ptgs: 4 <br>Source Object Id: org.apache.poi.xssf.usermodel.XSSFEvaluationWorkbook@24e5389c'},
{id: 'a8484d42-1d6b-4532-8e0b-e077dc298dc5', label: 'VALUE\n#', color: '#31b0d5', title: 'Name: VALUE<br>Value: #<br>Type: CONSTANT_VALUE<br>Id: a8484d42-1d6b-4532-8e0b-e077dc298dc5<br>Formula Expression: Formula String: VALUE; Formula Values: #; Formula Ptg: #; Ptgs: VALUE Index in Ptgs: 5 <br>Source Object Id: org.apache.poi.xssf.usermodel.XSSFEvaluationWorkbook@24e5389c'},
{id: '2cc8feb1-f16c-4fc8-b2cb-6422773008fa', label: 'E3\n-290.0', color: '#31b0d5', title: 'Name: E3<br>Value: -290.0<br>Type: CELL_WITH_FORMULA<br>Id: 2cc8feb1-f16c-4fc8-b2cb-6422773008fa<br>Formula Expression: Formula String: FUNCEXEC(C2, B2, A2, VALUE); Formula Values: FUNCEXEC(300.0, 240.0, 250.0, DEVDEF); Formula Ptg: 300.0, 240.0, 250.0, DEVDEF FUNCEXEC ; Ptgs: C2, B2, A2, VALUE FUNCEXEC  Index in Ptgs: 5 <br>Source Object Id: org.apache.poi.xssf.usermodel.XSSFEvaluationWorkbook@24e5389c'},
{id: '51543d4c-2706-4199-be9b-d8d74ac93214', label: '-\n10.0', color: '#f0ad4e', title: 'Name: -<br>Value: 10.0<br>Type: OPERATOR<br>Id: 51543d4c-2706-4199-be9b-d8d74ac93214<br>Formula Expression: Formula String: A2 - B2; Formula Values: 250.0 - 240.0; Formula Ptg: ; Ptgs:  Index in Ptgs: 2 <br>Source Object Id: org.apache.poi.xssf.usermodel.XSSFEvaluationWorkbook@24e5389c'},
{id: 'ab9809a3-9c00-4ed2-806d-c1cde1198141', label: 'C2\n300.0', color: '#31b0d5', title: 'Name: C2<br>Value: 300.0<br>Type: CELL_WITH_VALUE<br>Id: ab9809a3-9c00-4ed2-806d-c1cde1198141<br>Formula Expression: Formula String: C2; Formula Values: 300.0; Formula Ptg: 300.0; Ptgs: C2 Index in Ptgs: 4 <br>Source Object Id: org.apache.poi.xssf.usermodel.XSSFEvaluationWorkbook@24e5389c'},
{id: '0b04c4c6-746e-4d7e-9e49-e7478b310dff', label: 'A2\n250.0', color: '#31b0d5', title: 'Name: A2<br>Value: 250.0<br>Type: CELL_WITH_VALUE<br>Id: 0b04c4c6-746e-4d7e-9e49-e7478b310dff<br>Formula Expression: Formula String: A2; Formula Values: 250.0; Formula Ptg: 250.0; Ptgs: A2 Index in Ptgs: 2 <br>Source Object Id: org.apache.poi.xssf.usermodel.XSSFEvaluationWorkbook@24e5389c'},
{id: '043f7fed-af58-44ef-9ccf-a4a7e9c12dae', label: 'FUNCEXEC\n-290.0', color: '#f0ad4e', title: 'Name: FUNCEXEC<br>Value: -290.0<br>Type: FUNCTION<br>Id: 043f7fed-af58-44ef-9ccf-a4a7e9c12dae<br>Formula Expression: Formula String: FUNCEXEC(C2, B2, A2, VALUE); Formula Values: FUNCEXEC(300.0, 240.0, 250.0, DEVDEF); Formula Ptg: ; Ptgs:  Index in Ptgs: 5 <br>Source Object Id: org.apache.poi.xssf.usermodel.XSSFEvaluationWorkbook@24e5389c'},
{id: '1ca6bba7-9747-493e-81d7-a2f2bac96ba5', label: 'VALUE\nDEVDEF', color: '#31b0d5', title: 'Name: VALUE<br>Value: DEVDEF<br>Type: CONSTANT_VALUE<br>Id: 1ca6bba7-9747-493e-81d7-a2f2bac96ba5<br>Formula Expression: Formula String: VALUE; Formula Values: DEVDEF; Formula Ptg: DEVDEF; Ptgs: VALUE Index in Ptgs: 1 <br>Source Object Id: org.apache.poi.xssf.usermodel.XSSFEvaluationWorkbook@24e5389c'},
{id: '3453296d-b7f9-4437-b078-83bc9d2e7f26', label: 'D3\nDEFINE', color: '#31b0d5', title: 'Name: D3<br>Value: DEFINE<br>Type: CELL_WITH_FORMULA<br>Id: 3453296d-b7f9-4437-b078-83bc9d2e7f26<br>Formula Expression: Formula String: DEFINE(A2 - B2 - C2, VALUE, C2, B2, A2, VALUE); Formula Values: DEFINE(250.0 - 240.0 - 300.0, #, 300.0, 240.0, 250.0, DEVDEF); Formula Ptg: 250.0 240.0 - 300.0 -, #, 300.0, 240.0, 250.0, DEVDEF DEFINE ; Ptgs: A2 B2 - C2 -, VALUE, C2, B2, A2, VALUE DEFINE  Index in Ptgs: 7 <br>Source Object Id: org.apache.poi.xssf.usermodel.XSSFEvaluationWorkbook@24e5389c'},
{id: 'b31e4a71-5d36-4261-9de5-e03a92c45dba', label: 'DEFINE\nDEFINE', color: '#f0ad4e', title: 'Name: DEFINE<br>Value: DEFINE<br>Type: FUNCTION<br>Id: b31e4a71-5d36-4261-9de5-e03a92c45dba<br>Formula Expression: Formula String: DEFINE(A2 - B2 - C2, VALUE, C2, B2, A2, VALUE); Formula Values: DEFINE(250.0 - 240.0 - 300.0, #, 300.0, 240.0, 250.0, DEVDEF); Formula Ptg: ; Ptgs:  Index in Ptgs: 7 <br>Source Object Id: org.apache.poi.xssf.usermodel.XSSFEvaluationWorkbook@24e5389c'}
                            ]);


var edges = new vis.DataSet([
                             /* {from: id_a, to: id_b}, */
{from: '043f7fed-af58-44ef-9ccf-a4a7e9c12dae', to: '2cc8feb1-f16c-4fc8-b2cb-6422773008fa'},
{from: 'ab9809a3-9c00-4ed2-806d-c1cde1198141', to: 'b31e4a71-5d36-4261-9de5-e03a92c45dba'},
{from: 'b31e4a71-5d36-4261-9de5-e03a92c45dba', to: '3453296d-b7f9-4437-b078-83bc9d2e7f26'},
{from: 'ab9809a3-9c00-4ed2-806d-c1cde1198141', to: 'cf6d4ff8-fb49-4fe1-9d37-22e16df05254'},
{from: 'c2ca4a8e-f26e-42ac-822e-22942f3da046', to: '043f7fed-af58-44ef-9ccf-a4a7e9c12dae'},
{from: '5a9964e7-82e8-46e3-b65a-4c311234c80f', to: '51543d4c-2706-4199-be9b-d8d74ac93214'},
{from: '5a9964e7-82e8-46e3-b65a-4c311234c80f', to: '043f7fed-af58-44ef-9ccf-a4a7e9c12dae'},
{from: '0b04c4c6-746e-4d7e-9e49-e7478b310dff', to: '043f7fed-af58-44ef-9ccf-a4a7e9c12dae'},
{from: 'cf6d4ff8-fb49-4fe1-9d37-22e16df05254', to: 'd4de5b6e-6e3b-4e42-aa46-ec915d601d60'},
{from: '0b04c4c6-746e-4d7e-9e49-e7478b310dff', to: '51543d4c-2706-4199-be9b-d8d74ac93214'},
{from: '51543d4c-2706-4199-be9b-d8d74ac93214', to: 'cf6d4ff8-fb49-4fe1-9d37-22e16df05254'},
{from: '5a9964e7-82e8-46e3-b65a-4c311234c80f', to: 'b31e4a71-5d36-4261-9de5-e03a92c45dba'},
{from: 'd4de5b6e-6e3b-4e42-aa46-ec915d601d60', to: 'b31e4a71-5d36-4261-9de5-e03a92c45dba'},
{from: '0b04c4c6-746e-4d7e-9e49-e7478b310dff', to: 'b31e4a71-5d36-4261-9de5-e03a92c45dba'},
{from: 'ab9809a3-9c00-4ed2-806d-c1cde1198141', to: '043f7fed-af58-44ef-9ccf-a4a7e9c12dae'},
{from: 'a8484d42-1d6b-4532-8e0b-e077dc298dc5', to: 'b31e4a71-5d36-4261-9de5-e03a92c45dba'},
{from: '1ca6bba7-9747-493e-81d7-a2f2bac96ba5', to: 'b31e4a71-5d36-4261-9de5-e03a92c45dba'}
                            ]);