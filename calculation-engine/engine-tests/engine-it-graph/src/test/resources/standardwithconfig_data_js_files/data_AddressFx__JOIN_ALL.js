var nodes = new vis.DataSet([
                             /* {id: a, label: b, ...}, */
{id: '70eea093-4009-4ef9-831d-eec439b77566', label: 'VALUE\n4.0', color: '#31b0d5', title: 'Name: VALUE<br>Value: 4.0<br>Type: CONSTANT_VALUE<br>Id: 70eea093-4009-4ef9-831d-eec439b77566<br>Formula Expression: Formula String: VALUE; Formula Values: 4.0; Formula Ptg: 4.0; Ptgs: VALUE Index in Ptgs: 1 <br>Source Object Id: org.apache.poi.xssf.usermodel.XSSFEvaluationWorkbook@7e9131d5'},
{id: 'b2426bfa-f047-44ad-91a9-ad10596e3b53', label: 'ADDRESS\n$D$3', color: '#f0ad4e', title: 'Name: ADDRESS<br>Value: $D$3<br>Type: FUNCTION<br>Id: b2426bfa-f047-44ad-91a9-ad10596e3b53<br>Formula Expression: Formula String: ADDRESS(VALUE, VALUE); Formula Values: ADDRESS(4.0, 3.0); Formula Ptg: ; Ptgs:  Index in Ptgs: 2 <br>Source Object Id: org.apache.poi.xssf.usermodel.XSSFEvaluationWorkbook@7e9131d5'},
{id: '3bc712be-8eb8-4e39-8c7e-fbf201b186a4', label: 'VALUE\n3.0', color: '#31b0d5', title: 'Name: VALUE<br>Value: 3.0<br>Type: CONSTANT_VALUE<br>Id: 3bc712be-8eb8-4e39-8c7e-fbf201b186a4<br>Formula Expression: Formula String: VALUE; Formula Values: 3.0; Formula Ptg: 3.0; Ptgs: VALUE Index in Ptgs: 0 <br>Source Object Id: org.apache.poi.xssf.usermodel.XSSFEvaluationWorkbook@7e9131d5'},
{id: '18257932-c189-46c5-bb86-2a2c2863d66f', label: 'D5\n$D$3', color: '#31b0d5', title: 'Name: D5<br>Value: $D$3<br>Type: CELL_WITH_FORMULA<br>Id: 18257932-c189-46c5-bb86-2a2c2863d66f<br>Formula Expression: Formula String: ADDRESS(VALUE, VALUE); Formula Values: ADDRESS(4.0, 3.0); Formula Ptg: 4.0, 3.0 ADDRESS ; Ptgs: VALUE, VALUE ADDRESS  Index in Ptgs: 2 <br>Source Object Id: org.apache.poi.xssf.usermodel.XSSFEvaluationWorkbook@7e9131d5'}
                            ]);


var edges = new vis.DataSet([
                             /* {from: id_a, to: id_b}, */
{from: '3bc712be-8eb8-4e39-8c7e-fbf201b186a4', to: 'b2426bfa-f047-44ad-91a9-ad10596e3b53'},
{from: 'b2426bfa-f047-44ad-91a9-ad10596e3b53', to: '18257932-c189-46c5-bb86-2a2c2863d66f'},
{from: '70eea093-4009-4ef9-831d-eec439b77566', to: 'b2426bfa-f047-44ad-91a9-ad10596e3b53'}
                            ]);