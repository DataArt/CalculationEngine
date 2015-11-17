var nodes = new vis.DataSet([
                             /* {id: a, label: b, ...}, */
{id: 'f4648b83-ee8b-4806-bfad-abec8f8f3cd1', label: 'A1\n12.0', color: '#31b0d5', title: 'Name: A1<br>Value: 12.0<br>Type: CELL_WITH_FORMULA<br>Id: f4648b83-ee8b-4806-bfad-abec8f8f3cd1<br>Formula Expression: Formula String: VALUE; Formula Values: 12.0; Formula Ptg: 12.0; Ptgs: VALUE Index in Ptgs: 0 <br>Source Object Id: org.apache.poi.xssf.usermodel.XSSFEvaluationWorkbook@1a9ce44'},
{id: '793aa4a5-aaa1-4352-ace2-a87797029318', label: 'VALUE\n12.0', color: '#31b0d5', title: 'Name: VALUE<br>Value: 12.0<br>Type: CONSTANT_VALUE<br>Id: 793aa4a5-aaa1-4352-ace2-a87797029318<br>Formula Expression: Formula String: VALUE; Formula Values: 12.0; Formula Ptg: 12.0; Ptgs: VALUE Index in Ptgs: 0 <br>Source Object Id: org.apache.poi.xssf.usermodel.XSSFEvaluationWorkbook@1a9ce44'}
                            ]);


var edges = new vis.DataSet([
                             /* {from: id_a, to: id_b}, */
{from: '793aa4a5-aaa1-4352-ace2-a87797029318', to: 'f4648b83-ee8b-4806-bfad-abec8f8f3cd1'}
                            ]);