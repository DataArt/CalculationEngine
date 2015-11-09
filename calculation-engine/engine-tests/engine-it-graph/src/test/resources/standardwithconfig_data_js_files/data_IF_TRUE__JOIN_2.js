var nodes = new vis.DataSet([
                             /* {id: a, label: b, ...}, */
{id: '85bf3377-f57d-4a2d-bfb0-6712d81077db', label: 'E6\n65.0', color: '#31b0d5', title: 'Name: E6<br>Value: 65.0<br>Type: CELL_WITH_FORMULA<br>Id: 85bf3377-f57d-4a2d-bfb0-6712d81077db<br>Formula Expression: Formula String: IF(D1<5,D2,C3); Formula Values: IF(4.0 < 5.0, 65.0); Formula Ptg: 65.0, 4.0 5.0 < IF ; Ptgs: D2, D1 VALUE < IF  Index in Ptgs: 3 <br>Source Object Id: org.apache.poi.xssf.usermodel.XSSFEvaluationWorkbook@76563ae7'},
{id: '4df5aaf9-5f06-4eac-92ab-0ba01f20a916', label: 'D1\n4.0', color: '#31b0d5', title: 'Name: D1<br>Value: 4.0<br>Type: CELL_WITH_VALUE<br>Id: 4df5aaf9-5f06-4eac-92ab-0ba01f20a916<br>Formula Expression: Formula String: D1; Formula Values: 4.0; Formula Ptg: 4.0; Ptgs: D1 Index in Ptgs: 0 <br>Source Object Id: org.apache.poi.xssf.usermodel.XSSFEvaluationWorkbook@76563ae7'},
{id: '36fe2601-22db-427b-8cca-8356807343d2', label: 'IF\n65.0', color: '#f0ad4e', title: 'Name: IF<br>Value: 65.0<br>Type: IF<br>Id: 36fe2601-22db-427b-8cca-8356807343d2<br>Formula Expression: Formula String: IF(D1<5,D2,C3); Formula Values: IF(4.0 < 5.0, 65.0); Formula Ptg: ; Ptgs:  Index in Ptgs: 3 <br>Source Object Id: org.apache.poi.xssf.usermodel.XSSFEvaluationWorkbook@76563ae7'},
{id: '5b75e2da-b08a-4f6f-856d-10df63e5363e', label: '<\nTRUE', color: '#f0ad4e', title: 'Name: <<br>Value: TRUE<br>Type: OPERATOR<br>Id: 5b75e2da-b08a-4f6f-856d-10df63e5363e<br>Formula Expression: Formula String: D1 < VALUE; Formula Values: 4.0 < 5.0; Formula Ptg: ; Ptgs:  Index in Ptgs: 2 <br>Source Object Id: org.apache.poi.xssf.usermodel.XSSFEvaluationWorkbook@76563ae7'},
{id: 'e42eaf92-006e-44ac-a1f2-cb40ff6891df', label: 'VALUE\n5.0', color: '#31b0d5', title: 'Name: VALUE<br>Value: 5.0<br>Type: CONSTANT_VALUE<br>Id: e42eaf92-006e-44ac-a1f2-cb40ff6891df<br>Formula Expression: Formula String: VALUE; Formula Values: 5.0; Formula Ptg: 5.0; Ptgs: VALUE Index in Ptgs: 1 <br>Source Object Id: org.apache.poi.xssf.usermodel.XSSFEvaluationWorkbook@76563ae7'},
{id: '57003aca-4332-4b83-9753-2a308144bfa8', label: 'D2\n65.0', color: '#31b0d5', title: 'Name: D2<br>Value: 65.0<br>Type: CELL_WITH_VALUE<br>Id: 57003aca-4332-4b83-9753-2a308144bfa8<br>Formula Expression: Formula String: D2; Formula Values: 65.0; Formula Ptg: 65.0; Ptgs: D2 Index in Ptgs: 4 <br>Source Object Id: org.apache.poi.xssf.usermodel.XSSFEvaluationWorkbook@76563ae7'}
                            ]);


var edges = new vis.DataSet([
                             /* {from: id_a, to: id_b}, */
{from: '4df5aaf9-5f06-4eac-92ab-0ba01f20a916', to: '5b75e2da-b08a-4f6f-856d-10df63e5363e'},
{from: 'e42eaf92-006e-44ac-a1f2-cb40ff6891df', to: '5b75e2da-b08a-4f6f-856d-10df63e5363e'},
{from: '36fe2601-22db-427b-8cca-8356807343d2', to: '85bf3377-f57d-4a2d-bfb0-6712d81077db'},
{from: '57003aca-4332-4b83-9753-2a308144bfa8', to: '36fe2601-22db-427b-8cca-8356807343d2'},
{from: '5b75e2da-b08a-4f6f-856d-10df63e5363e', to: '36fe2601-22db-427b-8cca-8356807343d2'}
                            ]);