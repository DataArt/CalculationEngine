var nodes = new vis.DataSet([
                             /* {id: a, label: b, ...}, */
{id: '107395c8-7d4b-4f77-b04f-6080b009eda4', label: 'C6\nFALSE', color: '#31b0d5', title: 'Name: C6<br>Alias: null<br>Value: FALSE<br>Type: CELL_WITH_FORMULA<br>Id: 107395c8-7d4b-4f77-b04f-6080b009eda4<br>Formula Expression: Formula String: ISNONTEXT(B1); Formula Values: ISNONTEXT(some); Formula Ptg: some ISNONTEXT ; Ptgs: B1 ISNONTEXT  Index in Ptgs: 1 <br>Source Object Id: org.apache.poi.xssf.usermodel.XSSFEvaluationWorkbook@20576557'},
{id: 'ac668060-0da0-4d1c-b498-2480fb34b808', label: 'B1\nsome', color: '#31b0d5', title: 'Name: B1<br>Alias: null<br>Value: some<br>Type: CELL_WITH_VALUE<br>Id: ac668060-0da0-4d1c-b498-2480fb34b808<br>Formula Expression: Formula String: B1; Formula Values: some; Formula Ptg: some; Ptgs: B1 Index in Ptgs: 0 <br>Source Object Id: org.apache.poi.xssf.usermodel.XSSFEvaluationWorkbook@20576557'},
{id: '699688b3-ea51-4e60-b07e-947210f0f8a1', label: 'ISNONTEXT\nFALSE', color: '#f0ad4e', title: 'Name: ISNONTEXT<br>Alias: null<br>Value: FALSE<br>Type: FUNCTION<br>Id: 699688b3-ea51-4e60-b07e-947210f0f8a1<br>Formula Expression: Formula String: ISNONTEXT(B1); Formula Values: ISNONTEXT(some); Formula Ptg: ; Ptgs:  Index in Ptgs: 1 <br>Source Object Id: org.apache.poi.xssf.usermodel.XSSFEvaluationWorkbook@20576557'}
                            ]);


var edges = new vis.DataSet([
                             /* {from: id_a, to: id_b}, */
{from: 'ac668060-0da0-4d1c-b498-2480fb34b808', to: '699688b3-ea51-4e60-b07e-947210f0f8a1'},
{from: '699688b3-ea51-4e60-b07e-947210f0f8a1', to: '107395c8-7d4b-4f77-b04f-6080b009eda4'}
                            ]);