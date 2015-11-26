var nodes = new vis.DataSet([
                             /* {id: a, label: b, ...}, */
{id: '289e07c6-f0fd-48cd-9a00-7633873ac32d', label: 'AVEDEV\n219.88888888888889', color: '#f0ad4e', title: 'Name: AVEDEV<br>Alias: null<br>Value: 219.88888888888889<br>Type: FUNCTION<br>Id: 289e07c6-f0fd-48cd-9a00-7633873ac32d<br>Formula Expression: Formula String: AVEDEV(B1:C3); Formula Values: AVEDEV(67.0, 873.0, 76.0, 52.0, 254.0, 80.0); Formula Ptg: ; Ptgs:  Index in Ptgs: 1 <br>Source Object Id: org.apache.poi.xssf.usermodel.XSSFEvaluationWorkbook@3e27ba32'},
{id: '68c78f3d-ef42-48ad-a28f-99e6869a2e60', label: 'C8\n219.88888888888889', color: '#31b0d5', title: 'Name: C8<br>Alias: null<br>Value: 219.88888888888889<br>Type: CELL_WITH_FORMULA<br>Id: 68c78f3d-ef42-48ad-a28f-99e6869a2e60<br>Formula Expression: Formula String: AVEDEV(B1:C3); Formula Values: AVEDEV(67.0, 873.0, 76.0, 52.0, 254.0, 80.0); Formula Ptg: 67.0, 873.0, 76.0, 52.0, 254.0, 80.0 AVEDEV ; Ptgs: B1:C3 AVEDEV  Index in Ptgs: 1 <br>Source Object Id: org.apache.poi.xssf.usermodel.XSSFEvaluationWorkbook@3e27ba32'},
{id: 'ae295094-6ace-4dca-a321-22879cdc41fa', label: 'B1:C3\n[[67.0, 873.0], [76.0, 52.0], [254.0, 80.0]]', color: '#31b0d5', title: 'Name: B1:C3<br>Alias: null<br>Value: [[67.0, 873.0], [76.0, 52.0], [254.0, 80.0]]<br>Type: RANGE<br>Id: ae295094-6ace-4dca-a321-22879cdc41fa<br>Formula Expression: Formula String: B1:C3; Formula Values: [[67.0, 873.0], [76.0, 52.0], [254.0, 80.0]]; Formula Ptg: [[67.0, 873.0], [76.0, 52.0], [254.0, 80.0]]; Ptgs: B1:C3 Index in Ptgs: 0 <br>Source Object Id: org.apache.poi.xssf.usermodel.XSSFEvaluationWorkbook@3e27ba32'}
                            ]);


var edges = new vis.DataSet([
                             /* {from: id_a, to: id_b}, */
{from: '289e07c6-f0fd-48cd-9a00-7633873ac32d', to: '68c78f3d-ef42-48ad-a28f-99e6869a2e60'},
{from: 'ae295094-6ace-4dca-a321-22879cdc41fa', to: '289e07c6-f0fd-48cd-9a00-7633873ac32d'}
                            ]);