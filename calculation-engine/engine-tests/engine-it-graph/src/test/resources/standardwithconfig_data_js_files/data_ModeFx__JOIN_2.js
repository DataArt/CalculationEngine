var nodes = new vis.DataSet([
                             /* {id: a, label: b, ...}, */
{id: 'b7d10958-631e-4872-9611-5505bbb2031d', label: 'MODE\n4.0', color: '#f0ad4e', title: 'Name: MODE<br>Value: 4.0<br>Type: FUNCTION<br>Id: b7d10958-631e-4872-9611-5505bbb2031d<br>Formula Expression: Formula String: MODE(A1:E4); Formula Values: MODE(12.0, 2.0, 3.0, 4.0, 5.0, 6.0, 4.0, 7.0, 65.0, 7.0, 4.0, 6.0, 8.0, 367.0, 57.0, 45.0, 2.0, 89.0, 46.0, 46.0); Formula Ptg: ; Ptgs:  Index in Ptgs: 1 <br>Source Object Id: org.apache.poi.xssf.usermodel.XSSFEvaluationWorkbook@24d8f87a'},
{id: '303ef4c6-122e-443c-9963-22c295ca6b44', label: 'E5\n4.0', color: '#31b0d5', title: 'Name: E5<br>Value: 4.0<br>Type: CELL_WITH_FORMULA<br>Id: 303ef4c6-122e-443c-9963-22c295ca6b44<br>Formula Expression: Formula String: MODE(A1:E4); Formula Values: MODE(12.0, 2.0, 3.0, 4.0, 5.0, 6.0, 4.0, 7.0, 65.0, 7.0, 4.0, 6.0, 8.0, 367.0, 57.0, 45.0, 2.0, 89.0, 46.0, 46.0); Formula Ptg: 12.0, 2.0, 3.0, 4.0, 5.0, 6.0, 4.0, 7.0, 65.0, 7.0, 4.0, 6.0, 8.0, 367.0, 57.0, 45.0, 2.0, 89.0, 46.0, 46.0 MODE ; Ptgs: A1:E4 MODE  Index in Ptgs: 1 <br>Source Object Id: org.apache.poi.xssf.usermodel.XSSFEvaluationWorkbook@24d8f87a'},
{id: '1afd0132-7ede-4099-ab4b-2e54172cb31f', label: 'A1:E4\n...', color: '#31b0d5', title: 'Name: A1:E4<br>Value: [[12.0, 2.0, 3.0, 4.0, 5.0], [6.0, 4.0, 7.0, 65.0, 7.0], [4.0, 6.0, 8.0, 367.0, 57.0], [45.0, 2.0, 89.0, 46.0, 46.0]]<br>Type: RANGE<br>Id: 1afd0132-7ede-4099-ab4b-2e54172cb31f<br>Formula Expression: Formula String: A1:E4; Formula Values: [[12.0, 2.0, 3.0, 4.0, 5.0], [6.0, 4.0, 7.0, 65.0, 7.0], [4.0, 6.0, 8.0, 367.0, 57.0], [45.0, 2.0, 89.0, 46.0, 46.0]]; Formula Ptg: [[12.0, 2.0, 3.0, 4.0, 5.0], [6.0, 4.0, 7.0, 65.0, 7.0], [4.0, 6.0, 8.0, 367.0, 57.0], [45.0, 2.0, 89.0, 46.0, 46.0]]; Ptgs: A1:E4 Index in Ptgs: 0 <br>Source Object Id: org.apache.poi.xssf.usermodel.XSSFEvaluationWorkbook@24d8f87a'}
                            ]);


var edges = new vis.DataSet([
                             /* {from: id_a, to: id_b}, */
{from: '1afd0132-7ede-4099-ab4b-2e54172cb31f', to: 'b7d10958-631e-4872-9611-5505bbb2031d'},
{from: 'b7d10958-631e-4872-9611-5505bbb2031d', to: '303ef4c6-122e-443c-9963-22c295ca6b44'}
                            ]);