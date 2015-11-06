var nodes = new vis.DataSet([
                             /* {id: a, label: b, ...}, */
{id: 'dd2ffc29-45d4-40d2-bc52-0ff253726fb2', label: 'D4\nFALSE', color: '#31b0d5', title: 'Name: D4<br>Value: FALSE<br>Type: CELL_WITH_FORMULA<br>Id: dd2ffc29-45d4-40d2-bc52-0ff253726fb2<br>Formula Expression: Formula String: VALUE; Formula Values: FALSE; Formula Ptg: FALSE; Ptgs: VALUE Index in Ptgs: 0 <br>Source Object Id: org.apache.poi.xssf.usermodel.XSSFEvaluationWorkbook@512d4583'},
{id: 'bfef09c5-8644-4111-bf80-ead19ef6d276', label: 'VALUE\nFALSE', color: '#31b0d5', title: 'Name: VALUE<br>Value: FALSE<br>Type: CONSTANT_VALUE<br>Id: bfef09c5-8644-4111-bf80-ead19ef6d276<br>Formula Expression: Formula String: VALUE; Formula Values: FALSE; Formula Ptg: FALSE; Ptgs: VALUE Index in Ptgs: 0 <br>Source Object Id: org.apache.poi.xssf.usermodel.XSSFEvaluationWorkbook@512d4583'}
                            ]);


var edges = new vis.DataSet([
                             /* {from: id_a, to: id_b}, */
{from: 'bfef09c5-8644-4111-bf80-ead19ef6d276', to: 'dd2ffc29-45d4-40d2-bc52-0ff253726fb2'}
                            ]);