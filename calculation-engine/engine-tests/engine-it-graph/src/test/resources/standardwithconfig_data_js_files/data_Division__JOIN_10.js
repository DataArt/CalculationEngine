var nodes = new vis.DataSet([
                             /* {id: a, label: b, ...}, */
{id: '0eaa9c5d-7de3-4d9d-a434-7714b7683dc2', label: '/\n4.0', color: '#f0ad4e', title: 'Name: /<br>Value: 4.0<br>Type: OPERATOR<br>Id: 0eaa9c5d-7de3-4d9d-a434-7714b7683dc2<br>Formula Expression: Formula String: A1 / A2; Formula Values: 100.0 / 25.0; Formula Ptg: ; Ptgs:  Index in Ptgs: 2 <br>Source Object Id: org.apache.poi.xssf.usermodel.XSSFEvaluationWorkbook@a926db4'},
{id: 'cb5278c2-fd4e-4bb3-947c-9c2f4577959c', label: 'A2\n25.0', color: '#31b0d5', title: 'Name: A2<br>Value: 25.0<br>Type: CELL_WITH_VALUE<br>Id: cb5278c2-fd4e-4bb3-947c-9c2f4577959c<br>Formula Expression: Formula String: A2; Formula Values: 25.0; Formula Ptg: 25.0; Ptgs: A2 Index in Ptgs: 1 <br>Source Object Id: org.apache.poi.xssf.usermodel.XSSFEvaluationWorkbook@a926db4'},
{id: 'cebc608c-f6a9-48d8-92f7-3082e2bcfe25', label: 'B3\n4.0', color: '#31b0d5', title: 'Name: B3<br>Value: 4.0<br>Type: CELL_WITH_FORMULA<br>Id: cebc608c-f6a9-48d8-92f7-3082e2bcfe25<br>Formula Expression: Formula String: A1 / A2; Formula Values: 100.0 / 25.0; Formula Ptg: 100.0 25.0 /; Ptgs: A1 A2 / Index in Ptgs: 2 <br>Source Object Id: org.apache.poi.xssf.usermodel.XSSFEvaluationWorkbook@a926db4'},
{id: 'd790d474-07c9-41c8-9690-35030150ce79', label: 'A1\n100.0', color: '#31b0d5', title: 'Name: A1<br>Value: 100.0<br>Type: CELL_WITH_VALUE<br>Id: d790d474-07c9-41c8-9690-35030150ce79<br>Formula Expression: Formula String: A1; Formula Values: 100.0; Formula Ptg: 100.0; Ptgs: A1 Index in Ptgs: 0 <br>Source Object Id: org.apache.poi.xssf.usermodel.XSSFEvaluationWorkbook@a926db4'}
                            ]);


var edges = new vis.DataSet([
                             /* {from: id_a, to: id_b}, */
{from: 'cb5278c2-fd4e-4bb3-947c-9c2f4577959c', to: '0eaa9c5d-7de3-4d9d-a434-7714b7683dc2'},
{from: '0eaa9c5d-7de3-4d9d-a434-7714b7683dc2', to: 'cebc608c-f6a9-48d8-92f7-3082e2bcfe25'},
{from: 'd790d474-07c9-41c8-9690-35030150ce79', to: '0eaa9c5d-7de3-4d9d-a434-7714b7683dc2'}
                            ]);