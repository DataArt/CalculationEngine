var nodes = new vis.DataSet([
                             /* {id: a, label: b, ...}, */
{id: 'aa9da3d6-0fbc-49f6-92a4-b829e3ecee10', label: 'VALUE\n20.08554', color: '#31b0d5', title: 'Name: VALUE<br>Alias: null<br>Value: 20.08554<br>Type: CONSTANT_VALUE<br>Id: aa9da3d6-0fbc-49f6-92a4-b829e3ecee10<br>Formula Expression: Formula String: VALUE; Formula Values: 20.08554; Formula Ptg: 20.08554; Ptgs: VALUE Index in Ptgs: 0 <br>Source Object Id: org.apache.poi.xssf.usermodel.XSSFEvaluationWorkbook@18a645fd'},
{id: '29016b95-451f-455f-ac12-66e1a1e28dcb', label: 'LN\n3.000000153185454', color: '#f0ad4e', title: 'Name: LN<br>Alias: null<br>Value: 3.000000153185454<br>Type: FUNCTION<br>Id: 29016b95-451f-455f-ac12-66e1a1e28dcb<br>Formula Expression: Formula String: LN(VALUE); Formula Values: LN(20.08554); Formula Ptg: ; Ptgs:  Index in Ptgs: 1 <br>Source Object Id: org.apache.poi.xssf.usermodel.XSSFEvaluationWorkbook@18a645fd'},
{id: '033a4e29-d6fe-4753-bb42-bdd753ec2673', label: 'C4\n3.000000153185454', color: '#31b0d5', title: 'Name: C4<br>Alias: null<br>Value: 3.000000153185454<br>Type: CELL_WITH_FORMULA<br>Id: 033a4e29-d6fe-4753-bb42-bdd753ec2673<br>Formula Expression: Formula String: LN(VALUE); Formula Values: LN(20.08554); Formula Ptg: 20.08554 LN ; Ptgs: VALUE LN  Index in Ptgs: 1 <br>Source Object Id: org.apache.poi.xssf.usermodel.XSSFEvaluationWorkbook@18a645fd'}
                            ]);


var edges = new vis.DataSet([
                             /* {from: id_a, to: id_b}, */
{from: 'aa9da3d6-0fbc-49f6-92a4-b829e3ecee10', to: '29016b95-451f-455f-ac12-66e1a1e28dcb'},
{from: '29016b95-451f-455f-ac12-66e1a1e28dcb', to: '033a4e29-d6fe-4753-bb42-bdd753ec2673'}
                            ]);