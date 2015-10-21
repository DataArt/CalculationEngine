var nodes = new vis.DataSet([
                             /* {id: a, label: b, ...}, */
{id: '02983ed6-0044-4fcb-ad39-acc0097d9816', label: 'FUNCEXEC\n[8.0, 10.0, 12.0]', color: '#f0ad4e', title: 'Name: FUNCEXEC<br>Value: [8.0, 10.0, 12.0]<br>Type: FUNCTION<br>Id: 02983ed6-0044-4fcb-ad39-acc0097d9816<br>Formula Expression: Formula String: FUNCEXEC(B2, A2, VALUE); Formula Values: FUNCEXEC(2.0, 1.0, DEVDEF_1); Formula Ptg: ; Ptgs:  Index in Ptgs: 4 <br>Source Object Id: org.apache.poi.xssf.usermodel.XSSFEvaluationWorkbook@6dab9b6d'},
{id: 'eaecb5e4-5010-4c25-a321-536fa8320a2f', label: 'A2\n1.0', color: '#31b0d5', title: 'Name: A2<br>Value: 1.0<br>Type: CELL_WITH_VALUE<br>Id: eaecb5e4-5010-4c25-a321-536fa8320a2f<br>Formula Expression: Formula String: A2; Formula Values: 1.0; Formula Ptg: 1.0; Ptgs: A2 Index in Ptgs: 2 <br>Source Object Id: org.apache.poi.xssf.usermodel.XSSFEvaluationWorkbook@6dab9b6d'},
{id: '213992b2-74f4-4f3f-9746-527db7e479c7', label: 'VALUE\n2.0', color: '#31b0d5', title: 'Name: VALUE<br>Value: 2.0<br>Type: CONSTANT_VALUE<br>Id: 213992b2-74f4-4f3f-9746-527db7e479c7<br>Formula Expression: Formula String: VALUE; Formula Values: 2.0; Formula Ptg: 2.0; Ptgs: VALUE Index in Ptgs: 5 <br>Source Object Id: org.apache.poi.xssf.usermodel.XSSFEvaluationWorkbook@6dab9b6d'},
{id: 'c5a92016-9814-4ab4-9a99-d44b18a22088', label: 'F16\n...', color: '#31b0d5', title: 'Name: F16<br>Value: org.apache.poi.ss.formula.ArrayEval$1@b2c5e07<br>Type: CELL_WITH_FORMULA<br>Id: c5a92016-9814-4ab4-9a99-d44b18a22088<br>Formula Expression: Formula String: INDEX(VALUE, FUNCEXEC(B2, A2, VALUE)); Formula Values: INDEX(2.0, FUNCEXEC(2.0, 1.0, DEVDEF_1)); Formula Ptg: 2.0, 2.0, 1.0, DEVDEF_1 FUNCEXEC  INDEX ; Ptgs: VALUE, B2, A2, VALUE FUNCEXEC  INDEX  Index in Ptgs: 6 <br>Source Object Id: org.apache.poi.xssf.usermodel.XSSFEvaluationWorkbook@6dab9b6d'},
{id: '5a8c6b91-f07a-436f-bf05-fcb41d7741bd', label: 'B2\n2.0', color: '#31b0d5', title: 'Name: B2<br>Value: 2.0<br>Type: CELL_WITH_VALUE<br>Id: 5a8c6b91-f07a-436f-bf05-fcb41d7741bd<br>Formula Expression: Formula String: B2; Formula Values: 2.0; Formula Ptg: 2.0; Ptgs: B2 Index in Ptgs: 3 <br>Source Object Id: org.apache.poi.xssf.usermodel.XSSFEvaluationWorkbook@6dab9b6d'},
{id: '165956bd-28d2-41e2-8515-892f910d213f', label: 'INDEX\n...', color: '#f0ad4e', title: 'Name: INDEX<br>Value: org.apache.poi.ss.formula.ArrayEval$1@b2c5e07<br>Type: FUNCTION<br>Id: 165956bd-28d2-41e2-8515-892f910d213f<br>Formula Expression: Formula String: INDEX(VALUE, FUNCEXEC(B2, A2, VALUE)); Formula Values: INDEX(2.0, FUNCEXEC(2.0, 1.0, DEVDEF_1)); Formula Ptg: ; Ptgs:  Index in Ptgs: 6 <br>Source Object Id: org.apache.poi.xssf.usermodel.XSSFEvaluationWorkbook@6dab9b6d'},
{id: '9c416da0-9195-4eea-9a9c-c43791d18458', label: 'VALUE\nDEVDEF_1', color: '#31b0d5', title: 'Name: VALUE<br>Value: DEVDEF_1<br>Type: CONSTANT_VALUE<br>Id: 9c416da0-9195-4eea-9a9c-c43791d18458<br>Formula Expression: Formula String: VALUE; Formula Values: DEVDEF_1; Formula Ptg: DEVDEF_1; Ptgs: VALUE Index in Ptgs: 1 <br>Source Object Id: org.apache.poi.xssf.usermodel.XSSFEvaluationWorkbook@6dab9b6d'}
                            ]);


var edges = new vis.DataSet([
                             /* {from: id_a, to: id_b}, */
{from: 'eaecb5e4-5010-4c25-a321-536fa8320a2f', to: '02983ed6-0044-4fcb-ad39-acc0097d9816'},
{from: '213992b2-74f4-4f3f-9746-527db7e479c7', to: '165956bd-28d2-41e2-8515-892f910d213f'},
{from: '5a8c6b91-f07a-436f-bf05-fcb41d7741bd', to: '02983ed6-0044-4fcb-ad39-acc0097d9816'},
{from: '165956bd-28d2-41e2-8515-892f910d213f', to: 'c5a92016-9814-4ab4-9a99-d44b18a22088'},
{from: '02983ed6-0044-4fcb-ad39-acc0097d9816', to: '165956bd-28d2-41e2-8515-892f910d213f'},
{from: '9c416da0-9195-4eea-9a9c-c43791d18458', to: '02983ed6-0044-4fcb-ad39-acc0097d9816'}
                            ]);