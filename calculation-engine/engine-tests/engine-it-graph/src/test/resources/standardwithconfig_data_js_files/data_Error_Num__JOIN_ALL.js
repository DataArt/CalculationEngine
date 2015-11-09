var nodes = new vis.DataSet([
                             /* {id: a, label: b, ...}, */
{id: '8d141db8-092d-4935-9470-d760ba6036eb', label: 'VALUE\n8.0', color: '#31b0d5', title: 'Name: VALUE<br>Value: 8.0<br>Type: CONSTANT_VALUE<br>Id: 8d141db8-092d-4935-9470-d760ba6036eb<br>Formula Expression: Formula String: VALUE; Formula Values: 8.0; Formula Ptg: 8.0; Ptgs: VALUE Index in Ptgs: 1 <br>Source Object Id: org.apache.poi.xssf.usermodel.XSSFEvaluationWorkbook@f9d87b'},
{id: 'd443bac0-e2a0-4c16-ad7e-094cda1e1042', label: 'A1\n#NUM!', color: '#31b0d5', title: 'Name: A1<br>Value: #NUM!<br>Type: CELL_WITH_FORMULA<br>Id: d443bac0-e2a0-4c16-ad7e-094cda1e1042<br>Formula Expression: Formula String: COMBIN(VALUE, VALUE); Formula Values: COMBIN(8.0, 6.0); Formula Ptg: 8.0, 6.0 COMBIN ; Ptgs: VALUE, VALUE COMBIN  Index in Ptgs: 2 <br>Source Object Id: org.apache.poi.xssf.usermodel.XSSFEvaluationWorkbook@f9d87b'},
{id: '6ae377c8-ab9b-490a-a521-6ebf75bcbf41', label: 'COMBIN\n#NUM!', color: '#f0ad4e', title: 'Name: COMBIN<br>Value: #NUM!<br>Type: FUNCTION<br>Id: 6ae377c8-ab9b-490a-a521-6ebf75bcbf41<br>Formula Expression: Formula String: COMBIN(VALUE, VALUE); Formula Values: COMBIN(8.0, 6.0); Formula Ptg: ; Ptgs:  Index in Ptgs: 2 <br>Source Object Id: org.apache.poi.xssf.usermodel.XSSFEvaluationWorkbook@f9d87b'},
{id: 'e772ee50-785e-49e7-b883-4a059a3e5cc3', label: 'VALUE\n6.0', color: '#31b0d5', title: 'Name: VALUE<br>Value: 6.0<br>Type: CONSTANT_VALUE<br>Id: e772ee50-785e-49e7-b883-4a059a3e5cc3<br>Formula Expression: Formula String: VALUE; Formula Values: 6.0; Formula Ptg: 6.0; Ptgs: VALUE Index in Ptgs: 0 <br>Source Object Id: org.apache.poi.xssf.usermodel.XSSFEvaluationWorkbook@f9d87b'}
                            ]);


var edges = new vis.DataSet([
                             /* {from: id_a, to: id_b}, */
{from: 'e772ee50-785e-49e7-b883-4a059a3e5cc3', to: '6ae377c8-ab9b-490a-a521-6ebf75bcbf41'},
{from: '6ae377c8-ab9b-490a-a521-6ebf75bcbf41', to: 'd443bac0-e2a0-4c16-ad7e-094cda1e1042'},
{from: '8d141db8-092d-4935-9470-d760ba6036eb', to: '6ae377c8-ab9b-490a-a521-6ebf75bcbf41'}
                            ]);