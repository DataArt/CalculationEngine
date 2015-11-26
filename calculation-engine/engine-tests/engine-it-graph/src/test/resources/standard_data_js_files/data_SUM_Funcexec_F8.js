var nodes = new vis.DataSet([
                             /* {id: a, label: b, ...}, */
{id: 'f4f3cf4f-36c9-49c1-ae79-2293a4c7d1a0', label: 'A4\n1.0', color: '#31b0d5', title: 'Name: A4<br>Alias: null<br>Value: 1.0<br>Type: CELL_WITH_VALUE<br>Id: f4f3cf4f-36c9-49c1-ae79-2293a4c7d1a0<br>Formula Expression: Formula String: A4; Formula Values: 1.0; Formula Ptg: 1.0; Ptgs: A4 Index in Ptgs: 2 <br>Source Object Id: org.apache.poi.xssf.usermodel.XSSFEvaluationWorkbook@2e6ee0bc'},
{id: '0246cb16-5edb-444b-b903-7806599deddf', label: 'C4\n0.0', color: '#31b0d5', title: 'Name: C4<br>Alias: null<br>Value: 0.0<br>Type: CELL_WITH_VALUE<br>Id: 0246cb16-5edb-444b-b903-7806599deddf<br>Formula Expression: Formula String: C4; Formula Values: 0.0; Formula Ptg: 0.0; Ptgs: C4 Index in Ptgs: 4 <br>Source Object Id: org.apache.poi.xssf.usermodel.XSSFEvaluationWorkbook@2e6ee0bc'},
{id: '709ac81c-633a-4884-b468-d8715176c1c1', label: 'F8\n9.0', color: '#31b0d5', title: 'Name: F8<br>Alias: null<br>Value: 9.0<br>Type: CELL_WITH_FORMULA<br>Id: 709ac81c-633a-4884-b468-d8715176c1c1<br>Formula Expression: Formula String: FUNCEXEC(C4, B4, A4, VALUE); Formula Values: FUNCEXEC(0.0, 8.0, 1.0, DEVDEF_3); Formula Ptg: 0.0, 8.0, 1.0, DEVDEF_3 FUNCEXEC ; Ptgs: C4, B4, A4, VALUE FUNCEXEC  Index in Ptgs: 5 <br>Source Object Id: org.apache.poi.xssf.usermodel.XSSFEvaluationWorkbook@2e6ee0bc'},
{id: '438eb644-522e-436f-bb00-3a67170d58b6', label: 'FUNCEXEC\n9.0', color: '#f0ad4e', title: 'Name: FUNCEXEC<br>Alias: null<br>Value: 9.0<br>Type: FUNCTION<br>Id: 438eb644-522e-436f-bb00-3a67170d58b6<br>Formula Expression: Formula String: FUNCEXEC(C4, B4, A4, VALUE); Formula Values: FUNCEXEC(0.0, 8.0, 1.0, DEVDEF_3); Formula Ptg: ; Ptgs:  Index in Ptgs: 5 <br>Source Object Id: org.apache.poi.xssf.usermodel.XSSFEvaluationWorkbook@2e6ee0bc'},
{id: '89815993-b3da-40a9-8f8d-76b4e9412700', label: 'B4\n8.0', color: '#31b0d5', title: 'Name: B4<br>Alias: null<br>Value: 8.0<br>Type: CELL_WITH_VALUE<br>Id: 89815993-b3da-40a9-8f8d-76b4e9412700<br>Formula Expression: Formula String: B4; Formula Values: 8.0; Formula Ptg: 8.0; Ptgs: B4 Index in Ptgs: 3 <br>Source Object Id: org.apache.poi.xssf.usermodel.XSSFEvaluationWorkbook@2e6ee0bc'},
{id: 'ef24a8b6-fe6a-4157-93d9-2854911adde2', label: 'VALUE\nDEVDEF_3', color: '#31b0d5', title: 'Name: VALUE<br>Alias: null<br>Value: DEVDEF_3<br>Type: CONSTANT_VALUE<br>Id: ef24a8b6-fe6a-4157-93d9-2854911adde2<br>Formula Expression: Formula String: VALUE; Formula Values: DEVDEF_3; Formula Ptg: DEVDEF_3; Ptgs: VALUE Index in Ptgs: 1 <br>Source Object Id: org.apache.poi.xssf.usermodel.XSSFEvaluationWorkbook@2e6ee0bc'}
                            ]);


var edges = new vis.DataSet([
                             /* {from: id_a, to: id_b}, */
{from: 'f4f3cf4f-36c9-49c1-ae79-2293a4c7d1a0', to: '438eb644-522e-436f-bb00-3a67170d58b6'},
{from: 'ef24a8b6-fe6a-4157-93d9-2854911adde2', to: '438eb644-522e-436f-bb00-3a67170d58b6'},
{from: '0246cb16-5edb-444b-b903-7806599deddf', to: '438eb644-522e-436f-bb00-3a67170d58b6'},
{from: '89815993-b3da-40a9-8f8d-76b4e9412700', to: '438eb644-522e-436f-bb00-3a67170d58b6'},
{from: '438eb644-522e-436f-bb00-3a67170d58b6', to: '709ac81c-633a-4884-b468-d8715176c1c1'}
                            ]);