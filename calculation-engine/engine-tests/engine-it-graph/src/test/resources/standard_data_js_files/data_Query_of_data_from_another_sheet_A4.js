var nodes = new vis.DataSet([
                             /* {id: a, label: b, ...}, */
{id: 'f5d7ba80-a630-4b0e-a699-009de559922f', label: 'Sheet2!$B$1\n85.0', color: '#31b0d5', title: 'Name: Sheet2!$B$1<br>Alias: null<br>Value: 85.0<br>Type: CELL_WITH_VALUE<br>Id: f5d7ba80-a630-4b0e-a699-009de559922f<br>Formula Expression: Formula String: Sheet2!$B$1; Formula Values: 85.0; Formula Ptg: 85.0; Ptgs: Sheet2!$B$1 Index in Ptgs: 3 <br>Source Object Id: org.apache.poi.xssf.usermodel.XSSFEvaluationWorkbook@16afbd92'},
{id: '69c35ca8-bd42-4a88-b69e-08c51535799d', label: 'A4\n110.0', color: '#31b0d5', title: 'Name: A4<br>Alias: null<br>Value: 110.0<br>Type: CELL_WITH_FORMULA<br>Id: 69c35ca8-bd42-4a88-b69e-08c51535799d<br>Formula Expression: Formula String: A1 + C1 + Sheet2!$B$1; Formula Values: 20.0 + 5.0 + 85.0; Formula Ptg: 20.0 5.0 + 85.0 +; Ptgs: A1 C1 + Sheet2!$B$1 + Index in Ptgs: 4 <br>Source Object Id: org.apache.poi.xssf.usermodel.XSSFEvaluationWorkbook@16afbd92'},
{id: '130336e6-2a09-407b-bf02-8ac4d6c6fc3b', label: 'A1\n20.0', color: '#31b0d5', title: 'Name: A1<br>Alias: null<br>Value: 20.0<br>Type: CELL_WITH_VALUE<br>Id: 130336e6-2a09-407b-bf02-8ac4d6c6fc3b<br>Formula Expression: Formula String: A1; Formula Values: 20.0; Formula Ptg: 20.0; Ptgs: A1 Index in Ptgs: 0 <br>Source Object Id: org.apache.poi.xssf.usermodel.XSSFEvaluationWorkbook@16afbd92'},
{id: '0c8259ec-f670-47aa-921b-b5f2bd6745fe', label: 'C1\n5.0', color: '#31b0d5', title: 'Name: C1<br>Alias: null<br>Value: 5.0<br>Type: CELL_WITH_VALUE<br>Id: 0c8259ec-f670-47aa-921b-b5f2bd6745fe<br>Formula Expression: Formula String: C1; Formula Values: 5.0; Formula Ptg: 5.0; Ptgs: C1 Index in Ptgs: 1 <br>Source Object Id: org.apache.poi.xssf.usermodel.XSSFEvaluationWorkbook@16afbd92'},
{id: 'd3058371-56a8-466a-92d2-f5485a9dd26c', label: '+\n110.0', color: '#f0ad4e', title: 'Name: +<br>Alias: null<br>Value: 110.0<br>Type: OPERATOR<br>Id: d3058371-56a8-466a-92d2-f5485a9dd26c<br>Formula Expression: Formula String: A1 + C1 + Sheet2!$B$1; Formula Values: 20.0 + 5.0 + 85.0; Formula Ptg: ; Ptgs:  Index in Ptgs: 4 <br>Source Object Id: org.apache.poi.xssf.usermodel.XSSFEvaluationWorkbook@16afbd92'},
{id: 'e3dcec86-4f02-4bf9-bb33-7f230d24a3ce', label: '+\n25.0', color: '#f0ad4e', title: 'Name: +<br>Alias: null<br>Value: 25.0<br>Type: OPERATOR<br>Id: e3dcec86-4f02-4bf9-bb33-7f230d24a3ce<br>Formula Expression: Formula String: A1 + C1; Formula Values: 20.0 + 5.0; Formula Ptg: ; Ptgs:  Index in Ptgs: 2 <br>Source Object Id: org.apache.poi.xssf.usermodel.XSSFEvaluationWorkbook@16afbd92'}
                            ]);


var edges = new vis.DataSet([
                             /* {from: id_a, to: id_b}, */
{from: '0c8259ec-f670-47aa-921b-b5f2bd6745fe', to: 'e3dcec86-4f02-4bf9-bb33-7f230d24a3ce'},
{from: 'd3058371-56a8-466a-92d2-f5485a9dd26c', to: '69c35ca8-bd42-4a88-b69e-08c51535799d'},
{from: 'f5d7ba80-a630-4b0e-a699-009de559922f', to: 'd3058371-56a8-466a-92d2-f5485a9dd26c'},
{from: 'e3dcec86-4f02-4bf9-bb33-7f230d24a3ce', to: 'd3058371-56a8-466a-92d2-f5485a9dd26c'},
{from: '130336e6-2a09-407b-bf02-8ac4d6c6fc3b', to: 'e3dcec86-4f02-4bf9-bb33-7f230d24a3ce'}
                            ]);