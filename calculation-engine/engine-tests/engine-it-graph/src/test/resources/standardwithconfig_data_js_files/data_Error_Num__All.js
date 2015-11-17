var nodes = new vis.DataSet([
                             /* {id: a, label: b, ...}, */
{id: 'b13c7f9a-8564-496d-b0a1-6dcf76d56365', label: 'VALUE\n6.0', color: '#31b0d5', title: 'Name: VALUE<br>Value: 6.0<br>Type: CONSTANT_VALUE<br>Id: b13c7f9a-8564-496d-b0a1-6dcf76d56365<br>Formula Expression: Formula String: VALUE; Formula Values: 6.0; Formula Ptg: 6.0; Ptgs: VALUE Index in Ptgs: 0 <br>Source Object Id: org.apache.poi.xssf.usermodel.XSSFEvaluationWorkbook@1d09fb8e'},
{id: '113866cb-9af9-4f8a-ba73-be130d74505a', label: 'COMBIN\n#NUM!', color: '#f0ad4e', title: 'Name: COMBIN<br>Value: #NUM!<br>Type: FUNCTION<br>Id: 113866cb-9af9-4f8a-ba73-be130d74505a<br>Formula Expression: Formula String: COMBIN(VALUE, VALUE); Formula Values: COMBIN(8.0, 6.0); Formula Ptg: ; Ptgs:  Index in Ptgs: 2 <br>Source Object Id: org.apache.poi.xssf.usermodel.XSSFEvaluationWorkbook@1d09fb8e'},
{id: 'e7f62166-3613-44fc-aac4-a9f837bf11cb', label: 'A1\n#NUM!', color: '#31b0d5', title: 'Name: A1<br>Value: #NUM!<br>Type: CELL_WITH_FORMULA<br>Id: e7f62166-3613-44fc-aac4-a9f837bf11cb<br>Formula Expression: Formula String: COMBIN(VALUE, VALUE); Formula Values: COMBIN(8.0, 6.0); Formula Ptg: 8.0, 6.0 COMBIN ; Ptgs: VALUE, VALUE COMBIN  Index in Ptgs: 2 <br>Source Object Id: org.apache.poi.xssf.usermodel.XSSFEvaluationWorkbook@1d09fb8e'},
{id: '393bbb15-a5d5-477c-bf4d-4b92401674bf', label: 'VALUE\n8.0', color: '#31b0d5', title: 'Name: VALUE<br>Value: 8.0<br>Type: CONSTANT_VALUE<br>Id: 393bbb15-a5d5-477c-bf4d-4b92401674bf<br>Formula Expression: Formula String: VALUE; Formula Values: 8.0; Formula Ptg: 8.0; Ptgs: VALUE Index in Ptgs: 1 <br>Source Object Id: org.apache.poi.xssf.usermodel.XSSFEvaluationWorkbook@1d09fb8e'}
                            ]);


var edges = new vis.DataSet([
                             /* {from: id_a, to: id_b}, */
{from: '113866cb-9af9-4f8a-ba73-be130d74505a', to: 'e7f62166-3613-44fc-aac4-a9f837bf11cb'},
{from: '393bbb15-a5d5-477c-bf4d-4b92401674bf', to: '113866cb-9af9-4f8a-ba73-be130d74505a'},
{from: 'b13c7f9a-8564-496d-b0a1-6dcf76d56365', to: '113866cb-9af9-4f8a-ba73-be130d74505a'}
                            ]);