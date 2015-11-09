var nodes = new vis.DataSet([
                             /* {id: a, label: b, ...}, */
{id: '6f0d47a8-98a5-4cfd-8b41-d4d88f38b56d', label: 'B5\n-2.0', color: '#31b0d5', title: 'Name: B5<br>Value: -2.0<br>Type: CELL_WITH_FORMULA<br>Id: 6f0d47a8-98a5-4cfd-8b41-d4d88f38b56d<br>Formula Expression: Formula String: IFERROR(B3, A3 - VALUE); Formula Values: IFERROR(7.0, 3.0 - 5.0); Formula Ptg: 7.0, 3.0 5.0 - IFERROR ; Ptgs: B3, A3 VALUE - IFERROR  Index in Ptgs: 5 <br>Source Object Id: org.apache.poi.xssf.usermodel.XSSFEvaluationWorkbook@11763e57'},
{id: '6072d8df-564e-44b3-8a25-cbadc7282131', label: 'A3\n3.0', color: '#31b0d5', title: 'Name: A3<br>Value: 3.0<br>Type: CELL_WITH_VALUE<br>Id: 6072d8df-564e-44b3-8a25-cbadc7282131<br>Formula Expression: Formula String: A3; Formula Values: 3.0; Formula Ptg: 3.0; Ptgs: A3 Index in Ptgs: 0 <br>Source Object Id: org.apache.poi.xssf.usermodel.XSSFEvaluationWorkbook@11763e57'},
{id: '0b00065b-661e-495b-b9cc-3c812a8984df', label: 'A3\n3.0', color: '#31b0d5', title: 'Name: A3<br>Value: 3.0<br>Type: CELL_WITH_VALUE<br>Id: 0b00065b-661e-495b-b9cc-3c812a8984df<br>Formula Expression: Formula String: A3; Formula Values: 3.0; Formula Ptg: 3.0; Ptgs: A3 Index in Ptgs: 1 <br>Source Object Id: org.apache.poi.xssf.usermodel.XSSFEvaluationWorkbook@11763e57'},
{id: 'b8349114-2ca1-4cd4-9f43-ddb3d7a279d3', label: 'IFERROR\n-2.0', color: '#f0ad4e', title: 'Name: IFERROR<br>Value: -2.0<br>Type: FUNCTION<br>Id: b8349114-2ca1-4cd4-9f43-ddb3d7a279d3<br>Formula Expression: Formula String: IFERROR(B3, A3 - VALUE); Formula Values: IFERROR(7.0, 3.0 - 5.0); Formula Ptg: ; Ptgs:  Index in Ptgs: 5 <br>Source Object Id: org.apache.poi.xssf.usermodel.XSSFEvaluationWorkbook@11763e57'},
{id: '1944b39e-4e26-4ef3-b573-4b0436697d2e', label: 'A1\n6.0', color: '#31b0d5', title: 'Name: A1<br>Value: 6.0<br>Type: CELL_WITH_FORMULA<br>Id: 1944b39e-4e26-4ef3-b573-4b0436697d2e<br>Formula Expression: Formula String:  + IF(A3>A4,B3,B4); Formula Values:  + IF(3.0 > 5.0, 6.0); Formula Ptg:  6.0, 3.0 5.0 > IF  +; Ptgs:  B4, A3 A4 > IF  + Index in Ptgs: 9 <br>Source Object Id: org.apache.poi.xssf.usermodel.XSSFEvaluationWorkbook@11763e57'},
{id: '48d465b9-b343-411f-952d-cf7c62ba67d1', label: '>\nFALSE', color: '#f0ad4e', title: 'Name: ><br>Value: FALSE<br>Type: OPERATOR<br>Id: 48d465b9-b343-411f-952d-cf7c62ba67d1<br>Formula Expression: Formula String: A3 > A4; Formula Values: 3.0 > 5.0; Formula Ptg: ; Ptgs:  Index in Ptgs: 2 <br>Source Object Id: org.apache.poi.xssf.usermodel.XSSFEvaluationWorkbook@11763e57'},
{id: '89bf4024-c992-4b8d-83ee-9cd2ff2ad126', label: 'VALUE\n5.0', color: '#31b0d5', title: 'Name: VALUE<br>Value: 5.0<br>Type: CONSTANT_VALUE<br>Id: 89bf4024-c992-4b8d-83ee-9cd2ff2ad126<br>Formula Expression: Formula String: VALUE; Formula Values: 5.0; Formula Ptg: 5.0; Ptgs: VALUE Index in Ptgs: 2 <br>Source Object Id: org.apache.poi.xssf.usermodel.XSSFEvaluationWorkbook@11763e57'},
{id: 'b06d4930-271a-41e6-9f1d-fb0f7c7ee131', label: 'B4\n6.0', color: '#31b0d5', title: 'Name: B4<br>Value: 6.0<br>Type: CELL_WITH_VALUE<br>Id: b06d4930-271a-41e6-9f1d-fb0f7c7ee131<br>Formula Expression: Formula String: B4; Formula Values: 6.0; Formula Ptg: 6.0; Ptgs: B4 Index in Ptgs: 6 <br>Source Object Id: org.apache.poi.xssf.usermodel.XSSFEvaluationWorkbook@11763e57'},
{id: 'ba7fc2cb-d2b4-4a58-a386-0eb3b8c7da8d', label: 'B3\n7.0', color: '#31b0d5', title: 'Name: B3<br>Value: 7.0<br>Type: CELL_WITH_VALUE<br>Id: ba7fc2cb-d2b4-4a58-a386-0eb3b8c7da8d<br>Formula Expression: Formula String: B3; Formula Values: 7.0; Formula Ptg: 7.0; Ptgs: B3 Index in Ptgs: 4 <br>Source Object Id: org.apache.poi.xssf.usermodel.XSSFEvaluationWorkbook@11763e57'},
{id: '98b4f423-e09c-462d-b9f5-83305422269e', label: 'A4\n5.0', color: '#31b0d5', title: 'Name: A4<br>Value: 5.0<br>Type: CELL_WITH_VALUE<br>Id: 98b4f423-e09c-462d-b9f5-83305422269e<br>Formula Expression: Formula String: A4; Formula Values: 5.0; Formula Ptg: 5.0; Ptgs: A4 Index in Ptgs: 1 <br>Source Object Id: org.apache.poi.xssf.usermodel.XSSFEvaluationWorkbook@11763e57'},
{id: '6ae429a4-e009-450c-bcee-7a3fe03aba24', label: 'IF\n6.0', color: '#f0ad4e', title: 'Name: IF<br>Value: 6.0<br>Type: IF<br>Id: 6ae429a4-e009-450c-bcee-7a3fe03aba24<br>Formula Expression: Formula String: IF(A3>A4,B3,B4); Formula Values: IF(3.0 > 5.0, 6.0); Formula Ptg: ; Ptgs:  Index in Ptgs: 3 <br>Source Object Id: org.apache.poi.xssf.usermodel.XSSFEvaluationWorkbook@11763e57'},
{id: 'ae99cfe9-e18e-4ef8-854a-4260148586de', label: '-\n-2.0', color: '#f0ad4e', title: 'Name: -<br>Value: -2.0<br>Type: OPERATOR<br>Id: ae99cfe9-e18e-4ef8-854a-4260148586de<br>Formula Expression: Formula String: A3 - VALUE; Formula Values: 3.0 - 5.0; Formula Ptg: ; Ptgs:  Index in Ptgs: 3 <br>Source Object Id: org.apache.poi.xssf.usermodel.XSSFEvaluationWorkbook@11763e57'},
{id: '436194bd-8139-4e48-b1ed-0d25f76c8120', label: '+\n6.0', color: '#f0ad4e', title: 'Name: +<br>Value: 6.0<br>Type: OPERATOR<br>Id: 436194bd-8139-4e48-b1ed-0d25f76c8120<br>Formula Expression: Formula String:  + IF(A3>A4,B3,B4); Formula Values:  + IF(3.0 > 5.0, 6.0); Formula Ptg: ; Ptgs:  Index in Ptgs: 9 <br>Source Object Id: org.apache.poi.xssf.usermodel.XSSFEvaluationWorkbook@11763e57'}
                            ]);


var edges = new vis.DataSet([
                             /* {from: id_a, to: id_b}, */
{from: '0b00065b-661e-495b-b9cc-3c812a8984df', to: 'ae99cfe9-e18e-4ef8-854a-4260148586de'},
{from: 'ba7fc2cb-d2b4-4a58-a386-0eb3b8c7da8d', to: 'b8349114-2ca1-4cd4-9f43-ddb3d7a279d3'},
{from: 'b8349114-2ca1-4cd4-9f43-ddb3d7a279d3', to: '6f0d47a8-98a5-4cfd-8b41-d4d88f38b56d'},
{from: 'b06d4930-271a-41e6-9f1d-fb0f7c7ee131', to: '6ae429a4-e009-450c-bcee-7a3fe03aba24'},
{from: 'ae99cfe9-e18e-4ef8-854a-4260148586de', to: 'b8349114-2ca1-4cd4-9f43-ddb3d7a279d3'},
{from: '98b4f423-e09c-462d-b9f5-83305422269e', to: '48d465b9-b343-411f-952d-cf7c62ba67d1'},
{from: '6072d8df-564e-44b3-8a25-cbadc7282131', to: '48d465b9-b343-411f-952d-cf7c62ba67d1'},
{from: '6ae429a4-e009-450c-bcee-7a3fe03aba24', to: '436194bd-8139-4e48-b1ed-0d25f76c8120'},
{from: '48d465b9-b343-411f-952d-cf7c62ba67d1', to: '6ae429a4-e009-450c-bcee-7a3fe03aba24'},
{from: '436194bd-8139-4e48-b1ed-0d25f76c8120', to: '1944b39e-4e26-4ef3-b573-4b0436697d2e'},
{from: '89bf4024-c992-4b8d-83ee-9cd2ff2ad126', to: 'ae99cfe9-e18e-4ef8-854a-4260148586de'}
                            ]);