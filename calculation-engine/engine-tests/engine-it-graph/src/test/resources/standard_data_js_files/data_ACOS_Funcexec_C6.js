var nodes = new vis.DataSet([
                             /* {id: a, label: b, ...}, */
{id: '76e563c7-26ac-4351-8007-fb46edac672d', label: 'B2\n0.5', color: '#31b0d5', title: 'Name: B2<br>Value: 0.5<br>Type: CELL_WITH_VALUE<br>Id: 76e563c7-26ac-4351-8007-fb46edac672d<br>Formula Expression: Formula String: B2; Formula Values: 0.5; Formula Ptg: 0.5; Ptgs: B2 Index in Ptgs: 2 <br>Source Object Id: org.apache.poi.xssf.usermodel.XSSFEvaluationWorkbook@2145b572'},
{id: 'b88fdcf7-1449-4d5f-9d97-541951a77371', label: 'C6\n1.0471975511965979', color: '#31b0d5', title: 'Name: C6<br>Value: 1.0471975511965979<br>Type: CELL_WITH_FORMULA<br>Id: b88fdcf7-1449-4d5f-9d97-541951a77371<br>Formula Expression: Formula String: FUNCEXEC(B2, VALUE); Formula Values: FUNCEXEC(0.5, DEVDEF); Formula Ptg: 0.5, DEVDEF FUNCEXEC ; Ptgs: B2, VALUE FUNCEXEC  Index in Ptgs: 3 <br>Source Object Id: org.apache.poi.xssf.usermodel.XSSFEvaluationWorkbook@2145b572'},
{id: '77de0a5f-b6c7-43ed-b8c6-f360a759b37d', label: 'FUNCEXEC\n1.0471975511965979', color: '#f0ad4e', title: 'Name: FUNCEXEC<br>Value: 1.0471975511965979<br>Type: FUNCTION<br>Id: 77de0a5f-b6c7-43ed-b8c6-f360a759b37d<br>Formula Expression: Formula String: FUNCEXEC(B2, VALUE); Formula Values: FUNCEXEC(0.5, DEVDEF); Formula Ptg: ; Ptgs:  Index in Ptgs: 3 <br>Source Object Id: org.apache.poi.xssf.usermodel.XSSFEvaluationWorkbook@2145b572'},
{id: '7ca079a4-116c-4631-bc01-88fa3b1009c1', label: 'VALUE\nDEVDEF', color: '#31b0d5', title: 'Name: VALUE<br>Value: DEVDEF<br>Type: CONSTANT_VALUE<br>Id: 7ca079a4-116c-4631-bc01-88fa3b1009c1<br>Formula Expression: Formula String: VALUE; Formula Values: DEVDEF; Formula Ptg: DEVDEF; Ptgs: VALUE Index in Ptgs: 1 <br>Source Object Id: org.apache.poi.xssf.usermodel.XSSFEvaluationWorkbook@2145b572'}
                            ]);


var edges = new vis.DataSet([
                             /* {from: id_a, to: id_b}, */
{from: '7ca079a4-116c-4631-bc01-88fa3b1009c1', to: '77de0a5f-b6c7-43ed-b8c6-f360a759b37d'},
{from: '77de0a5f-b6c7-43ed-b8c6-f360a759b37d', to: 'b88fdcf7-1449-4d5f-9d97-541951a77371'},
{from: '76e563c7-26ac-4351-8007-fb46edac672d', to: '77de0a5f-b6c7-43ed-b8c6-f360a759b37d'}
                            ]);