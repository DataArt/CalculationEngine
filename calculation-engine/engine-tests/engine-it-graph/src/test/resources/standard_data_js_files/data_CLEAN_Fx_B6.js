var nodes = new vis.DataSet([
                             /* {id: a, label: b, ...}, */
{id: 'aa82c2c7-95b5-40d4-b486-b165401c0924', label: 'CLEAN\n9', color: '#f0ad4e', title: 'Name: CLEAN<br>Alias: null<br>Value: 9<br>Type: FUNCTION<br>Id: aa82c2c7-95b5-40d4-b486-b165401c0924<br>Formula Expression: Formula String: CLEAN(B1); Formula Values: CLEAN(9.0); Formula Ptg: ; Ptgs:  Index in Ptgs: 1 <br>Source Object Id: org.apache.poi.xssf.usermodel.XSSFEvaluationWorkbook@26ceffa8'},
{id: 'f109c6e3-8ec2-4b36-b430-0813eb248a1d', label: 'B6\n9', color: '#31b0d5', title: 'Name: B6<br>Alias: null<br>Value: 9<br>Type: CELL_WITH_FORMULA<br>Id: f109c6e3-8ec2-4b36-b430-0813eb248a1d<br>Formula Expression: Formula String: CLEAN(B1); Formula Values: CLEAN(9.0); Formula Ptg: 9.0 CLEAN ; Ptgs: B1 CLEAN  Index in Ptgs: 1 <br>Source Object Id: org.apache.poi.xssf.usermodel.XSSFEvaluationWorkbook@26ceffa8'},
{id: 'e847f8d0-fcb1-4afc-af52-fb32914a7159', label: 'B1\n9.0', color: '#31b0d5', title: 'Name: B1<br>Alias: null<br>Value: 9.0<br>Type: CELL_WITH_VALUE<br>Id: e847f8d0-fcb1-4afc-af52-fb32914a7159<br>Formula Expression: Formula String: B1; Formula Values: 9.0; Formula Ptg: 9.0; Ptgs: B1 Index in Ptgs: 0 <br>Source Object Id: org.apache.poi.xssf.usermodel.XSSFEvaluationWorkbook@26ceffa8'}
                            ]);


var edges = new vis.DataSet([
                             /* {from: id_a, to: id_b}, */
{from: 'e847f8d0-fcb1-4afc-af52-fb32914a7159', to: 'aa82c2c7-95b5-40d4-b486-b165401c0924'},
{from: 'aa82c2c7-95b5-40d4-b486-b165401c0924', to: 'f109c6e3-8ec2-4b36-b430-0813eb248a1d'}
                            ]);