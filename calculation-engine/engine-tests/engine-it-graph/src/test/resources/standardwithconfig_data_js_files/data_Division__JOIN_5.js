var nodes = new vis.DataSet([
                             /* {id: a, label: b, ...}, */
{id: '6d9183a2-10dd-48fb-ba7b-7290150fd66f', label: 'A2\n25.0', color: '#31b0d5', title: 'Name: A2<br>Value: 25.0<br>Type: CELL_WITH_VALUE<br>Id: 6d9183a2-10dd-48fb-ba7b-7290150fd66f<br>Formula Expression: Formula String: A2; Formula Values: 25.0; Formula Ptg: 25.0; Ptgs: A2 Index in Ptgs: 1 <br>Source Object Id: org.apache.poi.xssf.usermodel.XSSFEvaluationWorkbook@4da454a7'},
{id: '9f912e0b-553a-4d74-b596-2a691c228f2d', label: 'A1\n100.0', color: '#31b0d5', title: 'Name: A1<br>Value: 100.0<br>Type: CELL_WITH_VALUE<br>Id: 9f912e0b-553a-4d74-b596-2a691c228f2d<br>Formula Expression: Formula String: A1; Formula Values: 100.0; Formula Ptg: 100.0; Ptgs: A1 Index in Ptgs: 0 <br>Source Object Id: org.apache.poi.xssf.usermodel.XSSFEvaluationWorkbook@4da454a7'},
{id: '2bd7807e-bce4-406a-8823-abf60cd39c84', label: 'B3\n4.0', color: '#31b0d5', title: 'Name: B3<br>Value: 4.0<br>Type: CELL_WITH_FORMULA<br>Id: 2bd7807e-bce4-406a-8823-abf60cd39c84<br>Formula Expression: Formula String: A1 / A2; Formula Values: 100.0 / 25.0; Formula Ptg: 100.0 25.0 /; Ptgs: A1 A2 / Index in Ptgs: 2 <br>Source Object Id: org.apache.poi.xssf.usermodel.XSSFEvaluationWorkbook@4da454a7'},
{id: '7f76fe3c-833e-4335-b6b4-759e883156cc', label: '/\n4.0', color: '#f0ad4e', title: 'Name: /<br>Value: 4.0<br>Type: OPERATOR<br>Id: 7f76fe3c-833e-4335-b6b4-759e883156cc<br>Formula Expression: Formula String: A1 / A2; Formula Values: 100.0 / 25.0; Formula Ptg: ; Ptgs:  Index in Ptgs: 2 <br>Source Object Id: org.apache.poi.xssf.usermodel.XSSFEvaluationWorkbook@4da454a7'}
                            ]);


var edges = new vis.DataSet([
                             /* {from: id_a, to: id_b}, */
{from: '9f912e0b-553a-4d74-b596-2a691c228f2d', to: '7f76fe3c-833e-4335-b6b4-759e883156cc'},
{from: '6d9183a2-10dd-48fb-ba7b-7290150fd66f', to: '7f76fe3c-833e-4335-b6b4-759e883156cc'},
{from: '7f76fe3c-833e-4335-b6b4-759e883156cc', to: '2bd7807e-bce4-406a-8823-abf60cd39c84'}
                            ]);