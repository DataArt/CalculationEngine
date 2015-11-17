var nodes = new vis.DataSet([
                             /* {id: a, label: b, ...}, */
{id: 'd9425b51-35f6-4cfe-9a11-3648187bba39', label: 'VALUE\n3.0', color: '#31b0d5', title: 'Name: VALUE<br>Value: 3.0<br>Type: CONSTANT_VALUE<br>Id: d9425b51-35f6-4cfe-9a11-3648187bba39<br>Formula Expression: Formula String: VALUE; Formula Values: 3.0; Formula Ptg: 3.0; Ptgs: VALUE Index in Ptgs: 0 <br>Source Object Id: org.apache.poi.xssf.usermodel.XSSFEvaluationWorkbook@5862a07b'},
{id: 'bd75ca75-fe0b-4459-93b3-28e02d004e9e', label: 'VALUE\n4.0', color: '#31b0d5', title: 'Name: VALUE<br>Value: 4.0<br>Type: CONSTANT_VALUE<br>Id: bd75ca75-fe0b-4459-93b3-28e02d004e9e<br>Formula Expression: Formula String: VALUE; Formula Values: 4.0; Formula Ptg: 4.0; Ptgs: VALUE Index in Ptgs: 1 <br>Source Object Id: org.apache.poi.xssf.usermodel.XSSFEvaluationWorkbook@5862a07b'},
{id: '3160b10e-b532-474e-a52b-b38e2cc87803', label: 'ADDRESS\n$D$3', color: '#f0ad4e', title: 'Name: ADDRESS<br>Value: $D$3<br>Type: FUNCTION<br>Id: 3160b10e-b532-474e-a52b-b38e2cc87803<br>Formula Expression: Formula String: ADDRESS(VALUE, VALUE); Formula Values: ADDRESS(4.0, 3.0); Formula Ptg: ; Ptgs:  Index in Ptgs: 2 <br>Source Object Id: org.apache.poi.xssf.usermodel.XSSFEvaluationWorkbook@5862a07b'},
{id: 'a4996a4e-e4f3-4c78-b9f4-97a12dd71f8e', label: 'D5\n$D$3', color: '#31b0d5', title: 'Name: D5<br>Value: $D$3<br>Type: CELL_WITH_FORMULA<br>Id: a4996a4e-e4f3-4c78-b9f4-97a12dd71f8e<br>Formula Expression: Formula String: ADDRESS(VALUE, VALUE); Formula Values: ADDRESS(4.0, 3.0); Formula Ptg: 4.0, 3.0 ADDRESS ; Ptgs: VALUE, VALUE ADDRESS  Index in Ptgs: 2 <br>Source Object Id: org.apache.poi.xssf.usermodel.XSSFEvaluationWorkbook@5862a07b'}
                            ]);


var edges = new vis.DataSet([
                             /* {from: id_a, to: id_b}, */
{from: 'bd75ca75-fe0b-4459-93b3-28e02d004e9e', to: '3160b10e-b532-474e-a52b-b38e2cc87803'},
{from: '3160b10e-b532-474e-a52b-b38e2cc87803', to: 'a4996a4e-e4f3-4c78-b9f4-97a12dd71f8e'},
{from: 'd9425b51-35f6-4cfe-9a11-3648187bba39', to: '3160b10e-b532-474e-a52b-b38e2cc87803'}
                            ]);