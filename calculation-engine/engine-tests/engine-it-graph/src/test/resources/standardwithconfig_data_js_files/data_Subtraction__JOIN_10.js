var nodes = new vis.DataSet([
                             /* {id: a, label: b, ...}, */
{id: '33d3bf10-eaaf-4543-bbf9-ec1a9e4be479', label: 'A2\n20.0', color: '#31b0d5', title: 'Name: A2<br>Value: 20.0<br>Type: CELL_WITH_VALUE<br>Id: 33d3bf10-eaaf-4543-bbf9-ec1a9e4be479<br>Formula Expression: Formula String: A2; Formula Values: 20.0; Formula Ptg: 20.0; Ptgs: A2 Index in Ptgs: 1 <br>Source Object Id: org.apache.poi.xssf.usermodel.XSSFEvaluationWorkbook@646bf8a6'},
{id: 'a5d45504-46d3-4f3d-9948-a6a12eb0cff7', label: '-\n60.0', color: '#f0ad4e', title: 'Name: -<br>Value: 60.0<br>Type: OPERATOR<br>Id: a5d45504-46d3-4f3d-9948-a6a12eb0cff7<br>Formula Expression: Formula String: A1 - A2; Formula Values: 80.0 - 20.0; Formula Ptg: ; Ptgs:  Index in Ptgs: 2 <br>Source Object Id: org.apache.poi.xssf.usermodel.XSSFEvaluationWorkbook@646bf8a6'},
{id: '9d8d74cf-f068-462a-81cf-238fc2a1c967', label: 'A1\n80.0', color: '#31b0d5', title: 'Name: A1<br>Value: 80.0<br>Type: CELL_WITH_VALUE<br>Id: 9d8d74cf-f068-462a-81cf-238fc2a1c967<br>Formula Expression: Formula String: A1; Formula Values: 80.0; Formula Ptg: 80.0; Ptgs: A1 Index in Ptgs: 0 <br>Source Object Id: org.apache.poi.xssf.usermodel.XSSFEvaluationWorkbook@646bf8a6'},
{id: 'f437c0a0-56fb-4a15-8414-bc685288129e', label: 'A4\n60.0', color: '#31b0d5', title: 'Name: A4<br>Value: 60.0<br>Type: CELL_WITH_FORMULA<br>Id: f437c0a0-56fb-4a15-8414-bc685288129e<br>Formula Expression: Formula String: A1 - A2; Formula Values: 80.0 - 20.0; Formula Ptg: 80.0 20.0 -; Ptgs: A1 A2 - Index in Ptgs: 2 <br>Source Object Id: org.apache.poi.xssf.usermodel.XSSFEvaluationWorkbook@646bf8a6'}
                            ]);


var edges = new vis.DataSet([
                             /* {from: id_a, to: id_b}, */
{from: '33d3bf10-eaaf-4543-bbf9-ec1a9e4be479', to: 'a5d45504-46d3-4f3d-9948-a6a12eb0cff7'},
{from: '9d8d74cf-f068-462a-81cf-238fc2a1c967', to: 'a5d45504-46d3-4f3d-9948-a6a12eb0cff7'},
{from: 'a5d45504-46d3-4f3d-9948-a6a12eb0cff7', to: 'f437c0a0-56fb-4a15-8414-bc685288129e'}
                            ]);