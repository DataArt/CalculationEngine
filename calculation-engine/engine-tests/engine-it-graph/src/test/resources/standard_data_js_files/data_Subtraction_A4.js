var nodes = new vis.DataSet([
                             /* {id: a, label: b, ...}, */
{id: 'd9171e60-eb5c-4b07-911b-e567677e6807', label: '-\n60.0', color: '#f0ad4e', title: 'Name: -<br>Alias: null<br>Value: 60.0<br>Type: OPERATOR<br>Id: d9171e60-eb5c-4b07-911b-e567677e6807<br>Formula Expression: Formula String: A1 - A2; Formula Values: 80.0 - 20.0; Formula Ptg: ; Ptgs:  Index in Ptgs: 2 <br>Source Object Id: org.apache.poi.xssf.usermodel.XSSFEvaluationWorkbook@43c67247'},
{id: 'adf80fb5-604e-4ead-b626-4cb1cb1d8d10', label: 'A4\n60.0', color: '#31b0d5', title: 'Name: A4<br>Alias: null<br>Value: 60.0<br>Type: CELL_WITH_FORMULA<br>Id: adf80fb5-604e-4ead-b626-4cb1cb1d8d10<br>Formula Expression: Formula String: A1 - A2; Formula Values: 80.0 - 20.0; Formula Ptg: 80.0 20.0 -; Ptgs: A1 A2 - Index in Ptgs: 2 <br>Source Object Id: org.apache.poi.xssf.usermodel.XSSFEvaluationWorkbook@43c67247'},
{id: 'ea4d1cfb-c5f4-48c6-b428-6bbb511e635a', label: 'A1\n80.0', color: '#31b0d5', title: 'Name: A1<br>Alias: null<br>Value: 80.0<br>Type: CELL_WITH_VALUE<br>Id: ea4d1cfb-c5f4-48c6-b428-6bbb511e635a<br>Formula Expression: Formula String: A1; Formula Values: 80.0; Formula Ptg: 80.0; Ptgs: A1 Index in Ptgs: 0 <br>Source Object Id: org.apache.poi.xssf.usermodel.XSSFEvaluationWorkbook@43c67247'},
{id: '3c125575-984f-42fc-bfd2-a756ba6d9788', label: 'A2\n20.0', color: '#31b0d5', title: 'Name: A2<br>Alias: null<br>Value: 20.0<br>Type: CELL_WITH_VALUE<br>Id: 3c125575-984f-42fc-bfd2-a756ba6d9788<br>Formula Expression: Formula String: A2; Formula Values: 20.0; Formula Ptg: 20.0; Ptgs: A2 Index in Ptgs: 1 <br>Source Object Id: org.apache.poi.xssf.usermodel.XSSFEvaluationWorkbook@43c67247'}
                            ]);


var edges = new vis.DataSet([
                             /* {from: id_a, to: id_b}, */
{from: 'd9171e60-eb5c-4b07-911b-e567677e6807', to: 'adf80fb5-604e-4ead-b626-4cb1cb1d8d10'},
{from: '3c125575-984f-42fc-bfd2-a756ba6d9788', to: 'd9171e60-eb5c-4b07-911b-e567677e6807'},
{from: 'ea4d1cfb-c5f4-48c6-b428-6bbb511e635a', to: 'd9171e60-eb5c-4b07-911b-e567677e6807'}
                            ]);