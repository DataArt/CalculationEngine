var nodes = new vis.DataSet([
                             /* {id: a, label: b, ...}, */
{id: '0521cef9-d9a6-4590-a3a3-a0cef2c526da', label: 'A2\n7.0', color: '#31b0d5', title: 'Name: A2<br>Value: 7.0<br>Type: CELL_WITH_VALUE<br>Id: 0521cef9-d9a6-4590-a3a3-a0cef2c526da<br>Formula Expression: Formula String: A2; Formula Values: 7.0; Formula Ptg: 7.0; Ptgs: A2 Index in Ptgs: 1 <br>Source Object Id: org.apache.poi.xssf.usermodel.XSSFEvaluationWorkbook@339b1c34'},
{id: '72b89999-2bb0-4b1a-947d-74731758f952', label: '*\n35.0', color: '#f0ad4e', title: 'Name: *<br>Value: 35.0<br>Type: OPERATOR<br>Id: 72b89999-2bb0-4b1a-947d-74731758f952<br>Formula Expression: Formula String: A1 * A2; Formula Values: 5.0 * 7.0; Formula Ptg: ; Ptgs:  Index in Ptgs: 2 <br>Source Object Id: org.apache.poi.xssf.usermodel.XSSFEvaluationWorkbook@339b1c34'},
{id: '54fc32b5-4e99-4135-af22-2f0686d44cc9', label: 'A1\n5.0', color: '#31b0d5', title: 'Name: A1<br>Value: 5.0<br>Type: CELL_WITH_VALUE<br>Id: 54fc32b5-4e99-4135-af22-2f0686d44cc9<br>Formula Expression: Formula String: A1; Formula Values: 5.0; Formula Ptg: 5.0; Ptgs: A1 Index in Ptgs: 0 <br>Source Object Id: org.apache.poi.xssf.usermodel.XSSFEvaluationWorkbook@339b1c34'},
{id: '3987caaa-039b-4727-b6cc-6576a225f173', label: 'A3\n35.0', color: '#31b0d5', title: 'Name: A3<br>Value: 35.0<br>Type: CELL_WITH_FORMULA<br>Id: 3987caaa-039b-4727-b6cc-6576a225f173<br>Formula Expression: Formula String: A1 * A2; Formula Values: 5.0 * 7.0; Formula Ptg: 5.0 7.0 *; Ptgs: A1 A2 * Index in Ptgs: 2 <br>Source Object Id: org.apache.poi.xssf.usermodel.XSSFEvaluationWorkbook@339b1c34'}
                            ]);


var edges = new vis.DataSet([
                             /* {from: id_a, to: id_b}, */
{from: '72b89999-2bb0-4b1a-947d-74731758f952', to: '3987caaa-039b-4727-b6cc-6576a225f173'},
{from: '0521cef9-d9a6-4590-a3a3-a0cef2c526da', to: '72b89999-2bb0-4b1a-947d-74731758f952'},
{from: '54fc32b5-4e99-4135-af22-2f0686d44cc9', to: '72b89999-2bb0-4b1a-947d-74731758f952'}
                            ]);