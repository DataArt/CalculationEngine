var nodes = new vis.DataSet([
                             /* {id: a, label: b, ...}, */
{id: '53b6a4d4-428b-4b02-a908-266b6346b61d', label: 'D11\n#NAME?', color: '#31b0d5', title: 'Name: D11<br>Alias: null<br>Value: #NAME?<br>Type: CELL_WITH_FORMULA<br>Id: 53b6a4d4-428b-4b02-a908-266b6346b61d<br>Formula Expression: Formula String: ISERROR(E2); Formula Values: ISERROR(#NAME?); Formula Ptg: #NAME? ISERROR ; Ptgs: E2 ISERROR  Index in Ptgs: 1 <br>Source Object Id: org.apache.poi.xssf.usermodel.XSSFEvaluationWorkbook@3b90a30a'},
{id: 'bf9715e7-174b-44a3-9bbb-694002345670', label: 'ISERROR\n#NAME?', color: '#f0ad4e', title: 'Name: ISERROR<br>Alias: null<br>Value: #NAME?<br>Type: FUNCTION<br>Id: bf9715e7-174b-44a3-9bbb-694002345670<br>Formula Expression: Formula String: ISERROR(E2); Formula Values: ISERROR(#NAME?); Formula Ptg: ; Ptgs:  Index in Ptgs: 1 <br>Source Object Id: org.apache.poi.xssf.usermodel.XSSFEvaluationWorkbook@3b90a30a'},
{id: '73813aae-1886-4d52-ac6f-8c3cfd10f53f', label: 'E2\n#NAME?', color: '#31b0d5', title: 'Name: E2<br>Alias: null<br>Value: #NAME?<br>Type: CELL_WITH_VALUE<br>Id: 73813aae-1886-4d52-ac6f-8c3cfd10f53f<br>Formula Expression: Formula String: E2; Formula Values: #NAME?; Formula Ptg: #NAME?; Ptgs: E2 Index in Ptgs: 0 <br>Source Object Id: org.apache.poi.xssf.usermodel.XSSFEvaluationWorkbook@3b90a30a'}
                            ]);


var edges = new vis.DataSet([
                             /* {from: id_a, to: id_b}, */
{from: '73813aae-1886-4d52-ac6f-8c3cfd10f53f', to: 'bf9715e7-174b-44a3-9bbb-694002345670'},
{from: 'bf9715e7-174b-44a3-9bbb-694002345670', to: '53b6a4d4-428b-4b02-a908-266b6346b61d'}
                            ]);