var nodes = new vis.DataSet([
                             /* {id: a, label: b, ...}, */
{id: '3bbf89ea-de07-4c78-9b18-01eec9dece90', label: 'VALUE\n-1.0', color: '#31b0d5', title: 'Name: VALUE<br>Alias: null<br>Value: -1.0<br>Type: CONSTANT_VALUE<br>Id: 3bbf89ea-de07-4c78-9b18-01eec9dece90<br>Formula Expression: Formula String: VALUE; Formula Values: -1.0; Formula Ptg: -1.0; Ptgs: VALUE Index in Ptgs: 1 <br>Source Object Id: org.apache.poi.xssf.usermodel.XSSFEvaluationWorkbook@502f8b57'},
{id: 'b790d5a5-ba8c-40b7-8e36-7986c4554fc6', label: 'F5\n350.0', color: '#31b0d5', title: 'Name: F5<br>Alias: null<br>Value: 350.0<br>Type: CELL_WITH_FORMULA<br>Id: b790d5a5-ba8c-40b7-8e36-7986c4554fc6<br>Formula Expression: Formula String: DOLLAR(VALUE, D3); Formula Values: DOLLAR(-1.0, 350.0); Formula Ptg: -1.0, 350.0 DOLLAR ; Ptgs: VALUE, D3 DOLLAR  Index in Ptgs: 2 <br>Source Object Id: org.apache.poi.xssf.usermodel.XSSFEvaluationWorkbook@502f8b57'},
{id: '9d3e632d-a652-4eca-ab25-1002dfe8497f', label: 'DOLLAR\n350.0', color: '#f0ad4e', title: 'Name: DOLLAR<br>Alias: null<br>Value: 350.0<br>Type: FUNCTION<br>Id: 9d3e632d-a652-4eca-ab25-1002dfe8497f<br>Formula Expression: Formula String: DOLLAR(VALUE, D3); Formula Values: DOLLAR(-1.0, 350.0); Formula Ptg: ; Ptgs:  Index in Ptgs: 2 <br>Source Object Id: org.apache.poi.xssf.usermodel.XSSFEvaluationWorkbook@502f8b57'},
{id: 'f7e6d3be-7c75-4046-9932-7e85d0800b46', label: 'D3\n350.0', color: '#31b0d5', title: 'Name: D3<br>Alias: null<br>Value: 350.0<br>Type: CELL_WITH_VALUE<br>Id: f7e6d3be-7c75-4046-9932-7e85d0800b46<br>Formula Expression: Formula String: D3; Formula Values: 350.0; Formula Ptg: 350.0; Ptgs: D3 Index in Ptgs: 0 <br>Source Object Id: org.apache.poi.xssf.usermodel.XSSFEvaluationWorkbook@502f8b57'}
                            ]);


var edges = new vis.DataSet([
                             /* {from: id_a, to: id_b}, */
{from: '3bbf89ea-de07-4c78-9b18-01eec9dece90', to: '9d3e632d-a652-4eca-ab25-1002dfe8497f'},
{from: 'f7e6d3be-7c75-4046-9932-7e85d0800b46', to: '9d3e632d-a652-4eca-ab25-1002dfe8497f'},
{from: '9d3e632d-a652-4eca-ab25-1002dfe8497f', to: 'b790d5a5-ba8c-40b7-8e36-7986c4554fc6'}
                            ]);