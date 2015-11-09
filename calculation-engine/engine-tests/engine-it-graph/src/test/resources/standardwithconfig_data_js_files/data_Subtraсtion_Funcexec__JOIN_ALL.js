var nodes = new vis.DataSet([
                             /* {id: a, label: b, ...}, */
{id: '662990af-09a3-4b18-9a15-b4d65f0a1126', label: 'B2\n240.0', color: '#31b0d5', title: 'Name: B2<br>Value: 240.0<br>Type: CELL_WITH_VALUE<br>Id: 662990af-09a3-4b18-9a15-b4d65f0a1126<br>Formula Expression: Formula String: B2; Formula Values: 240.0; Formula Ptg: 240.0; Ptgs: B2 Index in Ptgs: 3 <br>Source Object Id: org.apache.poi.xssf.usermodel.XSSFEvaluationWorkbook@6f330eb9'},
{id: 'cfffa1bf-8848-4e7f-8ec8-d2ffcb8fada8', label: 'VALUE\nDEVDEF', color: '#31b0d5', title: 'Name: VALUE<br>Value: DEVDEF<br>Type: CONSTANT_VALUE<br>Id: cfffa1bf-8848-4e7f-8ec8-d2ffcb8fada8<br>Formula Expression: Formula String: VALUE; Formula Values: DEVDEF; Formula Ptg: DEVDEF; Ptgs: VALUE Index in Ptgs: 1 <br>Source Object Id: org.apache.poi.xssf.usermodel.XSSFEvaluationWorkbook@6f330eb9'},
{id: '9925bc44-fce2-40d7-83dc-d02695a8e807', label: '-\n-290.0', color: '#f0ad4e', title: 'Name: -<br>Value: -290.0<br>Type: OPERATOR<br>Id: 9925bc44-fce2-40d7-83dc-d02695a8e807<br>Formula Expression: Formula String: A2 - B2 - C2; Formula Values: 250.0 - 240.0 - 300.0; Formula Ptg: ; Ptgs:  Index in Ptgs: 4 <br>Source Object Id: org.apache.poi.xssf.usermodel.XSSFEvaluationWorkbook@6f330eb9'},
{id: 'abe53d11-c572-4b0a-8ce1-15fa69778188', label: 'D2\n-290.0', color: '#31b0d5', title: 'Name: D2<br>Value: -290.0<br>Type: CELL_WITH_FORMULA<br>Id: abe53d11-c572-4b0a-8ce1-15fa69778188<br>Formula Expression: Formula String: A2 - B2 - C2; Formula Values: 250.0 - 240.0 - 300.0; Formula Ptg: 250.0 240.0 - 300.0 -; Ptgs: A2 B2 - C2 - Index in Ptgs: 4 <br>Source Object Id: org.apache.poi.xssf.usermodel.XSSFEvaluationWorkbook@6f330eb9'},
{id: '9c5cb663-3ffa-4308-8a0e-56e5da05d09b', label: 'A2\n250.0', color: '#31b0d5', title: 'Name: A2<br>Value: 250.0<br>Type: CELL_WITH_VALUE<br>Id: 9c5cb663-3ffa-4308-8a0e-56e5da05d09b<br>Formula Expression: Formula String: A2; Formula Values: 250.0; Formula Ptg: 250.0; Ptgs: A2 Index in Ptgs: 2 <br>Source Object Id: org.apache.poi.xssf.usermodel.XSSFEvaluationWorkbook@6f330eb9'},
{id: 'daed41b0-43a6-4346-bbdf-82f20660a721', label: '-\n10.0', color: '#f0ad4e', title: 'Name: -<br>Value: 10.0<br>Type: OPERATOR<br>Id: daed41b0-43a6-4346-bbdf-82f20660a721<br>Formula Expression: Formula String: A2 - B2; Formula Values: 250.0 - 240.0; Formula Ptg: ; Ptgs:  Index in Ptgs: 2 <br>Source Object Id: org.apache.poi.xssf.usermodel.XSSFEvaluationWorkbook@6f330eb9'},
{id: '05fb6485-7248-41fc-83a2-b6b58ed53547', label: 'C2\n300.0', color: '#31b0d5', title: 'Name: C2<br>Value: 300.0<br>Type: CELL_WITH_VALUE<br>Id: 05fb6485-7248-41fc-83a2-b6b58ed53547<br>Formula Expression: Formula String: C2; Formula Values: 300.0; Formula Ptg: 300.0; Ptgs: C2 Index in Ptgs: 4 <br>Source Object Id: org.apache.poi.xssf.usermodel.XSSFEvaluationWorkbook@6f330eb9'},
{id: '6f85adb1-8927-476d-927c-19f7a931c94e', label: 'VALUE\nDEVDEF', color: '#31b0d5', title: 'Name: VALUE<br>Value: DEVDEF<br>Type: CONSTANT_VALUE<br>Id: 6f85adb1-8927-476d-927c-19f7a931c94e<br>Formula Expression: Formula String: VALUE; Formula Values: DEVDEF; Formula Ptg: DEVDEF; Ptgs: VALUE Index in Ptgs: 1 <br>Source Object Id: org.apache.poi.xssf.usermodel.XSSFEvaluationWorkbook@6f330eb9'},
{id: 'd1ac6028-968c-49b1-998f-03219b219936', label: 'DEFINE\nDEFINE', color: '#f0ad4e', title: 'Name: DEFINE<br>Value: DEFINE<br>Type: FUNCTION<br>Id: d1ac6028-968c-49b1-998f-03219b219936<br>Formula Expression: Formula String: DEFINE(A2 - B2 - C2, VALUE, C2, B2, A2, VALUE); Formula Values: DEFINE(250.0 - 240.0 - 300.0, #, 300.0, 240.0, 250.0, DEVDEF); Formula Ptg: ; Ptgs:  Index in Ptgs: 7 <br>Source Object Id: org.apache.poi.xssf.usermodel.XSSFEvaluationWorkbook@6f330eb9'},
{id: 'e7e37eba-9029-4ef0-bbdc-81f8ed8992a7', label: 'E3\n-290.0', color: '#31b0d5', title: 'Name: E3<br>Value: -290.0<br>Type: CELL_WITH_FORMULA<br>Id: e7e37eba-9029-4ef0-bbdc-81f8ed8992a7<br>Formula Expression: Formula String: FUNCEXEC(C2, B2, A2, VALUE); Formula Values: FUNCEXEC(300.0, 240.0, 250.0, DEVDEF); Formula Ptg: 300.0, 240.0, 250.0, DEVDEF FUNCEXEC ; Ptgs: C2, B2, A2, VALUE FUNCEXEC  Index in Ptgs: 5 <br>Source Object Id: org.apache.poi.xssf.usermodel.XSSFEvaluationWorkbook@6f330eb9'},
{id: '39cd1f51-44bd-40be-8088-c3b64d03fe8d', label: 'VALUE\n#', color: '#31b0d5', title: 'Name: VALUE<br>Value: #<br>Type: CONSTANT_VALUE<br>Id: 39cd1f51-44bd-40be-8088-c3b64d03fe8d<br>Formula Expression: Formula String: VALUE; Formula Values: #; Formula Ptg: #; Ptgs: VALUE Index in Ptgs: 5 <br>Source Object Id: org.apache.poi.xssf.usermodel.XSSFEvaluationWorkbook@6f330eb9'},
{id: 'f71ae4a9-6ffb-4f00-a94a-729761b6398b', label: 'FUNCEXEC\n-290.0', color: '#f0ad4e', title: 'Name: FUNCEXEC<br>Value: -290.0<br>Type: FUNCTION<br>Id: f71ae4a9-6ffb-4f00-a94a-729761b6398b<br>Formula Expression: Formula String: FUNCEXEC(C2, B2, A2, VALUE); Formula Values: FUNCEXEC(300.0, 240.0, 250.0, DEVDEF); Formula Ptg: ; Ptgs:  Index in Ptgs: 5 <br>Source Object Id: org.apache.poi.xssf.usermodel.XSSFEvaluationWorkbook@6f330eb9'},
{id: 'c394801e-e130-4281-b99a-328c8be90d55', label: 'D3\nDEFINE', color: '#31b0d5', title: 'Name: D3<br>Value: DEFINE<br>Type: CELL_WITH_FORMULA<br>Id: c394801e-e130-4281-b99a-328c8be90d55<br>Formula Expression: Formula String: DEFINE(A2 - B2 - C2, VALUE, C2, B2, A2, VALUE); Formula Values: DEFINE(250.0 - 240.0 - 300.0, #, 300.0, 240.0, 250.0, DEVDEF); Formula Ptg: 250.0 240.0 - 300.0 -, #, 300.0, 240.0, 250.0, DEVDEF DEFINE ; Ptgs: A2 B2 - C2 -, VALUE, C2, B2, A2, VALUE DEFINE  Index in Ptgs: 7 <br>Source Object Id: org.apache.poi.xssf.usermodel.XSSFEvaluationWorkbook@6f330eb9'}
                            ]);


var edges = new vis.DataSet([
                             /* {from: id_a, to: id_b}, */
{from: 'daed41b0-43a6-4346-bbdf-82f20660a721', to: '9925bc44-fce2-40d7-83dc-d02695a8e807'},
{from: '9c5cb663-3ffa-4308-8a0e-56e5da05d09b', to: 'd1ac6028-968c-49b1-998f-03219b219936'},
{from: '662990af-09a3-4b18-9a15-b4d65f0a1126', to: 'f71ae4a9-6ffb-4f00-a94a-729761b6398b'},
{from: 'abe53d11-c572-4b0a-8ce1-15fa69778188', to: 'd1ac6028-968c-49b1-998f-03219b219936'},
{from: '05fb6485-7248-41fc-83a2-b6b58ed53547', to: 'f71ae4a9-6ffb-4f00-a94a-729761b6398b'},
{from: '662990af-09a3-4b18-9a15-b4d65f0a1126', to: 'daed41b0-43a6-4346-bbdf-82f20660a721'},
{from: '39cd1f51-44bd-40be-8088-c3b64d03fe8d', to: 'd1ac6028-968c-49b1-998f-03219b219936'},
{from: '9c5cb663-3ffa-4308-8a0e-56e5da05d09b', to: 'f71ae4a9-6ffb-4f00-a94a-729761b6398b'},
{from: 'd1ac6028-968c-49b1-998f-03219b219936', to: 'c394801e-e130-4281-b99a-328c8be90d55'},
{from: '05fb6485-7248-41fc-83a2-b6b58ed53547', to: '9925bc44-fce2-40d7-83dc-d02695a8e807'},
{from: 'cfffa1bf-8848-4e7f-8ec8-d2ffcb8fada8', to: 'd1ac6028-968c-49b1-998f-03219b219936'},
{from: '6f85adb1-8927-476d-927c-19f7a931c94e', to: 'f71ae4a9-6ffb-4f00-a94a-729761b6398b'},
{from: '662990af-09a3-4b18-9a15-b4d65f0a1126', to: 'd1ac6028-968c-49b1-998f-03219b219936'},
{from: 'f71ae4a9-6ffb-4f00-a94a-729761b6398b', to: 'e7e37eba-9029-4ef0-bbdc-81f8ed8992a7'},
{from: '9c5cb663-3ffa-4308-8a0e-56e5da05d09b', to: 'daed41b0-43a6-4346-bbdf-82f20660a721'},
{from: '9925bc44-fce2-40d7-83dc-d02695a8e807', to: 'abe53d11-c572-4b0a-8ce1-15fa69778188'},
{from: '05fb6485-7248-41fc-83a2-b6b58ed53547', to: 'd1ac6028-968c-49b1-998f-03219b219936'}
                            ]);