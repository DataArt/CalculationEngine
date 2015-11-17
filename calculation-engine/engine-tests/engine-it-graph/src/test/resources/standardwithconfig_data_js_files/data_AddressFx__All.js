var nodes = new vis.DataSet([
                             /* {id: a, label: b, ...}, */
{id: '7e3da29e-d44c-4c2c-ba66-ed2b44d01a38', label: 'ADDRESS\n$D$3', color: '#f0ad4e', title: 'Name: ADDRESS<br>Value: $D$3<br>Type: FUNCTION<br>Id: 7e3da29e-d44c-4c2c-ba66-ed2b44d01a38<br>Formula Expression: Formula String: ADDRESS(VALUE, VALUE); Formula Values: ADDRESS(4.0, 3.0); Formula Ptg: ; Ptgs:  Index in Ptgs: 2 <br>Source Object Id: org.apache.poi.xssf.usermodel.XSSFEvaluationWorkbook@1784fcab'},
{id: 'db8975b6-9b34-45ad-baec-9b832545a89e', label: 'D5\n$D$3', color: '#31b0d5', title: 'Name: D5<br>Value: $D$3<br>Type: CELL_WITH_FORMULA<br>Id: db8975b6-9b34-45ad-baec-9b832545a89e<br>Formula Expression: Formula String: ADDRESS(VALUE, VALUE); Formula Values: ADDRESS(4.0, 3.0); Formula Ptg: 4.0, 3.0 ADDRESS ; Ptgs: VALUE, VALUE ADDRESS  Index in Ptgs: 2 <br>Source Object Id: org.apache.poi.xssf.usermodel.XSSFEvaluationWorkbook@1784fcab'},
{id: '56b42c4f-ed3e-4f2e-903b-f95a97a62cd9', label: 'VALUE\n4.0', color: '#31b0d5', title: 'Name: VALUE<br>Value: 4.0<br>Type: CONSTANT_VALUE<br>Id: 56b42c4f-ed3e-4f2e-903b-f95a97a62cd9<br>Formula Expression: Formula String: VALUE; Formula Values: 4.0; Formula Ptg: 4.0; Ptgs: VALUE Index in Ptgs: 1 <br>Source Object Id: org.apache.poi.xssf.usermodel.XSSFEvaluationWorkbook@1784fcab'},
{id: 'a915b904-9010-4873-b4dc-73e19489c1e5', label: 'VALUE\n3.0', color: '#31b0d5', title: 'Name: VALUE<br>Value: 3.0<br>Type: CONSTANT_VALUE<br>Id: a915b904-9010-4873-b4dc-73e19489c1e5<br>Formula Expression: Formula String: VALUE; Formula Values: 3.0; Formula Ptg: 3.0; Ptgs: VALUE Index in Ptgs: 0 <br>Source Object Id: org.apache.poi.xssf.usermodel.XSSFEvaluationWorkbook@1784fcab'}
                            ]);


var edges = new vis.DataSet([
                             /* {from: id_a, to: id_b}, */
{from: '7e3da29e-d44c-4c2c-ba66-ed2b44d01a38', to: 'db8975b6-9b34-45ad-baec-9b832545a89e'},
{from: 'a915b904-9010-4873-b4dc-73e19489c1e5', to: '7e3da29e-d44c-4c2c-ba66-ed2b44d01a38'},
{from: '56b42c4f-ed3e-4f2e-903b-f95a97a62cd9', to: '7e3da29e-d44c-4c2c-ba66-ed2b44d01a38'}
                            ]);