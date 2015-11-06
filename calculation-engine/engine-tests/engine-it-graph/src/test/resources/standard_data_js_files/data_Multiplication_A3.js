var nodes = new vis.DataSet([
                             /* {id: a, label: b, ...}, */
{id: '3a1aac32-3d02-4c30-b59f-afe319397acb', label: 'A1\n5.0', color: '#31b0d5', title: 'Name: A1<br>Value: 5.0<br>Type: CELL_WITH_VALUE<br>Id: 3a1aac32-3d02-4c30-b59f-afe319397acb<br>Formula Expression: Formula String: A1; Formula Values: 5.0; Formula Ptg: 5.0; Ptgs: A1 Index in Ptgs: 0 <br>Source Object Id: org.apache.poi.xssf.usermodel.XSSFEvaluationWorkbook@61edc883'},
{id: 'e28d8e1d-59bf-4bdb-81c7-fd6e56d9733c', label: 'A2\n7.0', color: '#31b0d5', title: 'Name: A2<br>Value: 7.0<br>Type: CELL_WITH_VALUE<br>Id: e28d8e1d-59bf-4bdb-81c7-fd6e56d9733c<br>Formula Expression: Formula String: A2; Formula Values: 7.0; Formula Ptg: 7.0; Ptgs: A2 Index in Ptgs: 1 <br>Source Object Id: org.apache.poi.xssf.usermodel.XSSFEvaluationWorkbook@61edc883'},
{id: 'f8ee402a-dd76-4c16-816f-478b82f8c34e', label: 'A3\n35.0', color: '#31b0d5', title: 'Name: A3<br>Value: 35.0<br>Type: CELL_WITH_FORMULA<br>Id: f8ee402a-dd76-4c16-816f-478b82f8c34e<br>Formula Expression: Formula String: A1 * A2; Formula Values: 5.0 * 7.0; Formula Ptg: 5.0 7.0 *; Ptgs: A1 A2 * Index in Ptgs: 2 <br>Source Object Id: org.apache.poi.xssf.usermodel.XSSFEvaluationWorkbook@61edc883'},
{id: '6893f211-2c44-4859-8f49-b0a5a527e51f', label: '*\n35.0', color: '#f0ad4e', title: 'Name: *<br>Value: 35.0<br>Type: OPERATOR<br>Id: 6893f211-2c44-4859-8f49-b0a5a527e51f<br>Formula Expression: Formula String: A1 * A2; Formula Values: 5.0 * 7.0; Formula Ptg: ; Ptgs:  Index in Ptgs: 2 <br>Source Object Id: org.apache.poi.xssf.usermodel.XSSFEvaluationWorkbook@61edc883'}
                            ]);


var edges = new vis.DataSet([
                             /* {from: id_a, to: id_b}, */
{from: '6893f211-2c44-4859-8f49-b0a5a527e51f', to: 'f8ee402a-dd76-4c16-816f-478b82f8c34e'},
{from: '3a1aac32-3d02-4c30-b59f-afe319397acb', to: '6893f211-2c44-4859-8f49-b0a5a527e51f'},
{from: 'e28d8e1d-59bf-4bdb-81c7-fd6e56d9733c', to: '6893f211-2c44-4859-8f49-b0a5a527e51f'}
                            ]);