var nodes = new vis.DataSet([
                             /* {id: a, label: b, ...}, */
{id: '8139e882-3541-4211-88d0-ac72dd5e91ac', label: 'D4\nFALSE', color: '#31b0d5', title: 'Name: D4<br>Value: FALSE<br>Type: CELL_WITH_FORMULA<br>Id: 8139e882-3541-4211-88d0-ac72dd5e91ac<br>Formula Expression: Formula String: VALUE; Formula Values: FALSE; Formula Ptg: FALSE; Ptgs: VALUE Index in Ptgs: 0 <br>Source Object Id: org.apache.poi.xssf.usermodel.XSSFEvaluationWorkbook@512319dc'},
{id: '6e25e311-1e15-415c-b930-290b93997472', label: 'VALUE\nFALSE', color: '#31b0d5', title: 'Name: VALUE<br>Value: FALSE<br>Type: CONSTANT_VALUE<br>Id: 6e25e311-1e15-415c-b930-290b93997472<br>Formula Expression: Formula String: VALUE; Formula Values: FALSE; Formula Ptg: FALSE; Ptgs: VALUE Index in Ptgs: 0 <br>Source Object Id: org.apache.poi.xssf.usermodel.XSSFEvaluationWorkbook@512319dc'}
                            ]);


var edges = new vis.DataSet([
                             /* {from: id_a, to: id_b}, */
{from: '6e25e311-1e15-415c-b930-290b93997472', to: '8139e882-3541-4211-88d0-ac72dd5e91ac'}
                            ]);