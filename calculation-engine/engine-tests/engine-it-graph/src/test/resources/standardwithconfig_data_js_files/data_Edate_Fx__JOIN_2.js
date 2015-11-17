var nodes = new vis.DataSet([
                             /* {id: a, label: b, ...}, */
{id: '10c8bd1d-967c-44c4-88f4-a5a066073fac', label: 'C5\n40558.0', color: '#31b0d5', title: 'Name: C5<br>Value: 40558.0<br>Type: CELL_WITH_FORMULA<br>Id: 10c8bd1d-967c-44c4-88f4-a5a066073fac<br>Formula Expression: Formula String: EDATE(VALUE, EDATE(VALUE, A1)); Formula Values: EDATE(-1.0, EDATE(1.0, 40558.0)); Formula Ptg: -1.0, 1.0, 40558.0 EDATE  EDATE ; Ptgs: VALUE, VALUE, A1 EDATE  EDATE  Index in Ptgs: 3 <br>Source Object Id: org.apache.poi.xssf.usermodel.XSSFEvaluationWorkbook@7d8b66d9'},
{id: '4e123ccc-781f-41a2-a334-4d08d16dbf9a', label: 'A1\n40558.0', color: '#31b0d5', title: 'Name: A1<br>Value: 40558.0<br>Type: CELL_WITH_VALUE<br>Id: 4e123ccc-781f-41a2-a334-4d08d16dbf9a<br>Formula Expression: Formula String: A1; Formula Values: 40558.0; Formula Ptg: 40558.0; Ptgs: A1 Index in Ptgs: 1 <br>Source Object Id: org.apache.poi.xssf.usermodel.XSSFEvaluationWorkbook@7d8b66d9'},
{id: '0c829d54-16d1-49d3-878c-eb30f1c9bcdb', label: 'VALUE\n-1.0', color: '#31b0d5', title: 'Name: VALUE<br>Value: -1.0<br>Type: CONSTANT_VALUE<br>Id: 0c829d54-16d1-49d3-878c-eb30f1c9bcdb<br>Formula Expression: Formula String: VALUE; Formula Values: -1.0; Formula Ptg: -1.0; Ptgs: VALUE Index in Ptgs: 2 <br>Source Object Id: org.apache.poi.xssf.usermodel.XSSFEvaluationWorkbook@7d8b66d9'},
{id: '9d3d8fba-ebe0-432e-bc43-239f84de5242', label: 'VALUE\n1.0', color: '#31b0d5', title: 'Name: VALUE<br>Value: 1.0<br>Type: CONSTANT_VALUE<br>Id: 9d3d8fba-ebe0-432e-bc43-239f84de5242<br>Formula Expression: Formula String: VALUE; Formula Values: 1.0; Formula Ptg: 1.0; Ptgs: VALUE Index in Ptgs: 2 <br>Source Object Id: org.apache.poi.xssf.usermodel.XSSFEvaluationWorkbook@7d8b66d9'},
{id: 'abe79f01-c62d-4ddb-a98f-e4a28af3fc66', label: 'EDATE\n40589.0', color: '#f0ad4e', title: 'Name: EDATE<br>Value: 40589.0<br>Type: FUNCTION<br>Id: abe79f01-c62d-4ddb-a98f-e4a28af3fc66<br>Formula Expression: Formula String: EDATE(VALUE, A1); Formula Values: EDATE(1.0, 40558.0); Formula Ptg: ; Ptgs:  Index in Ptgs: 3 <br>Source Object Id: org.apache.poi.xssf.usermodel.XSSFEvaluationWorkbook@7d8b66d9'},
{id: 'aafa5993-f06d-4755-bb0d-c36f72be5fa2', label: 'B3\n40589.0', color: '#31b0d5', title: 'Name: B3<br>Value: 40589.0<br>Type: CELL_WITH_FORMULA<br>Id: aafa5993-f06d-4755-bb0d-c36f72be5fa2<br>Formula Expression: Formula String: EDATE(VALUE, A1); Formula Values: EDATE(1.0, 40558.0); Formula Ptg: 1.0, 40558.0 EDATE ; Ptgs: VALUE, A1 EDATE  Index in Ptgs: 3 <br>Source Object Id: org.apache.poi.xssf.usermodel.XSSFEvaluationWorkbook@7d8b66d9'},
{id: '9f21646c-c6f6-470a-8ab9-3d145c45dd66', label: 'EDATE\n40558.0', color: '#f0ad4e', title: 'Name: EDATE<br>Value: 40558.0<br>Type: FUNCTION<br>Id: 9f21646c-c6f6-470a-8ab9-3d145c45dd66<br>Formula Expression: Formula String: EDATE(VALUE, EDATE(VALUE, A1)); Formula Values: EDATE(-1.0, EDATE(1.0, 40558.0)); Formula Ptg: ; Ptgs:  Index in Ptgs: 3 <br>Source Object Id: org.apache.poi.xssf.usermodel.XSSFEvaluationWorkbook@7d8b66d9'}
                            ]);


var edges = new vis.DataSet([
                             /* {from: id_a, to: id_b}, */
{from: '0c829d54-16d1-49d3-878c-eb30f1c9bcdb', to: '9f21646c-c6f6-470a-8ab9-3d145c45dd66'},
{from: 'aafa5993-f06d-4755-bb0d-c36f72be5fa2', to: '9f21646c-c6f6-470a-8ab9-3d145c45dd66'},
{from: 'abe79f01-c62d-4ddb-a98f-e4a28af3fc66', to: 'aafa5993-f06d-4755-bb0d-c36f72be5fa2'},
{from: '9f21646c-c6f6-470a-8ab9-3d145c45dd66', to: '10c8bd1d-967c-44c4-88f4-a5a066073fac'},
{from: '4e123ccc-781f-41a2-a334-4d08d16dbf9a', to: 'abe79f01-c62d-4ddb-a98f-e4a28af3fc66'},
{from: '9d3d8fba-ebe0-432e-bc43-239f84de5242', to: 'abe79f01-c62d-4ddb-a98f-e4a28af3fc66'}
                            ]);