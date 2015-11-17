var nodes = new vis.DataSet([
                             /* {id: a, label: b, ...}, */
{id: '069e59c3-c269-41fc-a563-f17e1e7fd00c', label: 'VALUE\n12.0', color: '#31b0d5', title: 'Name: VALUE<br>Value: 12.0<br>Type: CONSTANT_VALUE<br>Id: 069e59c3-c269-41fc-a563-f17e1e7fd00c<br>Formula Expression: Formula String: VALUE; Formula Values: 12.0; Formula Ptg: 12.0; Ptgs: VALUE Index in Ptgs: 0 <br>Source Object Id: org.apache.poi.xssf.usermodel.XSSFEvaluationWorkbook@44e4cf8a'},
{id: 'af1e0e42-f715-45f7-b04a-bf151ffa7a15', label: 'SUM\n115.0', color: '#f0ad4e', title: 'Name: SUM<br>Value: 115.0<br>Type: FUNCTION<br>Id: af1e0e42-f715-45f7-b04a-bf151ffa7a15<br>Formula Expression: Formula String: SUM(E1:E4); Formula Values: SUM(5.0, 7.0, 57.0, 46.0); Formula Ptg: ; Ptgs:  Index in Ptgs: 1 <br>Source Object Id: org.apache.poi.xssf.usermodel.XSSFEvaluationWorkbook@44e4cf8a'},
{id: '51b33536-aade-4e59-a7ab-f773264c958a', label: 'A1\n12.0', color: '#31b0d5', title: 'Name: A1<br>Value: 12.0<br>Type: CELL_WITH_FORMULA<br>Id: 51b33536-aade-4e59-a7ab-f773264c958a<br>Formula Expression: Formula String: VALUE; Formula Values: 12.0; Formula Ptg: 12.0; Ptgs: VALUE Index in Ptgs: 0 <br>Source Object Id: org.apache.poi.xssf.usermodel.XSSFEvaluationWorkbook@44e4cf8a'},
{id: '21bcbc2f-69f4-40b6-817d-c1306803b22d', label: 'E1:E4\n[[5.0], [7.0], [57.0], [46.0]]', color: '#31b0d5', title: 'Name: E1:E4<br>Value: [[5.0], [7.0], [57.0], [46.0]]<br>Type: RANGE<br>Id: 21bcbc2f-69f4-40b6-817d-c1306803b22d<br>Formula Expression: Formula String: E1:E4; Formula Values: [[5.0], [7.0], [57.0], [46.0]]; Formula Ptg: [[5.0], [7.0], [57.0], [46.0]]; Ptgs: E1:E4 Index in Ptgs: 0 <br>Source Object Id: org.apache.poi.xssf.usermodel.XSSFEvaluationWorkbook@44e4cf8a'},
{id: '893fcbdd-05c4-4930-902c-b68d6e9257d4', label: 'E5\n115.0', color: '#31b0d5', title: 'Name: E5<br>Value: 115.0<br>Type: CELL_WITH_FORMULA<br>Id: 893fcbdd-05c4-4930-902c-b68d6e9257d4<br>Formula Expression: Formula String: SUM(E1:E4); Formula Values: SUM(5.0, 7.0, 57.0, 46.0); Formula Ptg: 5.0, 7.0, 57.0, 46.0 SUM ; Ptgs: E1:E4 SUM  Index in Ptgs: 1 <br>Source Object Id: org.apache.poi.xssf.usermodel.XSSFEvaluationWorkbook@44e4cf8a'}
                            ]);


var edges = new vis.DataSet([
                             /* {from: id_a, to: id_b}, */
{from: 'af1e0e42-f715-45f7-b04a-bf151ffa7a15', to: '893fcbdd-05c4-4930-902c-b68d6e9257d4'},
{from: '069e59c3-c269-41fc-a563-f17e1e7fd00c', to: '51b33536-aade-4e59-a7ab-f773264c958a'},
{from: '21bcbc2f-69f4-40b6-817d-c1306803b22d', to: 'af1e0e42-f715-45f7-b04a-bf151ffa7a15'}
                            ]);