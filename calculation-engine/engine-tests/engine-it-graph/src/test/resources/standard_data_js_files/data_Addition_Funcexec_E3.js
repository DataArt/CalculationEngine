var nodes = new vis.DataSet([
                             /* {id: a, label: b, ...}, */
{id: '5c2eec3b-d914-410a-b698-308bf31b96f3', label: 'VALUE\nDEVDEF', color: '#31b0d5', title: 'Name: VALUE<br>Value: DEVDEF<br>Type: CONSTANT_VALUE<br>Id: 5c2eec3b-d914-410a-b698-308bf31b96f3<br>Formula Expression: Formula String: VALUE; Formula Values: DEVDEF; Formula Ptg: DEVDEF; Ptgs: VALUE Index in Ptgs: 1 <br>Source Object Id: org.apache.poi.xssf.usermodel.XSSFEvaluationWorkbook@618b19ad'},
{id: '51dd4ed0-9bde-43cc-b7ba-e0c51243d817', label: 'B2\n240.0', color: '#31b0d5', title: 'Name: B2<br>Value: 240.0<br>Type: CELL_WITH_VALUE<br>Id: 51dd4ed0-9bde-43cc-b7ba-e0c51243d817<br>Formula Expression: Formula String: B2; Formula Values: 240.0; Formula Ptg: 240.0; Ptgs: B2 Index in Ptgs: 3 <br>Source Object Id: org.apache.poi.xssf.usermodel.XSSFEvaluationWorkbook@618b19ad'},
{id: '31343186-8f46-4ee0-9f46-df70b5cc2f6b', label: 'A2\n250.0', color: '#31b0d5', title: 'Name: A2<br>Value: 250.0<br>Type: CELL_WITH_VALUE<br>Id: 31343186-8f46-4ee0-9f46-df70b5cc2f6b<br>Formula Expression: Formula String: A2; Formula Values: 250.0; Formula Ptg: 250.0; Ptgs: A2 Index in Ptgs: 2 <br>Source Object Id: org.apache.poi.xssf.usermodel.XSSFEvaluationWorkbook@618b19ad'},
{id: '38976404-0f9c-49d9-a0c4-6fa73c797c18', label: 'E3\n790.0', color: '#31b0d5', title: 'Name: E3<br>Value: 790.0<br>Type: CELL_WITH_FORMULA<br>Id: 38976404-0f9c-49d9-a0c4-6fa73c797c18<br>Formula Expression: Formula String: FUNCEXEC(C2, B2, A2, VALUE); Formula Values: FUNCEXEC(300.0, 240.0, 250.0, DEVDEF); Formula Ptg: 300.0, 240.0, 250.0, DEVDEF FUNCEXEC ; Ptgs: C2, B2, A2, VALUE FUNCEXEC  Index in Ptgs: 5 <br>Source Object Id: org.apache.poi.xssf.usermodel.XSSFEvaluationWorkbook@618b19ad'},
{id: '864049a5-1a8b-40ff-881c-628041684f90', label: 'C2\n300.0', color: '#31b0d5', title: 'Name: C2<br>Value: 300.0<br>Type: CELL_WITH_VALUE<br>Id: 864049a5-1a8b-40ff-881c-628041684f90<br>Formula Expression: Formula String: C2; Formula Values: 300.0; Formula Ptg: 300.0; Ptgs: C2 Index in Ptgs: 4 <br>Source Object Id: org.apache.poi.xssf.usermodel.XSSFEvaluationWorkbook@618b19ad'},
{id: '98685b4a-5ffb-4735-beba-ab42181969e4', label: 'FUNCEXEC\n790.0', color: '#f0ad4e', title: 'Name: FUNCEXEC<br>Value: 790.0<br>Type: FUNCTION<br>Id: 98685b4a-5ffb-4735-beba-ab42181969e4<br>Formula Expression: Formula String: FUNCEXEC(C2, B2, A2, VALUE); Formula Values: FUNCEXEC(300.0, 240.0, 250.0, DEVDEF); Formula Ptg: ; Ptgs:  Index in Ptgs: 5 <br>Source Object Id: org.apache.poi.xssf.usermodel.XSSFEvaluationWorkbook@618b19ad'}
                            ]);


var edges = new vis.DataSet([
                             /* {from: id_a, to: id_b}, */
{from: '51dd4ed0-9bde-43cc-b7ba-e0c51243d817', to: '98685b4a-5ffb-4735-beba-ab42181969e4'},
{from: '98685b4a-5ffb-4735-beba-ab42181969e4', to: '38976404-0f9c-49d9-a0c4-6fa73c797c18'},
{from: '864049a5-1a8b-40ff-881c-628041684f90', to: '98685b4a-5ffb-4735-beba-ab42181969e4'},
{from: '31343186-8f46-4ee0-9f46-df70b5cc2f6b', to: '98685b4a-5ffb-4735-beba-ab42181969e4'},
{from: '5c2eec3b-d914-410a-b698-308bf31b96f3', to: '98685b4a-5ffb-4735-beba-ab42181969e4'}
                            ]);