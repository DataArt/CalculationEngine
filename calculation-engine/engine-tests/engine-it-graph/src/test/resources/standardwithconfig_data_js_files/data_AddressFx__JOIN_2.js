var nodes = new vis.DataSet([
                             /* {id: a, label: b, ...}, */
{id: '455a5645-c394-4541-afdb-233ae729ddc6', label: 'D5\n$D$3', color: '#31b0d5', title: 'Name: D5<br>Value: $D$3<br>Type: CELL_WITH_FORMULA<br>Id: 455a5645-c394-4541-afdb-233ae729ddc6<br>Formula Expression: Formula String: ADDRESS(VALUE, VALUE); Formula Values: ADDRESS(4.0, 3.0); Formula Ptg: 4.0, 3.0 ADDRESS ; Ptgs: VALUE, VALUE ADDRESS  Index in Ptgs: 2 <br>Source Object Id: org.apache.poi.xssf.usermodel.XSSFEvaluationWorkbook@5e9f73b'},
{id: '5ad184fa-98f0-4468-bae1-546e508e88e9', label: 'VALUE\n3.0', color: '#31b0d5', title: 'Name: VALUE<br>Value: 3.0<br>Type: CONSTANT_VALUE<br>Id: 5ad184fa-98f0-4468-bae1-546e508e88e9<br>Formula Expression: Formula String: VALUE; Formula Values: 3.0; Formula Ptg: 3.0; Ptgs: VALUE Index in Ptgs: 0 <br>Source Object Id: org.apache.poi.xssf.usermodel.XSSFEvaluationWorkbook@5e9f73b'},
{id: 'c59a4558-c5d6-4c0e-b6d0-8ef7bcdfc22d', label: 'ADDRESS\n$D$3', color: '#f0ad4e', title: 'Name: ADDRESS<br>Value: $D$3<br>Type: FUNCTION<br>Id: c59a4558-c5d6-4c0e-b6d0-8ef7bcdfc22d<br>Formula Expression: Formula String: ADDRESS(VALUE, VALUE); Formula Values: ADDRESS(4.0, 3.0); Formula Ptg: ; Ptgs:  Index in Ptgs: 2 <br>Source Object Id: org.apache.poi.xssf.usermodel.XSSFEvaluationWorkbook@5e9f73b'},
{id: 'f2646a38-3cf7-4a2b-9ec0-e09f2baed7c7', label: 'VALUE\n4.0', color: '#31b0d5', title: 'Name: VALUE<br>Value: 4.0<br>Type: CONSTANT_VALUE<br>Id: f2646a38-3cf7-4a2b-9ec0-e09f2baed7c7<br>Formula Expression: Formula String: VALUE; Formula Values: 4.0; Formula Ptg: 4.0; Ptgs: VALUE Index in Ptgs: 1 <br>Source Object Id: org.apache.poi.xssf.usermodel.XSSFEvaluationWorkbook@5e9f73b'}
                            ]);


var edges = new vis.DataSet([
                             /* {from: id_a, to: id_b}, */
{from: '5ad184fa-98f0-4468-bae1-546e508e88e9', to: 'c59a4558-c5d6-4c0e-b6d0-8ef7bcdfc22d'},
{from: 'f2646a38-3cf7-4a2b-9ec0-e09f2baed7c7', to: 'c59a4558-c5d6-4c0e-b6d0-8ef7bcdfc22d'},
{from: 'c59a4558-c5d6-4c0e-b6d0-8ef7bcdfc22d', to: '455a5645-c394-4541-afdb-233ae729ddc6'}
                            ]);