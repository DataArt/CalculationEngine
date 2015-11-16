var nodes = new vis.DataSet([
                             /* {id: a, label: b, ...}, */
{id: 'df07ca04-8df0-4cb4-98ff-a37a280ba584', label: 'A8\n48.0', color: '#31b0d5', title: 'Name: A8<br>Value: 48.0<br>Type: CELL_WITH_FORMULA<br>Id: df07ca04-8df0-4cb4-98ff-a37a280ba584<br>Formula Expression: Formula String: DEVSQ(A1:A7); Formula Values: DEVSQ(4.0, 5.0, 8.0, 7.0, 11.0, 4.0, 3.0); Formula Ptg: 4.0, 5.0, 8.0, 7.0, 11.0, 4.0, 3.0 DEVSQ ; Ptgs: A1:A7 DEVSQ  Index in Ptgs: 1 <br>Source Object Id: org.apache.poi.xssf.usermodel.XSSFEvaluationWorkbook@18213a65'},
{id: '6d3e8b26-96be-4644-b8f4-2be0a5ffa7f6', label: 'A1:A7\n[[4.0], [5.0], [8.0], [7.0], [11.0], [4.0], [3.0]]', color: '#31b0d5', title: 'Name: A1:A7<br>Value: [[4.0], [5.0], [8.0], [7.0], [11.0], [4.0], [3.0]]<br>Type: RANGE<br>Id: 6d3e8b26-96be-4644-b8f4-2be0a5ffa7f6<br>Formula Expression: Formula String: A1:A7; Formula Values: [[4.0], [5.0], [8.0], [7.0], [11.0], [4.0], [3.0]]; Formula Ptg: [[4.0], [5.0], [8.0], [7.0], [11.0], [4.0], [3.0]]; Ptgs: A1:A7 Index in Ptgs: 0 <br>Source Object Id: org.apache.poi.xssf.usermodel.XSSFEvaluationWorkbook@18213a65'},
{id: 'fe0b3de7-a746-43e3-b2c8-43e1c6b1ae83', label: 'DEVSQ\n48.0', color: '#f0ad4e', title: 'Name: DEVSQ<br>Value: 48.0<br>Type: FUNCTION<br>Id: fe0b3de7-a746-43e3-b2c8-43e1c6b1ae83<br>Formula Expression: Formula String: DEVSQ(A1:A7); Formula Values: DEVSQ(4.0, 5.0, 8.0, 7.0, 11.0, 4.0, 3.0); Formula Ptg: ; Ptgs:  Index in Ptgs: 1 <br>Source Object Id: org.apache.poi.xssf.usermodel.XSSFEvaluationWorkbook@18213a65'}
                            ]);


var edges = new vis.DataSet([
                             /* {from: id_a, to: id_b}, */
{from: 'fe0b3de7-a746-43e3-b2c8-43e1c6b1ae83', to: 'df07ca04-8df0-4cb4-98ff-a37a280ba584'},
{from: '6d3e8b26-96be-4644-b8f4-2be0a5ffa7f6', to: 'fe0b3de7-a746-43e3-b2c8-43e1c6b1ae83'}
                            ]);