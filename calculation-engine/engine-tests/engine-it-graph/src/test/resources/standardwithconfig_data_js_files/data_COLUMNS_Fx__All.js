var nodes = new vis.DataSet([
                             /* {id: a, label: b, ...}, */
{id: '72f54ccf-579b-4800-9074-c7e9a1485434', label: 'COLUMNS\n7.0', color: '#f0ad4e', title: 'Name: COLUMNS<br>Value: 7.0<br>Type: FUNCTION<br>Id: 72f54ccf-579b-4800-9074-c7e9a1485434<br>Formula Expression: Formula String: COLUMNS(C2:I3); Formula Values: COLUMNS(7.0, 65.0, 7.0, 6.0, 4.0, 7.0, 65.0, 8.0, 367.0, 57.0, 4.0, 6.0, 8.0, 367.0); Formula Ptg: ; Ptgs:  Index in Ptgs: 1 <br>Source Object Id: org.apache.poi.xssf.usermodel.XSSFEvaluationWorkbook@3502b614'},
{id: '8860c049-5721-4fad-a101-f5340e8c14e1', label: 'E5\n7.0', color: '#31b0d5', title: 'Name: E5<br>Value: 7.0<br>Type: CELL_WITH_FORMULA<br>Id: 8860c049-5721-4fad-a101-f5340e8c14e1<br>Formula Expression: Formula String: COLUMNS(C2:I3); Formula Values: COLUMNS(7.0, 65.0, 7.0, 6.0, 4.0, 7.0, 65.0, 8.0, 367.0, 57.0, 4.0, 6.0, 8.0, 367.0); Formula Ptg: 7.0, 65.0, 7.0, 6.0, 4.0, 7.0, 65.0, 8.0, 367.0, 57.0, 4.0, 6.0, 8.0, 367.0 COLUMNS ; Ptgs: C2:I3 COLUMNS  Index in Ptgs: 1 <br>Source Object Id: org.apache.poi.xssf.usermodel.XSSFEvaluationWorkbook@3502b614'},
{id: 'd0781bff-c5e2-4d90-be54-bce6d792c31c', label: 'C2:I3\n...', color: '#31b0d5', title: 'Name: C2:I3<br>Value: [[7.0, 65.0, 7.0, 6.0, 4.0, 7.0, 65.0], [8.0, 367.0, 57.0, 4.0, 6.0, 8.0, 367.0]]<br>Type: RANGE<br>Id: d0781bff-c5e2-4d90-be54-bce6d792c31c<br>Formula Expression: Formula String: C2:I3; Formula Values: [[7.0, 65.0, 7.0, 6.0, 4.0, 7.0, 65.0], [8.0, 367.0, 57.0, 4.0, 6.0, 8.0, 367.0]]; Formula Ptg: [[7.0, 65.0, 7.0, 6.0, 4.0, 7.0, 65.0], [8.0, 367.0, 57.0, 4.0, 6.0, 8.0, 367.0]]; Ptgs: C2:I3 Index in Ptgs: 0 <br>Source Object Id: org.apache.poi.xssf.usermodel.XSSFEvaluationWorkbook@3502b614'}
                            ]);


var edges = new vis.DataSet([
                             /* {from: id_a, to: id_b}, */
{from: 'd0781bff-c5e2-4d90-be54-bce6d792c31c', to: '72f54ccf-579b-4800-9074-c7e9a1485434'},
{from: '72f54ccf-579b-4800-9074-c7e9a1485434', to: '8860c049-5721-4fad-a101-f5340e8c14e1'}
                            ]);