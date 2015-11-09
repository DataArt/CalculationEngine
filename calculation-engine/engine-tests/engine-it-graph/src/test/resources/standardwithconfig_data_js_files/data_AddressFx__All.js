var nodes = new vis.DataSet([
                             /* {id: a, label: b, ...}, */
{id: 'ee2380f5-c6b2-481f-a0f5-8a4d08dd87bb', label: 'ADDRESS\n$D$3', color: '#f0ad4e', title: 'Name: ADDRESS<br>Value: $D$3<br>Type: FUNCTION<br>Id: ee2380f5-c6b2-481f-a0f5-8a4d08dd87bb<br>Formula Expression: Formula String: ADDRESS(VALUE, VALUE); Formula Values: ADDRESS(4.0, 3.0); Formula Ptg: ; Ptgs:  Index in Ptgs: 2 <br>Source Object Id: org.apache.poi.xssf.usermodel.XSSFEvaluationWorkbook@1784fcab'},
{id: 'bd51e20d-1323-4db3-8efc-dff0949257b3', label: 'D5\n$D$3', color: '#31b0d5', title: 'Name: D5<br>Value: $D$3<br>Type: CELL_WITH_FORMULA<br>Id: bd51e20d-1323-4db3-8efc-dff0949257b3<br>Formula Expression: Formula String: ADDRESS(VALUE, VALUE); Formula Values: ADDRESS(4.0, 3.0); Formula Ptg: 4.0, 3.0 ADDRESS ; Ptgs: VALUE, VALUE ADDRESS  Index in Ptgs: 2 <br>Source Object Id: org.apache.poi.xssf.usermodel.XSSFEvaluationWorkbook@1784fcab'},
{id: '5e24adb0-c403-463c-b6df-de0c1171cbe7', label: 'VALUE\n4.0', color: '#31b0d5', title: 'Name: VALUE<br>Value: 4.0<br>Type: CONSTANT_VALUE<br>Id: 5e24adb0-c403-463c-b6df-de0c1171cbe7<br>Formula Expression: Formula String: VALUE; Formula Values: 4.0; Formula Ptg: 4.0; Ptgs: VALUE Index in Ptgs: 1 <br>Source Object Id: org.apache.poi.xssf.usermodel.XSSFEvaluationWorkbook@1784fcab'},
{id: '49036469-201a-49b8-95b5-4c34436f7b5d', label: 'VALUE\n3.0', color: '#31b0d5', title: 'Name: VALUE<br>Value: 3.0<br>Type: CONSTANT_VALUE<br>Id: 49036469-201a-49b8-95b5-4c34436f7b5d<br>Formula Expression: Formula String: VALUE; Formula Values: 3.0; Formula Ptg: 3.0; Ptgs: VALUE Index in Ptgs: 0 <br>Source Object Id: org.apache.poi.xssf.usermodel.XSSFEvaluationWorkbook@1784fcab'}
                            ]);


var edges = new vis.DataSet([
                             /* {from: id_a, to: id_b}, */
{from: 'ee2380f5-c6b2-481f-a0f5-8a4d08dd87bb', to: 'bd51e20d-1323-4db3-8efc-dff0949257b3'},
{from: '49036469-201a-49b8-95b5-4c34436f7b5d', to: 'ee2380f5-c6b2-481f-a0f5-8a4d08dd87bb'},
{from: '5e24adb0-c403-463c-b6df-de0c1171cbe7', to: 'ee2380f5-c6b2-481f-a0f5-8a4d08dd87bb'}
                            ]);