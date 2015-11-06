var nodes = new vis.DataSet([
                             /* {id: a, label: b, ...}, */
{id: 'ae93bd79-4ef8-40b0-9b0d-cd7b2e51160d', label: 'ISLOGICAL\nTRUE', color: '#f0ad4e', title: 'Name: ISLOGICAL<br>Value: TRUE<br>Type: FUNCTION<br>Id: ae93bd79-4ef8-40b0-9b0d-cd7b2e51160d<br>Formula Expression: Formula String: ISLOGICAL(A2); Formula Values: ISLOGICAL(FALSE); Formula Ptg: ; Ptgs:  Index in Ptgs: 1 <br>Source Object Id: org.apache.poi.xssf.usermodel.XSSFEvaluationWorkbook@17a703f5'},
{id: '334533f0-e654-4bea-bfed-227a89f50ab5', label: 'C6\nTRUE', color: '#31b0d5', title: 'Name: C6<br>Value: TRUE<br>Type: CELL_WITH_FORMULA<br>Id: 334533f0-e654-4bea-bfed-227a89f50ab5<br>Formula Expression: Formula String: ISLOGICAL(A2); Formula Values: ISLOGICAL(FALSE); Formula Ptg: FALSE ISLOGICAL ; Ptgs: A2 ISLOGICAL  Index in Ptgs: 1 <br>Source Object Id: org.apache.poi.xssf.usermodel.XSSFEvaluationWorkbook@17a703f5'},
{id: 'd67f1bb9-fca4-463f-9c0b-91ff9325b274', label: 'A2\nFALSE', color: '#31b0d5', title: 'Name: A2<br>Value: FALSE<br>Type: CELL_WITH_VALUE<br>Id: d67f1bb9-fca4-463f-9c0b-91ff9325b274<br>Formula Expression: Formula String: A2; Formula Values: FALSE; Formula Ptg: FALSE; Ptgs: A2 Index in Ptgs: 0 <br>Source Object Id: org.apache.poi.xssf.usermodel.XSSFEvaluationWorkbook@17a703f5'}
                            ]);


var edges = new vis.DataSet([
                             /* {from: id_a, to: id_b}, */
{from: 'd67f1bb9-fca4-463f-9c0b-91ff9325b274', to: 'ae93bd79-4ef8-40b0-9b0d-cd7b2e51160d'},
{from: 'ae93bd79-4ef8-40b0-9b0d-cd7b2e51160d', to: '334533f0-e654-4bea-bfed-227a89f50ab5'}
                            ]);