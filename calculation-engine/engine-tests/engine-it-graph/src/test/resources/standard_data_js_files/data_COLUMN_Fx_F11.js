var nodes = new vis.DataSet([
                             /* {id: a, label: b, ...}, */
{id: 'ce42692d-0153-4672-8b0c-40cefd63f574', label: 'F11\n3.0', color: '#31b0d5', title: 'Name: F11<br>Value: 3.0<br>Type: CELL_WITH_FORMULA<br>Id: ce42692d-0153-4672-8b0c-40cefd63f574<br>Formula Expression: Formula String: COLUMN(C5); Formula Values: COLUMN(7702.0); Formula Ptg: 7702.0 COLUMN ; Ptgs: C5 COLUMN  Index in Ptgs: 1 <br>Source Object Id: org.apache.poi.xssf.usermodel.XSSFEvaluationWorkbook@2fd953a6'},
{id: 'b029de32-718f-48ea-9c86-dba8ccdaf981', label: 'C5\n7702.0', color: '#31b0d5', title: 'Name: C5<br>Value: 7702.0<br>Type: CELL_WITH_VALUE<br>Id: b029de32-718f-48ea-9c86-dba8ccdaf981<br>Formula Expression: Formula String: C5; Formula Values: 7702.0; Formula Ptg: 7702.0; Ptgs: C5 Index in Ptgs: 0 <br>Source Object Id: org.apache.poi.xssf.usermodel.XSSFEvaluationWorkbook@2fd953a6'},
{id: 'cf70f2ed-4c24-4ff1-a823-d753278b9c81', label: 'COLUMN\n3.0', color: '#f0ad4e', title: 'Name: COLUMN<br>Value: 3.0<br>Type: FUNCTION<br>Id: cf70f2ed-4c24-4ff1-a823-d753278b9c81<br>Formula Expression: Formula String: COLUMN(C5); Formula Values: COLUMN(7702.0); Formula Ptg: ; Ptgs:  Index in Ptgs: 1 <br>Source Object Id: org.apache.poi.xssf.usermodel.XSSFEvaluationWorkbook@2fd953a6'}
                            ]);


var edges = new vis.DataSet([
                             /* {from: id_a, to: id_b}, */
{from: 'cf70f2ed-4c24-4ff1-a823-d753278b9c81', to: 'ce42692d-0153-4672-8b0c-40cefd63f574'},
{from: 'b029de32-718f-48ea-9c86-dba8ccdaf981', to: 'cf70f2ed-4c24-4ff1-a823-d753278b9c81'}
                            ]);