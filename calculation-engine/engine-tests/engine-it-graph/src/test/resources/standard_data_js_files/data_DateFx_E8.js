var nodes = new vis.DataSet([
                             /* {id: a, label: b, ...}, */
{id: '412b1772-5467-4809-9327-87dfab208fa5', label: 'E8\n42251.0', color: '#31b0d5', title: 'Name: E8<br>Alias: null<br>Value: 42251.0<br>Type: CELL_WITH_FORMULA<br>Id: 412b1772-5467-4809-9327-87dfab208fa5<br>Formula Expression: Formula String: DATE(VALUE, VALUE, VALUE); Formula Values: DATE(4.0, 9.0, 2015.0); Formula Ptg: 4.0, 9.0, 2015.0 DATE ; Ptgs: VALUE, VALUE, VALUE DATE  Index in Ptgs: 3 <br>Source Object Id: org.apache.poi.xssf.usermodel.XSSFEvaluationWorkbook@66ac5762'},
{id: '42e1158f-9220-4f92-b12e-832c05d051ec', label: 'DATE\n42251.0', color: '#f0ad4e', title: 'Name: DATE<br>Alias: null<br>Value: 42251.0<br>Type: FUNCTION<br>Id: 42e1158f-9220-4f92-b12e-832c05d051ec<br>Formula Expression: Formula String: DATE(VALUE, VALUE, VALUE); Formula Values: DATE(4.0, 9.0, 2015.0); Formula Ptg: ; Ptgs:  Index in Ptgs: 3 <br>Source Object Id: org.apache.poi.xssf.usermodel.XSSFEvaluationWorkbook@66ac5762'},
{id: '9e996363-dddb-4d5d-8559-ef40763622a3', label: 'VALUE\n2015.0', color: '#31b0d5', title: 'Name: VALUE<br>Alias: null<br>Value: 2015.0<br>Type: CONSTANT_VALUE<br>Id: 9e996363-dddb-4d5d-8559-ef40763622a3<br>Formula Expression: Formula String: VALUE; Formula Values: 2015.0; Formula Ptg: 2015.0; Ptgs: VALUE Index in Ptgs: 0 <br>Source Object Id: org.apache.poi.xssf.usermodel.XSSFEvaluationWorkbook@66ac5762'},
{id: '5b17dd43-729e-44c8-978f-2da4c8a74f65', label: 'VALUE\n4.0', color: '#31b0d5', title: 'Name: VALUE<br>Alias: null<br>Value: 4.0<br>Type: CONSTANT_VALUE<br>Id: 5b17dd43-729e-44c8-978f-2da4c8a74f65<br>Formula Expression: Formula String: VALUE; Formula Values: 4.0; Formula Ptg: 4.0; Ptgs: VALUE Index in Ptgs: 2 <br>Source Object Id: org.apache.poi.xssf.usermodel.XSSFEvaluationWorkbook@66ac5762'},
{id: '76db3c43-427b-4d81-9355-c29924ffc510', label: 'VALUE\n9.0', color: '#31b0d5', title: 'Name: VALUE<br>Alias: null<br>Value: 9.0<br>Type: CONSTANT_VALUE<br>Id: 76db3c43-427b-4d81-9355-c29924ffc510<br>Formula Expression: Formula String: VALUE; Formula Values: 9.0; Formula Ptg: 9.0; Ptgs: VALUE Index in Ptgs: 1 <br>Source Object Id: org.apache.poi.xssf.usermodel.XSSFEvaluationWorkbook@66ac5762'}
                            ]);


var edges = new vis.DataSet([
                             /* {from: id_a, to: id_b}, */
{from: '42e1158f-9220-4f92-b12e-832c05d051ec', to: '412b1772-5467-4809-9327-87dfab208fa5'},
{from: '5b17dd43-729e-44c8-978f-2da4c8a74f65', to: '42e1158f-9220-4f92-b12e-832c05d051ec'},
{from: '9e996363-dddb-4d5d-8559-ef40763622a3', to: '42e1158f-9220-4f92-b12e-832c05d051ec'},
{from: '76db3c43-427b-4d81-9355-c29924ffc510', to: '42e1158f-9220-4f92-b12e-832c05d051ec'}
                            ]);