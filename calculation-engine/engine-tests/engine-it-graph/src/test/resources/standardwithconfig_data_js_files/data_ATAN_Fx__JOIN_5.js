var nodes = new vis.DataSet([
                             /* {id: a, label: b, ...}, */
{id: 'dd888c4f-c0f6-451e-bcff-ce8167fb3307', label: 'B2\n0.7853981633974483', color: '#31b0d5', title: 'Name: B2<br>Value: 0.7853981633974483<br>Type: CELL_WITH_FORMULA<br>Id: dd888c4f-c0f6-451e-bcff-ce8167fb3307<br>Formula Expression: Formula String: ATAN(VALUE); Formula Values: ATAN(1.0); Formula Ptg: 1.0 ATAN ; Ptgs: VALUE ATAN  Index in Ptgs: 1 <br>Source Object Id: org.apache.poi.xssf.usermodel.XSSFEvaluationWorkbook@22fb60f3'},
{id: '26bd77cc-5aae-4c0a-b8c4-39b3d92c1872', label: '/\n26.56505117707799', color: '#f0ad4e', title: 'Name: /<br>Value: 26.56505117707799<br>Type: OPERATOR<br>Id: 26bd77cc-5aae-4c0a-b8c4-39b3d92c1872<br>Formula Expression: Formula String: ATAN(VALUE) * VALUE / PI(); Formula Values: ATAN(0.5) * 180.0 / PI(); Formula Ptg: ; Ptgs:  Index in Ptgs: 5 <br>Source Object Id: org.apache.poi.xssf.usermodel.XSSFEvaluationWorkbook@22fb60f3'},
{id: 'c58209b6-9138-4506-8d00-356b513f22e7', label: 'ATAN\n0.4636476090008061', color: '#f0ad4e', title: 'Name: ATAN<br>Value: 0.4636476090008061<br>Type: FUNCTION<br>Id: c58209b6-9138-4506-8d00-356b513f22e7<br>Formula Expression: Formula String: ATAN(VALUE); Formula Values: ATAN(0.5); Formula Ptg: ; Ptgs:  Index in Ptgs: 1 <br>Source Object Id: org.apache.poi.xssf.usermodel.XSSFEvaluationWorkbook@22fb60f3'},
{id: '3a9b8d8e-29ab-4cd7-850d-ff16e003ee77', label: 'ATAN\n0.7853981633974483', color: '#f0ad4e', title: 'Name: ATAN<br>Value: 0.7853981633974483<br>Type: FUNCTION<br>Id: 3a9b8d8e-29ab-4cd7-850d-ff16e003ee77<br>Formula Expression: Formula String: ATAN(VALUE); Formula Values: ATAN(1.0); Formula Ptg: ; Ptgs:  Index in Ptgs: 1 <br>Source Object Id: org.apache.poi.xssf.usermodel.XSSFEvaluationWorkbook@22fb60f3'},
{id: 'e399636d-2a75-48ee-9ed8-8495c053ff84', label: 'B3\n26.56505117707799', color: '#31b0d5', title: 'Name: B3<br>Value: 26.56505117707799<br>Type: CELL_WITH_FORMULA<br>Id: e399636d-2a75-48ee-9ed8-8495c053ff84<br>Formula Expression: Formula String: ATAN(VALUE) * VALUE / PI(); Formula Values: ATAN(0.5) * 180.0 / PI(); Formula Ptg: 0.5 ATAN  180.0 *  PI  /; Ptgs: VALUE ATAN  VALUE *  PI  / Index in Ptgs: 5 <br>Source Object Id: org.apache.poi.xssf.usermodel.XSSFEvaluationWorkbook@22fb60f3'},
{id: 'f8aee3bf-7d46-4312-abe2-07a2f6e077f2', label: '*\n83.4565696201451', color: '#f0ad4e', title: 'Name: *<br>Value: 83.4565696201451<br>Type: OPERATOR<br>Id: f8aee3bf-7d46-4312-abe2-07a2f6e077f2<br>Formula Expression: Formula String: ATAN(VALUE) * VALUE; Formula Values: ATAN(0.5) * 180.0; Formula Ptg: ; Ptgs:  Index in Ptgs: 3 <br>Source Object Id: org.apache.poi.xssf.usermodel.XSSFEvaluationWorkbook@22fb60f3'},
{id: '5904e0f8-b4f5-49c8-a053-116c73fb810c', label: 'VALUE\n180.0', color: '#31b0d5', title: 'Name: VALUE<br>Value: 180.0<br>Type: CONSTANT_VALUE<br>Id: 5904e0f8-b4f5-49c8-a053-116c73fb810c<br>Formula Expression: Formula String: VALUE; Formula Values: 180.0; Formula Ptg: 180.0; Ptgs: VALUE Index in Ptgs: 2 <br>Source Object Id: org.apache.poi.xssf.usermodel.XSSFEvaluationWorkbook@22fb60f3'},
{id: 'c4f6ca87-ac8e-49a5-8d49-249bed60e4b0', label: 'VALUE\n180.0', color: '#31b0d5', title: 'Name: VALUE<br>Value: 180.0<br>Type: CONSTANT_VALUE<br>Id: c4f6ca87-ac8e-49a5-8d49-249bed60e4b0<br>Formula Expression: Formula String: VALUE; Formula Values: 180.0; Formula Ptg: 180.0; Ptgs: VALUE Index in Ptgs: 2 <br>Source Object Id: org.apache.poi.xssf.usermodel.XSSFEvaluationWorkbook@22fb60f3'},
{id: 'fe284685-ccac-49ab-869a-26fa6c2142e1', label: 'PI\n3.141592653589793', color: '#f0ad4e', title: 'Name: PI<br>Value: 3.141592653589793<br>Type: FUNCTION<br>Id: fe284685-ccac-49ab-869a-26fa6c2142e1<br>Formula Expression: Formula String: PI(); Formula Values: PI(); Formula Ptg: ; Ptgs:  Index in Ptgs: 4 <br>Source Object Id: org.apache.poi.xssf.usermodel.XSSFEvaluationWorkbook@22fb60f3'},
{id: 'ecff4fd5-f959-454b-972e-581bbce75d9f', label: 'PI\n3.141592653589793', color: '#f0ad4e', title: 'Name: PI<br>Value: 3.141592653589793<br>Type: FUNCTION<br>Id: ecff4fd5-f959-454b-972e-581bbce75d9f<br>Formula Expression: Formula String: PI(); Formula Values: PI(); Formula Ptg: ; Ptgs:  Index in Ptgs: 4 <br>Source Object Id: org.apache.poi.xssf.usermodel.XSSFEvaluationWorkbook@22fb60f3'},
{id: '74683dbb-5537-469d-85b5-ae9d2134a6ff', label: '*\n141.3716694115407', color: '#f0ad4e', title: 'Name: *<br>Value: 141.3716694115407<br>Type: OPERATOR<br>Id: 74683dbb-5537-469d-85b5-ae9d2134a6ff<br>Formula Expression: Formula String: ATAN(VALUE) * VALUE; Formula Values: ATAN(1.0) * 180.0; Formula Ptg: ; Ptgs:  Index in Ptgs: 3 <br>Source Object Id: org.apache.poi.xssf.usermodel.XSSFEvaluationWorkbook@22fb60f3'},
{id: 'fd916795-1741-4afc-9db8-62898a9ebd6f', label: 'VALUE\n1.0', color: '#31b0d5', title: 'Name: VALUE<br>Value: 1.0<br>Type: CONSTANT_VALUE<br>Id: fd916795-1741-4afc-9db8-62898a9ebd6f<br>Formula Expression: Formula String: VALUE; Formula Values: 1.0; Formula Ptg: 1.0; Ptgs: VALUE Index in Ptgs: 0 <br>Source Object Id: org.apache.poi.xssf.usermodel.XSSFEvaluationWorkbook@22fb60f3'},
{id: 'c4119a6f-9d29-4d51-95d9-b61bb2032d7f', label: '/\n45.0', color: '#f0ad4e', title: 'Name: /<br>Value: 45.0<br>Type: OPERATOR<br>Id: c4119a6f-9d29-4d51-95d9-b61bb2032d7f<br>Formula Expression: Formula String: ATAN(VALUE) * VALUE / PI(); Formula Values: ATAN(1.0) * 180.0 / PI(); Formula Ptg: ; Ptgs:  Index in Ptgs: 5 <br>Source Object Id: org.apache.poi.xssf.usermodel.XSSFEvaluationWorkbook@22fb60f3'},
{id: '7206418d-5a64-438e-8b6b-58404c41db63', label: 'ATAN\n0.7853981633974483', color: '#f0ad4e', title: 'Name: ATAN<br>Value: 0.7853981633974483<br>Type: FUNCTION<br>Id: 7206418d-5a64-438e-8b6b-58404c41db63<br>Formula Expression: Formula String: ATAN(VALUE); Formula Values: ATAN(1.0); Formula Ptg: ; Ptgs:  Index in Ptgs: 1 <br>Source Object Id: org.apache.poi.xssf.usermodel.XSSFEvaluationWorkbook@22fb60f3'},
{id: 'c8e7144e-ec56-4ef1-a08a-956043db5913', label: 'VALUE\n1.0', color: '#31b0d5', title: 'Name: VALUE<br>Value: 1.0<br>Type: CONSTANT_VALUE<br>Id: c8e7144e-ec56-4ef1-a08a-956043db5913<br>Formula Expression: Formula String: VALUE; Formula Values: 1.0; Formula Ptg: 1.0; Ptgs: VALUE Index in Ptgs: 0 <br>Source Object Id: org.apache.poi.xssf.usermodel.XSSFEvaluationWorkbook@22fb60f3'},
{id: '726b2bf7-3230-468c-992d-2cdda2537629', label: 'B4\n45.0', color: '#31b0d5', title: 'Name: B4<br>Value: 45.0<br>Type: CELL_WITH_FORMULA<br>Id: 726b2bf7-3230-468c-992d-2cdda2537629<br>Formula Expression: Formula String: ATAN(VALUE) * VALUE / PI(); Formula Values: ATAN(1.0) * 180.0 / PI(); Formula Ptg: 1.0 ATAN  180.0 *  PI  /; Ptgs: VALUE ATAN  VALUE *  PI  / Index in Ptgs: 5 <br>Source Object Id: org.apache.poi.xssf.usermodel.XSSFEvaluationWorkbook@22fb60f3'},
{id: '50baf120-f3c7-48a5-ba10-8500b987038c', label: 'VALUE\n0.5', color: '#31b0d5', title: 'Name: VALUE<br>Value: 0.5<br>Type: CONSTANT_VALUE<br>Id: 50baf120-f3c7-48a5-ba10-8500b987038c<br>Formula Expression: Formula String: VALUE; Formula Values: 0.5; Formula Ptg: 0.5; Ptgs: VALUE Index in Ptgs: 0 <br>Source Object Id: org.apache.poi.xssf.usermodel.XSSFEvaluationWorkbook@22fb60f3'}
                            ]);


var edges = new vis.DataSet([
                             /* {from: id_a, to: id_b}, */
{from: 'fd916795-1741-4afc-9db8-62898a9ebd6f', to: '7206418d-5a64-438e-8b6b-58404c41db63'},
{from: 'c8e7144e-ec56-4ef1-a08a-956043db5913', to: '3a9b8d8e-29ab-4cd7-850d-ff16e003ee77'},
{from: 'c4f6ca87-ac8e-49a5-8d49-249bed60e4b0', to: '74683dbb-5537-469d-85b5-ae9d2134a6ff'},
{from: 'ecff4fd5-f959-454b-972e-581bbce75d9f', to: '26bd77cc-5aae-4c0a-b8c4-39b3d92c1872'},
{from: '7206418d-5a64-438e-8b6b-58404c41db63', to: '74683dbb-5537-469d-85b5-ae9d2134a6ff'},
{from: '50baf120-f3c7-48a5-ba10-8500b987038c', to: 'c58209b6-9138-4506-8d00-356b513f22e7'},
{from: 'c58209b6-9138-4506-8d00-356b513f22e7', to: 'f8aee3bf-7d46-4312-abe2-07a2f6e077f2'},
{from: '26bd77cc-5aae-4c0a-b8c4-39b3d92c1872', to: 'e399636d-2a75-48ee-9ed8-8495c053ff84'},
{from: '5904e0f8-b4f5-49c8-a053-116c73fb810c', to: 'f8aee3bf-7d46-4312-abe2-07a2f6e077f2'},
{from: 'c4119a6f-9d29-4d51-95d9-b61bb2032d7f', to: '726b2bf7-3230-468c-992d-2cdda2537629'},
{from: '3a9b8d8e-29ab-4cd7-850d-ff16e003ee77', to: 'dd888c4f-c0f6-451e-bcff-ce8167fb3307'},
{from: '74683dbb-5537-469d-85b5-ae9d2134a6ff', to: 'c4119a6f-9d29-4d51-95d9-b61bb2032d7f'},
{from: 'f8aee3bf-7d46-4312-abe2-07a2f6e077f2', to: '26bd77cc-5aae-4c0a-b8c4-39b3d92c1872'},
{from: 'fe284685-ccac-49ab-869a-26fa6c2142e1', to: 'c4119a6f-9d29-4d51-95d9-b61bb2032d7f'}
                            ]);