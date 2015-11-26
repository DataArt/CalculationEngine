var nodes = new vis.DataSet([
                             /* {id: a, label: b, ...}, */
{id: '59b1dad5-bf21-4b44-8ecc-0c98415c7ffa', label: 'C4\n2.0', color: '#31b0d5', title: 'Name: C4<br>Alias: null<br>Value: 2.0<br>Type: CELL_WITH_FORMULA<br>Id: 59b1dad5-bf21-4b44-8ecc-0c98415c7ffa<br>Formula Expression: Formula String: ERROR.TYPE(A2); Formula Values: ERROR.TYPE(#DIV/0!); Formula Ptg: #DIV/0! ERROR.TYPE ; Ptgs: A2 ERROR.TYPE  Index in Ptgs: 1 <br>Source Object Id: org.apache.poi.xssf.usermodel.XSSFEvaluationWorkbook@673bb956'},
{id: '067ee510-df52-4145-ade2-cf68a6482474', label: 'ERROR.TYPE\n2.0', color: '#f0ad4e', title: 'Name: ERROR.TYPE<br>Alias: null<br>Value: 2.0<br>Type: FUNCTION<br>Id: 067ee510-df52-4145-ade2-cf68a6482474<br>Formula Expression: Formula String: ERROR.TYPE(A2); Formula Values: ERROR.TYPE(#DIV/0!); Formula Ptg: ; Ptgs:  Index in Ptgs: 1 <br>Source Object Id: org.apache.poi.xssf.usermodel.XSSFEvaluationWorkbook@673bb956'},
{id: 'c746a659-d8c2-4685-8ee2-f5cf62590f5c', label: 'A2\n#DIV/0!', color: '#31b0d5', title: 'Name: A2<br>Alias: null<br>Value: #DIV/0!<br>Type: CELL_WITH_VALUE<br>Id: c746a659-d8c2-4685-8ee2-f5cf62590f5c<br>Formula Expression: Formula String: A2; Formula Values: #DIV/0!; Formula Ptg: #DIV/0!; Ptgs: A2 Index in Ptgs: 0 <br>Source Object Id: org.apache.poi.xssf.usermodel.XSSFEvaluationWorkbook@673bb956'}
                            ]);


var edges = new vis.DataSet([
                             /* {from: id_a, to: id_b}, */
{from: 'c746a659-d8c2-4685-8ee2-f5cf62590f5c', to: '067ee510-df52-4145-ade2-cf68a6482474'},
{from: '067ee510-df52-4145-ade2-cf68a6482474', to: '59b1dad5-bf21-4b44-8ecc-0c98415c7ffa'}
                            ]);