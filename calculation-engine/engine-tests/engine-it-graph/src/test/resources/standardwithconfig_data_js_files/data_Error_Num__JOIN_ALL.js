var nodes = new vis.DataSet([
                             /* {id: a, label: b, ...}, */
{id: '2492e77f-5177-4205-a9bb-12e9ac98a1bf', label: 'VALUE\n8.0', color: '#31b0d5', title: 'Name: VALUE<br>Value: 8.0<br>Type: CONSTANT_VALUE<br>Id: 2492e77f-5177-4205-a9bb-12e9ac98a1bf<br>Formula Expression: Formula String: VALUE; Formula Values: 8.0; Formula Ptg: 8.0; Ptgs: VALUE Index in Ptgs: 1 <br>Source Object Id: org.apache.poi.xssf.usermodel.XSSFEvaluationWorkbook@f9d87b'},
{id: '35043750-ff5d-4ac2-9389-2b16c037448a', label: 'A1\n#NUM!', color: '#31b0d5', title: 'Name: A1<br>Value: #NUM!<br>Type: CELL_WITH_FORMULA<br>Id: 35043750-ff5d-4ac2-9389-2b16c037448a<br>Formula Expression: Formula String: COMBIN(VALUE, VALUE); Formula Values: COMBIN(8.0, 6.0); Formula Ptg: 8.0, 6.0 COMBIN ; Ptgs: VALUE, VALUE COMBIN  Index in Ptgs: 2 <br>Source Object Id: org.apache.poi.xssf.usermodel.XSSFEvaluationWorkbook@f9d87b'},
{id: '2d06f20c-d5c6-4001-8aca-2af9e477cb06', label: 'COMBIN\n#NUM!', color: '#f0ad4e', title: 'Name: COMBIN<br>Value: #NUM!<br>Type: FUNCTION<br>Id: 2d06f20c-d5c6-4001-8aca-2af9e477cb06<br>Formula Expression: Formula String: COMBIN(VALUE, VALUE); Formula Values: COMBIN(8.0, 6.0); Formula Ptg: ; Ptgs:  Index in Ptgs: 2 <br>Source Object Id: org.apache.poi.xssf.usermodel.XSSFEvaluationWorkbook@f9d87b'},
{id: '3ac97d76-3787-4d4b-9659-0d3de715fa34', label: 'VALUE\n6.0', color: '#31b0d5', title: 'Name: VALUE<br>Value: 6.0<br>Type: CONSTANT_VALUE<br>Id: 3ac97d76-3787-4d4b-9659-0d3de715fa34<br>Formula Expression: Formula String: VALUE; Formula Values: 6.0; Formula Ptg: 6.0; Ptgs: VALUE Index in Ptgs: 0 <br>Source Object Id: org.apache.poi.xssf.usermodel.XSSFEvaluationWorkbook@f9d87b'}
                            ]);


var edges = new vis.DataSet([
                             /* {from: id_a, to: id_b}, */
{from: '3ac97d76-3787-4d4b-9659-0d3de715fa34', to: '2d06f20c-d5c6-4001-8aca-2af9e477cb06'},
{from: '2d06f20c-d5c6-4001-8aca-2af9e477cb06', to: '35043750-ff5d-4ac2-9389-2b16c037448a'},
{from: '2492e77f-5177-4205-a9bb-12e9ac98a1bf', to: '2d06f20c-d5c6-4001-8aca-2af9e477cb06'}
                            ]);