var nodes = new vis.DataSet([
                             /* {id: a, label: b, ...}, */
{id: '28151dac-cd15-4b2d-9f23-9482b988b413', label: 'A8\n48.0', color: '#31b0d5', title: 'Name: A8<br>Value: 48.0<br>Type: CELL_WITH_FORMULA<br>Id: 28151dac-cd15-4b2d-9f23-9482b988b413<br>Formula Expression: Formula String: DEVSQ(A1:A7); Formula Values: DEVSQ(4.0, 5.0, 8.0, 7.0, 11.0, 4.0, 3.0); Formula Ptg: 4.0, 5.0, 8.0, 7.0, 11.0, 4.0, 3.0 DEVSQ ; Ptgs: A1:A7 DEVSQ  Index in Ptgs: 1 <br>Source Object Id: org.apache.poi.xssf.usermodel.XSSFEvaluationWorkbook@7a78d2aa'},
{id: '52c9fcb5-eb0b-4730-8818-a0611182a0e5', label: 'A1:A7\n[[4.0], [5.0], [8.0], [7.0], [11.0], [4.0], [3.0]]', color: '#31b0d5', title: 'Name: A1:A7<br>Value: [[4.0], [5.0], [8.0], [7.0], [11.0], [4.0], [3.0]]<br>Type: RANGE<br>Id: 52c9fcb5-eb0b-4730-8818-a0611182a0e5<br>Formula Expression: Formula String: A1:A7; Formula Values: [[4.0], [5.0], [8.0], [7.0], [11.0], [4.0], [3.0]]; Formula Ptg: [[4.0], [5.0], [8.0], [7.0], [11.0], [4.0], [3.0]]; Ptgs: A1:A7 Index in Ptgs: 0 <br>Source Object Id: org.apache.poi.xssf.usermodel.XSSFEvaluationWorkbook@7a78d2aa'},
{id: '58841575-730a-4aac-9020-9cd5f1948ef9', label: 'DEVSQ\n48.0', color: '#f0ad4e', title: 'Name: DEVSQ<br>Value: 48.0<br>Type: FUNCTION<br>Id: 58841575-730a-4aac-9020-9cd5f1948ef9<br>Formula Expression: Formula String: DEVSQ(A1:A7); Formula Values: DEVSQ(4.0, 5.0, 8.0, 7.0, 11.0, 4.0, 3.0); Formula Ptg: ; Ptgs:  Index in Ptgs: 1 <br>Source Object Id: org.apache.poi.xssf.usermodel.XSSFEvaluationWorkbook@7a78d2aa'}
                            ]);


var edges = new vis.DataSet([
                             /* {from: id_a, to: id_b}, */
{from: '52c9fcb5-eb0b-4730-8818-a0611182a0e5', to: '58841575-730a-4aac-9020-9cd5f1948ef9'},
{from: '58841575-730a-4aac-9020-9cd5f1948ef9', to: '28151dac-cd15-4b2d-9f23-9482b988b413'}
                            ]);