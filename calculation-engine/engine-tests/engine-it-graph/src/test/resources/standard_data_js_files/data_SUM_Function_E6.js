var nodes = new vis.DataSet([
                             /* {id: a, label: b, ...}, */
{id: '00a7394b-255b-4764-bbd8-b5d114d2e889', label: 'E6\n15.0', color: '#31b0d5', title: 'Name: E6<br>Value: 15.0<br>Type: CELL_WITH_FORMULA<br>Id: 00a7394b-255b-4764-bbd8-b5d114d2e889<br>Formula Expression: Formula String: SUM(A1:E1); Formula Values: SUM(1.0, 2.0, 3.0, 4.0, 5.0); Formula Ptg: 1.0, 2.0, 3.0, 4.0, 5.0 SUM ; Ptgs: A1:E1 SUM  Index in Ptgs: 1 <br>Source Object Id: org.apache.poi.xssf.usermodel.XSSFEvaluationWorkbook@2c1dc8e'},
{id: 'e00c823d-be9c-49e4-8a07-9cbcf93fb6c2', label: 'SUM\n15.0', color: '#f0ad4e', title: 'Name: SUM<br>Value: 15.0<br>Type: FUNCTION<br>Id: e00c823d-be9c-49e4-8a07-9cbcf93fb6c2<br>Formula Expression: Formula String: SUM(A1:E1); Formula Values: SUM(1.0, 2.0, 3.0, 4.0, 5.0); Formula Ptg: ; Ptgs:  Index in Ptgs: 1 <br>Source Object Id: org.apache.poi.xssf.usermodel.XSSFEvaluationWorkbook@2c1dc8e'},
{id: 'a7426af5-4605-4593-968e-2645123e64c4', label: 'A1:E1\n[[1.0, 2.0, 3.0, 4.0, 5.0]]', color: '#31b0d5', title: 'Name: A1:E1<br>Value: [[1.0, 2.0, 3.0, 4.0, 5.0]]<br>Type: RANGE<br>Id: a7426af5-4605-4593-968e-2645123e64c4<br>Formula Expression: Formula String: A1:E1; Formula Values: [[1.0, 2.0, 3.0, 4.0, 5.0]]; Formula Ptg: [[1.0, 2.0, 3.0, 4.0, 5.0]]; Ptgs: A1:E1 Index in Ptgs: 0 <br>Source Object Id: org.apache.poi.xssf.usermodel.XSSFEvaluationWorkbook@2c1dc8e'}
                            ]);


var edges = new vis.DataSet([
                             /* {from: id_a, to: id_b}, */
{from: 'a7426af5-4605-4593-968e-2645123e64c4', to: 'e00c823d-be9c-49e4-8a07-9cbcf93fb6c2'},
{from: 'e00c823d-be9c-49e4-8a07-9cbcf93fb6c2', to: '00a7394b-255b-4764-bbd8-b5d114d2e889'}
                            ]);