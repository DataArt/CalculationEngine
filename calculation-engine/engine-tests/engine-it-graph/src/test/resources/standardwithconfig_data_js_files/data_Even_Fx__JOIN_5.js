var nodes = new vis.DataSet([
                             /* {id: a, label: b, ...}, */
{id: '8459339c-f774-4360-bf5b-31a45a5d50bf', label: 'VALUE\n1.5', color: '#31b0d5', title: 'Name: VALUE<br>Value: 1.5<br>Type: CONSTANT_VALUE<br>Id: 8459339c-f774-4360-bf5b-31a45a5d50bf<br>Formula Expression: Formula String: VALUE; Formula Values: 1.5; Formula Ptg: 1.5; Ptgs: VALUE Index in Ptgs: 0 <br>Source Object Id: org.apache.poi.xssf.usermodel.XSSFEvaluationWorkbook@200eaca'},
{id: '479ac769-cc5c-41a5-886b-81e5cfb3a38d', label: 'B2\n2.0', color: '#31b0d5', title: 'Name: B2<br>Value: 2.0<br>Type: CELL_WITH_FORMULA<br>Id: 479ac769-cc5c-41a5-886b-81e5cfb3a38d<br>Formula Expression: Formula String: EVEN(VALUE); Formula Values: EVEN(1.5); Formula Ptg: 1.5 EVEN ; Ptgs: VALUE EVEN  Index in Ptgs: 1 <br>Source Object Id: org.apache.poi.xssf.usermodel.XSSFEvaluationWorkbook@200eaca'},
{id: 'e397a381-32ba-44b5-b368-1a2dca9c4bf1', label: 'VALUE\n2.5', color: '#31b0d5', title: 'Name: VALUE<br>Value: 2.5<br>Type: CONSTANT_VALUE<br>Id: e397a381-32ba-44b5-b368-1a2dca9c4bf1<br>Formula Expression: Formula String: VALUE; Formula Values: 2.5; Formula Ptg: 2.5; Ptgs: VALUE Index in Ptgs: 0 <br>Source Object Id: org.apache.poi.xssf.usermodel.XSSFEvaluationWorkbook@200eaca'},
{id: '81d6cff7-7486-4b09-8070-0471856f8ace', label: 'EVEN\n2.0', color: '#f0ad4e', title: 'Name: EVEN<br>Value: 2.0<br>Type: FUNCTION<br>Id: 81d6cff7-7486-4b09-8070-0471856f8ace<br>Formula Expression: Formula String: EVEN(VALUE); Formula Values: EVEN(1.5); Formula Ptg: ; Ptgs:  Index in Ptgs: 1 <br>Source Object Id: org.apache.poi.xssf.usermodel.XSSFEvaluationWorkbook@200eaca'},
{id: '0554e718-d879-4971-8887-58dc177d10c1', label: 'EVEN\n4.0', color: '#f0ad4e', title: 'Name: EVEN<br>Value: 4.0<br>Type: FUNCTION<br>Id: 0554e718-d879-4971-8887-58dc177d10c1<br>Formula Expression: Formula String: EVEN(VALUE); Formula Values: EVEN(2.5); Formula Ptg: ; Ptgs:  Index in Ptgs: 1 <br>Source Object Id: org.apache.poi.xssf.usermodel.XSSFEvaluationWorkbook@200eaca'},
{id: '88685592-d2a2-41be-a921-3f511589bc2e', label: 'B3\n4.0', color: '#31b0d5', title: 'Name: B3<br>Value: 4.0<br>Type: CELL_WITH_FORMULA<br>Id: 88685592-d2a2-41be-a921-3f511589bc2e<br>Formula Expression: Formula String: EVEN(VALUE); Formula Values: EVEN(2.5); Formula Ptg: 2.5 EVEN ; Ptgs: VALUE EVEN  Index in Ptgs: 1 <br>Source Object Id: org.apache.poi.xssf.usermodel.XSSFEvaluationWorkbook@200eaca'}
                            ]);


var edges = new vis.DataSet([
                             /* {from: id_a, to: id_b}, */
{from: '8459339c-f774-4360-bf5b-31a45a5d50bf', to: '81d6cff7-7486-4b09-8070-0471856f8ace'},
{from: 'e397a381-32ba-44b5-b368-1a2dca9c4bf1', to: '0554e718-d879-4971-8887-58dc177d10c1'},
{from: '81d6cff7-7486-4b09-8070-0471856f8ace', to: '479ac769-cc5c-41a5-886b-81e5cfb3a38d'},
{from: '0554e718-d879-4971-8887-58dc177d10c1', to: '88685592-d2a2-41be-a921-3f511589bc2e'}
                            ]);