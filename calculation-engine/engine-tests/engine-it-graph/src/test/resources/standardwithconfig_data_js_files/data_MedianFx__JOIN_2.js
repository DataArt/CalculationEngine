var nodes = new vis.DataSet([
                             /* {id: a, label: b, ...}, */
{id: '44ff0004-191a-4827-8344-a953656dfeaf', label: 'E5\n7.0', color: '#31b0d5', title: 'Name: E5<br>Value: 7.0<br>Type: CELL_WITH_FORMULA<br>Id: 44ff0004-191a-4827-8344-a953656dfeaf<br>Formula Expression: Formula String: MEDIAN(A2:E2); Formula Values: MEDIAN(6.0, 4.0, 7.0, 65.0, 7.0); Formula Ptg: 6.0, 4.0, 7.0, 65.0, 7.0 MEDIAN ; Ptgs: A2:E2 MEDIAN  Index in Ptgs: 1 <br>Source Object Id: org.apache.poi.xssf.usermodel.XSSFEvaluationWorkbook@3079c26a'},
{id: '74107c2b-1fc8-4f64-9f15-cc387384ad68', label: 'MEDIAN\n7.0', color: '#f0ad4e', title: 'Name: MEDIAN<br>Value: 7.0<br>Type: FUNCTION<br>Id: 74107c2b-1fc8-4f64-9f15-cc387384ad68<br>Formula Expression: Formula String: MEDIAN(A2:E2); Formula Values: MEDIAN(6.0, 4.0, 7.0, 65.0, 7.0); Formula Ptg: ; Ptgs:  Index in Ptgs: 1 <br>Source Object Id: org.apache.poi.xssf.usermodel.XSSFEvaluationWorkbook@3079c26a'},
{id: '68132b22-cedf-4b04-a107-a126f163f668', label: 'A2:E2\n[[6.0, 4.0, 7.0, 65.0, 7.0]]', color: '#31b0d5', title: 'Name: A2:E2<br>Value: [[6.0, 4.0, 7.0, 65.0, 7.0]]<br>Type: RANGE<br>Id: 68132b22-cedf-4b04-a107-a126f163f668<br>Formula Expression: Formula String: A2:E2; Formula Values: [[6.0, 4.0, 7.0, 65.0, 7.0]]; Formula Ptg: [[6.0, 4.0, 7.0, 65.0, 7.0]]; Ptgs: A2:E2 Index in Ptgs: 0 <br>Source Object Id: org.apache.poi.xssf.usermodel.XSSFEvaluationWorkbook@3079c26a'}
                            ]);


var edges = new vis.DataSet([
                             /* {from: id_a, to: id_b}, */
{from: '74107c2b-1fc8-4f64-9f15-cc387384ad68', to: '44ff0004-191a-4827-8344-a953656dfeaf'},
{from: '68132b22-cedf-4b04-a107-a126f163f668', to: '74107c2b-1fc8-4f64-9f15-cc387384ad68'}
                            ]);