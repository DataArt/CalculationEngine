var nodes = new vis.DataSet([
                             /* {id: a, label: b, ...}, */
{id: '113c1b74-d814-416f-a0ae-4da6bbd39fa4', label: 'ATAN\n0.7853981633974483', color: '#f0ad4e', title: 'Name: ATAN<br>Alias: null<br>Value: 0.7853981633974483<br>Type: FUNCTION<br>Id: 113c1b74-d814-416f-a0ae-4da6bbd39fa4<br>Formula Expression: Formula String: ATAN(VALUE); Formula Values: ATAN(1.0); Formula Ptg: ; Ptgs:  Index in Ptgs: 1 <br>Source Object Id: org.apache.poi.xssf.usermodel.XSSFEvaluationWorkbook@193f604a'},
{id: '4cd89e0d-d26c-4d4f-8135-b0d8b15270c0', label: 'VALUE\n1.0', color: '#31b0d5', title: 'Name: VALUE<br>Alias: null<br>Value: 1.0<br>Type: CONSTANT_VALUE<br>Id: 4cd89e0d-d26c-4d4f-8135-b0d8b15270c0<br>Formula Expression: Formula String: VALUE; Formula Values: 1.0; Formula Ptg: 1.0; Ptgs: VALUE Index in Ptgs: 0 <br>Source Object Id: org.apache.poi.xssf.usermodel.XSSFEvaluationWorkbook@193f604a'},
{id: 'a71c7fdf-94cd-426a-b383-9abb90482783', label: 'B2\n0.7853981633974483', color: '#31b0d5', title: 'Name: B2<br>Alias: null<br>Value: 0.7853981633974483<br>Type: CELL_WITH_FORMULA<br>Id: a71c7fdf-94cd-426a-b383-9abb90482783<br>Formula Expression: Formula String: ATAN(VALUE); Formula Values: ATAN(1.0); Formula Ptg: 1.0 ATAN ; Ptgs: VALUE ATAN  Index in Ptgs: 1 <br>Source Object Id: org.apache.poi.xssf.usermodel.XSSFEvaluationWorkbook@193f604a'}
                            ]);


var edges = new vis.DataSet([
                             /* {from: id_a, to: id_b}, */
{from: '4cd89e0d-d26c-4d4f-8135-b0d8b15270c0', to: '113c1b74-d814-416f-a0ae-4da6bbd39fa4'},
{from: '113c1b74-d814-416f-a0ae-4da6bbd39fa4', to: 'a71c7fdf-94cd-426a-b383-9abb90482783'}
                            ]);