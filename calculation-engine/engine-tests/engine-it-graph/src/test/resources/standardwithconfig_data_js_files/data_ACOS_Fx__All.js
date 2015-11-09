var nodes = new vis.DataSet([
                             /* {id: a, label: b, ...}, */
{id: '93bd7eb1-da6c-4e72-8e53-249f4cc7f018', label: 'ACOS\n1.359221367036801', color: '#f0ad4e', title: 'Name: ACOS<br>Value: 1.359221367036801<br>Type: FUNCTION<br>Id: 93bd7eb1-da6c-4e72-8e53-249f4cc7f018<br>Formula Expression: Formula String: ACOS(C2); Formula Values: ACOS(0.21); Formula Ptg: ; Ptgs:  Index in Ptgs: 1 <br>Source Object Id: org.apache.poi.xssf.usermodel.XSSFEvaluationWorkbook@2703785e'},
{id: '95832818-cbf0-4ab7-9f56-8dd2e158af53', label: 'E5\n1.359221367036801', color: '#31b0d5', title: 'Name: E5<br>Value: 1.359221367036801<br>Type: CELL_WITH_FORMULA<br>Id: 95832818-cbf0-4ab7-9f56-8dd2e158af53<br>Formula Expression: Formula String: ACOS(C2); Formula Values: ACOS(0.21); Formula Ptg: 0.21 ACOS ; Ptgs: C2 ACOS  Index in Ptgs: 1 <br>Source Object Id: org.apache.poi.xssf.usermodel.XSSFEvaluationWorkbook@2703785e'},
{id: 'f717f4fb-90d5-4048-82cb-7fdac5daf0f4', label: 'C2\n0.21', color: '#31b0d5', title: 'Name: C2<br>Value: 0.21<br>Type: CELL_WITH_VALUE<br>Id: f717f4fb-90d5-4048-82cb-7fdac5daf0f4<br>Formula Expression: Formula String: C2; Formula Values: 0.21; Formula Ptg: 0.21; Ptgs: C2 Index in Ptgs: 0 <br>Source Object Id: org.apache.poi.xssf.usermodel.XSSFEvaluationWorkbook@2703785e'}
                            ]);


var edges = new vis.DataSet([
                             /* {from: id_a, to: id_b}, */
{from: 'f717f4fb-90d5-4048-82cb-7fdac5daf0f4', to: '93bd7eb1-da6c-4e72-8e53-249f4cc7f018'},
{from: '93bd7eb1-da6c-4e72-8e53-249f4cc7f018', to: '95832818-cbf0-4ab7-9f56-8dd2e158af53'}
                            ]);