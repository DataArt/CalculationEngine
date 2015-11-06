var nodes = new vis.DataSet([
                             /* {id: a, label: b, ...}, */
{id: '322db7f1-dd9c-4ea0-b8ab-70ce008924ad', label: 'VALUE\n1.0', color: '#31b0d5', title: 'Name: VALUE<br>Value: 1.0<br>Type: CONSTANT_VALUE<br>Id: 322db7f1-dd9c-4ea0-b8ab-70ce008924ad<br>Formula Expression: Formula String: VALUE; Formula Values: 1.0; Formula Ptg: 1.0; Ptgs: VALUE Index in Ptgs: 0 <br>Source Object Id: org.apache.poi.xssf.usermodel.XSSFEvaluationWorkbook@50ad3bc1'},
{id: '2d60a2fb-cf8f-4465-9f1c-a1146565d440', label: 'B2\n0.7853981633974483', color: '#31b0d5', title: 'Name: B2<br>Value: 0.7853981633974483<br>Type: CELL_WITH_FORMULA<br>Id: 2d60a2fb-cf8f-4465-9f1c-a1146565d440<br>Formula Expression: Formula String: ATAN(VALUE); Formula Values: ATAN(1.0); Formula Ptg: 1.0 ATAN ; Ptgs: VALUE ATAN  Index in Ptgs: 1 <br>Source Object Id: org.apache.poi.xssf.usermodel.XSSFEvaluationWorkbook@50ad3bc1'},
{id: '61d1a60b-15a0-4481-b612-79d3c9a1e975', label: 'ATAN\n0.7853981633974483', color: '#f0ad4e', title: 'Name: ATAN<br>Value: 0.7853981633974483<br>Type: FUNCTION<br>Id: 61d1a60b-15a0-4481-b612-79d3c9a1e975<br>Formula Expression: Formula String: ATAN(VALUE); Formula Values: ATAN(1.0); Formula Ptg: ; Ptgs:  Index in Ptgs: 1 <br>Source Object Id: org.apache.poi.xssf.usermodel.XSSFEvaluationWorkbook@50ad3bc1'}
                            ]);


var edges = new vis.DataSet([
                             /* {from: id_a, to: id_b}, */
{from: '61d1a60b-15a0-4481-b612-79d3c9a1e975', to: '2d60a2fb-cf8f-4465-9f1c-a1146565d440'},
{from: '322db7f1-dd9c-4ea0-b8ab-70ce008924ad', to: '61d1a60b-15a0-4481-b612-79d3c9a1e975'}
                            ]);