var nodes = new vis.DataSet([
                             /* {id: a, label: b, ...}, */
{id: 'b2e4c294-523a-4419-ae7b-8efca8eeaf3e', label: 'A1\n12.0', color: '#31b0d5', title: 'Name: A1<br>Value: 12.0<br>Type: CELL_WITH_FORMULA<br>Id: b2e4c294-523a-4419-ae7b-8efca8eeaf3e<br>Formula Expression: Formula String: VALUE; Formula Values: 12.0; Formula Ptg: 12.0; Ptgs: VALUE Index in Ptgs: 0 <br>Source Object Id: org.apache.poi.xssf.usermodel.XSSFEvaluationWorkbook@61fe30'},
{id: 'e825322d-eaeb-4215-9952-740aac04a1fd', label: 'VALUE\n12.0', color: '#31b0d5', title: 'Name: VALUE<br>Value: 12.0<br>Type: CONSTANT_VALUE<br>Id: e825322d-eaeb-4215-9952-740aac04a1fd<br>Formula Expression: Formula String: VALUE; Formula Values: 12.0; Formula Ptg: 12.0; Ptgs: VALUE Index in Ptgs: 0 <br>Source Object Id: org.apache.poi.xssf.usermodel.XSSFEvaluationWorkbook@61fe30'}
                            ]);


var edges = new vis.DataSet([
                             /* {from: id_a, to: id_b}, */
{from: 'e825322d-eaeb-4215-9952-740aac04a1fd', to: 'b2e4c294-523a-4419-ae7b-8efca8eeaf3e'}
                            ]);