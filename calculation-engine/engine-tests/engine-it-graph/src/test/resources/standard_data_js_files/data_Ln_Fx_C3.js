var nodes = new vis.DataSet([
                             /* {id: a, label: b, ...}, */
{id: '1a8fb052-5e30-47b7-a2ca-253bf55f4dd2', label: 'C3\n3.0', color: '#31b0d5', title: 'Name: C3<br>Value: 3.0<br>Type: CELL_WITH_FORMULA<br>Id: 1a8fb052-5e30-47b7-a2ca-253bf55f4dd2<br>Formula Expression: Formula String: LN(EXP(VALUE)); Formula Values: LN(EXP(3.0)); Formula Ptg: 3.0 EXP  LN ; Ptgs: VALUE EXP  LN  Index in Ptgs: 1 <br>Source Object Id: org.apache.poi.xssf.usermodel.XSSFEvaluationWorkbook@588ffeb'},
{id: 'd5b9ae92-5ab0-4f56-95c5-d43d38071dc9', label: 'EXP\n20.085536923187664', color: '#f0ad4e', title: 'Name: EXP<br>Value: 20.085536923187664<br>Type: FUNCTION<br>Id: d5b9ae92-5ab0-4f56-95c5-d43d38071dc9<br>Formula Expression: Formula String: EXP(VALUE); Formula Values: EXP(3.0); Formula Ptg: ; Ptgs:  Index in Ptgs: 1 <br>Source Object Id: org.apache.poi.xssf.usermodel.XSSFEvaluationWorkbook@588ffeb'},
{id: 'ffd6b593-764c-458a-9a50-ea6a6343fd0c', label: 'LN\n3.0', color: '#f0ad4e', title: 'Name: LN<br>Value: 3.0<br>Type: FUNCTION<br>Id: ffd6b593-764c-458a-9a50-ea6a6343fd0c<br>Formula Expression: Formula String: LN(EXP(VALUE)); Formula Values: LN(EXP(3.0)); Formula Ptg: ; Ptgs:  Index in Ptgs: 1 <br>Source Object Id: org.apache.poi.xssf.usermodel.XSSFEvaluationWorkbook@588ffeb'},
{id: '2b91d4c1-ff93-4025-9a87-bdc7ca794797', label: 'B2\n20.085536923187664', color: '#31b0d5', title: 'Name: B2<br>Value: 20.085536923187664<br>Type: CELL_WITH_FORMULA<br>Id: 2b91d4c1-ff93-4025-9a87-bdc7ca794797<br>Formula Expression: Formula String: EXP(VALUE); Formula Values: EXP(3.0); Formula Ptg: 3.0 EXP ; Ptgs: VALUE EXP  Index in Ptgs: 1 <br>Source Object Id: org.apache.poi.xssf.usermodel.XSSFEvaluationWorkbook@588ffeb'},
{id: '3356a723-1188-4fa1-9717-7b9281908057', label: 'VALUE\n3.0', color: '#31b0d5', title: 'Name: VALUE<br>Value: 3.0<br>Type: CONSTANT_VALUE<br>Id: 3356a723-1188-4fa1-9717-7b9281908057<br>Formula Expression: Formula String: VALUE; Formula Values: 3.0; Formula Ptg: 3.0; Ptgs: VALUE Index in Ptgs: 0 <br>Source Object Id: org.apache.poi.xssf.usermodel.XSSFEvaluationWorkbook@588ffeb'}
                            ]);


var edges = new vis.DataSet([
                             /* {from: id_a, to: id_b}, */
{from: '2b91d4c1-ff93-4025-9a87-bdc7ca794797', to: 'ffd6b593-764c-458a-9a50-ea6a6343fd0c'},
{from: 'ffd6b593-764c-458a-9a50-ea6a6343fd0c', to: '1a8fb052-5e30-47b7-a2ca-253bf55f4dd2'},
{from: 'd5b9ae92-5ab0-4f56-95c5-d43d38071dc9', to: '2b91d4c1-ff93-4025-9a87-bdc7ca794797'},
{from: '3356a723-1188-4fa1-9717-7b9281908057', to: 'd5b9ae92-5ab0-4f56-95c5-d43d38071dc9'}
                            ]);