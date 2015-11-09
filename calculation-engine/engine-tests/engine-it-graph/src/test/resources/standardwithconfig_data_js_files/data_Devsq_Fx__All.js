var nodes = new vis.DataSet([
                             /* {id: a, label: b, ...}, */
{id: '04f85697-af30-46ff-9f82-2d81200b08f1', label: 'A8\n48.0', color: '#31b0d5', title: 'Name: A8<br>Value: 48.0<br>Type: CELL_WITH_FORMULA<br>Id: 04f85697-af30-46ff-9f82-2d81200b08f1<br>Formula Expression: Formula String: DEVSQ(A1:A7); Formula Values: DEVSQ(4.0, 5.0, 8.0, 7.0, 11.0, 4.0, 3.0); Formula Ptg: 4.0, 5.0, 8.0, 7.0, 11.0, 4.0, 3.0 DEVSQ ; Ptgs: A1:A7 DEVSQ  Index in Ptgs: 1 <br>Source Object Id: org.apache.poi.xssf.usermodel.XSSFEvaluationWorkbook@18213a65'},
{id: 'c80c0954-55be-4334-9d6e-5393139b00bf', label: 'A1:A7\n[[4.0], [5.0], [8.0], [7.0], [11.0], [4.0], [3.0]]', color: '#31b0d5', title: 'Name: A1:A7<br>Value: [[4.0], [5.0], [8.0], [7.0], [11.0], [4.0], [3.0]]<br>Type: RANGE<br>Id: c80c0954-55be-4334-9d6e-5393139b00bf<br>Formula Expression: Formula String: A1:A7; Formula Values: [[4.0], [5.0], [8.0], [7.0], [11.0], [4.0], [3.0]]; Formula Ptg: [[4.0], [5.0], [8.0], [7.0], [11.0], [4.0], [3.0]]; Ptgs: A1:A7 Index in Ptgs: 0 <br>Source Object Id: org.apache.poi.xssf.usermodel.XSSFEvaluationWorkbook@18213a65'},
{id: '4778a474-2428-48e0-bc12-31b56fe54d85', label: 'DEVSQ\n48.0', color: '#f0ad4e', title: 'Name: DEVSQ<br>Value: 48.0<br>Type: FUNCTION<br>Id: 4778a474-2428-48e0-bc12-31b56fe54d85<br>Formula Expression: Formula String: DEVSQ(A1:A7); Formula Values: DEVSQ(4.0, 5.0, 8.0, 7.0, 11.0, 4.0, 3.0); Formula Ptg: ; Ptgs:  Index in Ptgs: 1 <br>Source Object Id: org.apache.poi.xssf.usermodel.XSSFEvaluationWorkbook@18213a65'}
                            ]);


var edges = new vis.DataSet([
                             /* {from: id_a, to: id_b}, */
{from: '4778a474-2428-48e0-bc12-31b56fe54d85', to: '04f85697-af30-46ff-9f82-2d81200b08f1'},
{from: 'c80c0954-55be-4334-9d6e-5393139b00bf', to: '4778a474-2428-48e0-bc12-31b56fe54d85'}
                            ]);