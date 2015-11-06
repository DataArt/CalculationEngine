var nodes = new vis.DataSet([
                             /* {id: a, label: b, ...}, */
{id: 'a967d464-5dd6-4e92-b836-1c9e2c241b6d', label: 'C8\n219.88888888888889', color: '#31b0d5', title: 'Name: C8<br>Value: 219.88888888888889<br>Type: CELL_WITH_FORMULA<br>Id: a967d464-5dd6-4e92-b836-1c9e2c241b6d<br>Formula Expression: Formula String: AVEDEV(B1:C3); Formula Values: AVEDEV(67.0, 873.0, 76.0, 52.0, 254.0, 80.0); Formula Ptg: 67.0, 873.0, 76.0, 52.0, 254.0, 80.0 AVEDEV ; Ptgs: B1:C3 AVEDEV  Index in Ptgs: 1 <br>Source Object Id: org.apache.poi.xssf.usermodel.XSSFEvaluationWorkbook@3e8c3cb'},
{id: '5e029af2-50d0-4c5c-8da3-eaa74b7516ba', label: 'AVEDEV\n219.88888888888889', color: '#f0ad4e', title: 'Name: AVEDEV<br>Value: 219.88888888888889<br>Type: FUNCTION<br>Id: 5e029af2-50d0-4c5c-8da3-eaa74b7516ba<br>Formula Expression: Formula String: AVEDEV(B1:C3); Formula Values: AVEDEV(67.0, 873.0, 76.0, 52.0, 254.0, 80.0); Formula Ptg: ; Ptgs:  Index in Ptgs: 1 <br>Source Object Id: org.apache.poi.xssf.usermodel.XSSFEvaluationWorkbook@3e8c3cb'},
{id: 'bd6e72bd-19c1-45ef-9f26-2acdfba200d1', label: 'B1:C3\n[[67.0, 873.0], [76.0, 52.0], [254.0, 80.0]]', color: '#31b0d5', title: 'Name: B1:C3<br>Value: [[67.0, 873.0], [76.0, 52.0], [254.0, 80.0]]<br>Type: RANGE<br>Id: bd6e72bd-19c1-45ef-9f26-2acdfba200d1<br>Formula Expression: Formula String: B1:C3; Formula Values: [[67.0, 873.0], [76.0, 52.0], [254.0, 80.0]]; Formula Ptg: [[67.0, 873.0], [76.0, 52.0], [254.0, 80.0]]; Ptgs: B1:C3 Index in Ptgs: 0 <br>Source Object Id: org.apache.poi.xssf.usermodel.XSSFEvaluationWorkbook@3e8c3cb'}
                            ]);


var edges = new vis.DataSet([
                             /* {from: id_a, to: id_b}, */
{from: '5e029af2-50d0-4c5c-8da3-eaa74b7516ba', to: 'a967d464-5dd6-4e92-b836-1c9e2c241b6d'},
{from: 'bd6e72bd-19c1-45ef-9f26-2acdfba200d1', to: '5e029af2-50d0-4c5c-8da3-eaa74b7516ba'}
                            ]);