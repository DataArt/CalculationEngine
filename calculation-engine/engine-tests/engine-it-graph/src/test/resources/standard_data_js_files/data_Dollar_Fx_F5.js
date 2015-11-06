var nodes = new vis.DataSet([
                             /* {id: a, label: b, ...}, */
{id: '54b2d088-aa51-402e-a2f3-4bae219dc02a', label: 'F5\n350.0', color: '#31b0d5', title: 'Name: F5<br>Value: 350.0<br>Type: CELL_WITH_FORMULA<br>Id: 54b2d088-aa51-402e-a2f3-4bae219dc02a<br>Formula Expression: Formula String: DOLLAR(VALUE, D3); Formula Values: DOLLAR(-1.0, 350.0); Formula Ptg: -1.0, 350.0 DOLLAR ; Ptgs: VALUE, D3 DOLLAR  Index in Ptgs: 2 <br>Source Object Id: org.apache.poi.xssf.usermodel.XSSFEvaluationWorkbook@3887cf88'},
{id: 'b7c4797c-f1ab-436d-99b7-743b24455baf', label: 'DOLLAR\n350.0', color: '#f0ad4e', title: 'Name: DOLLAR<br>Value: 350.0<br>Type: FUNCTION<br>Id: b7c4797c-f1ab-436d-99b7-743b24455baf<br>Formula Expression: Formula String: DOLLAR(VALUE, D3); Formula Values: DOLLAR(-1.0, 350.0); Formula Ptg: ; Ptgs:  Index in Ptgs: 2 <br>Source Object Id: org.apache.poi.xssf.usermodel.XSSFEvaluationWorkbook@3887cf88'},
{id: 'a26c43d3-1065-46f4-8de9-5b90dc576c8b', label: 'D3\n350.0', color: '#31b0d5', title: 'Name: D3<br>Value: 350.0<br>Type: CELL_WITH_VALUE<br>Id: a26c43d3-1065-46f4-8de9-5b90dc576c8b<br>Formula Expression: Formula String: D3; Formula Values: 350.0; Formula Ptg: 350.0; Ptgs: D3 Index in Ptgs: 0 <br>Source Object Id: org.apache.poi.xssf.usermodel.XSSFEvaluationWorkbook@3887cf88'},
{id: '3e8654fb-834e-40f3-a6f5-d7a9ff565459', label: 'VALUE\n-1.0', color: '#31b0d5', title: 'Name: VALUE<br>Value: -1.0<br>Type: CONSTANT_VALUE<br>Id: 3e8654fb-834e-40f3-a6f5-d7a9ff565459<br>Formula Expression: Formula String: VALUE; Formula Values: -1.0; Formula Ptg: -1.0; Ptgs: VALUE Index in Ptgs: 1 <br>Source Object Id: org.apache.poi.xssf.usermodel.XSSFEvaluationWorkbook@3887cf88'}
                            ]);


var edges = new vis.DataSet([
                             /* {from: id_a, to: id_b}, */
{from: '3e8654fb-834e-40f3-a6f5-d7a9ff565459', to: 'b7c4797c-f1ab-436d-99b7-743b24455baf'},
{from: 'b7c4797c-f1ab-436d-99b7-743b24455baf', to: '54b2d088-aa51-402e-a2f3-4bae219dc02a'},
{from: 'a26c43d3-1065-46f4-8de9-5b90dc576c8b', to: 'b7c4797c-f1ab-436d-99b7-743b24455baf'}
                            ]);