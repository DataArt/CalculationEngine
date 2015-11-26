var nodes = new vis.DataSet([
                             /* {id: a, label: b, ...}, */
{id: '5063f56a-d3ee-4d23-b921-d9c9360563da', label: '&\nB5', color: '#f0ad4e', title: 'Name: &<br>Alias: null<br>Value: B5<br>Type: OPERATOR<br>Id: 5063f56a-d3ee-4d23-b921-d9c9360563da<br>Formula Expression: Formula String: VALUE & A5; Formula Values: B & 5.0; Formula Ptg: ; Ptgs:  Index in Ptgs: 2 <br>Source Object Id: org.apache.poi.xssf.usermodel.XSSFEvaluationWorkbook@795fd838'},
{id: 'e3ee11c4-91d9-4e1e-a593-5b58b3d75538', label: 'VALUE\nB', color: '#31b0d5', title: 'Name: VALUE<br>Alias: null<br>Value: B<br>Type: CONSTANT_VALUE<br>Id: e3ee11c4-91d9-4e1e-a593-5b58b3d75538<br>Formula Expression: Formula String: VALUE; Formula Values: B; Formula Ptg: B; Ptgs: VALUE Index in Ptgs: 0 <br>Source Object Id: org.apache.poi.xssf.usermodel.XSSFEvaluationWorkbook@795fd838'},
{id: '24941fe4-e7e2-4ad4-842c-df5658529f52', label: 'C8\n62.0', color: '#31b0d5', title: 'Name: C8<br>Alias: null<br>Value: 62.0<br>Type: CELL_WITH_FORMULA<br>Id: 24941fe4-e7e2-4ad4-842c-df5658529f52<br>Formula Expression: Formula String: INDIRECT(VALUE & A5); Formula Values: INDIRECT(B & 5.0); Formula Ptg: B 5.0 & INDIRECT ; Ptgs: VALUE A5 & INDIRECT  Index in Ptgs: 3 <br>Source Object Id: org.apache.poi.xssf.usermodel.XSSFEvaluationWorkbook@795fd838'},
{id: '47e73526-f0f0-4479-8f41-778e06a1f3a8', label: 'INDIRECT\n62.0', color: '#f0ad4e', title: 'Name: INDIRECT<br>Alias: null<br>Value: 62.0<br>Type: FUNCTION<br>Id: 47e73526-f0f0-4479-8f41-778e06a1f3a8<br>Formula Expression: Formula String: INDIRECT(VALUE & A5); Formula Values: INDIRECT(B & 5.0); Formula Ptg: ; Ptgs:  Index in Ptgs: 3 <br>Source Object Id: org.apache.poi.xssf.usermodel.XSSFEvaluationWorkbook@795fd838'},
{id: '55168fbb-5e49-4716-8637-b88b373c49c6', label: 'A5\n5.0', color: '#31b0d5', title: 'Name: A5<br>Alias: null<br>Value: 5.0<br>Type: CELL_WITH_VALUE<br>Id: 55168fbb-5e49-4716-8637-b88b373c49c6<br>Formula Expression: Formula String: A5; Formula Values: 5.0; Formula Ptg: 5.0; Ptgs: A5 Index in Ptgs: 1 <br>Source Object Id: org.apache.poi.xssf.usermodel.XSSFEvaluationWorkbook@795fd838'}
                            ]);


var edges = new vis.DataSet([
                             /* {from: id_a, to: id_b}, */
{from: '47e73526-f0f0-4479-8f41-778e06a1f3a8', to: '24941fe4-e7e2-4ad4-842c-df5658529f52'},
{from: '5063f56a-d3ee-4d23-b921-d9c9360563da', to: '47e73526-f0f0-4479-8f41-778e06a1f3a8'},
{from: '55168fbb-5e49-4716-8637-b88b373c49c6', to: '5063f56a-d3ee-4d23-b921-d9c9360563da'},
{from: 'e3ee11c4-91d9-4e1e-a593-5b58b3d75538', to: '5063f56a-d3ee-4d23-b921-d9c9360563da'}
                            ]);