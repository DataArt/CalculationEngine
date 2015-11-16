var nodes = new vis.DataSet([
                             /* {id: a, label: b, ...}, */
{id: '7b4919ef-e86e-4413-89e7-863fb917c6d7', label: 'MEDIAN\n7.0', color: '#f0ad4e', title: 'Name: MEDIAN<br>Value: 7.0<br>Type: FUNCTION<br>Id: 7b4919ef-e86e-4413-89e7-863fb917c6d7<br>Formula Expression: Formula String: MEDIAN(A2:E2); Formula Values: MEDIAN(6.0, 4.0, 7.0, 65.0, 7.0); Formula Ptg: ; Ptgs:  Index in Ptgs: 1 <br>Source Object Id: org.apache.poi.xssf.usermodel.XSSFEvaluationWorkbook@7d563c13'},
{id: 'a84ead9e-5dd7-4041-b169-c0eb1d3b4465', label: 'E5\n7.0', color: '#31b0d5', title: 'Name: E5<br>Value: 7.0<br>Type: CELL_WITH_FORMULA<br>Id: a84ead9e-5dd7-4041-b169-c0eb1d3b4465<br>Formula Expression: Formula String: MEDIAN(A2:E2); Formula Values: MEDIAN(6.0, 4.0, 7.0, 65.0, 7.0); Formula Ptg: 6.0, 4.0, 7.0, 65.0, 7.0 MEDIAN ; Ptgs: A2:E2 MEDIAN  Index in Ptgs: 1 <br>Source Object Id: org.apache.poi.xssf.usermodel.XSSFEvaluationWorkbook@7d563c13'},
{id: 'aedd1c09-b144-4338-ab0e-abbf32be0365', label: 'A2:E2\n[[6.0, 4.0, 7.0, 65.0, 7.0]]', color: '#31b0d5', title: 'Name: A2:E2<br>Value: [[6.0, 4.0, 7.0, 65.0, 7.0]]<br>Type: RANGE<br>Id: aedd1c09-b144-4338-ab0e-abbf32be0365<br>Formula Expression: Formula String: A2:E2; Formula Values: [[6.0, 4.0, 7.0, 65.0, 7.0]]; Formula Ptg: [[6.0, 4.0, 7.0, 65.0, 7.0]]; Ptgs: A2:E2 Index in Ptgs: 0 <br>Source Object Id: org.apache.poi.xssf.usermodel.XSSFEvaluationWorkbook@7d563c13'}
                            ]);


var edges = new vis.DataSet([
                             /* {from: id_a, to: id_b}, */
{from: 'aedd1c09-b144-4338-ab0e-abbf32be0365', to: '7b4919ef-e86e-4413-89e7-863fb917c6d7'},
{from: '7b4919ef-e86e-4413-89e7-863fb917c6d7', to: 'a84ead9e-5dd7-4041-b169-c0eb1d3b4465'}
                            ]);