var nodes = new vis.DataSet([
                             /* {id: a, label: b, ...}, */
{id: 'cf27a9e7-360f-4c89-ad13-e1908dcf3395', label: '[1]Sheet2!B4\n#REF!', color: '#31b0d5', title: 'Name: [1]Sheet2!B4<br>Value: #REF!<br>Type: CELL_WITH_VALUE<br>Id: cf27a9e7-360f-4c89-ad13-e1908dcf3395<br>Formula Expression: Formula String: [1]Sheet2!B4; Formula Values: #REF!; Formula Ptg: #REF!; Ptgs: [1]Sheet2!B4 Index in Ptgs: 0 <br>Source Object Id: org.apache.poi.xssf.usermodel.XSSFEvaluationWorkbook@1f1ffc18'},
{id: 'c9d4ce10-2936-439a-9af5-b821ca2620e5', label: 'E6\n#REF!', color: '#31b0d5', title: 'Name: E6<br>Value: #REF!<br>Type: CELL_WITH_FORMULA<br>Id: c9d4ce10-2936-439a-9af5-b821ca2620e5<br>Formula Expression: Formula String: [1]Sheet2!B4; Formula Values: #REF!; Formula Ptg: #REF!; Ptgs: [1]Sheet2!B4 Index in Ptgs: 0 <br>Source Object Id: org.apache.poi.xssf.usermodel.XSSFEvaluationWorkbook@1f1ffc18'}
                            ]);


var edges = new vis.DataSet([
                             /* {from: id_a, to: id_b}, */
{from: 'cf27a9e7-360f-4c89-ad13-e1908dcf3395', to: 'c9d4ce10-2936-439a-9af5-b821ca2620e5'}
                            ]);