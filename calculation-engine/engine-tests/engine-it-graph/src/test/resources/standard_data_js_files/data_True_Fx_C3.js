var nodes = new vis.DataSet([
                             /* {id: a, label: b, ...}, */
{id: 'fa2967c9-efe7-48f6-ab22-6d154fbc1351', label: 'VALUE\nTRUE', color: '#31b0d5', title: 'Name: VALUE<br>Alias: null<br>Value: TRUE<br>Type: CONSTANT_VALUE<br>Id: fa2967c9-efe7-48f6-ab22-6d154fbc1351<br>Formula Expression: Formula String: VALUE; Formula Values: TRUE; Formula Ptg: TRUE; Ptgs: VALUE Index in Ptgs: 0 <br>Source Object Id: org.apache.poi.xssf.usermodel.XSSFEvaluationWorkbook@6ef81f31'},
{id: '880fa3ec-d558-42a4-938a-ba897132c920', label: 'C3\nTRUE', color: '#31b0d5', title: 'Name: C3<br>Alias: null<br>Value: TRUE<br>Type: CELL_WITH_FORMULA<br>Id: 880fa3ec-d558-42a4-938a-ba897132c920<br>Formula Expression: Formula String: VALUE; Formula Values: TRUE; Formula Ptg: TRUE; Ptgs: VALUE Index in Ptgs: 0 <br>Source Object Id: org.apache.poi.xssf.usermodel.XSSFEvaluationWorkbook@6ef81f31'}
                            ]);


var edges = new vis.DataSet([
                             /* {from: id_a, to: id_b}, */
{from: 'fa2967c9-efe7-48f6-ab22-6d154fbc1351', to: '880fa3ec-d558-42a4-938a-ba897132c920'}
                            ]);