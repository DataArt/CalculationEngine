var nodes = new vis.DataSet([
                             /* {id: a, label: b, ...}, */
{id: 'd7d634ce-98a5-4875-aff5-d28fc1c77c5e', label: 'VALUE\nFALSE', color: '#31b0d5', title: 'Name: VALUE<br>Value: FALSE<br>Type: CONSTANT_VALUE<br>Id: d7d634ce-98a5-4875-aff5-d28fc1c77c5e<br>Formula Expression: Formula String: VALUE; Formula Values: FALSE; Formula Ptg: FALSE; Ptgs: VALUE Index in Ptgs: 0 <br>Source Object Id: org.apache.poi.xssf.usermodel.XSSFEvaluationWorkbook@52b6319f'},
{id: 'e2f83730-247a-427b-adb2-a090aca8d3c4', label: 'D4\nFALSE', color: '#31b0d5', title: 'Name: D4<br>Value: FALSE<br>Type: CELL_WITH_FORMULA<br>Id: e2f83730-247a-427b-adb2-a090aca8d3c4<br>Formula Expression: Formula String: VALUE; Formula Values: FALSE; Formula Ptg: FALSE; Ptgs: VALUE Index in Ptgs: 0 <br>Source Object Id: org.apache.poi.xssf.usermodel.XSSFEvaluationWorkbook@52b6319f'}
                            ]);


var edges = new vis.DataSet([
                             /* {from: id_a, to: id_b}, */
{from: 'd7d634ce-98a5-4875-aff5-d28fc1c77c5e', to: 'e2f83730-247a-427b-adb2-a090aca8d3c4'}
                            ]);