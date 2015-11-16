var nodes = new vis.DataSet([
                             /* {id: a, label: b, ...}, */
{id: '2224092d-cea9-4171-a634-cb28a9e55140', label: 'B3\n40589.0', color: '#31b0d5', title: 'Name: B3<br>Value: 40589.0<br>Type: CELL_WITH_FORMULA<br>Id: 2224092d-cea9-4171-a634-cb28a9e55140<br>Formula Expression: Formula String: EDATE(VALUE, A1); Formula Values: EDATE(1.0, 40558.0); Formula Ptg: 1.0, 40558.0 EDATE ; Ptgs: VALUE, A1 EDATE  Index in Ptgs: 3 <br>Source Object Id: org.apache.poi.xssf.usermodel.XSSFEvaluationWorkbook@309e7215'},
{id: 'f849d136-768f-4e70-85c0-4e45ce11ca8e', label: 'EDATE\n40589.0', color: '#f0ad4e', title: 'Name: EDATE<br>Value: 40589.0<br>Type: FUNCTION<br>Id: f849d136-768f-4e70-85c0-4e45ce11ca8e<br>Formula Expression: Formula String: EDATE(VALUE, A1); Formula Values: EDATE(1.0, 40558.0); Formula Ptg: ; Ptgs:  Index in Ptgs: 3 <br>Source Object Id: org.apache.poi.xssf.usermodel.XSSFEvaluationWorkbook@309e7215'},
{id: '26db272c-a0a1-45d4-8b3f-02003d6462cd', label: 'VALUE\n-1.0', color: '#31b0d5', title: 'Name: VALUE<br>Value: -1.0<br>Type: CONSTANT_VALUE<br>Id: 26db272c-a0a1-45d4-8b3f-02003d6462cd<br>Formula Expression: Formula String: VALUE; Formula Values: -1.0; Formula Ptg: -1.0; Ptgs: VALUE Index in Ptgs: 2 <br>Source Object Id: org.apache.poi.xssf.usermodel.XSSFEvaluationWorkbook@309e7215'},
{id: 'f94d63ff-3225-4ac5-84f0-64dacb82ace9', label: 'C5\n40558.0', color: '#31b0d5', title: 'Name: C5<br>Value: 40558.0<br>Type: CELL_WITH_FORMULA<br>Id: f94d63ff-3225-4ac5-84f0-64dacb82ace9<br>Formula Expression: Formula String: EDATE(VALUE, EDATE(VALUE, A1)); Formula Values: EDATE(-1.0, EDATE(1.0, 40558.0)); Formula Ptg: -1.0, 1.0, 40558.0 EDATE  EDATE ; Ptgs: VALUE, VALUE, A1 EDATE  EDATE  Index in Ptgs: 3 <br>Source Object Id: org.apache.poi.xssf.usermodel.XSSFEvaluationWorkbook@309e7215'},
{id: '833528f6-b1c1-4ac5-a2c7-9103aa14a082', label: 'EDATE\n40558.0', color: '#f0ad4e', title: 'Name: EDATE<br>Value: 40558.0<br>Type: FUNCTION<br>Id: 833528f6-b1c1-4ac5-a2c7-9103aa14a082<br>Formula Expression: Formula String: EDATE(VALUE, EDATE(VALUE, A1)); Formula Values: EDATE(-1.0, EDATE(1.0, 40558.0)); Formula Ptg: ; Ptgs:  Index in Ptgs: 3 <br>Source Object Id: org.apache.poi.xssf.usermodel.XSSFEvaluationWorkbook@309e7215'},
{id: 'c82af611-716b-4265-91a5-35f3c99aacde', label: 'A1\n40558.0', color: '#31b0d5', title: 'Name: A1<br>Value: 40558.0<br>Type: CELL_WITH_VALUE<br>Id: c82af611-716b-4265-91a5-35f3c99aacde<br>Formula Expression: Formula String: A1; Formula Values: 40558.0; Formula Ptg: 40558.0; Ptgs: A1 Index in Ptgs: 1 <br>Source Object Id: org.apache.poi.xssf.usermodel.XSSFEvaluationWorkbook@309e7215'},
{id: '56d1ac46-6126-4012-a600-f59603a9baf9', label: 'VALUE\n1.0', color: '#31b0d5', title: 'Name: VALUE<br>Value: 1.0<br>Type: CONSTANT_VALUE<br>Id: 56d1ac46-6126-4012-a600-f59603a9baf9<br>Formula Expression: Formula String: VALUE; Formula Values: 1.0; Formula Ptg: 1.0; Ptgs: VALUE Index in Ptgs: 2 <br>Source Object Id: org.apache.poi.xssf.usermodel.XSSFEvaluationWorkbook@309e7215'},
{id: 'f05cd873-7372-40f8-bea0-60a4325006aa', label: 'B3\n40589.0', color: '#31b0d5', title: 'Name: B3<br>Value: 40589.0<br>Type: CELL_WITH_FORMULA<br>Id: f05cd873-7372-40f8-bea0-60a4325006aa<br>Formula Expression: Formula String: EDATE(VALUE, A1); Formula Values: EDATE(1.0, 40558.0); Formula Ptg: 1.0, 40558.0 EDATE ; Ptgs: VALUE, A1 EDATE  Index in Ptgs: 3 <br>Source Object Id: org.apache.poi.xssf.usermodel.XSSFEvaluationWorkbook@309e7215'}
                            ]);


var edges = new vis.DataSet([
                             /* {from: id_a, to: id_b}, */
{from: 'c82af611-716b-4265-91a5-35f3c99aacde', to: 'f849d136-768f-4e70-85c0-4e45ce11ca8e'},
{from: '56d1ac46-6126-4012-a600-f59603a9baf9', to: 'f849d136-768f-4e70-85c0-4e45ce11ca8e'},
{from: 'f849d136-768f-4e70-85c0-4e45ce11ca8e', to: '2224092d-cea9-4171-a634-cb28a9e55140'},
{from: 'f849d136-768f-4e70-85c0-4e45ce11ca8e', to: 'f05cd873-7372-40f8-bea0-60a4325006aa'},
{from: 'f05cd873-7372-40f8-bea0-60a4325006aa', to: '833528f6-b1c1-4ac5-a2c7-9103aa14a082'},
{from: '26db272c-a0a1-45d4-8b3f-02003d6462cd', to: '833528f6-b1c1-4ac5-a2c7-9103aa14a082'},
{from: '833528f6-b1c1-4ac5-a2c7-9103aa14a082', to: 'f94d63ff-3225-4ac5-84f0-64dacb82ace9'}
                            ]);