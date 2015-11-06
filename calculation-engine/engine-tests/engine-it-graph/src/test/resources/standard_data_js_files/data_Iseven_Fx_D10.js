var nodes = new vis.DataSet([
                             /* {id: a, label: b, ...}, */
{id: '0ac549ff-b7c7-4e27-953f-346c9875bfa3', label: 'D10\nFALSE', color: '#31b0d5', title: 'Name: D10<br>Value: FALSE<br>Type: CELL_WITH_FORMULA<br>Id: 0ac549ff-b7c7-4e27-953f-346c9875bfa3<br>Formula Expression: Formula String: ISEVEN(C3); Formula Values: ISEVEN(5.45); Formula Ptg: 5.45 ISEVEN ; Ptgs: C3 ISEVEN  Index in Ptgs: 2 <br>Source Object Id: org.apache.poi.xssf.usermodel.XSSFEvaluationWorkbook@497aec8c'},
{id: '9d54e04a-d1b0-48de-988f-f5b88124c093', label: 'C3\n5.45', color: '#31b0d5', title: 'Name: C3<br>Value: 5.45<br>Type: CELL_WITH_VALUE<br>Id: 9d54e04a-d1b0-48de-988f-f5b88124c093<br>Formula Expression: Formula String: C3; Formula Values: 5.45; Formula Ptg: 5.45; Ptgs: C3 Index in Ptgs: 1 <br>Source Object Id: org.apache.poi.xssf.usermodel.XSSFEvaluationWorkbook@497aec8c'},
{id: '6e261214-cccf-4db2-8bfe-4fe41f5c8ee3', label: 'ISEVEN\nFALSE', color: '#f0ad4e', title: 'Name: ISEVEN<br>Value: FALSE<br>Type: FUNCTION<br>Id: 6e261214-cccf-4db2-8bfe-4fe41f5c8ee3<br>Formula Expression: Formula String: ISEVEN(C3); Formula Values: ISEVEN(5.45); Formula Ptg: ; Ptgs:  Index in Ptgs: 2 <br>Source Object Id: org.apache.poi.xssf.usermodel.XSSFEvaluationWorkbook@497aec8c'}
                            ]);


var edges = new vis.DataSet([
                             /* {from: id_a, to: id_b}, */
{from: '6e261214-cccf-4db2-8bfe-4fe41f5c8ee3', to: '0ac549ff-b7c7-4e27-953f-346c9875bfa3'},
{from: '9d54e04a-d1b0-48de-988f-f5b88124c093', to: '6e261214-cccf-4db2-8bfe-4fe41f5c8ee3'}
                            ]);