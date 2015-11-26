var nodes = new vis.DataSet([
                             /* {id: a, label: b, ...}, */
{id: '79075745-46f8-463c-a196-77cb55ac8f85', label: 'D3\n52.0', color: '#31b0d5', title: 'Name: D3<br>Alias: null<br>Value: 52.0<br>Type: CELL_WITH_VALUE<br>Id: 79075745-46f8-463c-a196-77cb55ac8f85<br>Formula Expression: Formula String: D3; Formula Values: 52.0; Formula Ptg: 52.0; Ptgs: D3 Index in Ptgs: 0 <br>Source Object Id: org.apache.poi.xssf.usermodel.XSSFEvaluationWorkbook@408613cc'},
{id: '096c11a7-4be2-44ec-a142-ca5acef61c64', label: 'D5\n', color: '#31b0d5', title: 'Name: D5<br>Alias: null<br>Value: <br>Type: CELL_WITH_FORMULA<br>Id: 096c11a7-4be2-44ec-a142-ca5acef61c64<br>Formula Expression: Formula String: T(D3); Formula Values: T(52.0); Formula Ptg: 52.0 T ; Ptgs: D3 T  Index in Ptgs: 1 <br>Source Object Id: org.apache.poi.xssf.usermodel.XSSFEvaluationWorkbook@408613cc'},
{id: 'f5e9eaba-321c-45fa-9059-f8f89876f03a', label: 'T\n', color: '#f0ad4e', title: 'Name: T<br>Alias: null<br>Value: <br>Type: FUNCTION<br>Id: f5e9eaba-321c-45fa-9059-f8f89876f03a<br>Formula Expression: Formula String: T(D3); Formula Values: T(52.0); Formula Ptg: ; Ptgs:  Index in Ptgs: 1 <br>Source Object Id: org.apache.poi.xssf.usermodel.XSSFEvaluationWorkbook@408613cc'}
                            ]);


var edges = new vis.DataSet([
                             /* {from: id_a, to: id_b}, */
{from: 'f5e9eaba-321c-45fa-9059-f8f89876f03a', to: '096c11a7-4be2-44ec-a142-ca5acef61c64'},
{from: '79075745-46f8-463c-a196-77cb55ac8f85', to: 'f5e9eaba-321c-45fa-9059-f8f89876f03a'}
                            ]);