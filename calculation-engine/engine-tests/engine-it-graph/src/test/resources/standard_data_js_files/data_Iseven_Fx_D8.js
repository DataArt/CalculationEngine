var nodes = new vis.DataSet([
                             /* {id: a, label: b, ...}, */
{id: 'c264d39a-1575-4b8a-9b43-8374e55f9731', label: 'D8\nTRUE', color: '#31b0d5', title: 'Name: D8<br>Alias: null<br>Value: TRUE<br>Type: CELL_WITH_FORMULA<br>Id: c264d39a-1575-4b8a-9b43-8374e55f9731<br>Formula Expression: Formula String: ISEVEN(A2); Formula Values: ISEVEN(2.0); Formula Ptg: 2.0 ISEVEN ; Ptgs: A2 ISEVEN  Index in Ptgs: 2 <br>Source Object Id: org.apache.poi.xssf.usermodel.XSSFEvaluationWorkbook@f3021cb'},
{id: '500ac19e-3344-43f8-9fba-2d3fb4f36281', label: 'A2\n2.0', color: '#31b0d5', title: 'Name: A2<br>Alias: null<br>Value: 2.0<br>Type: CELL_WITH_VALUE<br>Id: 500ac19e-3344-43f8-9fba-2d3fb4f36281<br>Formula Expression: Formula String: A2; Formula Values: 2.0; Formula Ptg: 2.0; Ptgs: A2 Index in Ptgs: 1 <br>Source Object Id: org.apache.poi.xssf.usermodel.XSSFEvaluationWorkbook@f3021cb'},
{id: 'd1c7e122-489a-41ac-a198-3d25c382d0e4', label: 'ISEVEN\nTRUE', color: '#f0ad4e', title: 'Name: ISEVEN<br>Alias: null<br>Value: TRUE<br>Type: FUNCTION<br>Id: d1c7e122-489a-41ac-a198-3d25c382d0e4<br>Formula Expression: Formula String: ISEVEN(A2); Formula Values: ISEVEN(2.0); Formula Ptg: ; Ptgs:  Index in Ptgs: 2 <br>Source Object Id: org.apache.poi.xssf.usermodel.XSSFEvaluationWorkbook@f3021cb'}
                            ]);


var edges = new vis.DataSet([
                             /* {from: id_a, to: id_b}, */
{from: '500ac19e-3344-43f8-9fba-2d3fb4f36281', to: 'd1c7e122-489a-41ac-a198-3d25c382d0e4'},
{from: 'd1c7e122-489a-41ac-a198-3d25c382d0e4', to: 'c264d39a-1575-4b8a-9b43-8374e55f9731'}
                            ]);