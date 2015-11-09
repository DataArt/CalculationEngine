var nodes = new vis.DataSet([
                             /* {id: a, label: b, ...}, */
{id: '9bd540dd-4e12-413a-8cbe-a0ad2f4df9d1', label: 'C2:I3\n...', color: '#31b0d5', title: 'Name: C2:I3<br>Value: [[7.0, 65.0, 7.0, 6.0, 4.0, 7.0, 65.0], [8.0, 367.0, 57.0, 4.0, 6.0, 8.0, 367.0]]<br>Type: RANGE<br>Id: 9bd540dd-4e12-413a-8cbe-a0ad2f4df9d1<br>Formula Expression: Formula String: C2:I3; Formula Values: [[7.0, 65.0, 7.0, 6.0, 4.0, 7.0, 65.0], [8.0, 367.0, 57.0, 4.0, 6.0, 8.0, 367.0]]; Formula Ptg: [[7.0, 65.0, 7.0, 6.0, 4.0, 7.0, 65.0], [8.0, 367.0, 57.0, 4.0, 6.0, 8.0, 367.0]]; Ptgs: C2:I3 Index in Ptgs: 0 <br>Source Object Id: org.apache.poi.xssf.usermodel.XSSFEvaluationWorkbook@33b1c5c5'},
{id: '4c8c2493-0f14-416e-b471-d0403f157b69', label: 'E5\n7.0', color: '#31b0d5', title: 'Name: E5<br>Value: 7.0<br>Type: CELL_WITH_FORMULA<br>Id: 4c8c2493-0f14-416e-b471-d0403f157b69<br>Formula Expression: Formula String: COLUMNS(C2:I3); Formula Values: COLUMNS(7.0, 65.0, 7.0, 6.0, 4.0, 7.0, 65.0, 8.0, 367.0, 57.0, 4.0, 6.0, 8.0, 367.0); Formula Ptg: 7.0, 65.0, 7.0, 6.0, 4.0, 7.0, 65.0, 8.0, 367.0, 57.0, 4.0, 6.0, 8.0, 367.0 COLUMNS ; Ptgs: C2:I3 COLUMNS  Index in Ptgs: 1 <br>Source Object Id: org.apache.poi.xssf.usermodel.XSSFEvaluationWorkbook@33b1c5c5'},
{id: '5ae05c0e-a977-448c-8369-80bc34acb738', label: 'COLUMNS\n7.0', color: '#f0ad4e', title: 'Name: COLUMNS<br>Value: 7.0<br>Type: FUNCTION<br>Id: 5ae05c0e-a977-448c-8369-80bc34acb738<br>Formula Expression: Formula String: COLUMNS(C2:I3); Formula Values: COLUMNS(7.0, 65.0, 7.0, 6.0, 4.0, 7.0, 65.0, 8.0, 367.0, 57.0, 4.0, 6.0, 8.0, 367.0); Formula Ptg: ; Ptgs:  Index in Ptgs: 1 <br>Source Object Id: org.apache.poi.xssf.usermodel.XSSFEvaluationWorkbook@33b1c5c5'}
                            ]);


var edges = new vis.DataSet([
                             /* {from: id_a, to: id_b}, */
{from: '9bd540dd-4e12-413a-8cbe-a0ad2f4df9d1', to: '5ae05c0e-a977-448c-8369-80bc34acb738'},
{from: '5ae05c0e-a977-448c-8369-80bc34acb738', to: '4c8c2493-0f14-416e-b471-d0403f157b69'}
                            ]);