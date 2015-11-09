var nodes = new vis.DataSet([
                             /* {id: a, label: b, ...}, */
{id: '074605fc-fd0c-4d00-97d5-d9123e6d000e', label: 'B5\nDEFINE', color: '#31b0d5', title: 'Name: B5<br>Value: DEFINE<br>Type: CELL_WITH_FORMULA<br>Id: 074605fc-fd0c-4d00-97d5-d9123e6d000e<br>Formula Expression: Formula String: DEFINE(ACOS(A2), VALUE, A2, VALUE); Formula Values: DEFINE(ACOS(0.0), #, 0.0, DEVDEF); Formula Ptg: 0.0 ACOS , #, 0.0, DEVDEF DEFINE ; Ptgs: A2 ACOS , VALUE, A2, VALUE DEFINE  Index in Ptgs: 5 <br>Source Object Id: org.apache.poi.xssf.usermodel.XSSFEvaluationWorkbook@35e2d654'},
{id: '195a2cc4-6b51-4c0a-9cbc-6924faaa1dac', label: 'VALUE\nDEVDEF', color: '#31b0d5', title: 'Name: VALUE<br>Value: DEVDEF<br>Type: CONSTANT_VALUE<br>Id: 195a2cc4-6b51-4c0a-9cbc-6924faaa1dac<br>Formula Expression: Formula String: VALUE; Formula Values: DEVDEF; Formula Ptg: DEVDEF; Ptgs: VALUE Index in Ptgs: 1 <br>Source Object Id: org.apache.poi.xssf.usermodel.XSSFEvaluationWorkbook@35e2d654'},
{id: 'ff7ee5ee-246f-41d3-ac86-8cb1e9bdc02b', label: 'B2\n0.5', color: '#31b0d5', title: 'Name: B2<br>Value: 0.5<br>Type: CELL_WITH_VALUE<br>Id: ff7ee5ee-246f-41d3-ac86-8cb1e9bdc02b<br>Formula Expression: Formula String: B2; Formula Values: 0.5; Formula Ptg: 0.5; Ptgs: B2 Index in Ptgs: 2 <br>Source Object Id: org.apache.poi.xssf.usermodel.XSSFEvaluationWorkbook@35e2d654'},
{id: '9a2f7839-4564-4967-ae4b-addcc874ec86', label: 'A2\n0.0', color: '#31b0d5', title: 'Name: A2<br>Value: 0.0<br>Type: CELL_WITH_VALUE<br>Id: 9a2f7839-4564-4967-ae4b-addcc874ec86<br>Formula Expression: Formula String: A2; Formula Values: 0.0; Formula Ptg: 0.0; Ptgs: A2 Index in Ptgs: 0 <br>Source Object Id: org.apache.poi.xssf.usermodel.XSSFEvaluationWorkbook@35e2d654'},
{id: '58948303-906c-43c6-8ca6-967e1d5009ac', label: 'VALUE\nDEVDEF', color: '#31b0d5', title: 'Name: VALUE<br>Value: DEVDEF<br>Type: CONSTANT_VALUE<br>Id: 58948303-906c-43c6-8ca6-967e1d5009ac<br>Formula Expression: Formula String: VALUE; Formula Values: DEVDEF; Formula Ptg: DEVDEF; Ptgs: VALUE Index in Ptgs: 1 <br>Source Object Id: org.apache.poi.xssf.usermodel.XSSFEvaluationWorkbook@35e2d654'},
{id: '7763b4c8-b60d-4dab-82a5-d6a1b51f3ec9', label: 'C6\n1.0471975511965979', color: '#31b0d5', title: 'Name: C6<br>Value: 1.0471975511965979<br>Type: CELL_WITH_FORMULA<br>Id: 7763b4c8-b60d-4dab-82a5-d6a1b51f3ec9<br>Formula Expression: Formula String: FUNCEXEC(B2, VALUE); Formula Values: FUNCEXEC(0.5, DEVDEF); Formula Ptg: 0.5, DEVDEF FUNCEXEC ; Ptgs: B2, VALUE FUNCEXEC  Index in Ptgs: 3 <br>Source Object Id: org.apache.poi.xssf.usermodel.XSSFEvaluationWorkbook@35e2d654'},
{id: 'ff5792a3-1571-4120-8d8c-eaf62bdd0038', label: 'VALUE\n#', color: '#31b0d5', title: 'Name: VALUE<br>Value: #<br>Type: CONSTANT_VALUE<br>Id: ff5792a3-1571-4120-8d8c-eaf62bdd0038<br>Formula Expression: Formula String: VALUE; Formula Values: #; Formula Ptg: #; Ptgs: VALUE Index in Ptgs: 3 <br>Source Object Id: org.apache.poi.xssf.usermodel.XSSFEvaluationWorkbook@35e2d654'},
{id: '6d472f2a-8cd6-4901-a762-6f8b2f341e40', label: 'VALUE\nDEVDEF', color: '#31b0d5', title: 'Name: VALUE<br>Value: DEVDEF<br>Type: CONSTANT_VALUE<br>Id: 6d472f2a-8cd6-4901-a762-6f8b2f341e40<br>Formula Expression: Formula String: VALUE; Formula Values: DEVDEF; Formula Ptg: DEVDEF; Ptgs: VALUE Index in Ptgs: 1 <br>Source Object Id: org.apache.poi.xssf.usermodel.XSSFEvaluationWorkbook@35e2d654'},
{id: 'fc188ba7-6d47-4804-b181-e74d5d0f8839', label: 'DEFINE\nDEFINE', color: '#f0ad4e', title: 'Name: DEFINE<br>Value: DEFINE<br>Type: FUNCTION<br>Id: fc188ba7-6d47-4804-b181-e74d5d0f8839<br>Formula Expression: Formula String: DEFINE(ACOS(B2), VALUE, B2, VALUE); Formula Values: DEFINE(ACOS(0.5), #, 0.5, DEVDEF); Formula Ptg: ; Ptgs:  Index in Ptgs: 5 <br>Source Object Id: org.apache.poi.xssf.usermodel.XSSFEvaluationWorkbook@35e2d654'},
{id: '86f3ebfe-51b5-4ca7-ad57-39404a23d31f', label: 'FUNCEXEC\n1.0471975511965979', color: '#f0ad4e', title: 'Name: FUNCEXEC<br>Value: 1.0471975511965979<br>Type: FUNCTION<br>Id: 86f3ebfe-51b5-4ca7-ad57-39404a23d31f<br>Formula Expression: Formula String: FUNCEXEC(B2, VALUE); Formula Values: FUNCEXEC(0.5, DEVDEF); Formula Ptg: ; Ptgs:  Index in Ptgs: 3 <br>Source Object Id: org.apache.poi.xssf.usermodel.XSSFEvaluationWorkbook@35e2d654'},
{id: '2df28a82-d239-4472-80fa-8d5cf2c814a0', label: 'FUNCEXEC\n1.5707963267948966', color: '#f0ad4e', title: 'Name: FUNCEXEC<br>Value: 1.5707963267948966<br>Type: FUNCTION<br>Id: 2df28a82-d239-4472-80fa-8d5cf2c814a0<br>Formula Expression: Formula String: FUNCEXEC(A2, VALUE); Formula Values: FUNCEXEC(0.0, DEVDEF); Formula Ptg: ; Ptgs:  Index in Ptgs: 3 <br>Source Object Id: org.apache.poi.xssf.usermodel.XSSFEvaluationWorkbook@35e2d654'},
{id: '0187f8aa-8336-446f-9acf-324cbb78b2f2', label: 'DEFINE\nDEFINE', color: '#f0ad4e', title: 'Name: DEFINE<br>Value: DEFINE<br>Type: FUNCTION<br>Id: 0187f8aa-8336-446f-9acf-324cbb78b2f2<br>Formula Expression: Formula String: DEFINE(ACOS(A2), VALUE, A2, VALUE); Formula Values: DEFINE(ACOS(0.0), #, 0.0, DEVDEF); Formula Ptg: ; Ptgs:  Index in Ptgs: 5 <br>Source Object Id: org.apache.poi.xssf.usermodel.XSSFEvaluationWorkbook@35e2d654'},
{id: 'a33a6e22-cf3a-410e-ad6e-b83a7d8e335b', label: 'A4\n1.5707963267948966', color: '#31b0d5', title: 'Name: A4<br>Value: 1.5707963267948966<br>Type: CELL_WITH_FORMULA<br>Id: a33a6e22-cf3a-410e-ad6e-b83a7d8e335b<br>Formula Expression: Formula String: ACOS(A2); Formula Values: ACOS(0.0); Formula Ptg: 0.0 ACOS ; Ptgs: A2 ACOS  Index in Ptgs: 1 <br>Source Object Id: org.apache.poi.xssf.usermodel.XSSFEvaluationWorkbook@35e2d654'},
{id: 'd25869a9-1724-4bcb-99b9-fb60d7a53166', label: 'B4\n1.0471975511965979', color: '#31b0d5', title: 'Name: B4<br>Value: 1.0471975511965979<br>Type: CELL_WITH_FORMULA<br>Id: d25869a9-1724-4bcb-99b9-fb60d7a53166<br>Formula Expression: Formula String: ACOS(B2); Formula Values: ACOS(0.5); Formula Ptg: 0.5 ACOS ; Ptgs: B2 ACOS  Index in Ptgs: 1 <br>Source Object Id: org.apache.poi.xssf.usermodel.XSSFEvaluationWorkbook@35e2d654'},
{id: 'bef77646-13ff-4954-9c52-46c2670588d7', label: 'ACOS\n1.5707963267948966', color: '#f0ad4e', title: 'Name: ACOS<br>Value: 1.5707963267948966<br>Type: FUNCTION<br>Id: bef77646-13ff-4954-9c52-46c2670588d7<br>Formula Expression: Formula String: ACOS(A2); Formula Values: ACOS(0.0); Formula Ptg: ; Ptgs:  Index in Ptgs: 1 <br>Source Object Id: org.apache.poi.xssf.usermodel.XSSFEvaluationWorkbook@35e2d654'},
{id: 'e9e86f6d-8a1f-46c5-84a7-b5354ef3c174', label: 'VALUE\nDEVDEF', color: '#31b0d5', title: 'Name: VALUE<br>Value: DEVDEF<br>Type: CONSTANT_VALUE<br>Id: e9e86f6d-8a1f-46c5-84a7-b5354ef3c174<br>Formula Expression: Formula String: VALUE; Formula Values: DEVDEF; Formula Ptg: DEVDEF; Ptgs: VALUE Index in Ptgs: 1 <br>Source Object Id: org.apache.poi.xssf.usermodel.XSSFEvaluationWorkbook@35e2d654'},
{id: '80c24a11-6d1d-43a6-8f60-b98c49fd1d43', label: 'ACOS\n1.0471975511965979', color: '#f0ad4e', title: 'Name: ACOS<br>Value: 1.0471975511965979<br>Type: FUNCTION<br>Id: 80c24a11-6d1d-43a6-8f60-b98c49fd1d43<br>Formula Expression: Formula String: ACOS(B2); Formula Values: ACOS(0.5); Formula Ptg: ; Ptgs:  Index in Ptgs: 1 <br>Source Object Id: org.apache.poi.xssf.usermodel.XSSFEvaluationWorkbook@35e2d654'},
{id: '23b34e74-24a1-40cd-abb6-cf3dc86a1396', label: 'VALUE\n#', color: '#31b0d5', title: 'Name: VALUE<br>Value: #<br>Type: CONSTANT_VALUE<br>Id: 23b34e74-24a1-40cd-abb6-cf3dc86a1396<br>Formula Expression: Formula String: VALUE; Formula Values: #; Formula Ptg: #; Ptgs: VALUE Index in Ptgs: 3 <br>Source Object Id: org.apache.poi.xssf.usermodel.XSSFEvaluationWorkbook@35e2d654'},
{id: '3656fc28-18e9-4df8-bc4f-33608016ff70', label: 'B6\nDEFINE', color: '#31b0d5', title: 'Name: B6<br>Value: DEFINE<br>Type: CELL_WITH_FORMULA<br>Id: 3656fc28-18e9-4df8-bc4f-33608016ff70<br>Formula Expression: Formula String: DEFINE(ACOS(B2), VALUE, B2, VALUE); Formula Values: DEFINE(ACOS(0.5), #, 0.5, DEVDEF); Formula Ptg: 0.5 ACOS , #, 0.5, DEVDEF DEFINE ; Ptgs: B2 ACOS , VALUE, B2, VALUE DEFINE  Index in Ptgs: 5 <br>Source Object Id: org.apache.poi.xssf.usermodel.XSSFEvaluationWorkbook@35e2d654'},
{id: 'cee8d325-8d5d-4704-9982-e60d0b83d8e8', label: 'C5\n1.5707963267948966', color: '#31b0d5', title: 'Name: C5<br>Value: 1.5707963267948966<br>Type: CELL_WITH_FORMULA<br>Id: cee8d325-8d5d-4704-9982-e60d0b83d8e8<br>Formula Expression: Formula String: FUNCEXEC(A2, VALUE); Formula Values: FUNCEXEC(0.0, DEVDEF); Formula Ptg: 0.0, DEVDEF FUNCEXEC ; Ptgs: A2, VALUE FUNCEXEC  Index in Ptgs: 3 <br>Source Object Id: org.apache.poi.xssf.usermodel.XSSFEvaluationWorkbook@35e2d654'}
                            ]);


var edges = new vis.DataSet([
                             /* {from: id_a, to: id_b}, */
{from: 'ff7ee5ee-246f-41d3-ac86-8cb1e9bdc02b', to: '86f3ebfe-51b5-4ca7-ad57-39404a23d31f'},
{from: '6d472f2a-8cd6-4901-a762-6f8b2f341e40', to: '2df28a82-d239-4472-80fa-8d5cf2c814a0'},
{from: '23b34e74-24a1-40cd-abb6-cf3dc86a1396', to: '0187f8aa-8336-446f-9acf-324cbb78b2f2'},
{from: 'ff5792a3-1571-4120-8d8c-eaf62bdd0038', to: 'fc188ba7-6d47-4804-b181-e74d5d0f8839'},
{from: 'fc188ba7-6d47-4804-b181-e74d5d0f8839', to: '3656fc28-18e9-4df8-bc4f-33608016ff70'},
{from: '9a2f7839-4564-4967-ae4b-addcc874ec86', to: '2df28a82-d239-4472-80fa-8d5cf2c814a0'},
{from: 'ff7ee5ee-246f-41d3-ac86-8cb1e9bdc02b', to: 'fc188ba7-6d47-4804-b181-e74d5d0f8839'},
{from: '0187f8aa-8336-446f-9acf-324cbb78b2f2', to: '074605fc-fd0c-4d00-97d5-d9123e6d000e'},
{from: 'd25869a9-1724-4bcb-99b9-fb60d7a53166', to: 'fc188ba7-6d47-4804-b181-e74d5d0f8839'},
{from: 'ff7ee5ee-246f-41d3-ac86-8cb1e9bdc02b', to: '80c24a11-6d1d-43a6-8f60-b98c49fd1d43'},
{from: '9a2f7839-4564-4967-ae4b-addcc874ec86', to: '0187f8aa-8336-446f-9acf-324cbb78b2f2'},
{from: '58948303-906c-43c6-8ca6-967e1d5009ac', to: '0187f8aa-8336-446f-9acf-324cbb78b2f2'},
{from: 'bef77646-13ff-4954-9c52-46c2670588d7', to: 'a33a6e22-cf3a-410e-ad6e-b83a7d8e335b'},
{from: 'a33a6e22-cf3a-410e-ad6e-b83a7d8e335b', to: '0187f8aa-8336-446f-9acf-324cbb78b2f2'},
{from: 'e9e86f6d-8a1f-46c5-84a7-b5354ef3c174', to: '86f3ebfe-51b5-4ca7-ad57-39404a23d31f'},
{from: '86f3ebfe-51b5-4ca7-ad57-39404a23d31f', to: '7763b4c8-b60d-4dab-82a5-d6a1b51f3ec9'},
{from: '9a2f7839-4564-4967-ae4b-addcc874ec86', to: 'bef77646-13ff-4954-9c52-46c2670588d7'},
{from: '195a2cc4-6b51-4c0a-9cbc-6924faaa1dac', to: 'fc188ba7-6d47-4804-b181-e74d5d0f8839'},
{from: '80c24a11-6d1d-43a6-8f60-b98c49fd1d43', to: 'd25869a9-1724-4bcb-99b9-fb60d7a53166'},
{from: '2df28a82-d239-4472-80fa-8d5cf2c814a0', to: 'cee8d325-8d5d-4704-9982-e60d0b83d8e8'}
                            ]);