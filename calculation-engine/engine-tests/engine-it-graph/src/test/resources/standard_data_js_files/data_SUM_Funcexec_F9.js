var nodes = new vis.DataSet([
                             /* {id: a, label: b, ...}, */
{id: '09bbab30-ece5-414e-997d-67369656b68d', label: 'B5\n8.0', color: '#31b0d5', title: 'Name: B5<br>Value: 8.0<br>Type: CELL_WITH_VALUE<br>Id: 09bbab30-ece5-414e-997d-67369656b68d<br>Formula Expression: Formula String: B5; Formula Values: 8.0; Formula Ptg: 8.0; Ptgs: B5 Index in Ptgs: 3 <br>Source Object Id: org.apache.poi.xssf.usermodel.XSSFEvaluationWorkbook@530a8454'},
{id: 'e048d9fc-e14c-4804-af3c-1f329adce50f', label: 'A5\n7.0', color: '#31b0d5', title: 'Name: A5<br>Value: 7.0<br>Type: CELL_WITH_VALUE<br>Id: e048d9fc-e14c-4804-af3c-1f329adce50f<br>Formula Expression: Formula String: A5; Formula Values: 7.0; Formula Ptg: 7.0; Ptgs: A5 Index in Ptgs: 2 <br>Source Object Id: org.apache.poi.xssf.usermodel.XSSFEvaluationWorkbook@530a8454'},
{id: '87dee8ef-afa9-4601-8efb-38544ec7bab2', label: 'F9\n15.0', color: '#31b0d5', title: 'Name: F9<br>Value: 15.0<br>Type: CELL_WITH_FORMULA<br>Id: 87dee8ef-afa9-4601-8efb-38544ec7bab2<br>Formula Expression: Formula String: FUNCEXEC(C5, B5, A5, VALUE); Formula Values: FUNCEXEC(, 8.0, 7.0, DEVDEF_4); Formula Ptg: , 8.0, 7.0, DEVDEF_4 FUNCEXEC ; Ptgs: C5, B5, A5, VALUE FUNCEXEC  Index in Ptgs: 5 <br>Source Object Id: org.apache.poi.xssf.usermodel.XSSFEvaluationWorkbook@530a8454'},
{id: '402a8b98-e543-4fb3-a84a-70e8ddb09915', label: 'VALUE\nDEVDEF_4', color: '#31b0d5', title: 'Name: VALUE<br>Value: DEVDEF_4<br>Type: CONSTANT_VALUE<br>Id: 402a8b98-e543-4fb3-a84a-70e8ddb09915<br>Formula Expression: Formula String: VALUE; Formula Values: DEVDEF_4; Formula Ptg: DEVDEF_4; Ptgs: VALUE Index in Ptgs: 1 <br>Source Object Id: org.apache.poi.xssf.usermodel.XSSFEvaluationWorkbook@530a8454'},
{id: '8e45fb56-19fe-476d-be14-bac909d7a02b', label: 'FUNCEXEC\n15.0', color: '#f0ad4e', title: 'Name: FUNCEXEC<br>Value: 15.0<br>Type: FUNCTION<br>Id: 8e45fb56-19fe-476d-be14-bac909d7a02b<br>Formula Expression: Formula String: FUNCEXEC(C5, B5, A5, VALUE); Formula Values: FUNCEXEC(, 8.0, 7.0, DEVDEF_4); Formula Ptg: ; Ptgs:  Index in Ptgs: 5 <br>Source Object Id: org.apache.poi.xssf.usermodel.XSSFEvaluationWorkbook@530a8454'},
{id: '44944648-461d-4b60-89fd-98382e22dbe9', label: 'C5\n', color: '#31b0d5', title: 'Name: C5<br>Value: <br>Type: EMPTY_CELL<br>Id: 44944648-461d-4b60-89fd-98382e22dbe9<br>Formula Expression: Formula String: C5; Formula Values: ; Formula Ptg: ; Ptgs: C5 Index in Ptgs: 4 <br>Source Object Id: org.apache.poi.xssf.usermodel.XSSFEvaluationWorkbook@530a8454'}
                            ]);


var edges = new vis.DataSet([
                             /* {from: id_a, to: id_b}, */
{from: 'e048d9fc-e14c-4804-af3c-1f329adce50f', to: '8e45fb56-19fe-476d-be14-bac909d7a02b'},
{from: '402a8b98-e543-4fb3-a84a-70e8ddb09915', to: '8e45fb56-19fe-476d-be14-bac909d7a02b'},
{from: '8e45fb56-19fe-476d-be14-bac909d7a02b', to: '87dee8ef-afa9-4601-8efb-38544ec7bab2'},
{from: '09bbab30-ece5-414e-997d-67369656b68d', to: '8e45fb56-19fe-476d-be14-bac909d7a02b'},
{from: '44944648-461d-4b60-89fd-98382e22dbe9', to: '8e45fb56-19fe-476d-be14-bac909d7a02b'}
                            ]);