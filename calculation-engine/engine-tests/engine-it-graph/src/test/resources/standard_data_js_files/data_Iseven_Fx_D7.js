var nodes = new vis.DataSet([
                             /* {id: a, label: b, ...}, */
{id: 'e7c308d6-c4c0-41ce-a95b-d3ce88c0c223', label: 'A1\n1.0', color: '#31b0d5', title: 'Name: A1<br>Alias: null<br>Value: 1.0<br>Type: CELL_WITH_VALUE<br>Id: e7c308d6-c4c0-41ce-a95b-d3ce88c0c223<br>Formula Expression: Formula String: A1; Formula Values: 1.0; Formula Ptg: 1.0; Ptgs: A1 Index in Ptgs: 1 <br>Source Object Id: org.apache.poi.xssf.usermodel.XSSFEvaluationWorkbook@41fed14f'},
{id: '7f09da4b-8648-42cb-9ccb-e0319d076aab', label: 'ISEVEN\nFALSE', color: '#f0ad4e', title: 'Name: ISEVEN<br>Alias: null<br>Value: FALSE<br>Type: FUNCTION<br>Id: 7f09da4b-8648-42cb-9ccb-e0319d076aab<br>Formula Expression: Formula String: ISEVEN(A1); Formula Values: ISEVEN(1.0); Formula Ptg: ; Ptgs:  Index in Ptgs: 2 <br>Source Object Id: org.apache.poi.xssf.usermodel.XSSFEvaluationWorkbook@41fed14f'},
{id: '85ca524c-c311-4546-b144-56a7c0682cd8', label: 'D7\nFALSE', color: '#31b0d5', title: 'Name: D7<br>Alias: null<br>Value: FALSE<br>Type: CELL_WITH_FORMULA<br>Id: 85ca524c-c311-4546-b144-56a7c0682cd8<br>Formula Expression: Formula String: ISEVEN(A1); Formula Values: ISEVEN(1.0); Formula Ptg: 1.0 ISEVEN ; Ptgs: A1 ISEVEN  Index in Ptgs: 2 <br>Source Object Id: org.apache.poi.xssf.usermodel.XSSFEvaluationWorkbook@41fed14f'}
                            ]);


var edges = new vis.DataSet([
                             /* {from: id_a, to: id_b}, */
{from: 'e7c308d6-c4c0-41ce-a95b-d3ce88c0c223', to: '7f09da4b-8648-42cb-9ccb-e0319d076aab'},
{from: '7f09da4b-8648-42cb-9ccb-e0319d076aab', to: '85ca524c-c311-4546-b144-56a7c0682cd8'}
                            ]);