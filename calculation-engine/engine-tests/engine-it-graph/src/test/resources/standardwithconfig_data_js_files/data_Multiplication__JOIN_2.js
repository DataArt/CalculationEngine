var nodes = new vis.DataSet([
                             /* {id: a, label: b, ...}, */
{id: '56771bdc-626d-471a-8d97-3d64d18151fa', label: '*\n35.0', color: '#f0ad4e', title: 'Name: *<br>Value: 35.0<br>Type: OPERATOR<br>Id: 56771bdc-626d-471a-8d97-3d64d18151fa<br>Formula Expression: Formula String: A1 * A2; Formula Values: 5.0 * 7.0; Formula Ptg: ; Ptgs:  Index in Ptgs: 2 <br>Source Object Id: org.apache.poi.xssf.usermodel.XSSFEvaluationWorkbook@2fde9469'},
{id: '7cd19499-bc11-451b-8c2e-c57120cc31e8', label: 'A1\n5.0', color: '#31b0d5', title: 'Name: A1<br>Value: 5.0<br>Type: CELL_WITH_VALUE<br>Id: 7cd19499-bc11-451b-8c2e-c57120cc31e8<br>Formula Expression: Formula String: A1; Formula Values: 5.0; Formula Ptg: 5.0; Ptgs: A1 Index in Ptgs: 0 <br>Source Object Id: org.apache.poi.xssf.usermodel.XSSFEvaluationWorkbook@2fde9469'},
{id: 'b15f23fe-acba-478d-b89c-b74cf2ed86a1', label: 'A2\n7.0', color: '#31b0d5', title: 'Name: A2<br>Value: 7.0<br>Type: CELL_WITH_VALUE<br>Id: b15f23fe-acba-478d-b89c-b74cf2ed86a1<br>Formula Expression: Formula String: A2; Formula Values: 7.0; Formula Ptg: 7.0; Ptgs: A2 Index in Ptgs: 1 <br>Source Object Id: org.apache.poi.xssf.usermodel.XSSFEvaluationWorkbook@2fde9469'},
{id: '2ceab68f-0f5c-48dd-8fe3-c006181ce146', label: 'A3\n35.0', color: '#31b0d5', title: 'Name: A3<br>Value: 35.0<br>Type: CELL_WITH_FORMULA<br>Id: 2ceab68f-0f5c-48dd-8fe3-c006181ce146<br>Formula Expression: Formula String: A1 * A2; Formula Values: 5.0 * 7.0; Formula Ptg: 5.0 7.0 *; Ptgs: A1 A2 * Index in Ptgs: 2 <br>Source Object Id: org.apache.poi.xssf.usermodel.XSSFEvaluationWorkbook@2fde9469'}
                            ]);


var edges = new vis.DataSet([
                             /* {from: id_a, to: id_b}, */
{from: '7cd19499-bc11-451b-8c2e-c57120cc31e8', to: '56771bdc-626d-471a-8d97-3d64d18151fa'},
{from: '56771bdc-626d-471a-8d97-3d64d18151fa', to: '2ceab68f-0f5c-48dd-8fe3-c006181ce146'},
{from: 'b15f23fe-acba-478d-b89c-b74cf2ed86a1', to: '56771bdc-626d-471a-8d97-3d64d18151fa'}
                            ]);