var nodes = new vis.DataSet([
                             /* {id: a, label: b, ...}, */
{id: 'dff21ba2-46ef-45e3-ab47-a536d3a3c7ba', label: 'E5\n5.2', color: '#31b0d5', title: 'Name: E5<br>Value: 5.2<br>Type: CELL_WITH_FORMULA<br>Id: dff21ba2-46ef-45e3-ab47-a536d3a3c7ba<br>Formula Expression: Formula String: AVERAGE(A1:E1); Formula Values: AVERAGE(12.0, 2.0, 3.0, 4.0, 5.0); Formula Ptg: 12.0, 2.0, 3.0, 4.0, 5.0 AVERAGE ; Ptgs: A1:E1 AVERAGE  Index in Ptgs: 1 <br>Source Object Id: org.apache.poi.xssf.usermodel.XSSFEvaluationWorkbook@5974b7e8'},
{id: '549e5c66-6499-4eb8-b47f-eb58369c0992', label: 'A1:E1\n[[12.0, 2.0, 3.0, 4.0, 5.0]]', color: '#31b0d5', title: 'Name: A1:E1<br>Value: [[12.0, 2.0, 3.0, 4.0, 5.0]]<br>Type: RANGE<br>Id: 549e5c66-6499-4eb8-b47f-eb58369c0992<br>Formula Expression: Formula String: A1:E1; Formula Values: [[12.0, 2.0, 3.0, 4.0, 5.0]]; Formula Ptg: [[12.0, 2.0, 3.0, 4.0, 5.0]]; Ptgs: A1:E1 Index in Ptgs: 0 <br>Source Object Id: org.apache.poi.xssf.usermodel.XSSFEvaluationWorkbook@5974b7e8'},
{id: '509d83b0-cae0-42c1-ae94-cb88e42925fa', label: 'AVERAGE\n5.2', color: '#f0ad4e', title: 'Name: AVERAGE<br>Value: 5.2<br>Type: FUNCTION<br>Id: 509d83b0-cae0-42c1-ae94-cb88e42925fa<br>Formula Expression: Formula String: AVERAGE(A1:E1); Formula Values: AVERAGE(12.0, 2.0, 3.0, 4.0, 5.0); Formula Ptg: ; Ptgs:  Index in Ptgs: 1 <br>Source Object Id: org.apache.poi.xssf.usermodel.XSSFEvaluationWorkbook@5974b7e8'}
                            ]);


var edges = new vis.DataSet([
                             /* {from: id_a, to: id_b}, */
{from: '549e5c66-6499-4eb8-b47f-eb58369c0992', to: '509d83b0-cae0-42c1-ae94-cb88e42925fa'},
{from: '509d83b0-cae0-42c1-ae94-cb88e42925fa', to: 'dff21ba2-46ef-45e3-ab47-a536d3a3c7ba'}
                            ]);