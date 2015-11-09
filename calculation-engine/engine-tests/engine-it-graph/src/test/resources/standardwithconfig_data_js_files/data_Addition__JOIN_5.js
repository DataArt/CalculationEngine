var nodes = new vis.DataSet([
                             /* {id: a, label: b, ...}, */
{id: 'a27c4cc1-2ff3-47bb-b911-11944192eb61', label: 'A3\n50.0', color: '#31b0d5', title: 'Name: A3<br>Value: 50.0<br>Type: CELL_WITH_FORMULA<br>Id: a27c4cc1-2ff3-47bb-b911-11944192eb61<br>Formula Expression: Formula String: A1 + A2; Formula Values: 20.0 + 30.0; Formula Ptg: 20.0 30.0 +; Ptgs: A1 A2 + Index in Ptgs: 2 <br>Source Object Id: org.apache.poi.xssf.usermodel.XSSFEvaluationWorkbook@24cdc97f'},
{id: '55e028a7-0616-4708-a3ff-04d73f4fad6b', label: '+\n50.0', color: '#f0ad4e', title: 'Name: +<br>Value: 50.0<br>Type: OPERATOR<br>Id: 55e028a7-0616-4708-a3ff-04d73f4fad6b<br>Formula Expression: Formula String: A1 + A2; Formula Values: 20.0 + 30.0; Formula Ptg: ; Ptgs:  Index in Ptgs: 2 <br>Source Object Id: org.apache.poi.xssf.usermodel.XSSFEvaluationWorkbook@24cdc97f'},
{id: 'c22cb5f0-0e37-44bb-bab1-7aa7ed709937', label: 'A1\n20.0', color: '#31b0d5', title: 'Name: A1<br>Value: 20.0<br>Type: CELL_WITH_VALUE<br>Id: c22cb5f0-0e37-44bb-bab1-7aa7ed709937<br>Formula Expression: Formula String: A1; Formula Values: 20.0; Formula Ptg: 20.0; Ptgs: A1 Index in Ptgs: 0 <br>Source Object Id: org.apache.poi.xssf.usermodel.XSSFEvaluationWorkbook@24cdc97f'},
{id: '33802715-58c1-41bf-8f0a-cdcd32d52882', label: 'A2\n30.0', color: '#31b0d5', title: 'Name: A2<br>Value: 30.0<br>Type: CELL_WITH_VALUE<br>Id: 33802715-58c1-41bf-8f0a-cdcd32d52882<br>Formula Expression: Formula String: A2; Formula Values: 30.0; Formula Ptg: 30.0; Ptgs: A2 Index in Ptgs: 1 <br>Source Object Id: org.apache.poi.xssf.usermodel.XSSFEvaluationWorkbook@24cdc97f'}
                            ]);


var edges = new vis.DataSet([
                             /* {from: id_a, to: id_b}, */
{from: '33802715-58c1-41bf-8f0a-cdcd32d52882', to: '55e028a7-0616-4708-a3ff-04d73f4fad6b'},
{from: '55e028a7-0616-4708-a3ff-04d73f4fad6b', to: 'a27c4cc1-2ff3-47bb-b911-11944192eb61'},
{from: 'c22cb5f0-0e37-44bb-bab1-7aa7ed709937', to: '55e028a7-0616-4708-a3ff-04d73f4fad6b'}
                            ]);