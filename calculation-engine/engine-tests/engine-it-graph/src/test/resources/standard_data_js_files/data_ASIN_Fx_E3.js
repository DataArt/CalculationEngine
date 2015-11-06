var nodes = new vis.DataSet([
                             /* {id: a, label: b, ...}, */
{id: '5d3f2175-3275-4a3a-9db6-6c47af697838', label: 'E3\n1.5707963267948966', color: '#31b0d5', title: 'Name: E3<br>Value: 1.5707963267948966<br>Type: CELL_WITH_FORMULA<br>Id: 5d3f2175-3275-4a3a-9db6-6c47af697838<br>Formula Expression: Formula String: ASIN(A2); Formula Values: ASIN(1.0); Formula Ptg: 1.0 ASIN ; Ptgs: A2 ASIN  Index in Ptgs: 1 <br>Source Object Id: org.apache.poi.xssf.usermodel.XSSFEvaluationWorkbook@7c83dc97'},
{id: '9f72aa58-2fcc-4c3c-afec-adb00453ad32', label: 'A2\n1.0', color: '#31b0d5', title: 'Name: A2<br>Value: 1.0<br>Type: CELL_WITH_VALUE<br>Id: 9f72aa58-2fcc-4c3c-afec-adb00453ad32<br>Formula Expression: Formula String: A2; Formula Values: 1.0; Formula Ptg: 1.0; Ptgs: A2 Index in Ptgs: 0 <br>Source Object Id: org.apache.poi.xssf.usermodel.XSSFEvaluationWorkbook@7c83dc97'},
{id: '66a5c7e6-3715-4ef9-a657-fb2f60af3795', label: 'ASIN\n1.5707963267948966', color: '#f0ad4e', title: 'Name: ASIN<br>Value: 1.5707963267948966<br>Type: FUNCTION<br>Id: 66a5c7e6-3715-4ef9-a657-fb2f60af3795<br>Formula Expression: Formula String: ASIN(A2); Formula Values: ASIN(1.0); Formula Ptg: ; Ptgs:  Index in Ptgs: 1 <br>Source Object Id: org.apache.poi.xssf.usermodel.XSSFEvaluationWorkbook@7c83dc97'}
                            ]);


var edges = new vis.DataSet([
                             /* {from: id_a, to: id_b}, */
{from: '66a5c7e6-3715-4ef9-a657-fb2f60af3795', to: '5d3f2175-3275-4a3a-9db6-6c47af697838'},
{from: '9f72aa58-2fcc-4c3c-afec-adb00453ad32', to: '66a5c7e6-3715-4ef9-a657-fb2f60af3795'}
                            ]);