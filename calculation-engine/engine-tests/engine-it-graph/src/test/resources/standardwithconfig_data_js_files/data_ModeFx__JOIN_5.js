var nodes = new vis.DataSet([
                             /* {id: a, label: b, ...}, */
{id: 'f9ad18a9-f26a-457f-a27f-b4c814c2761b', label: 'E5\n4.0', color: '#31b0d5', title: 'Name: E5<br>Value: 4.0<br>Type: CELL_WITH_FORMULA<br>Id: f9ad18a9-f26a-457f-a27f-b4c814c2761b<br>Formula Expression: Formula String: MODE(A1:E4); Formula Values: MODE(12.0, 2.0, 3.0, 4.0, 5.0, 6.0, 4.0, 7.0, 65.0, 7.0, 4.0, 6.0, 8.0, 367.0, 57.0, 45.0, 2.0, 89.0, 46.0, 46.0); Formula Ptg: 12.0, 2.0, 3.0, 4.0, 5.0, 6.0, 4.0, 7.0, 65.0, 7.0, 4.0, 6.0, 8.0, 367.0, 57.0, 45.0, 2.0, 89.0, 46.0, 46.0 MODE ; Ptgs: A1:E4 MODE  Index in Ptgs: 1 <br>Source Object Id: org.apache.poi.xssf.usermodel.XSSFEvaluationWorkbook@c0d114b'},
{id: 'fd45c199-5e79-4bd4-9a47-63cc36393981', label: 'A1:E4\n...', color: '#31b0d5', title: 'Name: A1:E4<br>Value: [[12.0, 2.0, 3.0, 4.0, 5.0], [6.0, 4.0, 7.0, 65.0, 7.0], [4.0, 6.0, 8.0, 367.0, 57.0], [45.0, 2.0, 89.0, 46.0, 46.0]]<br>Type: RANGE<br>Id: fd45c199-5e79-4bd4-9a47-63cc36393981<br>Formula Expression: Formula String: A1:E4; Formula Values: [[12.0, 2.0, 3.0, 4.0, 5.0], [6.0, 4.0, 7.0, 65.0, 7.0], [4.0, 6.0, 8.0, 367.0, 57.0], [45.0, 2.0, 89.0, 46.0, 46.0]]; Formula Ptg: [[12.0, 2.0, 3.0, 4.0, 5.0], [6.0, 4.0, 7.0, 65.0, 7.0], [4.0, 6.0, 8.0, 367.0, 57.0], [45.0, 2.0, 89.0, 46.0, 46.0]]; Ptgs: A1:E4 Index in Ptgs: 0 <br>Source Object Id: org.apache.poi.xssf.usermodel.XSSFEvaluationWorkbook@c0d114b'},
{id: '8e7a563e-3060-44db-b7ec-bfa82da1d738', label: 'MODE\n4.0', color: '#f0ad4e', title: 'Name: MODE<br>Value: 4.0<br>Type: FUNCTION<br>Id: 8e7a563e-3060-44db-b7ec-bfa82da1d738<br>Formula Expression: Formula String: MODE(A1:E4); Formula Values: MODE(12.0, 2.0, 3.0, 4.0, 5.0, 6.0, 4.0, 7.0, 65.0, 7.0, 4.0, 6.0, 8.0, 367.0, 57.0, 45.0, 2.0, 89.0, 46.0, 46.0); Formula Ptg: ; Ptgs:  Index in Ptgs: 1 <br>Source Object Id: org.apache.poi.xssf.usermodel.XSSFEvaluationWorkbook@c0d114b'}
                            ]);


var edges = new vis.DataSet([
                             /* {from: id_a, to: id_b}, */
{from: '8e7a563e-3060-44db-b7ec-bfa82da1d738', to: 'f9ad18a9-f26a-457f-a27f-b4c814c2761b'},
{from: 'fd45c199-5e79-4bd4-9a47-63cc36393981', to: '8e7a563e-3060-44db-b7ec-bfa82da1d738'}
                            ]);