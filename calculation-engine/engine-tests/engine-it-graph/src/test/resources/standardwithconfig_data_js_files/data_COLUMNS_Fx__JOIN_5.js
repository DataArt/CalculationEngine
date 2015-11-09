var nodes = new vis.DataSet([
                             /* {id: a, label: b, ...}, */
{id: '7a28bbce-a476-4ac2-b50e-ad185cefc53f', label: 'E5\n7.0', color: '#31b0d5', title: 'Name: E5<br>Value: 7.0<br>Type: CELL_WITH_FORMULA<br>Id: 7a28bbce-a476-4ac2-b50e-ad185cefc53f<br>Formula Expression: Formula String: COLUMNS(C2:I3); Formula Values: COLUMNS(7.0, 65.0, 7.0, 6.0, 4.0, 7.0, 65.0, 8.0, 367.0, 57.0, 4.0, 6.0, 8.0, 367.0); Formula Ptg: 7.0, 65.0, 7.0, 6.0, 4.0, 7.0, 65.0, 8.0, 367.0, 57.0, 4.0, 6.0, 8.0, 367.0 COLUMNS ; Ptgs: C2:I3 COLUMNS  Index in Ptgs: 1 <br>Source Object Id: org.apache.poi.xssf.usermodel.XSSFEvaluationWorkbook@62267a22'},
{id: '8760d318-54f0-4542-9f08-5513f0357f07', label: 'C2:I3\n...', color: '#31b0d5', title: 'Name: C2:I3<br>Value: [[7.0, 65.0, 7.0, 6.0, 4.0, 7.0, 65.0], [8.0, 367.0, 57.0, 4.0, 6.0, 8.0, 367.0]]<br>Type: RANGE<br>Id: 8760d318-54f0-4542-9f08-5513f0357f07<br>Formula Expression: Formula String: C2:I3; Formula Values: [[7.0, 65.0, 7.0, 6.0, 4.0, 7.0, 65.0], [8.0, 367.0, 57.0, 4.0, 6.0, 8.0, 367.0]]; Formula Ptg: [[7.0, 65.0, 7.0, 6.0, 4.0, 7.0, 65.0], [8.0, 367.0, 57.0, 4.0, 6.0, 8.0, 367.0]]; Ptgs: C2:I3 Index in Ptgs: 0 <br>Source Object Id: org.apache.poi.xssf.usermodel.XSSFEvaluationWorkbook@62267a22'},
{id: 'fa844b9c-e94a-4ce2-a3dc-e69fecfd0598', label: 'COLUMNS\n7.0', color: '#f0ad4e', title: 'Name: COLUMNS<br>Value: 7.0<br>Type: FUNCTION<br>Id: fa844b9c-e94a-4ce2-a3dc-e69fecfd0598<br>Formula Expression: Formula String: COLUMNS(C2:I3); Formula Values: COLUMNS(7.0, 65.0, 7.0, 6.0, 4.0, 7.0, 65.0, 8.0, 367.0, 57.0, 4.0, 6.0, 8.0, 367.0); Formula Ptg: ; Ptgs:  Index in Ptgs: 1 <br>Source Object Id: org.apache.poi.xssf.usermodel.XSSFEvaluationWorkbook@62267a22'}
                            ]);


var edges = new vis.DataSet([
                             /* {from: id_a, to: id_b}, */
{from: 'fa844b9c-e94a-4ce2-a3dc-e69fecfd0598', to: '7a28bbce-a476-4ac2-b50e-ad185cefc53f'},
{from: '8760d318-54f0-4542-9f08-5513f0357f07', to: 'fa844b9c-e94a-4ce2-a3dc-e69fecfd0598'}
                            ]);