var nodes = new vis.DataSet([
                             /* {id: a, label: b, ...}, */
{id: '61cf2629-0947-4247-ae57-44e585c8add1', label: 'D10\nFALSE', color: '#31b0d5', title: 'Name: D10<br>Alias: null<br>Value: FALSE<br>Type: CELL_WITH_FORMULA<br>Id: 61cf2629-0947-4247-ae57-44e585c8add1<br>Formula Expression: Formula String: ISEVEN(C3); Formula Values: ISEVEN(5.45); Formula Ptg: 5.45 ISEVEN ; Ptgs: C3 ISEVEN  Index in Ptgs: 2 <br>Source Object Id: org.apache.poi.xssf.usermodel.XSSFEvaluationWorkbook@7ea899a9'},
{id: '34af7075-afec-42c7-ad41-55c42994a353', label: 'ISEVEN\nFALSE', color: '#f0ad4e', title: 'Name: ISEVEN<br>Alias: null<br>Value: FALSE<br>Type: FUNCTION<br>Id: 34af7075-afec-42c7-ad41-55c42994a353<br>Formula Expression: Formula String: ISEVEN(C3); Formula Values: ISEVEN(5.45); Formula Ptg: ; Ptgs:  Index in Ptgs: 2 <br>Source Object Id: org.apache.poi.xssf.usermodel.XSSFEvaluationWorkbook@7ea899a9'},
{id: 'babd7dd5-80e2-4331-881f-8767085a0424', label: 'C3\n5.45', color: '#31b0d5', title: 'Name: C3<br>Alias: null<br>Value: 5.45<br>Type: CELL_WITH_VALUE<br>Id: babd7dd5-80e2-4331-881f-8767085a0424<br>Formula Expression: Formula String: C3; Formula Values: 5.45; Formula Ptg: 5.45; Ptgs: C3 Index in Ptgs: 1 <br>Source Object Id: org.apache.poi.xssf.usermodel.XSSFEvaluationWorkbook@7ea899a9'}
                            ]);


var edges = new vis.DataSet([
                             /* {from: id_a, to: id_b}, */
{from: 'babd7dd5-80e2-4331-881f-8767085a0424', to: '34af7075-afec-42c7-ad41-55c42994a353'},
{from: '34af7075-afec-42c7-ad41-55c42994a353', to: '61cf2629-0947-4247-ae57-44e585c8add1'}
                            ]);