var nodes = new vis.DataSet([
                             /* {id: a, label: b, ...}, */
{id: 'd2ebf6f1-1a84-4c70-9268-90f3ecd9effc', label: 'C2\n#DIV/0!', color: '#31b0d5', title: 'Name: C2<br>Value: #DIV/0!<br>Type: CELL_WITH_FORMULA<br>Id: d2ebf6f1-1a84-4c70-9268-90f3ecd9effc<br>Formula Expression: Formula String: A3 / D2; Formula Values: 1.0 / ; Formula Ptg: 1.0  /; Ptgs: A3 D2 / Index in Ptgs: 2 <br>Source Object Id: org.apache.poi.xssf.usermodel.XSSFEvaluationWorkbook@3971f0fe'},
{id: '65c53c93-e9f1-447b-8704-836d1a14eef8', label: 'C6\nTRUE', color: '#31b0d5', title: 'Name: C6<br>Value: TRUE<br>Type: CELL_WITH_FORMULA<br>Id: 65c53c93-e9f1-447b-8704-836d1a14eef8<br>Formula Expression: Formula String: ISLOGICAL(A2); Formula Values: ISLOGICAL(FALSE); Formula Ptg: FALSE ISLOGICAL ; Ptgs: A2 ISLOGICAL  Index in Ptgs: 1 <br>Source Object Id: org.apache.poi.xssf.usermodel.XSSFEvaluationWorkbook@3971f0fe'},
{id: 'a7805624-849f-4a1b-b979-640cbd09a0ff', label: 'A2\nFALSE', color: '#31b0d5', title: 'Name: A2<br>Value: FALSE<br>Type: CELL_WITH_VALUE<br>Id: a7805624-849f-4a1b-b979-640cbd09a0ff<br>Formula Expression: Formula String: A2; Formula Values: FALSE; Formula Ptg: FALSE; Ptgs: A2 Index in Ptgs: 0 <br>Source Object Id: org.apache.poi.xssf.usermodel.XSSFEvaluationWorkbook@3971f0fe'},
{id: 'c1562803-3809-4f47-a998-894bf1ddebed', label: 'ISLOGICAL\nFALSE', color: '#f0ad4e', title: 'Name: ISLOGICAL<br>Value: FALSE<br>Type: FUNCTION<br>Id: c1562803-3809-4f47-a998-894bf1ddebed<br>Formula Expression: Formula String: ISLOGICAL(A3); Formula Values: ISLOGICAL(1.0); Formula Ptg: ; Ptgs:  Index in Ptgs: 1 <br>Source Object Id: org.apache.poi.xssf.usermodel.XSSFEvaluationWorkbook@3971f0fe'},
{id: 'd148927a-1fde-464c-8d04-4de1c759811f', label: 'ISLOGICAL\nTRUE', color: '#f0ad4e', title: 'Name: ISLOGICAL<br>Value: TRUE<br>Type: FUNCTION<br>Id: d148927a-1fde-464c-8d04-4de1c759811f<br>Formula Expression: Formula String: ISLOGICAL(A2); Formula Values: ISLOGICAL(FALSE); Formula Ptg: ; Ptgs:  Index in Ptgs: 1 <br>Source Object Id: org.apache.poi.xssf.usermodel.XSSFEvaluationWorkbook@3971f0fe'},
{id: 'c1f3c4a6-0626-43f4-b04f-ab32d399dc46', label: 'ISLOGICAL\nTRUE', color: '#f0ad4e', title: 'Name: ISLOGICAL<br>Value: TRUE<br>Type: FUNCTION<br>Id: c1f3c4a6-0626-43f4-b04f-ab32d399dc46<br>Formula Expression: Formula String: ISLOGICAL(VALUE); Formula Values: ISLOGICAL(TRUE); Formula Ptg: ; Ptgs:  Index in Ptgs: 1 <br>Source Object Id: org.apache.poi.xssf.usermodel.XSSFEvaluationWorkbook@3971f0fe'},
{id: '39b9c711-69c7-4ec6-b02a-f87d983bc28d', label: 'C9\nFALSE', color: '#31b0d5', title: 'Name: C9<br>Value: FALSE<br>Type: CELL_WITH_FORMULA<br>Id: 39b9c711-69c7-4ec6-b02a-f87d983bc28d<br>Formula Expression: Formula String: ISLOGICAL(A3 / D2); Formula Values: ISLOGICAL(1.0 / ); Formula Ptg: 1.0  / ISLOGICAL ; Ptgs: A3 D2 / ISLOGICAL  Index in Ptgs: 1 <br>Source Object Id: org.apache.poi.xssf.usermodel.XSSFEvaluationWorkbook@3971f0fe'},
{id: '57c3ce4f-27a8-4b7e-ba64-0ea065565fba', label: 'C5\nTRUE', color: '#31b0d5', title: 'Name: C5<br>Value: TRUE<br>Type: CELL_WITH_FORMULA<br>Id: 57c3ce4f-27a8-4b7e-ba64-0ea065565fba<br>Formula Expression: Formula String: ISLOGICAL(A1); Formula Values: ISLOGICAL(TRUE); Formula Ptg: TRUE ISLOGICAL ; Ptgs: A1 ISLOGICAL  Index in Ptgs: 1 <br>Source Object Id: org.apache.poi.xssf.usermodel.XSSFEvaluationWorkbook@3971f0fe'},
{id: '9989bd5c-8618-4253-b701-7fdd441ef260', label: 'A3\n1.0', color: '#31b0d5', title: 'Name: A3<br>Value: 1.0<br>Type: CELL_WITH_VALUE<br>Id: 9989bd5c-8618-4253-b701-7fdd441ef260<br>Formula Expression: Formula String: A3; Formula Values: 1.0; Formula Ptg: 1.0; Ptgs: A3 Index in Ptgs: 0 <br>Source Object Id: org.apache.poi.xssf.usermodel.XSSFEvaluationWorkbook@3971f0fe'},
{id: 'be3cfef0-c199-4043-980a-7f2cfb902c9d', label: 'VALUE\nTRUE', color: '#31b0d5', title: 'Name: VALUE<br>Value: TRUE<br>Type: CONSTANT_VALUE<br>Id: be3cfef0-c199-4043-980a-7f2cfb902c9d<br>Formula Expression: Formula String: VALUE; Formula Values: TRUE; Formula Ptg: TRUE; Ptgs: VALUE Index in Ptgs: 0 <br>Source Object Id: org.apache.poi.xssf.usermodel.XSSFEvaluationWorkbook@3971f0fe'},
{id: 'bcdf3e17-c4e6-475c-9fe7-e30decd0e513', label: 'D9\nTRUE', color: '#31b0d5', title: 'Name: D9<br>Value: TRUE<br>Type: CELL_WITH_FORMULA<br>Id: bcdf3e17-c4e6-475c-9fe7-e30decd0e513<br>Formula Expression: Formula String: ISLOGICAL(ISLOGICAL(A2)); Formula Values: ISLOGICAL(ISLOGICAL(FALSE)); Formula Ptg: FALSE ISLOGICAL  ISLOGICAL ; Ptgs: A2 ISLOGICAL  ISLOGICAL  Index in Ptgs: 1 <br>Source Object Id: org.apache.poi.xssf.usermodel.XSSFEvaluationWorkbook@3971f0fe'},
{id: 'f201ec26-fde6-4231-a317-88d5e2d6c925', label: 'ISLOGICAL\nTRUE', color: '#f0ad4e', title: 'Name: ISLOGICAL<br>Value: TRUE<br>Type: FUNCTION<br>Id: f201ec26-fde6-4231-a317-88d5e2d6c925<br>Formula Expression: Formula String: ISLOGICAL(ISLOGICAL(A2)); Formula Values: ISLOGICAL(ISLOGICAL(FALSE)); Formula Ptg: ; Ptgs:  Index in Ptgs: 1 <br>Source Object Id: org.apache.poi.xssf.usermodel.XSSFEvaluationWorkbook@3971f0fe'},
{id: 'fef7e4b9-b5f4-4a7e-9ebb-4055beae2c3c', label: 'C8\nFALSE', color: '#31b0d5', title: 'Name: C8<br>Value: FALSE<br>Type: CELL_WITH_FORMULA<br>Id: fef7e4b9-b5f4-4a7e-9ebb-4055beae2c3c<br>Formula Expression: Formula String: ISLOGICAL(A4); Formula Values: ISLOGICAL(some text for test); Formula Ptg: some text for test ISLOGICAL ; Ptgs: A4 ISLOGICAL  Index in Ptgs: 1 <br>Source Object Id: org.apache.poi.xssf.usermodel.XSSFEvaluationWorkbook@3971f0fe'},
{id: '7715282f-3633-4286-b250-68c9be446b86', label: 'ISLOGICAL\nTRUE', color: '#f0ad4e', title: 'Name: ISLOGICAL<br>Value: TRUE<br>Type: FUNCTION<br>Id: 7715282f-3633-4286-b250-68c9be446b86<br>Formula Expression: Formula String: ISLOGICAL(A1); Formula Values: ISLOGICAL(TRUE); Formula Ptg: ; Ptgs:  Index in Ptgs: 1 <br>Source Object Id: org.apache.poi.xssf.usermodel.XSSFEvaluationWorkbook@3971f0fe'},
{id: '453a5a23-931b-4a13-a44e-55e9a8c1038f', label: 'A4\nsome text for test', color: '#31b0d5', title: 'Name: A4<br>Value: some text for test<br>Type: CELL_WITH_VALUE<br>Id: 453a5a23-931b-4a13-a44e-55e9a8c1038f<br>Formula Expression: Formula String: A4; Formula Values: some text for test; Formula Ptg: some text for test; Ptgs: A4 Index in Ptgs: 0 <br>Source Object Id: org.apache.poi.xssf.usermodel.XSSFEvaluationWorkbook@3971f0fe'},
{id: '7c8c4d3d-8eba-4bb9-b5a7-628fe99fa459', label: 'A1\nTRUE', color: '#31b0d5', title: 'Name: A1<br>Value: TRUE<br>Type: CELL_WITH_VALUE<br>Id: 7c8c4d3d-8eba-4bb9-b5a7-628fe99fa459<br>Formula Expression: Formula String: A1; Formula Values: TRUE; Formula Ptg: TRUE; Ptgs: A1 Index in Ptgs: 0 <br>Source Object Id: org.apache.poi.xssf.usermodel.XSSFEvaluationWorkbook@3971f0fe'},
{id: 'ed40334c-8b7d-4bd4-a549-acd80051278f', label: 'ISLOGICAL\nFALSE', color: '#f0ad4e', title: 'Name: ISLOGICAL<br>Value: FALSE<br>Type: FUNCTION<br>Id: ed40334c-8b7d-4bd4-a549-acd80051278f<br>Formula Expression: Formula String: ISLOGICAL(A4); Formula Values: ISLOGICAL(some text for test); Formula Ptg: ; Ptgs:  Index in Ptgs: 1 <br>Source Object Id: org.apache.poi.xssf.usermodel.XSSFEvaluationWorkbook@3971f0fe'},
{id: '716a3589-2c57-4f2e-ba6b-d7a152ae10a5', label: 'ISLOGICAL\nFALSE', color: '#f0ad4e', title: 'Name: ISLOGICAL<br>Value: FALSE<br>Type: FUNCTION<br>Id: 716a3589-2c57-4f2e-ba6b-d7a152ae10a5<br>Formula Expression: Formula String: ISLOGICAL(A3 / D2); Formula Values: ISLOGICAL(1.0 / ); Formula Ptg: ; Ptgs:  Index in Ptgs: 1 <br>Source Object Id: org.apache.poi.xssf.usermodel.XSSFEvaluationWorkbook@3971f0fe'},
{id: '0d4a6504-7cbd-4694-a497-5911d546365e', label: 'C7\nFALSE', color: '#31b0d5', title: 'Name: C7<br>Value: FALSE<br>Type: CELL_WITH_FORMULA<br>Id: 0d4a6504-7cbd-4694-a497-5911d546365e<br>Formula Expression: Formula String: ISLOGICAL(A3); Formula Values: ISLOGICAL(1.0); Formula Ptg: 1.0 ISLOGICAL ; Ptgs: A3 ISLOGICAL  Index in Ptgs: 1 <br>Source Object Id: org.apache.poi.xssf.usermodel.XSSFEvaluationWorkbook@3971f0fe'},
{id: '6190d902-70f2-4b1c-8a4f-6bf948fbdae7', label: 'D2\n', color: '#31b0d5', title: 'Name: D2<br>Value: <br>Type: EMPTY_CELL<br>Id: 6190d902-70f2-4b1c-8a4f-6bf948fbdae7<br>Formula Expression: Formula String: D2; Formula Values: ; Formula Ptg: ; Ptgs: D2 Index in Ptgs: 1 <br>Source Object Id: org.apache.poi.xssf.usermodel.XSSFEvaluationWorkbook@3971f0fe'},
{id: 'f2db5ee5-84a1-4c3b-adfc-629e65dfdde2', label: '/\n#DIV/0!', color: '#f0ad4e', title: 'Name: /<br>Value: #DIV/0!<br>Type: OPERATOR<br>Id: f2db5ee5-84a1-4c3b-adfc-629e65dfdde2<br>Formula Expression: Formula String: A3 / D2; Formula Values: 1.0 / ; Formula Ptg: ; Ptgs:  Index in Ptgs: 2 <br>Source Object Id: org.apache.poi.xssf.usermodel.XSSFEvaluationWorkbook@3971f0fe'},
{id: '704f6319-aa39-4ddd-9f1d-05b650b42cc1', label: 'D8\nTRUE', color: '#31b0d5', title: 'Name: D8<br>Value: TRUE<br>Type: CELL_WITH_FORMULA<br>Id: 704f6319-aa39-4ddd-9f1d-05b650b42cc1<br>Formula Expression: Formula String: ISLOGICAL(VALUE); Formula Values: ISLOGICAL(TRUE); Formula Ptg: TRUE ISLOGICAL ; Ptgs: VALUE ISLOGICAL  Index in Ptgs: 1 <br>Source Object Id: org.apache.poi.xssf.usermodel.XSSFEvaluationWorkbook@3971f0fe'}
                            ]);


var edges = new vis.DataSet([
                             /* {from: id_a, to: id_b}, */
{from: '716a3589-2c57-4f2e-ba6b-d7a152ae10a5', to: '39b9c711-69c7-4ec6-b02a-f87d983bc28d'},
{from: 'f201ec26-fde6-4231-a317-88d5e2d6c925', to: 'bcdf3e17-c4e6-475c-9fe7-e30decd0e513'},
{from: '9989bd5c-8618-4253-b701-7fdd441ef260', to: 'c1562803-3809-4f47-a998-894bf1ddebed'},
{from: 'c1562803-3809-4f47-a998-894bf1ddebed', to: '0d4a6504-7cbd-4694-a497-5911d546365e'},
{from: 'be3cfef0-c199-4043-980a-7f2cfb902c9d', to: 'c1f3c4a6-0626-43f4-b04f-ab32d399dc46'},
{from: 'c1f3c4a6-0626-43f4-b04f-ab32d399dc46', to: '704f6319-aa39-4ddd-9f1d-05b650b42cc1'},
{from: '6190d902-70f2-4b1c-8a4f-6bf948fbdae7', to: 'f2db5ee5-84a1-4c3b-adfc-629e65dfdde2'},
{from: '9989bd5c-8618-4253-b701-7fdd441ef260', to: 'f2db5ee5-84a1-4c3b-adfc-629e65dfdde2'},
{from: '7c8c4d3d-8eba-4bb9-b5a7-628fe99fa459', to: '7715282f-3633-4286-b250-68c9be446b86'},
{from: '453a5a23-931b-4a13-a44e-55e9a8c1038f', to: 'ed40334c-8b7d-4bd4-a549-acd80051278f'},
{from: 'ed40334c-8b7d-4bd4-a549-acd80051278f', to: 'fef7e4b9-b5f4-4a7e-9ebb-4055beae2c3c'},
{from: 'd2ebf6f1-1a84-4c70-9268-90f3ecd9effc', to: '716a3589-2c57-4f2e-ba6b-d7a152ae10a5'},
{from: 'f2db5ee5-84a1-4c3b-adfc-629e65dfdde2', to: 'd2ebf6f1-1a84-4c70-9268-90f3ecd9effc'},
{from: '7715282f-3633-4286-b250-68c9be446b86', to: '57c3ce4f-27a8-4b7e-ba64-0ea065565fba'},
{from: 'a7805624-849f-4a1b-b979-640cbd09a0ff', to: 'd148927a-1fde-464c-8d04-4de1c759811f'},
{from: '65c53c93-e9f1-447b-8704-836d1a14eef8', to: 'f201ec26-fde6-4231-a317-88d5e2d6c925'},
{from: 'd148927a-1fde-464c-8d04-4de1c759811f', to: '65c53c93-e9f1-447b-8704-836d1a14eef8'}
                            ]);