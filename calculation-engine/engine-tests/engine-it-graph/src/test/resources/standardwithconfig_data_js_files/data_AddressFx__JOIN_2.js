var nodes = new vis.DataSet([
                             /* {id: a, label: b, ...}, */
{id: '938cc1bd-eb1c-4d04-8446-909f7590d48d', label: 'D5\n$D$3', color: '#31b0d5', title: 'Name: D5<br>Value: $D$3<br>Type: CELL_WITH_FORMULA<br>Id: 938cc1bd-eb1c-4d04-8446-909f7590d48d<br>Formula Expression: Formula String: ADDRESS(VALUE, VALUE); Formula Values: ADDRESS(4.0, 3.0); Formula Ptg: 4.0, 3.0 ADDRESS ; Ptgs: VALUE, VALUE ADDRESS  Index in Ptgs: 2 <br>Source Object Id: org.apache.poi.xssf.usermodel.XSSFEvaluationWorkbook@5e9f73b'},
{id: 'ac503cd5-9826-40c4-bf3f-b817af91327e', label: 'VALUE\n3.0', color: '#31b0d5', title: 'Name: VALUE<br>Value: 3.0<br>Type: CONSTANT_VALUE<br>Id: ac503cd5-9826-40c4-bf3f-b817af91327e<br>Formula Expression: Formula String: VALUE; Formula Values: 3.0; Formula Ptg: 3.0; Ptgs: VALUE Index in Ptgs: 0 <br>Source Object Id: org.apache.poi.xssf.usermodel.XSSFEvaluationWorkbook@5e9f73b'},
{id: '2651e4c3-e783-40e3-b23d-52af84b3f834', label: 'ADDRESS\n$D$3', color: '#f0ad4e', title: 'Name: ADDRESS<br>Value: $D$3<br>Type: FUNCTION<br>Id: 2651e4c3-e783-40e3-b23d-52af84b3f834<br>Formula Expression: Formula String: ADDRESS(VALUE, VALUE); Formula Values: ADDRESS(4.0, 3.0); Formula Ptg: ; Ptgs:  Index in Ptgs: 2 <br>Source Object Id: org.apache.poi.xssf.usermodel.XSSFEvaluationWorkbook@5e9f73b'},
{id: '196c1ddf-35f4-4983-bb63-8b3dc3f34994', label: 'VALUE\n4.0', color: '#31b0d5', title: 'Name: VALUE<br>Value: 4.0<br>Type: CONSTANT_VALUE<br>Id: 196c1ddf-35f4-4983-bb63-8b3dc3f34994<br>Formula Expression: Formula String: VALUE; Formula Values: 4.0; Formula Ptg: 4.0; Ptgs: VALUE Index in Ptgs: 1 <br>Source Object Id: org.apache.poi.xssf.usermodel.XSSFEvaluationWorkbook@5e9f73b'}
                            ]);


var edges = new vis.DataSet([
                             /* {from: id_a, to: id_b}, */
{from: 'ac503cd5-9826-40c4-bf3f-b817af91327e', to: '2651e4c3-e783-40e3-b23d-52af84b3f834'},
{from: '196c1ddf-35f4-4983-bb63-8b3dc3f34994', to: '2651e4c3-e783-40e3-b23d-52af84b3f834'},
{from: '2651e4c3-e783-40e3-b23d-52af84b3f834', to: '938cc1bd-eb1c-4d04-8446-909f7590d48d'}
                            ]);