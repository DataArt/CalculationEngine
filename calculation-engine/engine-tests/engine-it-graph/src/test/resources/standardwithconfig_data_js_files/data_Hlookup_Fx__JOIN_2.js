var nodes = new vis.DataSet([
                             /* {id: a, label: b, ...}, */
{id: '924a5921-fb23-4cfd-ab3e-b9e221afeedc', label: 'D5\n4.0', color: '#31b0d5', title: 'Name: D5<br>Value: 4.0<br>Type: CELL_WITH_FORMULA<br>Id: 924a5921-fb23-4cfd-ab3e-b9e221afeedc<br>Formula Expression: Formula String: HLOOKUP(VALUE, VALUE, A1:C4, VALUE); Formula Values: HLOOKUP(TRUE, 2.0, Alt, CTRL, Bolt, 4.0, 4.0, 9.0, 5.0, 7.0, 10.0, 6.0, 8.0, 11.0, Alt); Formula Ptg: TRUE, 2.0, Alt, CTRL, Bolt, 4.0, 4.0, 9.0, 5.0, 7.0, 10.0, 6.0, 8.0, 11.0, Alt HLOOKUP ; Ptgs: VALUE, VALUE, A1:C4, VALUE HLOOKUP  Index in Ptgs: 4 <br>Source Object Id: org.apache.poi.xssf.usermodel.XSSFEvaluationWorkbook@acb5508'},
{id: 'acc2e765-f5cb-493b-bc1e-14dd8cb5fbf2', label: 'VALUE\n2.0', color: '#31b0d5', title: 'Name: VALUE<br>Value: 2.0<br>Type: CONSTANT_VALUE<br>Id: acc2e765-f5cb-493b-bc1e-14dd8cb5fbf2<br>Formula Expression: Formula String: VALUE; Formula Values: 2.0; Formula Ptg: 2.0; Ptgs: VALUE Index in Ptgs: 2 <br>Source Object Id: org.apache.poi.xssf.usermodel.XSSFEvaluationWorkbook@acb5508'},
{id: 'ad1cc7ce-0aea-44ac-8a1c-67d52f98102e', label: 'VALUE\nTRUE', color: '#31b0d5', title: 'Name: VALUE<br>Value: TRUE<br>Type: CONSTANT_VALUE<br>Id: ad1cc7ce-0aea-44ac-8a1c-67d52f98102e<br>Formula Expression: Formula String: VALUE; Formula Values: TRUE; Formula Ptg: TRUE; Ptgs: VALUE Index in Ptgs: 3 <br>Source Object Id: org.apache.poi.xssf.usermodel.XSSFEvaluationWorkbook@acb5508'},
{id: '439ea7af-4d33-4c29-bf1b-a0e71b723acc', label: 'VALUE\nAlt', color: '#31b0d5', title: 'Name: VALUE<br>Value: Alt<br>Type: CONSTANT_VALUE<br>Id: 439ea7af-4d33-4c29-bf1b-a0e71b723acc<br>Formula Expression: Formula String: VALUE; Formula Values: Alt; Formula Ptg: Alt; Ptgs: VALUE Index in Ptgs: 0 <br>Source Object Id: org.apache.poi.xssf.usermodel.XSSFEvaluationWorkbook@acb5508'},
{id: 'd871eccb-c69e-471c-906a-134dea29bcc2', label: 'A1:C4\n...', color: '#31b0d5', title: 'Name: A1:C4<br>Value: [[Alt, CTRL, Bolt], [4.0, 4.0, 9.0], [5.0, 7.0, 10.0], [6.0, 8.0, 11.0]]<br>Type: RANGE<br>Id: d871eccb-c69e-471c-906a-134dea29bcc2<br>Formula Expression: Formula String: A1:C4; Formula Values: [[Alt, CTRL, Bolt], [4.0, 4.0, 9.0], [5.0, 7.0, 10.0], [6.0, 8.0, 11.0]]; Formula Ptg: [[Alt, CTRL, Bolt], [4.0, 4.0, 9.0], [5.0, 7.0, 10.0], [6.0, 8.0, 11.0]]; Ptgs: A1:C4 Index in Ptgs: 1 <br>Source Object Id: org.apache.poi.xssf.usermodel.XSSFEvaluationWorkbook@acb5508'},
{id: '75d1e4b2-ba99-4aaa-bc4e-fc13c43b390e', label: 'HLOOKUP\n4.0', color: '#f0ad4e', title: 'Name: HLOOKUP<br>Value: 4.0<br>Type: FUNCTION<br>Id: 75d1e4b2-ba99-4aaa-bc4e-fc13c43b390e<br>Formula Expression: Formula String: HLOOKUP(VALUE, VALUE, A1:C4, VALUE); Formula Values: HLOOKUP(TRUE, 2.0, Alt, CTRL, Bolt, 4.0, 4.0, 9.0, 5.0, 7.0, 10.0, 6.0, 8.0, 11.0, Alt); Formula Ptg: ; Ptgs:  Index in Ptgs: 4 <br>Source Object Id: org.apache.poi.xssf.usermodel.XSSFEvaluationWorkbook@acb5508'}
                            ]);


var edges = new vis.DataSet([
                             /* {from: id_a, to: id_b}, */
{from: '75d1e4b2-ba99-4aaa-bc4e-fc13c43b390e', to: '924a5921-fb23-4cfd-ab3e-b9e221afeedc'},
{from: 'ad1cc7ce-0aea-44ac-8a1c-67d52f98102e', to: '75d1e4b2-ba99-4aaa-bc4e-fc13c43b390e'},
{from: '439ea7af-4d33-4c29-bf1b-a0e71b723acc', to: '75d1e4b2-ba99-4aaa-bc4e-fc13c43b390e'},
{from: 'd871eccb-c69e-471c-906a-134dea29bcc2', to: '75d1e4b2-ba99-4aaa-bc4e-fc13c43b390e'},
{from: 'acc2e765-f5cb-493b-bc1e-14dd8cb5fbf2', to: '75d1e4b2-ba99-4aaa-bc4e-fc13c43b390e'}
                            ]);