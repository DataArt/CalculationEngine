var nodes = new vis.DataSet([
                             /* {id: a, label: b, ...}, */
{id: 'e430da92-c080-4f86-a1fa-78f90cf3e4f4', label: 'A1\n12.0', color: '#31b0d5', title: 'Name: A1<br>Value: 12.0<br>Type: CELL_WITH_FORMULA<br>Id: e430da92-c080-4f86-a1fa-78f90cf3e4f4<br>Formula Expression: Formula String: VALUE; Formula Values: 12.0; Formula Ptg: 12.0; Ptgs: VALUE Index in Ptgs: 0 <br>Source Object Id: org.apache.poi.xssf.usermodel.XSSFEvaluationWorkbook@61fe30'},
{id: '168cebe9-c30f-4f90-8f01-1a3eeffc2cd5', label: 'VALUE\n12.0', color: '#31b0d5', title: 'Name: VALUE<br>Value: 12.0<br>Type: CONSTANT_VALUE<br>Id: 168cebe9-c30f-4f90-8f01-1a3eeffc2cd5<br>Formula Expression: Formula String: VALUE; Formula Values: 12.0; Formula Ptg: 12.0; Ptgs: VALUE Index in Ptgs: 0 <br>Source Object Id: org.apache.poi.xssf.usermodel.XSSFEvaluationWorkbook@61fe30'}
                            ]);


var edges = new vis.DataSet([
                             /* {from: id_a, to: id_b}, */
{from: '168cebe9-c30f-4f90-8f01-1a3eeffc2cd5', to: 'e430da92-c080-4f86-a1fa-78f90cf3e4f4'}
                            ]);