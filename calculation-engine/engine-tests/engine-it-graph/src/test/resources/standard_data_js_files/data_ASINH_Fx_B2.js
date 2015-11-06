var nodes = new vis.DataSet([
                             /* {id: a, label: b, ...}, */
{id: 'ddd78c5e-cb74-4734-8744-4ce1cca15214', label: 'ASINH\n-1.6472311463710965', color: '#f0ad4e', title: 'Name: ASINH<br>Value: -1.6472311463710965<br>Type: FUNCTION<br>Id: ddd78c5e-cb74-4734-8744-4ce1cca15214<br>Formula Expression: Formula String: ASINH(VALUE); Formula Values: ASINH(-2.5); Formula Ptg: ; Ptgs:  Index in Ptgs: 1 <br>Source Object Id: org.apache.poi.xssf.usermodel.XSSFEvaluationWorkbook@6f27a732'},
{id: '94ae1c6c-f763-467d-927e-785290eb4e64', label: 'B2\n-1.6472311463710965', color: '#31b0d5', title: 'Name: B2<br>Value: -1.6472311463710965<br>Type: CELL_WITH_FORMULA<br>Id: 94ae1c6c-f763-467d-927e-785290eb4e64<br>Formula Expression: Formula String: ASINH(VALUE); Formula Values: ASINH(-2.5); Formula Ptg: -2.5 ASINH ; Ptgs: VALUE ASINH  Index in Ptgs: 1 <br>Source Object Id: org.apache.poi.xssf.usermodel.XSSFEvaluationWorkbook@6f27a732'},
{id: '0119d24a-d3bf-44f1-a75d-26840fcdecf0', label: 'VALUE\n-2.5', color: '#31b0d5', title: 'Name: VALUE<br>Value: -2.5<br>Type: CONSTANT_VALUE<br>Id: 0119d24a-d3bf-44f1-a75d-26840fcdecf0<br>Formula Expression: Formula String: VALUE; Formula Values: -2.5; Formula Ptg: -2.5; Ptgs: VALUE Index in Ptgs: 0 <br>Source Object Id: org.apache.poi.xssf.usermodel.XSSFEvaluationWorkbook@6f27a732'}
                            ]);


var edges = new vis.DataSet([
                             /* {from: id_a, to: id_b}, */
{from: '0119d24a-d3bf-44f1-a75d-26840fcdecf0', to: 'ddd78c5e-cb74-4734-8744-4ce1cca15214'},
{from: 'ddd78c5e-cb74-4734-8744-4ce1cca15214', to: '94ae1c6c-f763-467d-927e-785290eb4e64'}
                            ]);