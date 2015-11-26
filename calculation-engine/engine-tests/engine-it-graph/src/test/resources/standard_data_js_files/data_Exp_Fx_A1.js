var nodes = new vis.DataSet([
                             /* {id: a, label: b, ...}, */
{id: '660d36ed-28a0-46fd-9e29-f2d7e627cdc8', label: 'EXP\n2.718281828459045', color: '#f0ad4e', title: 'Name: EXP<br>Alias: null<br>Value: 2.718281828459045<br>Type: FUNCTION<br>Id: 660d36ed-28a0-46fd-9e29-f2d7e627cdc8<br>Formula Expression: Formula String: EXP(VALUE); Formula Values: EXP(1.0); Formula Ptg: ; Ptgs:  Index in Ptgs: 1 <br>Source Object Id: org.apache.poi.xssf.usermodel.XSSFEvaluationWorkbook@6331250e'},
{id: '9fb7f5d2-fda3-4fc3-b359-19fad88d60d9', label: 'A1\n2.718281828459045', color: '#31b0d5', title: 'Name: A1<br>Alias: null<br>Value: 2.718281828459045<br>Type: CELL_WITH_FORMULA<br>Id: 9fb7f5d2-fda3-4fc3-b359-19fad88d60d9<br>Formula Expression: Formula String: EXP(VALUE); Formula Values: EXP(1.0); Formula Ptg: 1.0 EXP ; Ptgs: VALUE EXP  Index in Ptgs: 1 <br>Source Object Id: org.apache.poi.xssf.usermodel.XSSFEvaluationWorkbook@6331250e'},
{id: '390b9525-9e41-41f9-a4ca-851d39163966', label: 'VALUE\n1.0', color: '#31b0d5', title: 'Name: VALUE<br>Alias: null<br>Value: 1.0<br>Type: CONSTANT_VALUE<br>Id: 390b9525-9e41-41f9-a4ca-851d39163966<br>Formula Expression: Formula String: VALUE; Formula Values: 1.0; Formula Ptg: 1.0; Ptgs: VALUE Index in Ptgs: 0 <br>Source Object Id: org.apache.poi.xssf.usermodel.XSSFEvaluationWorkbook@6331250e'}
                            ]);


var edges = new vis.DataSet([
                             /* {from: id_a, to: id_b}, */
{from: '390b9525-9e41-41f9-a4ca-851d39163966', to: '660d36ed-28a0-46fd-9e29-f2d7e627cdc8'},
{from: '660d36ed-28a0-46fd-9e29-f2d7e627cdc8', to: '9fb7f5d2-fda3-4fc3-b359-19fad88d60d9'}
                            ]);