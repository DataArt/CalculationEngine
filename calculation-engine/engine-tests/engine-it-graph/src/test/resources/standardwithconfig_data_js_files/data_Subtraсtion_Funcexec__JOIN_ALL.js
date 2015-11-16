var nodes = new vis.DataSet([
                             /* {id: a, label: b, ...}, */
{id: '37fbede9-b51f-4174-9689-281310a65f2d', label: 'B2\n240.0', color: '#31b0d5', title: 'Name: B2<br>Value: 240.0<br>Type: CELL_WITH_VALUE<br>Id: 37fbede9-b51f-4174-9689-281310a65f2d<br>Formula Expression: Formula String: B2; Formula Values: 240.0; Formula Ptg: 240.0; Ptgs: B2 Index in Ptgs: 3 <br>Source Object Id: org.apache.poi.xssf.usermodel.XSSFEvaluationWorkbook@6f330eb9'},
{id: 'f6cc0d27-c592-4a74-87f3-c25db66e3e21', label: 'VALUE\nDEVDEF', color: '#31b0d5', title: 'Name: VALUE<br>Value: DEVDEF<br>Type: CONSTANT_VALUE<br>Id: f6cc0d27-c592-4a74-87f3-c25db66e3e21<br>Formula Expression: Formula String: VALUE; Formula Values: DEVDEF; Formula Ptg: DEVDEF; Ptgs: VALUE Index in Ptgs: 1 <br>Source Object Id: org.apache.poi.xssf.usermodel.XSSFEvaluationWorkbook@6f330eb9'},
{id: '09ef83f3-6adb-4158-ba05-ff6c75a97436', label: '-\n-290.0', color: '#f0ad4e', title: 'Name: -<br>Value: -290.0<br>Type: OPERATOR<br>Id: 09ef83f3-6adb-4158-ba05-ff6c75a97436<br>Formula Expression: Formula String: A2 - B2 - C2; Formula Values: 250.0 - 240.0 - 300.0; Formula Ptg: ; Ptgs:  Index in Ptgs: 4 <br>Source Object Id: org.apache.poi.xssf.usermodel.XSSFEvaluationWorkbook@6f330eb9'},
{id: '88165f29-542f-4a67-aefc-f3ac23e9f99d', label: 'D2\n-290.0', color: '#31b0d5', title: 'Name: D2<br>Value: -290.0<br>Type: CELL_WITH_FORMULA<br>Id: 88165f29-542f-4a67-aefc-f3ac23e9f99d<br>Formula Expression: Formula String: A2 - B2 - C2; Formula Values: 250.0 - 240.0 - 300.0; Formula Ptg: 250.0 240.0 - 300.0 -; Ptgs: A2 B2 - C2 - Index in Ptgs: 4 <br>Source Object Id: org.apache.poi.xssf.usermodel.XSSFEvaluationWorkbook@6f330eb9'},
{id: 'ba9cddfa-886f-4597-b993-d403dac9d49d', label: 'A2\n250.0', color: '#31b0d5', title: 'Name: A2<br>Value: 250.0<br>Type: CELL_WITH_VALUE<br>Id: ba9cddfa-886f-4597-b993-d403dac9d49d<br>Formula Expression: Formula String: A2; Formula Values: 250.0; Formula Ptg: 250.0; Ptgs: A2 Index in Ptgs: 2 <br>Source Object Id: org.apache.poi.xssf.usermodel.XSSFEvaluationWorkbook@6f330eb9'},
{id: '02f7f6c7-2a22-4bfd-ac3d-02ceaad859c4', label: '-\n10.0', color: '#f0ad4e', title: 'Name: -<br>Value: 10.0<br>Type: OPERATOR<br>Id: 02f7f6c7-2a22-4bfd-ac3d-02ceaad859c4<br>Formula Expression: Formula String: A2 - B2; Formula Values: 250.0 - 240.0; Formula Ptg: ; Ptgs:  Index in Ptgs: 2 <br>Source Object Id: org.apache.poi.xssf.usermodel.XSSFEvaluationWorkbook@6f330eb9'},
{id: '46965d86-fce3-4bf9-af1e-6e2547119f30', label: 'C2\n300.0', color: '#31b0d5', title: 'Name: C2<br>Value: 300.0<br>Type: CELL_WITH_VALUE<br>Id: 46965d86-fce3-4bf9-af1e-6e2547119f30<br>Formula Expression: Formula String: C2; Formula Values: 300.0; Formula Ptg: 300.0; Ptgs: C2 Index in Ptgs: 4 <br>Source Object Id: org.apache.poi.xssf.usermodel.XSSFEvaluationWorkbook@6f330eb9'},
{id: '63ee9def-3757-46f9-8846-7f8671b51aaf', label: 'VALUE\nDEVDEF', color: '#31b0d5', title: 'Name: VALUE<br>Value: DEVDEF<br>Type: CONSTANT_VALUE<br>Id: 63ee9def-3757-46f9-8846-7f8671b51aaf<br>Formula Expression: Formula String: VALUE; Formula Values: DEVDEF; Formula Ptg: DEVDEF; Ptgs: VALUE Index in Ptgs: 1 <br>Source Object Id: org.apache.poi.xssf.usermodel.XSSFEvaluationWorkbook@6f330eb9'},
{id: 'f9a68389-2f35-426c-8cb6-481953d34532', label: 'DEFINE\nDEFINE', color: '#f0ad4e', title: 'Name: DEFINE<br>Value: DEFINE<br>Type: FUNCTION<br>Id: f9a68389-2f35-426c-8cb6-481953d34532<br>Formula Expression: Formula String: DEFINE(A2 - B2 - C2, VALUE, C2, B2, A2, VALUE); Formula Values: DEFINE(250.0 - 240.0 - 300.0, #, 300.0, 240.0, 250.0, DEVDEF); Formula Ptg: ; Ptgs:  Index in Ptgs: 7 <br>Source Object Id: org.apache.poi.xssf.usermodel.XSSFEvaluationWorkbook@6f330eb9'},
{id: 'b6226d59-f81d-4927-80d4-8a16ae4c8044', label: 'E3\n-290.0', color: '#31b0d5', title: 'Name: E3<br>Value: -290.0<br>Type: CELL_WITH_FORMULA<br>Id: b6226d59-f81d-4927-80d4-8a16ae4c8044<br>Formula Expression: Formula String: FUNCEXEC(C2, B2, A2, VALUE); Formula Values: FUNCEXEC(300.0, 240.0, 250.0, DEVDEF); Formula Ptg: 300.0, 240.0, 250.0, DEVDEF FUNCEXEC ; Ptgs: C2, B2, A2, VALUE FUNCEXEC  Index in Ptgs: 5 <br>Source Object Id: org.apache.poi.xssf.usermodel.XSSFEvaluationWorkbook@6f330eb9'},
{id: 'bc99ed12-9565-4962-b4b3-d99863423e6b', label: 'VALUE\n#', color: '#31b0d5', title: 'Name: VALUE<br>Value: #<br>Type: CONSTANT_VALUE<br>Id: bc99ed12-9565-4962-b4b3-d99863423e6b<br>Formula Expression: Formula String: VALUE; Formula Values: #; Formula Ptg: #; Ptgs: VALUE Index in Ptgs: 5 <br>Source Object Id: org.apache.poi.xssf.usermodel.XSSFEvaluationWorkbook@6f330eb9'},
{id: 'da57f953-a26f-4a26-a8c4-7a910538a9ac', label: 'FUNCEXEC\n-290.0', color: '#f0ad4e', title: 'Name: FUNCEXEC<br>Value: -290.0<br>Type: FUNCTION<br>Id: da57f953-a26f-4a26-a8c4-7a910538a9ac<br>Formula Expression: Formula String: FUNCEXEC(C2, B2, A2, VALUE); Formula Values: FUNCEXEC(300.0, 240.0, 250.0, DEVDEF); Formula Ptg: ; Ptgs:  Index in Ptgs: 5 <br>Source Object Id: org.apache.poi.xssf.usermodel.XSSFEvaluationWorkbook@6f330eb9'},
{id: '4db9d1d8-76fe-410f-ac94-2ac99b4a81d7', label: 'D3\nDEFINE', color: '#31b0d5', title: 'Name: D3<br>Value: DEFINE<br>Type: CELL_WITH_FORMULA<br>Id: 4db9d1d8-76fe-410f-ac94-2ac99b4a81d7<br>Formula Expression: Formula String: DEFINE(A2 - B2 - C2, VALUE, C2, B2, A2, VALUE); Formula Values: DEFINE(250.0 - 240.0 - 300.0, #, 300.0, 240.0, 250.0, DEVDEF); Formula Ptg: 250.0 240.0 - 300.0 -, #, 300.0, 240.0, 250.0, DEVDEF DEFINE ; Ptgs: A2 B2 - C2 -, VALUE, C2, B2, A2, VALUE DEFINE  Index in Ptgs: 7 <br>Source Object Id: org.apache.poi.xssf.usermodel.XSSFEvaluationWorkbook@6f330eb9'}
                            ]);


var edges = new vis.DataSet([
                             /* {from: id_a, to: id_b}, */
{from: '02f7f6c7-2a22-4bfd-ac3d-02ceaad859c4', to: '09ef83f3-6adb-4158-ba05-ff6c75a97436'},
{from: 'ba9cddfa-886f-4597-b993-d403dac9d49d', to: 'f9a68389-2f35-426c-8cb6-481953d34532'},
{from: '37fbede9-b51f-4174-9689-281310a65f2d', to: 'da57f953-a26f-4a26-a8c4-7a910538a9ac'},
{from: '88165f29-542f-4a67-aefc-f3ac23e9f99d', to: 'f9a68389-2f35-426c-8cb6-481953d34532'},
{from: '46965d86-fce3-4bf9-af1e-6e2547119f30', to: 'da57f953-a26f-4a26-a8c4-7a910538a9ac'},
{from: '37fbede9-b51f-4174-9689-281310a65f2d', to: '02f7f6c7-2a22-4bfd-ac3d-02ceaad859c4'},
{from: 'bc99ed12-9565-4962-b4b3-d99863423e6b', to: 'f9a68389-2f35-426c-8cb6-481953d34532'},
{from: 'ba9cddfa-886f-4597-b993-d403dac9d49d', to: 'da57f953-a26f-4a26-a8c4-7a910538a9ac'},
{from: 'f9a68389-2f35-426c-8cb6-481953d34532', to: '4db9d1d8-76fe-410f-ac94-2ac99b4a81d7'},
{from: '46965d86-fce3-4bf9-af1e-6e2547119f30', to: '09ef83f3-6adb-4158-ba05-ff6c75a97436'},
{from: 'f6cc0d27-c592-4a74-87f3-c25db66e3e21', to: 'f9a68389-2f35-426c-8cb6-481953d34532'},
{from: '63ee9def-3757-46f9-8846-7f8671b51aaf', to: 'da57f953-a26f-4a26-a8c4-7a910538a9ac'},
{from: '37fbede9-b51f-4174-9689-281310a65f2d', to: 'f9a68389-2f35-426c-8cb6-481953d34532'},
{from: 'da57f953-a26f-4a26-a8c4-7a910538a9ac', to: 'b6226d59-f81d-4927-80d4-8a16ae4c8044'},
{from: 'ba9cddfa-886f-4597-b993-d403dac9d49d', to: '02f7f6c7-2a22-4bfd-ac3d-02ceaad859c4'},
{from: '09ef83f3-6adb-4158-ba05-ff6c75a97436', to: '88165f29-542f-4a67-aefc-f3ac23e9f99d'},
{from: '46965d86-fce3-4bf9-af1e-6e2547119f30', to: 'f9a68389-2f35-426c-8cb6-481953d34532'}
                            ]);