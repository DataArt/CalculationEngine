var nodes = new vis.DataSet([
                             /* {id: a, label: b, ...}, */
{id: '284803b7-06b7-457f-8dd2-aec7a7740e9a', label: 'VALUE\n#', color: '#31b0d5', title: 'Name: VALUE<br>Value: #<br>Type: CONSTANT_VALUE<br>Id: 284803b7-06b7-457f-8dd2-aec7a7740e9a<br>Formula Expression: Formula String: VALUE; Formula Values: #; Formula Ptg: #; Ptgs: VALUE Index in Ptgs: 5 <br>Source Object Id: org.apache.poi.xssf.usermodel.XSSFEvaluationWorkbook@49cb1baf'},
{id: '2f07d60d-52f6-4d22-b716-9a0b93e365b4', label: 'E3\n790.0', color: '#31b0d5', title: 'Name: E3<br>Value: 790.0<br>Type: CELL_WITH_FORMULA<br>Id: 2f07d60d-52f6-4d22-b716-9a0b93e365b4<br>Formula Expression: Formula String: FUNCEXEC(C2, B2, A2, VALUE); Formula Values: FUNCEXEC(300.0, 240.0, 250.0, DEVDEF); Formula Ptg: 300.0, 240.0, 250.0, DEVDEF FUNCEXEC ; Ptgs: C2, B2, A2, VALUE FUNCEXEC  Index in Ptgs: 5 <br>Source Object Id: org.apache.poi.xssf.usermodel.XSSFEvaluationWorkbook@49cb1baf'},
{id: '9504ef1e-bab8-49c7-8793-3e37d68f18ff', label: 'VALUE\nDEVDEF', color: '#31b0d5', title: 'Name: VALUE<br>Value: DEVDEF<br>Type: CONSTANT_VALUE<br>Id: 9504ef1e-bab8-49c7-8793-3e37d68f18ff<br>Formula Expression: Formula String: VALUE; Formula Values: DEVDEF; Formula Ptg: DEVDEF; Ptgs: VALUE Index in Ptgs: 1 <br>Source Object Id: org.apache.poi.xssf.usermodel.XSSFEvaluationWorkbook@49cb1baf'},
{id: '3efaf54a-9f2b-4252-9da6-83b9f6eec19a', label: 'FUNCEXEC\n790.0', color: '#f0ad4e', title: 'Name: FUNCEXEC<br>Value: 790.0<br>Type: FUNCTION<br>Id: 3efaf54a-9f2b-4252-9da6-83b9f6eec19a<br>Formula Expression: Formula String: FUNCEXEC(C2, B2, A2, VALUE); Formula Values: FUNCEXEC(300.0, 240.0, 250.0, DEVDEF); Formula Ptg: ; Ptgs:  Index in Ptgs: 5 <br>Source Object Id: org.apache.poi.xssf.usermodel.XSSFEvaluationWorkbook@49cb1baf'},
{id: 'c57284d4-db26-4b99-b24c-0929dd2c3fb3', label: 'B2\n240.0', color: '#31b0d5', title: 'Name: B2<br>Value: 240.0<br>Type: CELL_WITH_VALUE<br>Id: c57284d4-db26-4b99-b24c-0929dd2c3fb3<br>Formula Expression: Formula String: B2; Formula Values: 240.0; Formula Ptg: 240.0; Ptgs: B2 Index in Ptgs: 3 <br>Source Object Id: org.apache.poi.xssf.usermodel.XSSFEvaluationWorkbook@49cb1baf'},
{id: '85d956f9-cc8f-413f-b671-d0761eac06b2', label: '+\n490.0', color: '#f0ad4e', title: 'Name: +<br>Value: 490.0<br>Type: OPERATOR<br>Id: 85d956f9-cc8f-413f-b671-d0761eac06b2<br>Formula Expression: Formula String: A2 + B2; Formula Values: 250.0 + 240.0; Formula Ptg: ; Ptgs:  Index in Ptgs: 2 <br>Source Object Id: org.apache.poi.xssf.usermodel.XSSFEvaluationWorkbook@49cb1baf'},
{id: 'c0fe6af6-226f-4c25-a073-f50202b44739', label: '+\n790.0', color: '#f0ad4e', title: 'Name: +<br>Value: 790.0<br>Type: OPERATOR<br>Id: c0fe6af6-226f-4c25-a073-f50202b44739<br>Formula Expression: Formula String: A2 + B2 + C2; Formula Values: 250.0 + 240.0 + 300.0; Formula Ptg: ; Ptgs:  Index in Ptgs: 4 <br>Source Object Id: org.apache.poi.xssf.usermodel.XSSFEvaluationWorkbook@49cb1baf'},
{id: '86f5926f-4ca0-4c45-a07f-1254433c9102', label: 'VALUE\nDEVDEF', color: '#31b0d5', title: 'Name: VALUE<br>Value: DEVDEF<br>Type: CONSTANT_VALUE<br>Id: 86f5926f-4ca0-4c45-a07f-1254433c9102<br>Formula Expression: Formula String: VALUE; Formula Values: DEVDEF; Formula Ptg: DEVDEF; Ptgs: VALUE Index in Ptgs: 1 <br>Source Object Id: org.apache.poi.xssf.usermodel.XSSFEvaluationWorkbook@49cb1baf'},
{id: '4351d299-56c3-4242-ac89-102b42973121', label: 'A2\n250.0', color: '#31b0d5', title: 'Name: A2<br>Value: 250.0<br>Type: CELL_WITH_VALUE<br>Id: 4351d299-56c3-4242-ac89-102b42973121<br>Formula Expression: Formula String: A2; Formula Values: 250.0; Formula Ptg: 250.0; Ptgs: A2 Index in Ptgs: 0 <br>Source Object Id: org.apache.poi.xssf.usermodel.XSSFEvaluationWorkbook@49cb1baf'},
{id: '9a446640-db19-49f6-b901-89a0e15cfa1d', label: 'D2\n790.0', color: '#31b0d5', title: 'Name: D2<br>Value: 790.0<br>Type: CELL_WITH_FORMULA<br>Id: 9a446640-db19-49f6-b901-89a0e15cfa1d<br>Formula Expression: Formula String: A2 + B2 + C2; Formula Values: 250.0 + 240.0 + 300.0; Formula Ptg: 250.0 240.0 + 300.0 +; Ptgs: A2 B2 + C2 + Index in Ptgs: 4 <br>Source Object Id: org.apache.poi.xssf.usermodel.XSSFEvaluationWorkbook@49cb1baf'},
{id: '4ff23c19-7c7a-4652-9a62-7cc5b1acaa6e', label: 'C2\n300.0', color: '#31b0d5', title: 'Name: C2<br>Value: 300.0<br>Type: CELL_WITH_VALUE<br>Id: 4ff23c19-7c7a-4652-9a62-7cc5b1acaa6e<br>Formula Expression: Formula String: C2; Formula Values: 300.0; Formula Ptg: 300.0; Ptgs: C2 Index in Ptgs: 3 <br>Source Object Id: org.apache.poi.xssf.usermodel.XSSFEvaluationWorkbook@49cb1baf'},
{id: '307e63dc-a2c8-469c-be15-f54b9f772477', label: 'D3\nDEFINE', color: '#31b0d5', title: 'Name: D3<br>Value: DEFINE<br>Type: CELL_WITH_FORMULA<br>Id: 307e63dc-a2c8-469c-be15-f54b9f772477<br>Formula Expression: Formula String: DEFINE(A2 + B2 + C2, VALUE, C2, B2, A2, VALUE); Formula Values: DEFINE(250.0 + 240.0 + 300.0, #, 300.0, 240.0, 250.0, DEVDEF); Formula Ptg: 250.0 240.0 + 300.0 +, #, 300.0, 240.0, 250.0, DEVDEF DEFINE ; Ptgs: A2 B2 + C2 +, VALUE, C2, B2, A2, VALUE DEFINE  Index in Ptgs: 7 <br>Source Object Id: org.apache.poi.xssf.usermodel.XSSFEvaluationWorkbook@49cb1baf'},
{id: '6d38f44e-85af-413c-aa4f-54b43ef71511', label: 'DEFINE\nDEFINE', color: '#f0ad4e', title: 'Name: DEFINE<br>Value: DEFINE<br>Type: FUNCTION<br>Id: 6d38f44e-85af-413c-aa4f-54b43ef71511<br>Formula Expression: Formula String: DEFINE(A2 + B2 + C2, VALUE, C2, B2, A2, VALUE); Formula Values: DEFINE(250.0 + 240.0 + 300.0, #, 300.0, 240.0, 250.0, DEVDEF); Formula Ptg: ; Ptgs:  Index in Ptgs: 7 <br>Source Object Id: org.apache.poi.xssf.usermodel.XSSFEvaluationWorkbook@49cb1baf'}
                            ]);


var edges = new vis.DataSet([
                             /* {from: id_a, to: id_b}, */
{from: '4ff23c19-7c7a-4652-9a62-7cc5b1acaa6e', to: '3efaf54a-9f2b-4252-9da6-83b9f6eec19a'},
{from: '4ff23c19-7c7a-4652-9a62-7cc5b1acaa6e', to: 'c0fe6af6-226f-4c25-a073-f50202b44739'},
{from: '284803b7-06b7-457f-8dd2-aec7a7740e9a', to: '6d38f44e-85af-413c-aa4f-54b43ef71511'},
{from: '85d956f9-cc8f-413f-b671-d0761eac06b2', to: 'c0fe6af6-226f-4c25-a073-f50202b44739'},
{from: '86f5926f-4ca0-4c45-a07f-1254433c9102', to: '3efaf54a-9f2b-4252-9da6-83b9f6eec19a'},
{from: 'c57284d4-db26-4b99-b24c-0929dd2c3fb3', to: '85d956f9-cc8f-413f-b671-d0761eac06b2'},
{from: '4351d299-56c3-4242-ac89-102b42973121', to: '3efaf54a-9f2b-4252-9da6-83b9f6eec19a'},
{from: '9504ef1e-bab8-49c7-8793-3e37d68f18ff', to: '6d38f44e-85af-413c-aa4f-54b43ef71511'},
{from: '9a446640-db19-49f6-b901-89a0e15cfa1d', to: '6d38f44e-85af-413c-aa4f-54b43ef71511'},
{from: '6d38f44e-85af-413c-aa4f-54b43ef71511', to: '307e63dc-a2c8-469c-be15-f54b9f772477'},
{from: '3efaf54a-9f2b-4252-9da6-83b9f6eec19a', to: '2f07d60d-52f6-4d22-b716-9a0b93e365b4'},
{from: 'c57284d4-db26-4b99-b24c-0929dd2c3fb3', to: '3efaf54a-9f2b-4252-9da6-83b9f6eec19a'},
{from: '4351d299-56c3-4242-ac89-102b42973121', to: '6d38f44e-85af-413c-aa4f-54b43ef71511'},
{from: 'c0fe6af6-226f-4c25-a073-f50202b44739', to: '9a446640-db19-49f6-b901-89a0e15cfa1d'},
{from: 'c57284d4-db26-4b99-b24c-0929dd2c3fb3', to: '6d38f44e-85af-413c-aa4f-54b43ef71511'},
{from: '4351d299-56c3-4242-ac89-102b42973121', to: '85d956f9-cc8f-413f-b671-d0761eac06b2'},
{from: '4ff23c19-7c7a-4652-9a62-7cc5b1acaa6e', to: '6d38f44e-85af-413c-aa4f-54b43ef71511'}
                            ]);