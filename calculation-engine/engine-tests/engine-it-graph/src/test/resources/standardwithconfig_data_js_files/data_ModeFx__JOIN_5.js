var nodes = new vis.DataSet([
                             /* {id: a, label: b, ...}, */
{id: 'a490521d-64d6-43ac-8828-8a56aff3da4e', label: 'E5\n4.0', color: '#31b0d5', title: 'Name: E5<br>Value: 4.0<br>Type: CELL_WITH_FORMULA<br>Id: a490521d-64d6-43ac-8828-8a56aff3da4e<br>Formula Expression: Formula String: MODE(A1:E4); Formula Values: MODE(12.0, 2.0, 3.0, 4.0, 5.0, 6.0, 4.0, 7.0, 65.0, 7.0, 4.0, 6.0, 8.0, 367.0, 57.0, 45.0, 2.0, 89.0, 46.0, 46.0); Formula Ptg: 12.0, 2.0, 3.0, 4.0, 5.0, 6.0, 4.0, 7.0, 65.0, 7.0, 4.0, 6.0, 8.0, 367.0, 57.0, 45.0, 2.0, 89.0, 46.0, 46.0 MODE ; Ptgs: A1:E4 MODE  Index in Ptgs: 1 <br>Source Object Id: org.apache.poi.xssf.usermodel.XSSFEvaluationWorkbook@c0d114b'},
{id: 'f7206c0a-9869-4794-bb1d-7d10a1b74369', label: 'A1:E4\n...', color: '#31b0d5', title: 'Name: A1:E4<br>Value: [[12.0, 2.0, 3.0, 4.0, 5.0], [6.0, 4.0, 7.0, 65.0, 7.0], [4.0, 6.0, 8.0, 367.0, 57.0], [45.0, 2.0, 89.0, 46.0, 46.0]]<br>Type: RANGE<br>Id: f7206c0a-9869-4794-bb1d-7d10a1b74369<br>Formula Expression: Formula String: A1:E4; Formula Values: [[12.0, 2.0, 3.0, 4.0, 5.0], [6.0, 4.0, 7.0, 65.0, 7.0], [4.0, 6.0, 8.0, 367.0, 57.0], [45.0, 2.0, 89.0, 46.0, 46.0]]; Formula Ptg: [[12.0, 2.0, 3.0, 4.0, 5.0], [6.0, 4.0, 7.0, 65.0, 7.0], [4.0, 6.0, 8.0, 367.0, 57.0], [45.0, 2.0, 89.0, 46.0, 46.0]]; Ptgs: A1:E4 Index in Ptgs: 0 <br>Source Object Id: org.apache.poi.xssf.usermodel.XSSFEvaluationWorkbook@c0d114b'},
{id: '328487c6-4247-450b-8eee-3e600017eb42', label: 'MODE\n4.0', color: '#f0ad4e', title: 'Name: MODE<br>Value: 4.0<br>Type: FUNCTION<br>Id: 328487c6-4247-450b-8eee-3e600017eb42<br>Formula Expression: Formula String: MODE(A1:E4); Formula Values: MODE(12.0, 2.0, 3.0, 4.0, 5.0, 6.0, 4.0, 7.0, 65.0, 7.0, 4.0, 6.0, 8.0, 367.0, 57.0, 45.0, 2.0, 89.0, 46.0, 46.0); Formula Ptg: ; Ptgs:  Index in Ptgs: 1 <br>Source Object Id: org.apache.poi.xssf.usermodel.XSSFEvaluationWorkbook@c0d114b'}
                            ]);


var edges = new vis.DataSet([
                             /* {from: id_a, to: id_b}, */
{from: '328487c6-4247-450b-8eee-3e600017eb42', to: 'a490521d-64d6-43ac-8828-8a56aff3da4e'},
{from: 'f7206c0a-9869-4794-bb1d-7d10a1b74369', to: '328487c6-4247-450b-8eee-3e600017eb42'}
                            ]);