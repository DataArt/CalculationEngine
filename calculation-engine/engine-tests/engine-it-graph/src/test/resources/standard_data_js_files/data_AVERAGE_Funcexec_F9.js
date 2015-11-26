var nodes = new vis.DataSet([
                             /* {id: a, label: b, ...}, */
{id: 'c298a76e-4336-4da2-96c7-c50008124da8', label: 'F9\n6.225', color: '#31b0d5', title: 'Name: F9<br>Alias: null<br>Value: 6.225<br>Type: CELL_WITH_FORMULA<br>Id: c298a76e-4336-4da2-96c7-c50008124da8<br>Formula Expression: Formula String: FUNCEXEC(D5, C5, B5, A5, VALUE); Formula Values: FUNCEXEC(9.0, 0.9, 8.0, 7.0, DEVDEF_4); Formula Ptg: 9.0, 0.9, 8.0, 7.0, DEVDEF_4 FUNCEXEC ; Ptgs: D5, C5, B5, A5, VALUE FUNCEXEC  Index in Ptgs: 6 <br>Source Object Id: org.apache.poi.xssf.usermodel.XSSFEvaluationWorkbook@f58853c'},
{id: '0ae465f6-2527-4e4c-8a2c-df41cbdc0850', label: 'VALUE\nDEVDEF_4', color: '#31b0d5', title: 'Name: VALUE<br>Alias: null<br>Value: DEVDEF_4<br>Type: CONSTANT_VALUE<br>Id: 0ae465f6-2527-4e4c-8a2c-df41cbdc0850<br>Formula Expression: Formula String: VALUE; Formula Values: DEVDEF_4; Formula Ptg: DEVDEF_4; Ptgs: VALUE Index in Ptgs: 1 <br>Source Object Id: org.apache.poi.xssf.usermodel.XSSFEvaluationWorkbook@f58853c'},
{id: '1be3826c-dcb7-4a0e-a3a6-fdad95c12ac7', label: 'B5\n8.0', color: '#31b0d5', title: 'Name: B5<br>Alias: null<br>Value: 8.0<br>Type: CELL_WITH_VALUE<br>Id: 1be3826c-dcb7-4a0e-a3a6-fdad95c12ac7<br>Formula Expression: Formula String: B5; Formula Values: 8.0; Formula Ptg: 8.0; Ptgs: B5 Index in Ptgs: 3 <br>Source Object Id: org.apache.poi.xssf.usermodel.XSSFEvaluationWorkbook@f58853c'},
{id: '57aefb6b-4e54-4a7e-80ef-8c90ad01c46a', label: 'D5\n9.0', color: '#31b0d5', title: 'Name: D5<br>Alias: null<br>Value: 9.0<br>Type: CELL_WITH_VALUE<br>Id: 57aefb6b-4e54-4a7e-80ef-8c90ad01c46a<br>Formula Expression: Formula String: D5; Formula Values: 9.0; Formula Ptg: 9.0; Ptgs: D5 Index in Ptgs: 5 <br>Source Object Id: org.apache.poi.xssf.usermodel.XSSFEvaluationWorkbook@f58853c'},
{id: 'c5b9c755-12d0-4a1a-9651-f7c69c448801', label: 'FUNCEXEC\n6.225', color: '#f0ad4e', title: 'Name: FUNCEXEC<br>Alias: null<br>Value: 6.225<br>Type: FUNCTION<br>Id: c5b9c755-12d0-4a1a-9651-f7c69c448801<br>Formula Expression: Formula String: FUNCEXEC(D5, C5, B5, A5, VALUE); Formula Values: FUNCEXEC(9.0, 0.9, 8.0, 7.0, DEVDEF_4); Formula Ptg: ; Ptgs:  Index in Ptgs: 6 <br>Source Object Id: org.apache.poi.xssf.usermodel.XSSFEvaluationWorkbook@f58853c'},
{id: 'f3642021-4c0f-4788-a318-a06ebecae19a', label: 'A5\n7.0', color: '#31b0d5', title: 'Name: A5<br>Alias: null<br>Value: 7.0<br>Type: CELL_WITH_VALUE<br>Id: f3642021-4c0f-4788-a318-a06ebecae19a<br>Formula Expression: Formula String: A5; Formula Values: 7.0; Formula Ptg: 7.0; Ptgs: A5 Index in Ptgs: 2 <br>Source Object Id: org.apache.poi.xssf.usermodel.XSSFEvaluationWorkbook@f58853c'},
{id: 'f86f30e9-042a-43e9-8a94-8d605b0aec34', label: 'C5\n0.9', color: '#31b0d5', title: 'Name: C5<br>Alias: null<br>Value: 0.9<br>Type: CELL_WITH_VALUE<br>Id: f86f30e9-042a-43e9-8a94-8d605b0aec34<br>Formula Expression: Formula String: C5; Formula Values: 0.9; Formula Ptg: 0.9; Ptgs: C5 Index in Ptgs: 4 <br>Source Object Id: org.apache.poi.xssf.usermodel.XSSFEvaluationWorkbook@f58853c'}
                            ]);


var edges = new vis.DataSet([
                             /* {from: id_a, to: id_b}, */
{from: '0ae465f6-2527-4e4c-8a2c-df41cbdc0850', to: 'c5b9c755-12d0-4a1a-9651-f7c69c448801'},
{from: 'f3642021-4c0f-4788-a318-a06ebecae19a', to: 'c5b9c755-12d0-4a1a-9651-f7c69c448801'},
{from: '57aefb6b-4e54-4a7e-80ef-8c90ad01c46a', to: 'c5b9c755-12d0-4a1a-9651-f7c69c448801'},
{from: 'c5b9c755-12d0-4a1a-9651-f7c69c448801', to: 'c298a76e-4336-4da2-96c7-c50008124da8'},
{from: 'f86f30e9-042a-43e9-8a94-8d605b0aec34', to: 'c5b9c755-12d0-4a1a-9651-f7c69c448801'},
{from: '1be3826c-dcb7-4a0e-a3a6-fdad95c12ac7', to: 'c5b9c755-12d0-4a1a-9651-f7c69c448801'}
                            ]);