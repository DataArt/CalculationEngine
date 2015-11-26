var nodes = new vis.DataSet([
                             /* {id: a, label: b, ...}, */
{id: 'f11dc0c2-272b-47bf-95ec-cf767851413d', label: 'E3\n-290.0', color: '#31b0d5', title: 'Name: E3<br>Alias: null<br>Value: -290.0<br>Type: CELL_WITH_FORMULA<br>Id: f11dc0c2-272b-47bf-95ec-cf767851413d<br>Formula Expression: Formula String: FUNCEXEC(C2, B2, A2, VALUE); Formula Values: FUNCEXEC(300.0, 240.0, 250.0, DEVDEF); Formula Ptg: 300.0, 240.0, 250.0, DEVDEF FUNCEXEC ; Ptgs: C2, B2, A2, VALUE FUNCEXEC  Index in Ptgs: 5 <br>Source Object Id: org.apache.poi.xssf.usermodel.XSSFEvaluationWorkbook@70eecdc2'},
{id: '34360cf2-b9d7-4821-a07a-b798b2fd7f1b', label: 'FUNCEXEC\n-290.0', color: '#f0ad4e', title: 'Name: FUNCEXEC<br>Alias: null<br>Value: -290.0<br>Type: FUNCTION<br>Id: 34360cf2-b9d7-4821-a07a-b798b2fd7f1b<br>Formula Expression: Formula String: FUNCEXEC(C2, B2, A2, VALUE); Formula Values: FUNCEXEC(300.0, 240.0, 250.0, DEVDEF); Formula Ptg: ; Ptgs:  Index in Ptgs: 5 <br>Source Object Id: org.apache.poi.xssf.usermodel.XSSFEvaluationWorkbook@70eecdc2'},
{id: '69846556-2259-4723-bd25-56af3606bea8', label: 'C2\n300.0', color: '#31b0d5', title: 'Name: C2<br>Alias: null<br>Value: 300.0<br>Type: CELL_WITH_VALUE<br>Id: 69846556-2259-4723-bd25-56af3606bea8<br>Formula Expression: Formula String: C2; Formula Values: 300.0; Formula Ptg: 300.0; Ptgs: C2 Index in Ptgs: 4 <br>Source Object Id: org.apache.poi.xssf.usermodel.XSSFEvaluationWorkbook@70eecdc2'},
{id: 'e11dd099-cbae-4443-a0e4-4c6c95690454', label: 'B2\n240.0', color: '#31b0d5', title: 'Name: B2<br>Alias: null<br>Value: 240.0<br>Type: CELL_WITH_VALUE<br>Id: e11dd099-cbae-4443-a0e4-4c6c95690454<br>Formula Expression: Formula String: B2; Formula Values: 240.0; Formula Ptg: 240.0; Ptgs: B2 Index in Ptgs: 3 <br>Source Object Id: org.apache.poi.xssf.usermodel.XSSFEvaluationWorkbook@70eecdc2'},
{id: 'a03ebc28-4a44-4296-a03e-169e0b2efd16', label: 'A2\n250.0', color: '#31b0d5', title: 'Name: A2<br>Alias: null<br>Value: 250.0<br>Type: CELL_WITH_VALUE<br>Id: a03ebc28-4a44-4296-a03e-169e0b2efd16<br>Formula Expression: Formula String: A2; Formula Values: 250.0; Formula Ptg: 250.0; Ptgs: A2 Index in Ptgs: 2 <br>Source Object Id: org.apache.poi.xssf.usermodel.XSSFEvaluationWorkbook@70eecdc2'},
{id: '7fa73841-e894-4ad2-8f4f-af70eb7c57ac', label: 'VALUE\nDEVDEF', color: '#31b0d5', title: 'Name: VALUE<br>Alias: null<br>Value: DEVDEF<br>Type: CONSTANT_VALUE<br>Id: 7fa73841-e894-4ad2-8f4f-af70eb7c57ac<br>Formula Expression: Formula String: VALUE; Formula Values: DEVDEF; Formula Ptg: DEVDEF; Ptgs: VALUE Index in Ptgs: 1 <br>Source Object Id: org.apache.poi.xssf.usermodel.XSSFEvaluationWorkbook@70eecdc2'}
                            ]);


var edges = new vis.DataSet([
                             /* {from: id_a, to: id_b}, */
{from: '69846556-2259-4723-bd25-56af3606bea8', to: '34360cf2-b9d7-4821-a07a-b798b2fd7f1b'},
{from: '34360cf2-b9d7-4821-a07a-b798b2fd7f1b', to: 'f11dc0c2-272b-47bf-95ec-cf767851413d'},
{from: 'a03ebc28-4a44-4296-a03e-169e0b2efd16', to: '34360cf2-b9d7-4821-a07a-b798b2fd7f1b'},
{from: 'e11dd099-cbae-4443-a0e4-4c6c95690454', to: '34360cf2-b9d7-4821-a07a-b798b2fd7f1b'},
{from: '7fa73841-e894-4ad2-8f4f-af70eb7c57ac', to: '34360cf2-b9d7-4821-a07a-b798b2fd7f1b'}
                            ]);