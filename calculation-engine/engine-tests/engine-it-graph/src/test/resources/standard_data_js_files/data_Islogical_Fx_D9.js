var nodes = new vis.DataSet([
                             /* {id: a, label: b, ...}, */
{id: 'daca5b3e-5c18-48fb-a7ee-4db708892f7b', label: 'ISLOGICAL\nTRUE', color: '#f0ad4e', title: 'Name: ISLOGICAL<br>Value: TRUE<br>Type: FUNCTION<br>Id: daca5b3e-5c18-48fb-a7ee-4db708892f7b<br>Formula Expression: Formula String: ISLOGICAL(ISLOGICAL(A2)); Formula Values: ISLOGICAL(ISLOGICAL(FALSE)); Formula Ptg: ; Ptgs:  Index in Ptgs: 1 <br>Source Object Id: org.apache.poi.xssf.usermodel.XSSFEvaluationWorkbook@6629ad09'},
{id: 'd565726c-a1d0-4bf3-aad7-fc03214af37e', label: 'ISLOGICAL\nTRUE', color: '#f0ad4e', title: 'Name: ISLOGICAL<br>Value: TRUE<br>Type: FUNCTION<br>Id: d565726c-a1d0-4bf3-aad7-fc03214af37e<br>Formula Expression: Formula String: ISLOGICAL(A2); Formula Values: ISLOGICAL(FALSE); Formula Ptg: ; Ptgs:  Index in Ptgs: 1 <br>Source Object Id: org.apache.poi.xssf.usermodel.XSSFEvaluationWorkbook@6629ad09'},
{id: '5f97d99a-06b3-4d89-923f-45202b03e482', label: 'D9\nTRUE', color: '#31b0d5', title: 'Name: D9<br>Value: TRUE<br>Type: CELL_WITH_FORMULA<br>Id: 5f97d99a-06b3-4d89-923f-45202b03e482<br>Formula Expression: Formula String: ISLOGICAL(ISLOGICAL(A2)); Formula Values: ISLOGICAL(ISLOGICAL(FALSE)); Formula Ptg: FALSE ISLOGICAL  ISLOGICAL ; Ptgs: A2 ISLOGICAL  ISLOGICAL  Index in Ptgs: 1 <br>Source Object Id: org.apache.poi.xssf.usermodel.XSSFEvaluationWorkbook@6629ad09'},
{id: 'a4fbddbd-0d3a-4720-ba45-d5794189dd7a', label: 'C6\nTRUE', color: '#31b0d5', title: 'Name: C6<br>Value: TRUE<br>Type: CELL_WITH_FORMULA<br>Id: a4fbddbd-0d3a-4720-ba45-d5794189dd7a<br>Formula Expression: Formula String: ISLOGICAL(A2); Formula Values: ISLOGICAL(FALSE); Formula Ptg: FALSE ISLOGICAL ; Ptgs: A2 ISLOGICAL  Index in Ptgs: 1 <br>Source Object Id: org.apache.poi.xssf.usermodel.XSSFEvaluationWorkbook@6629ad09'},
{id: '530495e7-3185-489b-aa69-3e108cd945d6', label: 'A2\nFALSE', color: '#31b0d5', title: 'Name: A2<br>Value: FALSE<br>Type: CELL_WITH_VALUE<br>Id: 530495e7-3185-489b-aa69-3e108cd945d6<br>Formula Expression: Formula String: A2; Formula Values: FALSE; Formula Ptg: FALSE; Ptgs: A2 Index in Ptgs: 0 <br>Source Object Id: org.apache.poi.xssf.usermodel.XSSFEvaluationWorkbook@6629ad09'}
                            ]);


var edges = new vis.DataSet([
                             /* {from: id_a, to: id_b}, */
{from: 'daca5b3e-5c18-48fb-a7ee-4db708892f7b', to: '5f97d99a-06b3-4d89-923f-45202b03e482'},
{from: 'a4fbddbd-0d3a-4720-ba45-d5794189dd7a', to: 'daca5b3e-5c18-48fb-a7ee-4db708892f7b'},
{from: '530495e7-3185-489b-aa69-3e108cd945d6', to: 'd565726c-a1d0-4bf3-aad7-fc03214af37e'},
{from: 'd565726c-a1d0-4bf3-aad7-fc03214af37e', to: 'a4fbddbd-0d3a-4720-ba45-d5794189dd7a'}
                            ]);