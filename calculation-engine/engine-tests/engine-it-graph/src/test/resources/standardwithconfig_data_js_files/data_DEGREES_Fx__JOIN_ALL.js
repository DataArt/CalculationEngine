var nodes = new vis.DataSet([
                             /* {id: a, label: b, ...}, */
{id: 'de9f13ec-09e3-40ed-bc85-7dd752182a71', label: 'E6\n180.0', color: '#31b0d5', title: 'Name: E6<br>Value: 180.0<br>Type: CELL_WITH_FORMULA<br>Id: de9f13ec-09e3-40ed-bc85-7dd752182a71<br>Formula Expression: Formula String: DEGREES(PI()); Formula Values: DEGREES(PI()); Formula Ptg:  PI  DEGREES ; Ptgs:  PI  DEGREES  Index in Ptgs: 1 <br>Source Object Id: org.apache.poi.xssf.usermodel.XSSFEvaluationWorkbook@160ac7fb'},
{id: '27e9f7f2-48a7-4bb5-a4bb-9e294ce67fc8', label: 'PI\n3.141592653589793', color: '#f0ad4e', title: 'Name: PI<br>Value: 3.141592653589793<br>Type: FUNCTION<br>Id: 27e9f7f2-48a7-4bb5-a4bb-9e294ce67fc8<br>Formula Expression: Formula String: PI(); Formula Values: PI(); Formula Ptg: ; Ptgs:  Index in Ptgs: 0 <br>Source Object Id: org.apache.poi.xssf.usermodel.XSSFEvaluationWorkbook@160ac7fb'},
{id: '847ccbd8-8b9a-4bab-b9e5-4cdae19d037e', label: 'DEGREES\n180.0', color: '#f0ad4e', title: 'Name: DEGREES<br>Value: 180.0<br>Type: FUNCTION<br>Id: 847ccbd8-8b9a-4bab-b9e5-4cdae19d037e<br>Formula Expression: Formula String: DEGREES(PI()); Formula Values: DEGREES(PI()); Formula Ptg: ; Ptgs:  Index in Ptgs: 1 <br>Source Object Id: org.apache.poi.xssf.usermodel.XSSFEvaluationWorkbook@160ac7fb'},
{id: 'e1b928a3-590c-4e23-b9ea-ff123a4eed98', label: 'E7\n6875.493541569879', color: '#31b0d5', title: 'Name: E7<br>Value: 6875.493541569879<br>Type: CELL_WITH_FORMULA<br>Id: e1b928a3-590c-4e23-b9ea-ff123a4eed98<br>Formula Expression: Formula String: DEGREES(B5); Formula Values: DEGREES(120.0); Formula Ptg: 120.0 DEGREES ; Ptgs: B5 DEGREES  Index in Ptgs: 1 <br>Source Object Id: org.apache.poi.xssf.usermodel.XSSFEvaluationWorkbook@160ac7fb'},
{id: 'cb48624e-1e6b-4c45-87a2-567ad8a1636f', label: 'B5\n120.0', color: '#31b0d5', title: 'Name: B5<br>Value: 120.0<br>Type: CELL_WITH_VALUE<br>Id: cb48624e-1e6b-4c45-87a2-567ad8a1636f<br>Formula Expression: Formula String: B5; Formula Values: 120.0; Formula Ptg: 120.0; Ptgs: B5 Index in Ptgs: 0 <br>Source Object Id: org.apache.poi.xssf.usermodel.XSSFEvaluationWorkbook@160ac7fb'},
{id: 'f9153c45-0e36-4469-adda-9af76b9e5547', label: 'DEGREES\n6875.493541569879', color: '#f0ad4e', title: 'Name: DEGREES<br>Value: 6875.493541569879<br>Type: FUNCTION<br>Id: f9153c45-0e36-4469-adda-9af76b9e5547<br>Formula Expression: Formula String: DEGREES(B5); Formula Values: DEGREES(120.0); Formula Ptg: ; Ptgs:  Index in Ptgs: 1 <br>Source Object Id: org.apache.poi.xssf.usermodel.XSSFEvaluationWorkbook@160ac7fb'}
                            ]);


var edges = new vis.DataSet([
                             /* {from: id_a, to: id_b}, */
{from: 'f9153c45-0e36-4469-adda-9af76b9e5547', to: 'e1b928a3-590c-4e23-b9ea-ff123a4eed98'},
{from: '27e9f7f2-48a7-4bb5-a4bb-9e294ce67fc8', to: '847ccbd8-8b9a-4bab-b9e5-4cdae19d037e'},
{from: '847ccbd8-8b9a-4bab-b9e5-4cdae19d037e', to: 'de9f13ec-09e3-40ed-bc85-7dd752182a71'},
{from: 'cb48624e-1e6b-4c45-87a2-567ad8a1636f', to: 'f9153c45-0e36-4469-adda-9af76b9e5547'}
                            ]);