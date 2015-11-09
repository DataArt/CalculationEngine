var nodes = new vis.DataSet([
                             /* {id: a, label: b, ...}, */
{id: 'ea9006e3-3941-4098-b8f9-d3f3271d14d6', label: 'A2:E2\n[[6.0, 4.0, 7.0, 65.0, 7.0]]', color: '#31b0d5', title: 'Name: A2:E2<br>Value: [[6.0, 4.0, 7.0, 65.0, 7.0]]<br>Type: RANGE<br>Id: ea9006e3-3941-4098-b8f9-d3f3271d14d6<br>Formula Expression: Formula String: A2:E2; Formula Values: [[6.0, 4.0, 7.0, 65.0, 7.0]]; Formula Ptg: [[6.0, 4.0, 7.0, 65.0, 7.0]]; Ptgs: A2:E2 Index in Ptgs: 0 <br>Source Object Id: org.apache.poi.xssf.usermodel.XSSFEvaluationWorkbook@1a15b789'},
{id: 'cb535497-9f4c-409b-bc3a-ba9101b34178', label: 'MEDIAN\n7.0', color: '#f0ad4e', title: 'Name: MEDIAN<br>Value: 7.0<br>Type: FUNCTION<br>Id: cb535497-9f4c-409b-bc3a-ba9101b34178<br>Formula Expression: Formula String: MEDIAN(A2:E2); Formula Values: MEDIAN(6.0, 4.0, 7.0, 65.0, 7.0); Formula Ptg: ; Ptgs:  Index in Ptgs: 1 <br>Source Object Id: org.apache.poi.xssf.usermodel.XSSFEvaluationWorkbook@1a15b789'},
{id: '3b6230cc-cb28-4c2b-b845-632ecd6b253e', label: 'E5\n7.0', color: '#31b0d5', title: 'Name: E5<br>Value: 7.0<br>Type: CELL_WITH_FORMULA<br>Id: 3b6230cc-cb28-4c2b-b845-632ecd6b253e<br>Formula Expression: Formula String: MEDIAN(A2:E2); Formula Values: MEDIAN(6.0, 4.0, 7.0, 65.0, 7.0); Formula Ptg: 6.0, 4.0, 7.0, 65.0, 7.0 MEDIAN ; Ptgs: A2:E2 MEDIAN  Index in Ptgs: 1 <br>Source Object Id: org.apache.poi.xssf.usermodel.XSSFEvaluationWorkbook@1a15b789'}
                            ]);


var edges = new vis.DataSet([
                             /* {from: id_a, to: id_b}, */
{from: 'ea9006e3-3941-4098-b8f9-d3f3271d14d6', to: 'cb535497-9f4c-409b-bc3a-ba9101b34178'},
{from: 'cb535497-9f4c-409b-bc3a-ba9101b34178', to: '3b6230cc-cb28-4c2b-b845-632ecd6b253e'}
                            ]);