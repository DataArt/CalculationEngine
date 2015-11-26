var nodes = new vis.DataSet([
                             /* {id: a, label: b, ...}, */
{id: '858cc7bd-e14e-43b8-9686-746b591dafd7', label: 'D3\n#NAME?', color: '#31b0d5', title: 'Name: D3<br>Alias: null<br>Value: #NAME?<br>Type: CELL_WITH_VALUE<br>Id: 858cc7bd-e14e-43b8-9686-746b591dafd7<br>Formula Expression: Formula String: D3; Formula Values: #NAME?; Formula Ptg: #NAME?; Ptgs: D3 Index in Ptgs: 0 <br>Source Object Id: org.apache.poi.xssf.usermodel.XSSFEvaluationWorkbook@4f4c789f'},
{id: '9c36e9e6-caca-4cb3-b249-9c4d5f271c05', label: 'D8\n#NAME?', color: '#31b0d5', title: 'Name: D8<br>Alias: null<br>Value: #NAME?<br>Type: CELL_WITH_FORMULA<br>Id: 9c36e9e6-caca-4cb3-b249-9c4d5f271c05<br>Formula Expression: Formula String: ISERROR(D3); Formula Values: ISERROR(#NAME?); Formula Ptg: #NAME? ISERROR ; Ptgs: D3 ISERROR  Index in Ptgs: 1 <br>Source Object Id: org.apache.poi.xssf.usermodel.XSSFEvaluationWorkbook@4f4c789f'},
{id: '3180eade-8b49-49af-9a89-80d008497264', label: 'ISERROR\n#NAME?', color: '#f0ad4e', title: 'Name: ISERROR<br>Alias: null<br>Value: #NAME?<br>Type: FUNCTION<br>Id: 3180eade-8b49-49af-9a89-80d008497264<br>Formula Expression: Formula String: ISERROR(D3); Formula Values: ISERROR(#NAME?); Formula Ptg: ; Ptgs:  Index in Ptgs: 1 <br>Source Object Id: org.apache.poi.xssf.usermodel.XSSFEvaluationWorkbook@4f4c789f'}
                            ]);


var edges = new vis.DataSet([
                             /* {from: id_a, to: id_b}, */
{from: '3180eade-8b49-49af-9a89-80d008497264', to: '9c36e9e6-caca-4cb3-b249-9c4d5f271c05'},
{from: '858cc7bd-e14e-43b8-9686-746b591dafd7', to: '3180eade-8b49-49af-9a89-80d008497264'}
                            ]);