var nodes = new vis.DataSet([
                             /* {id: a, label: b, ...}, */
{id: '1af2544c-127f-42d5-80b7-6da4ee6eec1e', label: 'EDATE\n40558.0', color: '#f0ad4e', title: 'Name: EDATE<br>Value: 40558.0<br>Type: FUNCTION<br>Id: 1af2544c-127f-42d5-80b7-6da4ee6eec1e<br>Formula Expression: Formula String: EDATE(VALUE, EDATE(VALUE, A1)); Formula Values: EDATE(-1.0, EDATE(1.0, 40558.0)); Formula Ptg: ; Ptgs:  Index in Ptgs: 3 <br>Source Object Id: org.apache.poi.xssf.usermodel.XSSFEvaluationWorkbook@7070ae1'},
{id: '9f173e77-985a-4cfc-bf87-330460f941a2', label: 'C5\n40558.0', color: '#31b0d5', title: 'Name: C5<br>Value: 40558.0<br>Type: CELL_WITH_FORMULA<br>Id: 9f173e77-985a-4cfc-bf87-330460f941a2<br>Formula Expression: Formula String: EDATE(VALUE, EDATE(VALUE, A1)); Formula Values: EDATE(-1.0, EDATE(1.0, 40558.0)); Formula Ptg: -1.0, 1.0, 40558.0 EDATE  EDATE ; Ptgs: VALUE, VALUE, A1 EDATE  EDATE  Index in Ptgs: 3 <br>Source Object Id: org.apache.poi.xssf.usermodel.XSSFEvaluationWorkbook@7070ae1'},
{id: '1a247ce9-cbdc-4cc9-84c8-bb4fda45c90e', label: 'B3\n40589.0', color: '#31b0d5', title: 'Name: B3<br>Value: 40589.0<br>Type: CELL_WITH_FORMULA<br>Id: 1a247ce9-cbdc-4cc9-84c8-bb4fda45c90e<br>Formula Expression: Formula String: EDATE(VALUE, A1); Formula Values: EDATE(1.0, 40558.0); Formula Ptg: 1.0, 40558.0 EDATE ; Ptgs: VALUE, A1 EDATE  Index in Ptgs: 3 <br>Source Object Id: org.apache.poi.xssf.usermodel.XSSFEvaluationWorkbook@7070ae1'},
{id: '78b6e28c-f4ba-49ff-9104-eca54e848af9', label: 'VALUE\n-1.0', color: '#31b0d5', title: 'Name: VALUE<br>Value: -1.0<br>Type: CONSTANT_VALUE<br>Id: 78b6e28c-f4ba-49ff-9104-eca54e848af9<br>Formula Expression: Formula String: VALUE; Formula Values: -1.0; Formula Ptg: -1.0; Ptgs: VALUE Index in Ptgs: 2 <br>Source Object Id: org.apache.poi.xssf.usermodel.XSSFEvaluationWorkbook@7070ae1'},
{id: '5b539338-db71-495c-8517-8f03e7d7f6d0', label: 'VALUE\n1.0', color: '#31b0d5', title: 'Name: VALUE<br>Value: 1.0<br>Type: CONSTANT_VALUE<br>Id: 5b539338-db71-495c-8517-8f03e7d7f6d0<br>Formula Expression: Formula String: VALUE; Formula Values: 1.0; Formula Ptg: 1.0; Ptgs: VALUE Index in Ptgs: 2 <br>Source Object Id: org.apache.poi.xssf.usermodel.XSSFEvaluationWorkbook@7070ae1'},
{id: '48899998-c59d-4178-bb84-13333426f22d', label: 'B3\n40589.0', color: '#31b0d5', title: 'Name: B3<br>Value: 40589.0<br>Type: CELL_WITH_FORMULA<br>Id: 48899998-c59d-4178-bb84-13333426f22d<br>Formula Expression: Formula String: EDATE(VALUE, A1); Formula Values: EDATE(1.0, 40558.0); Formula Ptg: 1.0, 40558.0 EDATE ; Ptgs: VALUE, A1 EDATE  Index in Ptgs: 3 <br>Source Object Id: org.apache.poi.xssf.usermodel.XSSFEvaluationWorkbook@7070ae1'},
{id: '6343eb51-de45-4491-8aa1-fbde7bf9238c', label: 'EDATE\n40589.0', color: '#f0ad4e', title: 'Name: EDATE<br>Value: 40589.0<br>Type: FUNCTION<br>Id: 6343eb51-de45-4491-8aa1-fbde7bf9238c<br>Formula Expression: Formula String: EDATE(VALUE, A1); Formula Values: EDATE(1.0, 40558.0); Formula Ptg: ; Ptgs:  Index in Ptgs: 3 <br>Source Object Id: org.apache.poi.xssf.usermodel.XSSFEvaluationWorkbook@7070ae1'},
{id: '09dbe09c-af1f-4c26-99ad-91ae0159c626', label: 'A1\n40558.0', color: '#31b0d5', title: 'Name: A1<br>Value: 40558.0<br>Type: CELL_WITH_VALUE<br>Id: 09dbe09c-af1f-4c26-99ad-91ae0159c626<br>Formula Expression: Formula String: A1; Formula Values: 40558.0; Formula Ptg: 40558.0; Ptgs: A1 Index in Ptgs: 1 <br>Source Object Id: org.apache.poi.xssf.usermodel.XSSFEvaluationWorkbook@7070ae1'}
                            ]);


var edges = new vis.DataSet([
                             /* {from: id_a, to: id_b}, */
{from: '6343eb51-de45-4491-8aa1-fbde7bf9238c', to: '48899998-c59d-4178-bb84-13333426f22d'},
{from: '09dbe09c-af1f-4c26-99ad-91ae0159c626', to: '6343eb51-de45-4491-8aa1-fbde7bf9238c'},
{from: '1af2544c-127f-42d5-80b7-6da4ee6eec1e', to: '9f173e77-985a-4cfc-bf87-330460f941a2'},
{from: '1a247ce9-cbdc-4cc9-84c8-bb4fda45c90e', to: '1af2544c-127f-42d5-80b7-6da4ee6eec1e'},
{from: '5b539338-db71-495c-8517-8f03e7d7f6d0', to: '6343eb51-de45-4491-8aa1-fbde7bf9238c'},
{from: '78b6e28c-f4ba-49ff-9104-eca54e848af9', to: '1af2544c-127f-42d5-80b7-6da4ee6eec1e'},
{from: '6343eb51-de45-4491-8aa1-fbde7bf9238c', to: '1a247ce9-cbdc-4cc9-84c8-bb4fda45c90e'}
                            ]);