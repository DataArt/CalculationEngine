var nodes = new vis.DataSet([
                             /* {id: a, label: b, ...}, */
{id: 'c1dc3cc9-0b22-4879-837f-04482f98c277', label: '4\n4', color: '#31b0d5', title: 'Name: 4<br>Value: 4<br>Type: CONSTANT_VALUE<br>Id: c1dc3cc9-0b22-4879-837f-04482f98c277<br>Formula Expression: Formula String: null; Formula Values: null; Formula Ptg: null; Ptgs: null Index in Ptgs: 1 <br>Source Object Id: org.apache.poi.xssf.usermodel.XSSFEvaluationWorkbook@6acdbdf5'},
{id: '9069f367-3b64-473d-8c8a-f798e4cd3ae8', label: 'D4\n~CIRCULAR~REF~', color: '#31b0d5', title: 'Name: D4<br>Value: ~CIRCULAR~REF~<br>Type: CELL_WITH_FORMULA<br>Id: 9069f367-3b64-473d-8c8a-f798e4cd3ae8<br>Formula Expression: Formula String: INDEX(A1:D4,4,4); Formula Values: null; Formula Ptg: null; Ptgs: null Index in Ptgs: 0 <br>Source Object Id: org.apache.poi.xssf.usermodel.XSSFEvaluationWorkbook@6acdbdf5'},
{id: 'b6459ec4-5809-4143-95fa-aeedb462e5e2', label: '4\n4', color: '#31b0d5', title: 'Name: 4<br>Value: 4<br>Type: CONSTANT_VALUE<br>Id: b6459ec4-5809-4143-95fa-aeedb462e5e2<br>Formula Expression: Formula String: null; Formula Values: null; Formula Ptg: null; Ptgs: null Index in Ptgs: 2 <br>Source Object Id: org.apache.poi.xssf.usermodel.XSSFEvaluationWorkbook@6acdbdf5'},
{id: '16741134-ddef-4ca1-ae6f-8c9c06f174c6', label: 'A1:D4\n...', color: '#31b0d5', title: 'Name: A1:D4<br>Value: [[Apples, Lemons, 7.0, 6.0], [Bananas, Pears, u, 5.0], [67.0, 6.0, u, hgdhgj], [9.0, 98.0, 98.0, ~CIRCULAR~REF~]]<br>Type: RANGE<br>Id: 16741134-ddef-4ca1-ae6f-8c9c06f174c6<br>Formula Expression: Formula String: null; Formula Values: null; Formula Ptg: null; Ptgs: null Index in Ptgs: 0 <br>Source Object Id: org.apache.poi.xssf.usermodel.XSSFEvaluationWorkbook@6acdbdf5'},
{id: '2c40e65f-bbd3-43c4-87ef-cede60a12f09', label: 'INDEX\n[[~CIRCULAR~REF~]]', color: '#f0ad4e', title: 'Name: INDEX<br>Value: [[~CIRCULAR~REF~]]<br>Type: FUNCTION<br>Id: 2c40e65f-bbd3-43c4-87ef-cede60a12f09<br>Formula Expression: Formula String: null; Formula Values: null; Formula Ptg: null; Ptgs: null Index in Ptgs: 3 <br>Source Object Id: org.apache.poi.xssf.usermodel.XSSFEvaluationWorkbook@6acdbdf5'}
                            ]);


var edges = new vis.DataSet([
                             /* {from: id_a, to: id_b}, */
{from: 'c1dc3cc9-0b22-4879-837f-04482f98c277', to: '2c40e65f-bbd3-43c4-87ef-cede60a12f09'},
{from: 'b6459ec4-5809-4143-95fa-aeedb462e5e2', to: '2c40e65f-bbd3-43c4-87ef-cede60a12f09'},
{from: '2c40e65f-bbd3-43c4-87ef-cede60a12f09', to: '9069f367-3b64-473d-8c8a-f798e4cd3ae8'},
{from: '9069f367-3b64-473d-8c8a-f798e4cd3ae8', to: '16741134-ddef-4ca1-ae6f-8c9c06f174c6'},
{from: '16741134-ddef-4ca1-ae6f-8c9c06f174c6', to: '2c40e65f-bbd3-43c4-87ef-cede60a12f09'}
                            ]);