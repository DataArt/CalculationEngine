var nodes = new vis.DataSet([
                             /* {id: a, label: b, ...}, */
{id: '4248427d-3e47-4885-893e-be7018d79115', label: 'A1\nTRUE', color: '#31b0d5', title: 'Name: A1<br>Alias: null<br>Value: TRUE<br>Type: CELL_WITH_VALUE<br>Id: 4248427d-3e47-4885-893e-be7018d79115<br>Formula Expression: Formula String: A1; Formula Values: TRUE; Formula Ptg: TRUE; Ptgs: A1 Index in Ptgs: 0 <br>Source Object Id: org.apache.poi.xssf.usermodel.XSSFEvaluationWorkbook@68577ba8'},
{id: '2ba5ccda-b63d-4edc-bbef-7c0216a6d0e3', label: 'ISLOGICAL\nTRUE', color: '#f0ad4e', title: 'Name: ISLOGICAL<br>Alias: null<br>Value: TRUE<br>Type: FUNCTION<br>Id: 2ba5ccda-b63d-4edc-bbef-7c0216a6d0e3<br>Formula Expression: Formula String: ISLOGICAL(A1); Formula Values: ISLOGICAL(TRUE); Formula Ptg: ; Ptgs:  Index in Ptgs: 1 <br>Source Object Id: org.apache.poi.xssf.usermodel.XSSFEvaluationWorkbook@68577ba8'},
{id: '6c7072b5-73cc-4df8-8aa6-c534b8fa6073', label: 'C5\nTRUE', color: '#31b0d5', title: 'Name: C5<br>Alias: null<br>Value: TRUE<br>Type: CELL_WITH_FORMULA<br>Id: 6c7072b5-73cc-4df8-8aa6-c534b8fa6073<br>Formula Expression: Formula String: ISLOGICAL(A1); Formula Values: ISLOGICAL(TRUE); Formula Ptg: TRUE ISLOGICAL ; Ptgs: A1 ISLOGICAL  Index in Ptgs: 1 <br>Source Object Id: org.apache.poi.xssf.usermodel.XSSFEvaluationWorkbook@68577ba8'}
                            ]);


var edges = new vis.DataSet([
                             /* {from: id_a, to: id_b}, */
{from: '2ba5ccda-b63d-4edc-bbef-7c0216a6d0e3', to: '6c7072b5-73cc-4df8-8aa6-c534b8fa6073'},
{from: '4248427d-3e47-4885-893e-be7018d79115', to: '2ba5ccda-b63d-4edc-bbef-7c0216a6d0e3'}
                            ]);